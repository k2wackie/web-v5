"use strict";
const { ChatStorage } = require("../models/ChatStorage");

class Chat {
  constructor(body) {
    this.body = body;
  }

  async read() {
    try {
      const response = await ChatStorage.find().populate("sender");
      return { success: true, data: response };
    } catch (err) {
      return { success: false, err };
    }
  }
}

module.exports = Chat;
