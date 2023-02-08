// Get environment variables from .env
//import * as dotenv from 'dotenv';
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

  const querySpec = {
    query: "select * from Apps",
  };

  const { resources } = await container.items.query(querySpec).fetchAll();

  // const name = (req.query.name || (req.body && req.body.name));
  // const responseMessage = name
  //     ? "Hello, " + name + ". This HTTP triggered function executed successfully."
  //     : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

  const responseMessage = `Cosmos Key: ${key}\nEndpoint: ${endpoint}`;

  context.log(responseMessage);

  context.res.json({apps: resources});
};
