const express = require("express");

const MongoClient = require("mongodb").MongoClient;

const app = express();

let db;

MongoClient.connect("mongodb://localhost:27017", function (err, client) {
  if (err !== null) {
    console.log(err);
  } else {
    db = client.db("suculenta");
  }
});

const cors = require("cors");
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// RUTAS CRUD PARA EL PANEL DE CONTROL ADMIN //

// Consultar todos los productos ------------------

app.get("/productos", function (req, res) {
  db.collection("productos")
    .find()
    .toArray(function (err, datos) {
      if (err !== null) {
        res.send(err);
      } else {
        res.send(datos);
      }
    });
});

app.listen(3003);
