const express = require("express");
const cors = require("cors");
const app = express();
const videosRoutes = require("./routes/videos.js");
const wordsRoutes = require("./routes/words.js");
require("dotenv").config();

app.use(cors());
app.use(express.static("static"));

app.use(express.json());
const PORT = process.env.PORT || 5000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:3000";
app.use(cors({ origin: CORS_ORIGIN }));

app.use("/videos", videosRoutes);

app.use("/words", wordsRoutes);

app.get("/", (request, response) => {
  response.send("learning games better work");
});

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
