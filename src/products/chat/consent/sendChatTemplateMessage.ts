import joi from 'joi';
import { validateJoiSchema, sendRequest } from '../../../utils/misc';
import { Credentials } from '../../../utils/getFullCredentials.types';
import { getFullCredentials } from '../../../utils/getFullCredentials';
import { customChatChannelsMap } from '../constants';
import { ChatChannel } from '../constants.types';
import {
  SendChatTemplateMessage, SendChatTemplateMessageOptions,
  SendChatTemplateMessagePostData, SendChatTemplateMessageResponse,
} from './sendChatTemplateMessage.types';

const getSchema = () => joi.object({
  productId: joi.string().required(),

  from: joi.string().required(),
  to: joi.string().required(),
  template: joi.object({
    name: joi.string().required(),
    params: joi.array().min(1).required(),
  }).required(),
}).required();

export const sendChatTemplateMessage = (
  credentials: Credentials,
): SendChatTemplateMessage => async (options) => {
  const { apiKey, username, format } = getFullCredentials(credentials);
  const {
    from, to, template, ...result
  } = validateJoiSchema<SendChatTemplateMessageOptions>(getSchema(), options);

  const data: SendChatTemplateMessagePostData = {
    username,
    ...result,
    channel: customChatChannelsMap.whatsapp as ChatChannel,
    channelNumber: from,
    customerNumber: to,
    body: {
      type: 'Text',
      template,
    },
  };

  return sendRequest<SendChatTemplateMessageResponse, SendChatTemplateMessagePostData>({
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
