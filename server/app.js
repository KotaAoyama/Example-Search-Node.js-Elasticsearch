const express = require("express");
const path = require("path");
const { ES_INDEX } = require("../seeds/seeds");
const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: 'http://localhost:9200' })

const setupServer = () => {
  
  const app = express();

  app.use(express.static(path.resolve(__dirname, "..", "build")));

  app.get("/api/search", async (req, res) => {

    const query = req.query.recipe_search;
    const { body } = await client.search({
      index: ES_INDEX,
      body: {
        query: {
          match: {
            title: query
          },
        },
        query: {
          match: {
            ingredients: query
          }
        }
      }
    }).catch(console.log);

    console.log(body.hits.hits);
  });

  return app;
};

module.exports = { setupServer };