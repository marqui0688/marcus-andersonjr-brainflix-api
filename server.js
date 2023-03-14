const express = require("express");
const app = express();
const cors = require("cors");
const port = 8080;
const videoRoute = require("./routes/videos.js");

app.listen(port, () => {
  console.log("server started");
});

app.use("/videos", videoRoute);
