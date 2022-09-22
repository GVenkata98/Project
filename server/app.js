const express = require("express");
const cors = require("cors");
const secret = "SUCCESS";
const app = express();
app.use(cors());
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.json());
const PORT = 8080 || process.env.PORT;
var jwt = require("jsonwebtoken");
const userroutes = require("./Routes/register");
const loginroutes = require("./Routes/login");
const ordersroute = require("./Routes/order");
const registerschema = require("./models/registerschema");
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

///middleware
app.use("/orders", (req, res, next) => {
  // console.log(req.headers.authorization);
  if (req.headers.authorization) {
    const token = req.headers.authorization.split("test ")[1];

    jwt.verify(token, secret, async function (err, decoded) {
      if (err) {
        res.status(500).json({
          status: "failed",
          message: "Not Authenticated",
        });
      }
      console.log(decoded);
      const user = await registerschema.findOne({ _id: decoded.data });
      console.log(user);
      req.user = user._id;
      console.log(user);
      console.log(req.user);
      next();
    });
  } else {
    return res.status(500).json({
      status: "failed",
      message: "Invalid token",
    });
  }
});

///////////
app.use("/register", userroutes);
app.use("/login", loginroutes);
app.use("/orders", ordersroute);
app.listen(PORT, () => {
  console.log(`listening at port :${PORT}`);
});
