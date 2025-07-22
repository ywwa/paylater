# PayLater

> A modern, lightweight and _mostly_-typed API client for [PayNow.gg](https://paynow.gg).

- [PayLater](#paylater)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Initialization](#initialization)
    - [Examples](#examples)
      - [Get customer](#get-customer)
  - [API Reference](#api-reference)
  - [Development](#development)
  - [Testing](#testing)
  - [Contributing](#contributing)
  - [License](#license)

## Installation

```shell
# Using pnpm
pnpm add @ywwa/paylater

# Or anything else you prefer, yarn, npm, bun...

```

## Usage

### Initialization

```ts
import { ManagementAPI } from "@ywwa/paylater";

const client = new ManagementAPI()
client.setToken("YOUR_API_KEY")
```

### Examples

#### Get customer

```ts
const customer = client.customer.getCustomerById({
  params: {
    path: {
      storeId: "12345678",
      customerId: "87654321",
    },
  }
})
```

## API Reference

This client mirrors the official [PayNow API documentation](https://paynow.gitbook.io/paynow-api) - refer to it for the full list of available endpoints, parameters, and expected responses.

## Development

```shell
git clone https://github.com/ywwa/paylater.git
cd paylater
pnpm install
```

Update API types:

```shell
pnpm run codegen
```

## Testing

> not done yet.

## Contributing

Any contributions are welcome!

1. Fork the repo
2. Create new branch
3. Commit changes
4. Push changes
5. Open a PR

## License

MIT [License](./LICENSE)
