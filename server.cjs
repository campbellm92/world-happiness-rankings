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
    if (!origin || originWhitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, "dist")));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
