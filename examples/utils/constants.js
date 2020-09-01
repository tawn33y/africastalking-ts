import config from 'config';

export const CONSTANTS = {
  apiKey: config.get('apiKey'),
  username: config.get('username'),
  chat: config.get('chat'),
};
