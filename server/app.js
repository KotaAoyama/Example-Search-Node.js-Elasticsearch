'use strict'

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

    const { body } = await client.msearch({
      body: [
        { index: ES_INDEX },
        { query: { match: { title: query } } },
  
        { index: ES_INDEX },
        { query: { match: { description: query } } },

        { index: ES_INDEX },
        { query: { match: { ingredients: query } } },

        { index: ES_INDEX },
        { query: { match: { directions: query } } },

        { index: ES_INDEX },
        { query: { match: { tags: query } } },

        { index: ES_INDEX },
        { query: { match: { author: query } } },
      ]
    }).catch(console.log);

    const result = [];
    for (const responsesPerSearch of body.responses) {

      if (responsesPerSearch.hits.hits.length > 0) {
        for (const resPerSearch of responsesPerSearch.hits.hits) {

          if (!result.includes(resPerSearch._id)) {
            result.push(resPerSearch._id);
          }
        }
      }
    }
    console.log('result', result, result.length);
    res.send(result);
  });

  return app;
};

module.exports = { setupServer };