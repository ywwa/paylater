#!/usr/bin/env ts-node

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { Chalk } from "chalk";
import { Command } from "commander";
import openapiTS, { astToString } from "openapi-typescript";

const chalk = new Chalk({ level: 2 });

const log = console.log;
const err = console.error;
const warn = console.warn;

interface CLIOptions {
  config: string;
  outDir: string;
  baseUrl: string;
  dryRun?: boolean;
  ci?: boolean;
}

type Stats = {
  total: number;
  created: number;
  updated: number;
  unchanged: number;
  errors: number;
};

const program = new Command()
  .option(
    "-c, --config <path>",
    "path to JSON spec config",
    path.resolve(process.cwd(), "scripts/config.json"),
  )
  .option("-o, --outDir <path>", "output directory", path.resolve(process.cwd(), "src/generated"))
  .option("-b, --baseUrl <url>", "base URL for swagger endpoints", "https://api.paynow.gg/swagger")
  .option("-d, --dry-run", "run without writing files")
  .option("--ci", "CI mode: exit with non-zero code on created/updated/errors")
  .parse(process.argv);

const opts = program.opts<CLIOptions>();

async function generate(): Promise<void> {
  const { config: configPath, outDir, baseUrl, dryRun = false, ci = false } = opts;
  const rawConfig = readFileSync(configPath, "utf-8");
  const specs: Record<string, string> = JSON.parse(rawConfig);
  const stats: Stats = {
    total: 0,
    created: 0,
    updated: 0,
    unchanged: 0,
    errors: 0,
  };

  await Promise.all(
    Object.entries(specs).map(async ([NAME, ENDPOINT]) => {
      stats.total += 1;

      const fileName = `${NAME}.ts`;
      const filePath = path.join(outDir, fileName);

      try {
        const fullUrl = new URL(`${baseUrl.replace(/\/?$/, "")}/${ENDPOINT}`);
        const ast = await openapiTS(fullUrl);
        const generatedCode = `${astToString(ast).trim()}\n`;

        let previous = "";

        const isNew = !existsSync(filePath);

        if (!isNew) {
          previous = readFileSync(filePath, "utf-8");
        }

        const shouldSkip = dryRun || ci;

        if (isNew) {
          stats.created += 1;
          log(chalk.green(`CREATED ${fileName} ${shouldSkip ? "[Skipped]" : ""}`));
        } else if (previous !== generatedCode) {
          stats.updated += 1;
          log(chalk.yellow(`UPDATED ${fileName} ${shouldSkip ? "[Skipped]" : ""}`));
        } else {
          stats.unchanged += 1;
          log(chalk.gray(`UNCHANGED ${fileName}`));
        }

        if (!dryRun && !ci) {
          writeFileSync(filePath, generatedCode, "utf-8");
        }
      } catch (error) {
        stats.errors += 1;
        err(chalk.red(`ERROR  ${fileName}:`), error);
      }
    }),
  );

  // Summary
  log("---");
  log(`Total      : ${stats.total}`);
  log(`Created    : ${stats.created}`);
  log(`Updated    : ${stats.updated}`);
  log(`Unchanged  : ${stats.unchanged}`);
  log(`Errors     : ${stats.errors}`);
  log("---");

  if (ci && (stats.created > 0 || stats.updated > 0 || stats.errors > 0)) {
    warn(chalk.red("CI EXIT: Changes detected"));
    process.exit(1);
  }
}

generate().catch((error: unknown) => {
  err(chalk.red("Fatal Error:"), error);
  process.exit(1);
});
