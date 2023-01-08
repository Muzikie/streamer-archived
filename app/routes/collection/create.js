const md5 = require('md5');

const Collection = require('../../models/collection');
const { RESPONSE_STATUSES, HTTP_MESSAGES } = require('../../constants');
const { getCoverExtension } = require('../../utils/file');
const { COVERS } = require('../../../config/api');

// eslint-disable-next-line max-statements
exports.createCollection = async (req, res) => {
  try {
    const file = req.files.file;
    const collection = JSON.parse(req.body.data);

    // Check if collectionID is unique
    const collectionExists = await Collection.find({ collectionID: collection.collectionID });
    if (collectionExists.length) {
      throw new Error(HTTP_MESSAGES.COLLECTION_EXISTS);
    }

    // Validate signature
    const md5Hash = md5(file.data);
    if (md5Hash !== collection.meta) {
      throw new Error(HTTP_MESSAGES.INVALID_SIGNATURE);
    }

    // Save cover and collection
    file.mv(`.${COVERS.PATH}` + collection.collectionID + getCoverExtension(file.mimetype));
    const data = await Collection.create(collection);

    // Respond
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
