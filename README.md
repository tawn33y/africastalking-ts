# africastalking-ts

Unofficial Typescript version of the Africa's Talking SDK

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
- [Code examples](examples/)
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

## Note: This is a breaking version

Please note that this Typescript SDK has breaking changes from the Javascript version. It greatly changes its usage, and you will need to update your codebase to avoid errors.

```js

const credentials = { apiKey: 'YOUR_API_KEY', username: 'YOUR_USERNAME' };

// previously:
const africastalking = require('africastalking')(credentials);
const sms = africastalking.SMS;
sms.send({
    // options
});

// now:
import { Client } from 'africastalking-ts'; // or const { Client } = require('africastalking');
const client = new Client(credentials);
client.sendSms({
    // options
});
```

You can find the complete list of new function names [here](./DOCS.md).

However, we understand that updating the bulk of your code can be tedious, so we have given you a way to incrementally upgrade to the new version.

To use the new version, whilst still keeping the old function calls, you only need to update your require statements as follows (**the key word is `.default`**):

```js
const africastalking = require('africastalking').default(credentials);
const sms = africastalking.SMS;
sms.send({
    // options
});
```

However, please note that even this way is altogether being deprecated and will be removed in future versions. Kindly make an effort to rewrite your codebase using the newer syntax.

Alternatively, you can just use the Javascript version of the SDK in your codebase.

## Pull Requests

Any and all PRs are open.
