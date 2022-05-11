const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = mongoose.Schema(
  {
    message: {
      type: String,
    },
    sender: {
      type: Schema.Types.ObjectId,
      ref: "UserStorage",
    },
    type: {
      type: String,
    },
  },
  { timestmaps: true }
);

const ChatStorage = mongoose.model("Chat", chatSchema);

module.exports = { ChatStorage };
