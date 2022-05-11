"use strict";

const Chat = require("./Chat");

const process = {
  read: async (req, res) => {
    const chat = new Chat(req.body);
    console.log(chat);
    const response = await chat.read();
    const url = {
      method: "GET",
      status: response.err ? 400 : 200,
    };
    return res.status(url.status).json(response);
  },
};

module.exports = {
  process,
};
