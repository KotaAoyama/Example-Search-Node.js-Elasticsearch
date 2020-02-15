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
      ]
    }).catch(console.log);

    const hitDocIds = [];

    for (const responsesPerSearch of body.responses) {

      if (responsesPerSearch.hits.hits.length > 0) {
        for (const hitDoc of responsesPerSearch.hits.hits) {
          
          console.log('hitDoc', hitDoc);
          if (!hitDocIds.includes(hitDoc._id)) {
            hitDocIds.push(hitDoc._id);
          }
        }
      }
    }
    console.log('hitDocIds', hitDocIds, hitDocIds.length);

    const hitDocuments = [];
    const promises = [];

    hitDocIds.forEach((hitDocId) => {
      // all promises have pending state
      promises.push(getDoc(hitDocId));
    });

    Promise.all(promises)
    .then(bodies => {
      bodies.forEach(body => hitDocuments.push(body))
    })
    .then(() => res.send(hitDocuments))
    .catch(console.log);
  });

  const getDoc = (id) => {
    return client.get({
      index: ES_INDEX,
      id
    })
    .then(res => res.body)
  }

  return app;
};

module.exports = { setupServer };