const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: 'http://localhost:9200' })

async function run() {
  const { body } = await client.indices.delete({
    index: 'recipe'
  })
  console.log(body);
}

run().catch(console.log);