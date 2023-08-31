import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
const app = express();
const PORT = 4000;

const MONGO_URL =
  "mongodb+srv://rubynathan:ruby999@cluster0.abcwmtd.mongodb.net";

const client = new MongoClient(MONGO_URL); // dial
// Top level await
await client.connect(); // call
console.log("Mongo is connected !!!  ");
app.use(cors());

app.get("/data", async function (request, response) {
  const result = await client.db("ruby").collection("data").find({}).toArray();
  response.send(result);
});

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
