import { ChatChannel, CustomChatChannel } from '../constants.types';

export interface SendChatMediaMessageOptions {
  productId: string;

  channel: CustomChatChannel;
  from: string;
  to: string;
  type: 'image' | 'audio' | 'video' | 'document' | 'voice' | 'sticker';
  url: string;
  caption?: string;
}

export interface SendChatMediaMessagePostData extends Omit<SendChatMediaMessageOptions, 'channel' | 'from' | 'to' | 'type' | 'url' | 'caption'> {
  username: string;
  channel: ChatChannel;
  channelNumber: string;
  customerNumber: string;
  body: {
    type: 'Media';
    media: 'Image' | 'Audio' | 'Video' | 'Document' | 'Voice' | 'Sticker';
    url: string;
    caption?: string;
  };
}

export interface SendChatMediaMessageResponse {
  status: 'Sent' | 'Delivered' | 'Read' | 'Failed' | 'NoConsent' | 'NoCapability' | 'Expired' | 'OnlyTemplateAllowed' | 'InvalidSource' | 'NotSupported' | 'GatewayError';
  statusCode: number;
  description: string;
  customerId: string;
  messageId: string;
}

export type SendChatMediaMessage = (
  options: SendChatMediaMessageOptions
) => Promise<SendChatMediaMessageResponse>;
