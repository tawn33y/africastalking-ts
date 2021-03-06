import { SendAirtimeRequest } from './airtime/sendAirtimeRequest.types';
import { FetchApplicationData } from './application/fetchApplicationData.types';
import { BankCheckoutCharge } from './payments/bank/bankCheckoutCharge.types';
import { BankCheckoutValidate } from './payments/bank/bankCheckoutValidate.types';
import { BankTransfer } from './payments/bank/bankTransfer.types';
import { CardCheckoutCharge } from './payments/card/cardCheckoutCharge.types';
import { CardCheckoutValidate } from './payments/card/cardCheckoutValidate.types';
import { MobileB2B } from './payments/mobile/mobileB2B.types';
import { MobileB2C } from './payments/mobile/mobileB2C.types';
import { MobileCheckout } from './payments/mobile/mobileCheckout.types';
import { MobileData } from './payments/mobile/mobileData.types';
import { FetchProductTransactions } from './payments/query/fetchProductTransactions.types';
import { FetchWalletBalance } from './payments/query/fetchWalletBalance.types';
import { FetchWalletTransactions } from './payments/query/fetchWalletTransactions.types';
import { FindTransaction } from './payments/query/findTransaction.types';
import { TopupStash } from './payments/topupStash.types';
import { WalletTransfer } from './payments/walletTransfer.types';
import { CreateSubscription } from './sms/premiumSubscriptions/createSubscription.types';
import { DeleteSubscription } from './sms/premiumSubscriptions/deleteSubscription.types';
import { FetchSubscription } from './sms/premiumSubscriptions/fetchSubscription.types';
import { FetchMessages } from './sms/fetchMessages.types';
import { SendSms, SendPremiumSms } from './sms/sendMessage.types';
import { CreateCheckoutToken } from './token/createCheckoutToken.types';
import { GenerateAuthToken } from './token/generateAuthToken.types';
import { MakeCall } from './voice/makeCall.types';
import { GetNumQueuedCalls } from './voice/getNumQueuedCalls.types';
import { UploadMediaFile } from './voice/uploadMediaFile.types';
import { SendChatOptIn } from './chat/consent/sendChatOptIn.types';
import { SendChatTemplateMessage } from './chat/consent/sendChatTemplateMessage.types';
import { SendChatTextMessage } from './chat/sendMessages/sendChatTextMessage.types';
import { SendChatMediaMessage } from './chat/sendMessages/sendChatMediaMessage.types';
import { SendChatLocationMessage } from './chat/sendMessages/sendChatLocationMessage.types';

export * from './airtime/index.types';
export * from './application/index.types';
export * from './payments/index.types';
export * from './sms/index.types';
export * from './token/index.types';
export * from './voice/index.types';
export * from './chat/index.types';

export default interface AFRICASTALKING {
  // airtime
  sendAirtimeRequest: SendAirtimeRequest;

  // application
  fetchApplicationData: FetchApplicationData;

  // chat
  sendChatOptIn: SendChatOptIn;
  sendChatTemplateMessage: SendChatTemplateMessage;
  sendChatTextMessage: SendChatTextMessage;
  sendChatMediaMessage: SendChatMediaMessage;
  sendChatLocationMessage: SendChatLocationMessage;

  // payments
  bankCheckoutCharge: BankCheckoutCharge;
  bankCheckoutValidate: BankCheckoutValidate;
  bankTransfer: BankTransfer;
  cardCheckoutCharge: CardCheckoutCharge;
  cardCheckoutValidate: CardCheckoutValidate;
  mobileB2B: MobileB2B;
  mobileB2C: MobileB2C;
  mobileCheckout: MobileCheckout;
  mobileData: MobileData;
  fetchProductTransactions: FetchProductTransactions;
  fetchWalletBalance: FetchWalletBalance;
  fetchWalletTransactions: FetchWalletTransactions;
  findTransaction: FindTransaction;
  topupStash: TopupStash;
  walletTransfer: WalletTransfer;

  // sms
  createSubscription: CreateSubscription;
  deleteSubscription: DeleteSubscription;
  fetchSubscription: FetchSubscription;
  fetchMessages: FetchMessages;
  sendSms: SendSms;
  sendPremiumSms: SendPremiumSms;

  // token
  createCheckoutToken: CreateCheckoutToken;
  generateAuthToken: GenerateAuthToken;

  // voice
  makeCall: MakeCall;
  getNumQueuedCalls: GetNumQueuedCalls;
  uploadMediaFile: UploadMediaFile;
}
