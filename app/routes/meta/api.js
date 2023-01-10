const { RESPONSE_STATUSES } = require('../../constants');
const { AUDIOS, COVERS } = require('../../../config/api');

const data = {
  audios: AUDIOS,
  covers: COVERS,
};

module.exports = (_req, res) => {
  res.status(200).json({
    data,
    status: RESPONSE_STATUSES.SUCCESS,
  });
};
