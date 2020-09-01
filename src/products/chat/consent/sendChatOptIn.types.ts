import { ChatChannel } from '../constants.types';

export interface SendChatOptInOptions {
  from: string;
  to: string;
  action: OptInActionType;
}

type OptInActionType = 'OptIn' | 'OptOut';

export interface SendChatOptInPostData extends Omit<SendChatOptInOptions, 'from' | 'to'> {
  username: string;
  channel: ChatChannel;
  channelNumber: string;
  customerNumber: string;
}

export interface SendChatOptInResponse {
  customerId: string;
  status: 'OptInRequestSent' | 'OptInCompleted' | 'OptOutCompleted' | 'InvalidChannelNumber' | 'GatewayError';
  statusCode: number;
  description: string;
}

export type SendChatOptIn = (options: SendChatOptInOptions) => Promise<SendChatOptInResponse>;
