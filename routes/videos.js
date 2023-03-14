const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (request, response) => {
  let allData = JSON.parse(fs.readFileSync("./data/videos.json"));
  response.send(allData);
});

////Manipulate the data to only bring back certain properties (ID, image, title, channel). Try to make it so that when endpoint is hit, only part of the JSON file is shown (properties you want to see).

///

module.exports = router;
