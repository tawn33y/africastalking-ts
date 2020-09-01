import { Client } from 'africastalking-ts';
import { CONSTANTS } from '../utils/constants';

const { apiKey, username } = CONSTANTS;

const client = new Client({ apiKey, username });

client.sendSms({
  // from: ''
  to: '+254712345678',
  message: 'Hello world',
})
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
