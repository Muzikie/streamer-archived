module.exports = (req, res) => {
  // Ensure there is a range given for the audio
  const range = req.headers.range;
  
  if (!range) {
    res.status(400).send("Requires Range header");
  }
  // get audio stats (about 3MB)
  
  const fileName = req.params.name;
  const filePath = path.join(__dirname, '/songs/') + fileName + '.mp3';
  let audioSize = 0;
  try {
    const file = fs.statSync(filePath);
    audioSize = file.size;
  } catch (e) {
    res.status(400).send("File not found");
  }

  // Parse Range
  // Example: "bytes=32324-"
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

