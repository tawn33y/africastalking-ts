import joi from 'joi';
import { validateJoiSchema, sendRequest } from '../../../utils/misc';
import { Credentials } from '../../../utils/getFullCredentials.types';
import { getFullCredentials } from '../../../utils/getFullCredentials';
import {
  SendChatOptIn, SendChatOptInOptions, SendChatOptInPostData, SendChatOptInResponse,
} from './sendChatOptIn.types';
import { customChatChannelsMap } from '../constants';
import { ChatChannel } from '../constants.types';

const getSchema = () => joi.object({
  from: joi.string().required(),
  to: joi.string().required(),
  action: joi.string().allow('OptIn', 'OptOut').required(),
}).required();

export const sendChatOptIn = (credentials: Credentials): SendChatOptIn => async (options) => {
  const { apiKey, username, format } = getFullCredentials(credentials);
  const { from, to, ...result } = validateJoiSchema<SendChatOptInOptions>(getSchema(), options);

  const data: SendChatOptInPostData = {
    username,
    ...result,
    channel: customChatChannelsMap.whatsapp as ChatChannel,
    channelNumber: from,
    customerNumber: to,
  };

  return sendRequest<SendChatOptInResponse, SendChatOptInPostData>({
    endpointCategory: 'CHAT_OPT_IN',
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
