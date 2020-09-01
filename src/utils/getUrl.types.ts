export type BaseUrlCategory = 'API' | 'PAYMENTS' | 'VOICE' | 'CHAT';

export type EndpointCategory = 'AIRTIME' | 'APPLICATION' | 'SMS'
| 'GENERATE_AUTH_TOKEN' | 'CREATE_CHECKOUT_TOKEN'
| 'CREATE_SUBSCRIPTION' | 'FETCH_SUBSCRIPTION' | 'DELETE_SUBSCRIPTION'
| 'MOBILE_CHECKOUT' | 'MOBILE_B2C' | 'MOBILE_B2B'| 'MOBILE_DATA'
| 'BANK_CHECKOUT_CHARGE'
| 'BANK_CHECKOUT_VALIDATE' | 'BANK_TRANSFER' | 'WALLET_TRANSFER' | 'TOPUP_STASH'
| 'CARD_CHECKOUT_CHARGE' | 'CARD_CHECKOUT_VALIDATE' | 'FETCH_PRODUCT_TRANSACTIONS'
| 'FIND_TRANSACTION' | 'FETCH_WALLET_TRANSACTIONS' | 'FETCH_WALLET_BALANCE'
| 'MAKE_CALL'
| 'GET_NUM_QUEUED_CALLS' | 'UPLOAD_MEDIA_FILE' | 'CHAT_OPT_IN' | 'CHAT_MESSAGE';

export type Endpoints = {
  [category in EndpointCategory]: {
    baseUrlCategory: BaseUrlCategory;
    endpoint: string;
  };
};
