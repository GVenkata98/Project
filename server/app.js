const express = require("express");

const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.json());
const PORT = 8080;
const userroutes = require("./Routes/register");

const User = require("./models/registerSchema");
///connecting to mongo
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://group1:group1@cluster0.xqck89a.mongodb.net/?retryWrites=true&w=majority",
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("connected");
    }
  }
);
app.use("/register", userroutes);

app.listen(PORT, () => {
  console.log(`listening at port :${PORT}`);
});
