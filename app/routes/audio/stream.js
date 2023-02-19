const path = require("path");
const fs = require("fs");
const { AUDIOS } = require("../../../config/api");
const { WS_MESSAGES } = require("../../constants");
const ERRORS = require("../../errors");
const ws = require("../../ws");
const { getCookies } = require("../../utils/cookie");
const Audio = require("../../models/audio");
const { RESPONSE_STATUSES } = require("../../constants");

// eslint-disable-next-line max-statements, consistent-return
exports.stream = async (req, res) => {
  try {
    //check if user has subscription
    const { address } = getCookies(req.headers.cookie);
    ws.request(WS_MESSAGES.subscription_hasSubscription, { address: address })
      // eslint-disable-next-line max-statements
      .then((response) => {
        if (!response.success) {
          return res.status(401).send(ERRORS.NO_SUBSCRIPTION);
        }
      });
    const audioID = req.params.id;
    const range = req.headers.range;
    //Find Audio in DB
    await Audio.find({ audioID });
    // /home/hamid/MUZIKIE/streamer/storage
    const filePath = `${
      path.join(__dirname, "../../../", AUDIOS.PATH) + audioID
    }-audio.${AUDIOS.EXTENSION}`;

    const stat = fs.statSync(filePath);
    const fileSize = stat.size;

    if (range) {
      const parts = range.replace(/bytes=/, "").split("-");
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

      const chunkSize = end - start + 1;
      const file = fs.createReadStream(filePath, { start, end });
      const head = {
        "Content-Range": `bytes ${start}-${end}/${fileSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": chunkSize,
        "Content-Type": "audio/mpeg",
      };

      res.writeHead(206, head);
      file.pipe(res);
    } else {
      const head = {
        "Content-Length": fileSize,
        "Content-Type": "audio/mpeg",
      };
      res.writeHead(200, head);
      fs.createReadStream(filePath).pipe(res);
    }
  } catch (error) {
    res.status(404).json({
      status: RESPONSE_STATUSES.ERROR,
      message: error.message,
    });
  }
};
