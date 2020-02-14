const express = require("express");
const path = require("path");

const setupServer = () => {
  
  const app = express();

  app.use(express.static(path.resolve(__dirname, "..", "build")));

  app.get("/api/search", async (req, res) => {

    const query = req.query.recipe_search;
    res.send(query);
  });

  return app;
};

module.exports = { setupServer };