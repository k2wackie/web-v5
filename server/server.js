const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();
const db = require("./config/db");

dotenv.config({
  path: path.join(__dirname, "/../.env"),
});

//routing
const home = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname + "/../client/src/images")));
app.use("/", home);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname + "/../client/build/")));
  app.get("*", (req, res) => {
    res.sendFile(
      path.join(path.join(__dirname + "/../client/build/index.html"))
    );
  });
}

module.exports = app;
