#!/usr/bin/env ts-node

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { Command } from "commander";
import openapiTS, { astToString } from "openapi-typescript";

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
  .option("--ci", "CI mode: exit non-zero if errors")
  .parse(process.argv);

const opts = program.opts<CLIOptions>();

async function generate(): Promise<Stats> {
  const { config: configPath, outDir, baseUrl, dryRun = false } = opts;
  const rawConfig = readFileSync(configPath, "utf-8");
  const specs: Record<string, string> = JSON.parse(rawConfig);
  const stats: Stats = { total: 0, created: 0, updated: 0, unchanged: 0, errors: 0 };

  await Promise.all(
    Object.entries(specs).map(async ([name, endpoint]) => {
      stats.total++;
      const fileName = `${name}.ts`;
      const filePath = path.join(outDir, fileName);
      try {
        const fullUrl = new URL(`${baseUrl.replace(/\/?$/, "")}/${endpoint}`);
        const ast = await openapiTS(fullUrl);
        const code = `${astToString(ast).trim()}\n`;
        const exists = existsSync(filePath);
        const prev = exists ? readFileSync(filePath, "utf-8") : "";
        if (!exists) {
          stats.created++;
          console.log(`CREATED ${fileName}`);
        } else if (prev !== code) {
          stats.updated++;
          console.log(`UPDATED ${fileName}`);
        } else {
          stats.unchanged++;
          console.log(`UNCHANGED ${fileName}`);
        }
        if (!dryRun) {
          writeFileSync(filePath, code, "utf-8");
        }
      } catch (e) {
        stats.errors++;
        console.error(`ERROR ${fileName}:`, e);
      }
    }),
  );

  // summary
  console.log("---");
  console.log(`Total     : ${stats.total}`);
  console.log(`Created   : ${stats.created}`);
  console.log(`Updated   : ${stats.updated}`);
  console.log(`Unchanged : ${stats.unchanged}`);
  console.log(`Errors    : ${stats.errors}`);
  console.log("---");

  return stats;
}

(async () => {
  const stats = await generate();
  if (opts.ci && stats.errors > 0) {
    process.exit(1);
  }
})();
