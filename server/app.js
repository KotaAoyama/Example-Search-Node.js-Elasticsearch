const express = require("express");
const path = require("path");

const setupServer = () => {
  const app = express();

  console.log('ccc');
  app.use(express.static(path.resolve(__dirname, "..", "build")));

  console.log('bbb');
  app.get("/api/search", async (req, res) => {
    console.log('aaa');
    res.send('ok');
  });

  return app;
};

module.exports = { setupServer };