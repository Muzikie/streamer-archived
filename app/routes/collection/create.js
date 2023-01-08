const md5 = require('md5');

const Collection = require('../../models/collection');
const { getCoverExtension } = require('../../utils/file');
const { COVERS } = require('../../../config/api');

// eslint-disable-next-line max-statements
exports.createCollection = async (req, res) => {
  try {
    const file = req.files.file;
    const collection = JSON.parse(req.body.data);

    // @todo Check if collectionID is unique
    const collectionExists = await Collection.find({ collectionID: collection.collectionID });
    if (collectionExists.length) {
      throw new Error('Collection already exists');
    }

    // Validate signature
    const md5Hash = md5(file.data);

    if (md5Hash !== collection.meta) {
      throw new Error('Invalid signature');
    }

    // Save cover and collection
    file.mv(`.${COVERS.PATH}` + collection.collectionID + getCoverExtension(file.mimetype));
    const data = await Collection.create(collection);

    // Respond
    res.status(201).json({
      status: 'success',
      data,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};
