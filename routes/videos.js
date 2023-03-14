const express = require("express");
const router = express.Router();
const fs = require("fs");
const videoData = readVideo();
///// GENERATE RANDOM ID ////////
const randomId = cypto.randomUUID();
const newVideo = { ...req.body, id: randomId };
videoData.push(newVideo);

/////    GET    ///////
router.get("/", (request, response) => {
  let allData = JSON.parse(fs.readFileSync("./data/videos.json"));
  response.send(allData);
});

router.get("/:videoId", (request, response) => {
  const videoId = req.params.videoId;
  const videoData = json.parse(fs.readFileSync(data / videos.json));
});
/////    POST NEW VIDEO    ///////
router.post("/", (request, response) => {
  const { id, author, title, comment } = req.body;
});

////Manipulate the data to only bring back certain properties (ID, image, title, channel). Try to make it so that when endpoint is hit, only part of the JSON file is shown (properties you want to see).

///

module.exports = router;
