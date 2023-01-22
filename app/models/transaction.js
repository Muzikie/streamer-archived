
const mongoose = require('mongoose');

const Transaction = mongoose.model('Transaction', {
  transactionID: {
    type: String,
    required: [true, 'Transaction must have a transactionID'],
  },
  creatorAddress: {
    type: String,
    required: [true, 'Transaction must have a valid Lisk 32 address'],
  },
  module: {
    type: String,
    required: [true, 'Transaction must have a module'],
  },
  command: {
    type: String,
    required: [true, 'Transaction must have a command'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Transaction;
