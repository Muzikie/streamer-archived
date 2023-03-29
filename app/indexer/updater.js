const { rename } = require('fs');
const { WS_MESSAGES, idKeys, MODULE_FILES, MODULES } = require('../constants');
const { capitalize } = require('../utils/helpers');
const { getTypeByName } = require('../utils/file');
const Audio = require('../models/audio');
const Collection = require('../models/collection');
const Profile = require('../models/profile');
const Transaction = require('../models/transaction');
const { AUDIOS } = require('../../config/api');
const ws = require('../ws');

const moduleNames = Object.keys(MODULE_FILES);

// eslint-disable-next-line max-statements
const updater = async (transactions) => {
  for (const transaction of transactions) {
    const  { address, module } = transaction;
    if (!moduleNames.includes(module)) return false;

    const account = await ws.request(WS_MESSAGES[`${module}_getAccount`], { address });

    // get last of its type
    let lastItemID;
    if (module === MODULES.PROFILE) {
      lastItemID = account.profileID
    } else {
      const items = account[module][`${module}s`];
      lastItemID = items[items.length - 1];
    }
    const content = await ws.request(WS_MESSAGES[`${module}_get${capitalize(module)}`], { [idKeys[module]]: lastItemID });

    // Apply changes
    const toBeSaved = {
      ...content,
      [idKeys[module]]: lastItemID,
      creatorAddress: address,
    };

    // get transaction
    const storedTransaction = await Transaction.find({ transactionID: transaction.transactionID });
    if (storedTransaction) {
      // rename files
      for (const fileName of MODULE_FILES[transaction.module]) {
        rename(
          `.${AUDIOS.PATH}${transaction.transactionID}-${fileName}${getTypeByName(fileName)}`,
          `.${AUDIOS.PATH}${toBeSaved[idKeys[module]]}-${fileName}${getTypeByName(fileName)}`,
          () => { console.log('Moved') },
        );
      }

      // Save it
      if (module === 'audio') {
        await Audio.create(toBeSaved);
      } else if (module === 'collection') {
        await Collection.create(toBeSaved);
      } else if (module === 'profile') {
        await Profile.create(toBeSaved);
      }

      await Transaction.findOneAndDelete({ transactionID: transaction.transactionID }, (err) => {
        if (err) {
          console.log('Error deleting transaction', err);
        } else {
          console.log('Inserted entity and deleted the temporary transaction.');
        }
      });
    }
  }
}

module.exports = updater;
