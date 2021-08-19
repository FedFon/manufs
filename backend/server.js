require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
const apis = require("./api/index");

//express server
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", apis);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
