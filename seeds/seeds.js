'use strict'

require('array.prototype.flatmap').shim();
const path = require('path');
const fs = require('fs');
const directoryPath = path.join(__dirname, 'data');
const { Client } = require('@elastic/elasticsearch')

const client = new Client({ node: 'http://localhost:9200' })
const ES_INDEX = 'recipe';


async function run () {

  const { body } = await client.indices.exists({
    index: ES_INDEX
  })
  if (body) {
    const { body } = await client.indices.delete({
      index: ES_INDEX
    })
    console.log('deleted', body);
  }

  const dataset = [];
  
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    } 

    files.forEach((file) => {
      const fileName = path.basename(file, '.json'); 
      const filePath = path.join(directoryPath, file);
      const document = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      const data = { id: fileName, document };
      dataset.push(data);
    });

    const body = dataset.flatMap(data => [{ index: { _index: ES_INDEX, _id: data.id } }, data.document]);
    
    async function bulk() {
      const { body: bulkResponse } = await client.bulk({ refresh: true, body });

      if (bulkResponse.errors) {
        const erroredDocuments = []
        // The items array has the same order of the dataset we just indexed.
        // The presence of the `error` key indicates that the operation
        // that we did for the document has failed.
        bulkResponse.items.forEach((action, i) => {
          const operation = Object.keys(action)[0]
          if (action[operation].error) {
            erroredDocuments.push({
              // If the status is 429 it means that you can retry the document,
              // otherwise it's very likely a mapping error, and you should
              // fix the document before to try it again.
              status: action[operation].status,
              error: action[operation].error,
              operation: body[i * 2],
              document: body[i * 2 + 1]
            })
          }
        })
        console.log(erroredDocuments)
      }
      const { body: count } = await client.count({ index: ES_INDEX })
      console.log(count)
    }
    bulk();
  });
}

run().catch(console.log)
