require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
const apis = require("./api/index");
const mongoose = require("mongoose");

//express server
const app = express();
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", apis);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
