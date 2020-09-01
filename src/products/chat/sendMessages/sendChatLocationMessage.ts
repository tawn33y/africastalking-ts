import joi from 'joi';
import { validateJoiSchema, sendRequest } from '../../../utils/misc';
import { Credentials } from '../../../utils/getFullCredentials.types';
import { getFullCredentials } from '../../../utils/getFullCredentials';
import { customChatChannels, customChatChannelsMap } from '../constants';
import { ChatChannel } from '../constants.types';
import {
  SendChatLocationMessage, SendChatLocationMessageOptions,
  SendChatLocationMessagePostData, SendChatLocationMessageResponse,
} from './sendChatLocationMessage.types';

const getSchema = () => joi.object({
  productId: joi.string().required(),

  channel: joi.string().allow(customChatChannels).required(),
  from: joi.string().required(),
  to: joi.string().required(),
  lat: joi.number().min(-90).max(90).required(),
  lng: joi.number().min(-180).max(180).required(),
}).required();

export const sendChatLocationMessage = (
  credentials: Credentials,
): SendChatLocationMessage => async (options) => {
  const { apiKey, username, format } = getFullCredentials(credentials);
  const {
    channel, from, to, lat, lng, ...result
  } = validateJoiSchema<SendChatLocationMessageOptions>(getSchema(), options);

  const data: SendChatLocationMessagePostData = {
    username,
    ...result,
    channel: customChatChannelsMap[channel] as ChatChannel,
    channelNumber: from,
    customerNumber: to,
    body: {
      type: 'Location',
      latitude: lat,
      longitude: lng,
    },
  };

  return sendRequest<SendChatLocationMessageResponse, SendChatLocationMessagePostData>({
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
