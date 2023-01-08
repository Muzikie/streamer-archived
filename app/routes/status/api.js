const { RESPONSE_STATUSES } = require('../../constants');

module.exports = (_req, res) => {
  // @todo Implement API status method
  res.status(200).json({
    status: RESPONSE_STATUSES.SUCCESS,
  });
};
