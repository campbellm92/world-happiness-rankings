const express = require("express");
const cors = require("cors");
const app = express();

const originWhitelist = ["http://localhost:5173", "https://whr.mattdev.it"];
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

app.get("/", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

app.listen(8080, () => {
  console.log("Server started on port 8080.");
});
