import joi from 'joi';
import { validateJoiSchema, sendRequest } from '../../../utils/misc';
import { Credentials } from '../../../utils/getFullCredentials.types';
import { getFullCredentials } from '../../../utils/getFullCredentials';
import { customChatChannels, customChatChannelsMap } from '../constants';
import { ChatChannel } from '../constants.types';
import {
  SendChatMediaMessage, SendChatMediaMessageOptions,
  SendChatMediaMessagePostData, SendChatMediaMessageResponse,
} from './sendChatMediaMessage.types';

const getSchema = () => joi.object({
  productId: joi.string().required(),

  channel: joi.string().allow(customChatChannels).required(),
  from: joi.string().required(),
  to: joi.string().required(),
  type: joi.string().valid('image', 'audio', 'video', 'document', 'voice', 'sticker').required(),
  url: joi.string().uri().required(),
  caption: joi.string(),
}).required();

export const sendChatMediaMessage = (
  credentials: Credentials,
): SendChatMediaMessage => async (options) => {
  const { apiKey, username, format } = getFullCredentials(credentials);
  const {
    channel, from, to, type, url, caption, ...result
  } = validateJoiSchema<SendChatMediaMessageOptions>(getSchema(), options);

  const data: SendChatMediaMessagePostData = {
    username,
    ...result,
    channel: customChatChannelsMap[channel] as ChatChannel,
    channelNumber: from,
    customerNumber: to,
    body: {
      type: 'Media',
      media: type.charAt(0).toUpperCase() + type.slice(1) as any,
      url,
      caption,
    },
  };

  return sendRequest<SendChatMediaMessageResponse, SendChatMediaMessagePostData>({
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
