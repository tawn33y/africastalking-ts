import joi from 'joi';
import { validateJoiSchema, sendRequest } from '../../../utils/misc';
import { Credentials } from '../../../utils/getFullCredentials.types';
import { getFullCredentials } from '../../../utils/getFullCredentials';
import { customChatChannels, customChatChannelsMap } from '../constants';
import { ChatChannel } from '../constants.types';
import {
  SendChatTextMessage, SendChatTextMessageOptions,
  SendChatTextMessagePostData, SendChatTextMessageResponse,
} from './sendChatTextMessage.types';

const getSchema = () => joi.object({
  productId: joi.string().required(),

  channel: joi.string().allow(customChatChannels).required(),
  from: joi.string().required(),
  to: joi.string().required(),
  message: joi.string().required(),
}).required();

export const sendChatTextMessage = (
  credentials: Credentials,
): SendChatTextMessage => async (options) => {
  const { apiKey, username, format } = getFullCredentials(credentials);
  const {
    channel, from, to, message, ...result
  } = validateJoiSchema<SendChatTextMessageOptions>(getSchema(), options);

  const data: SendChatTextMessagePostData = {
    username,
    ...result,
    channel: customChatChannelsMap[channel] as ChatChannel,
    channelNumber: from,
    customerNumber: to,
    body: {
      type: 'Text',
      text: message,
    },
  };

  return sendRequest<SendChatTextMessageResponse, SendChatTextMessagePostData>({
    endpointCategory: 'CHAT_MESSAGE',
    username,
    method: 'POST',
    data,
    headers: {
      apiKey,
      accept: format,
      'Content-Type': 'application/json',
    },
  });
};
