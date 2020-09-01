# TODO

## SDK

- [ ] Move test variables to config/
- [ ] Finish examples/ & ensure everything works (**destructuring)
- [ ] Test: template/opt-in (chat)

- [ ] Improve test converage
- [ ] Add Idempotency Key
- [ ] Add types:
  - [ ] payments: accepted currencies
  - [ ] missing types (due to no documentation)
- [ ] Add tests for voice
- [ ] Update Yoda examples
- [ ] API.md: add documentation for `ActionBuilder`, `CONSTANTS`, etc.
- [ ] analytics on functions usage
- [ ] Create general account for generating test apiKey credential

### IDEAS

```js
const client = new Client({});

// in addition to:
client.sendSms({ to, from, message });

// allow:
client.sendSms(to, from, message, {
  // options
});
```

## Yoda

- [ ] website
  - [ ] sidebar scroll issue
  - [ ] list item: convert to hyperlink
  - [ ] on click list item, show loading icon
- [ ] documentation:
  - [ ] accepted currencies: b2b, etc.
  - [ ] full pages for token: generateAuthToken() and createCheckoutToken()
