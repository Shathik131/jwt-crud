const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

const bodyParser = require("body-parser");
app.use(bodyParser.json());

require("dotenv").config();
const PORT = process.env.PORT;

const mongoose = require("./Config/db");
const router = require("./Controller/userController");

app.use("/", router) 


app.listen(PORT, () => {
  console.log(`Server running on the port : ${PORT}`);
});
