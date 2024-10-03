const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

const originWhitelist = [
  "http://localhost:5173",
  "https://whr.mattdev.it",
  "http://localhost:3001",
];
const corsOptions = {
  origin: function (origin, callback) {
    if (originWhitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(3001, () => {
  console.log("Server started on port 3001.");
});
