const express = require("express");
const app = express();
app.get("/gadgets", (requests, response) => {
  response.sendFile("./gadgets.html", { root: __dirname });
});
module.exports = app;
