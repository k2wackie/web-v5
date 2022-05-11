const mongoose = require("mongoose");
const config = require("./key");
const app = require("../server");

const { ChatStorage } = require("../models/ChatStorage");

const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    // origin: "https://ackie-pjt.herokuapp.com",
    methods: ["GET", "POST"],
  },
});

module.exports = connect = mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongoDB Connected..."))
  .catch((err) => console.log(err));

io.on("connection", (socket) => {
  socket.on("Input Chat Message", (msg) => {
    connect.then(() => {
      try {
        let chat = new ChatStorage({
          message: msg.chatMessage,
          sender: msg.userId,
          type: msg.type,
        });
        // console.log(chat);
        chat.save((err, doc) => {
          if (err) return { success: false, err };
          ChatStorage.find({ _id: doc._id })
            .populate("sender")
            .exec((err, doc) => {
              // console.log(doc);
              return io.emit("Output Chat Message", doc);
            });
        });
      } catch (err) {
        console.error(error);
      }
    });
  });
});

module.exports = server;
