const { address } = require('@liskhq/lisk-cryptography');
const {
  parseTransactionParams,
  getSchema,
  bufferize,
  toParamsJSON,
} = require('../utils/codec');

const parser = (list) => list.map((tx) => {
  const { module, command, senderPublicKey, id } = tx;
  const paramsSchema = getSchema(module, command);
  const params = parseTransactionParams(
    paramsSchema,
    tx.params
  );

  return {
    module,
    command,
    address: address.getLisk32AddressFromPublicKey(bufferize(senderPublicKey)),
    params: toParamsJSON(module, command, params),
    transactionID: id,
  };
});

module.exports = parser;
