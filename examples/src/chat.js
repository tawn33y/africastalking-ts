import { Client } from 'africastalking-ts';
import { CONSTANTS } from '../utils/constants';

const { apiKey, username, chat: { productId, channel, from, to } } = CONSTANTS;

const client = new Client({ apiKey, username });

client.sendChatTextMessage({
  productId,
  channel,
  from,
  to,
  message: 'Hello World',
})
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

// client.sendChatMediaMessage({
//   productId,
//   channel,
//   from,
//   to,
//   type: 'image',
//   url: 'https://www.fonewalls.com/wp-content/uploads/1536x2048-Background-HD-Wallpaper-213.jpg',
//   caption: 'Testing....',
// })
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));

// client.sendChatLocationMessage({
//   productId,
//   channel,
//   from,
//   to,
//   lat: -1.2345,
//   lng: 1.34,
// })
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));
