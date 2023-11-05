// @ts-nocheck

import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_CONN_STRING) {
    throw new Error('Invalid environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_CONN_STRING;
const options = {};

let client;
let clientPromise: Promise<MongoClient>;

if (!process.env.MONGODB_CONN_STRING) {
    throw new Error('Please add your Mongo URI to .env.local');
}

client = new MongoClient(uri, options);
clientPromise = client.connect().then(
    console.log('mongo connected')
);
// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;