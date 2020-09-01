# africastalking-ts

## Install

```bash
npm i africastalking-ts
```

## Quick Start Example: Send an SMS

This example creates an Africa's Talking Client, and sends an SMS to two phone numbers.

```ts
import { Client } from 'africastalking-ts';

const client = new Client({
    apiKey: 'YOUR_API_KEY', // you can get this from the dashboard: https://account.africastalking.com
    username: 'YOUR_USERNAME', // use 'sandbox' as the value for development in the test environment
});

client.sendSms({
    to: ['+254xxxxxxxx', '+254yyyyyyyy'],
    message: 'Hello world',
})
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
```

## Links

- [SDK Reference](./DOCS.md) (available functions, constants, types for Typescript, etc)
- [Code examples](example/)
- [Rest API Reference](http://docs.africastalking.com)

## Development

```bash
# install npm modules
npm i

# eslint
npm run lint

# typescript check
npm run ts-check

# test
npm t

# build
npm run build
```

## Issues

If you find a bug, please file an issue on [our issue tracker on GitHub](https://github.com/tawn33y/africastalking-ts/issues).

## Pull Requests

Any and all PRs are open.
