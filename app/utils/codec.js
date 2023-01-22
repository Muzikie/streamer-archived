const { codec } = require('@liskhq/lisk-codec');
const { utils } = require('@liskhq/lisk-cryptography');
const schemas = require('./schemas');

const baseTransactionSchema = {
  $id: '/lisk/baseTransaction',
  type: 'object',
  required: ['module', 'command', 'nonce', 'fee', 'senderPublicKey', 'params'],
  properties: {
    module: {
      dataType: 'string',
      fieldNumber: 1,
    },
    command: {
      dataType: 'string',
      fieldNumber: 2,
    },
    nonce: {
      dataType: 'uint64',
      fieldNumber: 3,
    },
    fee: {
      dataType: 'uint64',
      fieldNumber: 4,
    },
    senderPublicKey: {
      dataType: 'bytes',
      fieldNumber: 5,
    },
    params: {
      dataType: 'bytes',
      fieldNumber: 6,
    },
    signatures: {
      type: 'array',
      items: {
        dataType: 'bytes',
      },
      fieldNumber: 7,
    },
  },
};

const bufferize = str => Buffer.from(str , 'hex')

const decodeBaseTransaction = (encodedTransaction) =>
  codec.decode(baseTransactionSchema, encodedTransaction);

const parseTransactionParams = (paramsSchema, params) => {
  return paramsSchema ? codec.decode(paramsSchema, bufferize(params)) : {};
};

const decodeTransaction = (encodedTransaction, paramsSchema) => {
  const transaction = decodeBaseTransaction(encodedTransaction);
  const params = parseTransactionParams(paramsSchema, transaction.params);
  const id = utils.hash(encodedTransaction);
  return {
    ...transaction,
    params,
    id,
  };
};

const toParamsJSON = (module, command, params) => {
  const schema = getSchema(module, command);
  if (schema) {
    return codec.toJSON(schema, params);
  }
  return null;
}

const getSchema = (module, command) => {
  if (schemas[module] && schemas[module][command]) {
    return schemas[module][command];
  }
  return null;
};

exports.bufferize = bufferize;
exports.getSchema = getSchema;
exports.toParamsJSON = toParamsJSON;
exports.parseTransactionParams = parseTransactionParams;
exports.decodeTransaction = decodeTransaction;
