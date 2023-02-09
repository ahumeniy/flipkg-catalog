// Get environment variables from .env
const dotenv = require("dotenv");

dotenv.config();

// Get Cosmos Client
//import { CosmosClient } from "@azure/cosmos";
const { CosmosClient } = require("@azure/cosmos");

// Provide required connection from environment variables
const key = process.env.COSMOS_KEY;
// Endpoint format: https://YOUR-RESOURCE-NAME.documents.azure.com:443/
const endpoint = process.env.COSMOS_ENDPOINT;

module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  const cosmosClient = new CosmosClient({ endpoint, key });

  const { database } = await cosmosClient.databases.createIfNotExists({
    id: "Catalog",
  });

  context.log(`${database.id} database ready`);

  const { container } = await database.containers.createIfNotExists({
    id: "Apps",
  });

  const id = req.query.id;
  const partitionKey = id.split('|')[0];

  const { resource } = await container.item(id, partitionKey).read();

  context.res.json({ app: resource });
};
