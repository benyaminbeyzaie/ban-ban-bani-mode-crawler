const express = require("express");
const MongoClient = require("mongodb-legacy").MongoClient;
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json({ limit: "50mb" });

const app = express();
const cors = require("cors");

app.use(cors());

const client = new MongoClient("mongodb://db:27017");
client.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("connected to database");
});
const db = client.db("ban-bin");

app.post("/products", jsonParser, (req, res) => {
  const data = req.body;
  // iterrate through the data and add the id
  data.forEach((item, index) => {
    db.collection("products").updateOne(
      { id_product: item["id_product"] },
      { $set: item },
      (err, result) => {
        if (err) return console.log(err);
      }
    );
  });
  res.sendStatus(200);
});

app.get("/products", (req, res) => {
  setTimeout(() => {
    db.collection("products")
      .find()
      .toArray((err, results) => {
        if (err) return console.log(err);
        res.send(results);
      });
  }, 3000);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(7500, function () {
  console.log("listening on 7500");
});
