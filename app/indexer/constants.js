const SUCCESS_CODE = '0801';
const TX_STATUS = {
  SUCCESS: 'success',
  FAIL: 'fail',
};
const UNDETERMINED_EVENT_ERROR = 'Event unavailable to determine execution status for transaction';
const EVENTS = {
  NETWORK_NEW_BLOCK: 'network_newBlock',
};
const ENDPOINTS = {
  CHAIN_GET_TRANSACTIONS_BY_HEIGHT: 'chain_getTransactionsByHeight',
  CHAIN_GET_EVENTS: 'chain_getEvents',
};

module.exports = {
  SUCCESS_CODE,
  TX_STATUS,
  UNDETERMINED_EVENT_ERROR,
  EVENTS,
  ENDPOINTS,
};
