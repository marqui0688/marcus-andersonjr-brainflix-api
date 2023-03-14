const express = require("express");
const router = express.Router();
const fs = require("fs");
///// GENERATE RANDOM ID ////////
const randomId = crypto.randomUUID();
// const newVideo = { ...req.body, id: randomId };
// videoData.push(newVideo);

/////    GET    ///////
router.get("/", (request, response) => {
  let allData = JSON.parse(fs.readFileSync("./data/videos.json"));

  let videoList = [];
  allData.map((video) => {
    let shortVid = {
      id: video.id,
      channel: video.channel,
      title: video.title,
      image: video.image,
    };
    videoList.push(shortVid);
  });
  response.json(videoList);
});

router.get("/:videoId", (request, response) => {
  const videoId = request.params.videoId;
  const videoData = JSON.parse(fs.readFileSync("./data/videos.json"));
  let matchVid = videoData.find((video) => video.id === videoId);
  response.json(matchVid);
});
/////    POST NEW VIDEO    ///////
router.post("/", (request, response) => {
  const { id, channel, title, comment } = req.body;
});

////Manipulate the data to only bring back certain properties (ID, image, title, channel). Try to make it so that when endpoint is hit, only part of the JSON file is shown (properties you want to see).

///

module.exports = router;
