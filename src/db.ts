import { MongoClient } from "mongodb";

const dbName = "wlagcars";
const uri = `mongodb://localhost:27017/${dbName}`;

export const client = new MongoClient(uri);
export const conn = client.connect();
