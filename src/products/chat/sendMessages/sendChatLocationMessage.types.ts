import { ChatChannel, CustomChatChannel } from '../constants.types';

export interface SendChatLocationMessageOptions {
  productId: string;

  channel: CustomChatChannel;
  from: string;
  to: string;
  lat: number;
  lng: number;
}

export interface SendChatLocationMessagePostData extends Omit<SendChatLocationMessageOptions, 'channel' | 'from' | 'to' | 'lat' | 'lng'> {
  username: string;
  channel: ChatChannel;
  channelNumber: string;
  customerNumber: string;
  body: {
    type: 'Location';
    latitude: number;
    longitude: number;
  };
}

export interface SendChatLocationMessageResponse {
  status: 'Sent' | 'Delivered' | 'Read' | 'Failed' | 'NoConsent' | 'NoCapability' | 'Expired' | 'OnlyTemplateAllowed' | 'InvalidSource' | 'NotSupported' | 'GatewayError';
  statusCode: number;
  description: string;
  customerId: string;
  messageId: string;
}

export type SendChatLocationMessage = (
  options: SendChatLocationMessageOptions
) => Promise<SendChatLocationMessageResponse>;
