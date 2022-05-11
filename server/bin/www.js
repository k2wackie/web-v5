"use strict";
const server = require("../config/db");

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
