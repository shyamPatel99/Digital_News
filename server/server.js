const express = require("express");
const app = express();
const mongoose = require("mongoose");
var cors = require("cors");
app.use(cors());
const url = "mongodb://localhost/news";


const bdparser = require("body-parser");
app.use(bdparser.json());

mongoose.connect(url, { useNewUrlParser: true });
const conn = mongoose.connection;

const newsrouter = require("./routes/news_model");
app.use("/news", newsrouter);


conn.on("open", () => {
  console.log("Connected....");
});

app.listen(9000, (req, res) => {
  console.log("App is staring!");
});
