const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();
const db = require("./config/db");

// const { ChatStorage } = require("./models/ChatStorage");
// const { auth } = require("./middleware/auth");
// const server = require("http").createServer(app);
// const io = require("socket.io")(server, {
//   cors: {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"],
//   },
// });

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

// io.on("connection", (socket) => {
//   socket.on("Input Chat Message", (msg) => {
//     connect.then((db) => {
//       try {
//         let chat = new ChatStorage({
//           message: msg.chatMessage,
//           sender: msg.userId,
//           type: msg.type,
//         });
//         chat.save((err, doc) => {
//           if (err) return res.json({ success: false, err });
//           ChatStorage.find({ _id: doc._id })
//             .populate("sender")
//             .exec((err, doc) => {
//               return io.emit("Output Chat Message", doc);
//             });
//         });
//       } catch (err) {
//         console.error(error);
//       }
//     });
//   });
// });

module.exports = app;
