const ws = require('../ws');
const {
  SUCCESS_CODE,
  TX_STATUS,
  UNDETERMINED_EVENT_ERROR,
  EVENTS,
  ENDPOINTS,
} = require('./constants');

const getTransactionExecutionStatus = (tx, events) => {
	const expectedEventName = `${tx.module}:commandExecutionResult`;
	const commandExecResultEvents = events.filter(e => `${e.module}:${e.name}` === expectedEventName);
	const txExecResultEvent = commandExecResultEvents.find(e => e.topics.includes(tx.id));
	if (!txExecResultEvent) throw Error(`${UNDETERMINED_EVENT_ERROR}: ${tx.id}.`);
	return txExecResultEvent.data === SUCCESS_CODE ? TX_STATUS.SUCCESS : TX_STATUS.FAIL;
};

const eventManager = (cb) => {
  ws.onReady(() => {
    ws.subscribe(EVENTS.NETWORK_NEW_BLOCK, async ({ blockHeader }) => {
      try {
        const txs = await ws.request(
          ENDPOINTS.CHAIN_GET_TRANSACTIONS_BY_HEIGHT,
          { height: blockHeader.height },
        );
        const events = await ws.request(
          ENDPOINTS.CHAIN_GET_EVENTS,
          { height: blockHeader.height },
        );
    
        const succeededTxs = txs.filter((tx) => {
          const executionStatus = getTransactionExecutionStatus(tx, events);
          return executionStatus === TX_STATUS.SUCCESS;
        });

        if (typeof cb === 'function' && succeededTxs.length) {
          cb(blockHeader.height, succeededTxs);
        }
      } catch (e) {
        console.log('Caught', e);
      }
    });
  });
}

module.exports = eventManager;

