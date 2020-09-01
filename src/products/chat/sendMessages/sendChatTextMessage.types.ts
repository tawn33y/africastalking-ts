import { ChatChannel, CustomChatChannel } from '../constants.types';

export interface SendChatTextMessageOptions {
  productId: string;

  channel: CustomChatChannel;
  from: string;
  to: string;
  message: string;
}

export interface SendChatTextMessagePostData extends Omit<SendChatTextMessageOptions, 'channel' | 'from' | 'to' | 'message'> {
  username: string;
  channel: ChatChannel;
  channelNumber: string;
  customerNumber: string;
  body: {
    type: 'Text';
    text: string;
  };
}

export interface SendChatTextMessageResponse {
  status: 'Sent' | 'Delivered' | 'Read' | 'Failed' | 'NoConsent' | 'NoCapability' | 'Expired' | 'OnlyTemplateAllowed' | 'InvalidSource' | 'NotSupported' | 'GatewayError';
  statusCode: number;
  description: string;
  customerId: string;
  messageId: string;
}

export type SendChatTextMessage = (
  options: SendChatTextMessageOptions
) => Promise<SendChatTextMessageResponse>;
