const md5 = require('md5');

const Profile = require('../../models/profile');
const { RESPONSE_STATUSES, HTTP_MESSAGES } = require('../../constants');
const { getCoverExtension } = require('../../utils/file');
const { PHOTOS } = require('../../../config/api');

// eslint-disable-next-line max-statements
exports.create = async (req, res) => {
  try {
    const avatar = req.files.avatar;
    const banner = req.files.banner;
    const profile = JSON.parse(req.body.data);
    console.log('profile', profile);

    // Check if collectionID is unique
    const profileExists = await Profile.find({ profileID: profile.profileID });
    if (profileExists.length) {
      throw new Error(HTTP_MESSAGES.COLLECTION_EXISTS);
    }

    // Validate avatar signature
    const avatarMd5Hash = md5(avatar.data);
    if (avatarMd5Hash !== profile.avatarHash) {
      throw new Error(HTTP_MESSAGES.INVALID_SIGNATURE);
    }

    // Validate banner signature
    const bannerMd5Hash = md5(banner.data);
    if (bannerMd5Hash !== profile.bannerHash) {
      throw new Error(HTTP_MESSAGES.INVALID_SIGNATURE);
    }

    // Save cover and collection
    avatar.mv(`.${PHOTOS.PATH}` + profile.profileID + 'avatar' + getCoverExtension(avatar.mimetype));
    banner.mv(`.${PHOTOS.PATH}` + profile.profileID + 'banner' + getCoverExtension(avatar.mimetype));
    const data = await Profile.create(profile);

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
