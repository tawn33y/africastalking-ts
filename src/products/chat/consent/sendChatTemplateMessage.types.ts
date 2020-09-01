import { ChatChannel } from '../constants.types';

export interface SendChatTemplateMessageOptions {
  productId: string;

  from: string;
  to: string;
  template: Template;
}

interface Template {
  name: string;
  params: string[];
}

export interface SendChatTemplateMessagePostData extends Omit<SendChatTemplateMessageOptions, 'from' | 'to' | 'template'> {
  username: string;
  channel: ChatChannel;
  channelNumber: string;
  customerNumber: string;
  body: {
    type: 'Text';
    template: Template;
  };
}

export interface SendChatTemplateMessageResponse {
  status: 'Sent' | 'Delivered' | 'Read' | 'Failed' | 'NoConsent' | 'NoCapability' | 'Expired' | 'OnlyTemplateAllowed' | 'InvalidSource' | 'NotSupported' | 'GatewayError';
  statusCode: number;
  description: string;
  customerId: string;
  messageId: string;
}

export type SendChatTemplateMessage = (
  options: SendChatTemplateMessageOptions
) => Promise<SendChatTemplateMessageResponse>;
