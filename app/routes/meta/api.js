const { RESPONSE_STATUSES } = require('../../constants');

const data = {
  chainID: '00100000',
};

module.exports = (_req, res) => {
  res.status(200).json({
    data,
    status: RESPONSE_STATUSES.SUCCESS,
  });
};
