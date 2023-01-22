const eventManager = require('./eventManager');
const parser = require('./parser');
const updater = require('./updater');

const indexer = () => {
  eventManager((_height, succeededTxs) => {
    const result = parser(succeededTxs);

    // Get the sender account
    updater(result);
  });
};

module.exports = indexer;
