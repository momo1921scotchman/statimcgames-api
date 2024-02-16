const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", async (request, response) => {
  try {
    const wordsJSON = await fs.readFileSync("./data/words.json");
    const words = JSON.parse(wordsJSON);
    response.json(words);
  } catch (err) {
    console.log("Error with getting words", err);
  }
});

module.exports = router;
