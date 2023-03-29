const md5 = require('md5');

const Transaction = require('../../models/transaction');
const { RESPONSE_STATUSES, HTTP_MESSAGES, MODULE_FILES } = require('../../constants');
const { getTypeByName } = require('../../utils/file');
const { AUDIOS } = require('../../../config/api');

// eslint-disable-next-line max-statements
exports.create = async (req, res) => {
  try {
    const transaction = JSON.parse(req.body.data);
    console.log('STORED', transaction.transactionID);

    // Check if transactionID is unique
    const transactionExists = await Transaction.find({ transactionID: transaction.transactionID });
    if (transactionExists.length) {
      throw new Error(HTTP_MESSAGES.TRANSACTION_EXISTS);
    }

    for (const fileName of MODULE_FILES[transaction.module]) {
      console.log(fileName);
      const file = req.files[fileName];
      console.log(!!file);

      // Validate signature
      const md5Hash = md5(file.data);
      console.log('md5Hash new', md5Hash);
      console.log('md5Hash old', `${fileName}Hash`, transaction[`${fileName}Hash`]);
      if (md5Hash !== transaction[`${fileName}Hash`]) {
        throw new Error(HTTP_MESSAGES.INVALID_SIGNATURE);
      }

      try {
        const newPath = `.${AUDIOS.PATH}${transaction.transactionID}-${fileName}${getTypeByName(fileName)}`;
        file.mv(newPath);
      } catch (e) {
        console.log('Failed to move', e);
      }
    }

    const data = await Transaction.create(transaction);
    res.status(201).json({
      status: RESPONSE_STATUSES.SUCCESS,
      data,
    });
  } catch (error) {
    res.status(400).json({
      status: RESPONSE_STATUSES.ERROR,
      message: error.message,
    });
  }
};
