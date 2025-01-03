require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 1166;

const app = express();
app.use(express.json());
app.use(cors());

const router = require("./router.js");
app.use(router);
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send("Seek and you will find");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
