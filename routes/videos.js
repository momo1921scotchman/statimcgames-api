const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", async (request, response) => {
  try {
    const videosJSON = await fs.readFileSync("./data/videos.json");
    const videos = JSON.parse(videosJSON);
    response.json(videos);
  } catch (err) {
    console.log("ERROR with retrieving videos: ", err);
  }
});

router.get("/:videoID", async (request, response) => {
  const id = request.params.videoID;
  const videosJSON = await fs.readFileSync("./data/videos.json");
  const videos = JSON.parse(videosJSON);
  const video = videos.find((video) => video.id === id);
  response.json(video);
});

module.exports = router;
