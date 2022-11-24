const path = require('path');
const fs = require("fs");
const apiConfig = require('../../../config/api');

// eslint-disable-next-line max-statements, consistent-return
module.exports = (req, res) => {
  // Ensure there is a range given for the audio
  const range = req.headers.range;

  if (!range) {
    res.status(400).send("Requires Range header");
  }

  // get audio stats (about 3MB)
  const audioID = req.params.audioID;
  // @todo Implement audio file path
  const filePath = `${path.join(__dirname, apiConfig.songs.path) + audioID  }.${apiConfig.songs.extension}`;
  let audioSize = 0;
  try {
    const file = fs.statSync(filePath);
    audioSize = file.size;
  } catch (e) {
    return res
      .status(404)
      .send("Not Found");
  }


  // Parse Range
  // Example: "bytes=32324-"
  // @todo Handle error if range is not valid, or when headers are not set correctly
  const CHUNK_SIZE = 10 ** 5; // 100KB
  const start = Number(range.replace(/\D/g, ""));
  const end = Math.min(start + CHUNK_SIZE, audioSize - 1);

  // Create headers
  const contentLength = end - start + 1;
  const headers = {
    "Content-Range": `bytes ${start}-${end}/${audioSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength,
    "Content-Type": "audio/mpeg"
  }

  // HTTP Status 206 for Partial Content
  res.writeHead(206, headers);

  // create video read stream for this particular chunk
  const audioStream = fs.createReadStream(filePath, { start, end });

  // Stream the video chunk to the client
  audioStream.pipe(res);
};

