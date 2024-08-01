require("dotenv").config();
const express = require("express");
const { PORT } = require("./site.config.js");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET", "PUT"],
  })
);

const router = require("./router.js");
app.use(router);
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello Mr. Stark !");
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
