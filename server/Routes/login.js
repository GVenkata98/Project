const express = require("express");
const router = express.Router();
const User = require("../models/registerschema");
var jwt = require("jsonwebtoken");
const secret = "SUCCESS";

const bcrypt = require("bcrypt");
router.post("/", async (req, res) => {
  try {
    const { userdetails, password } = req.body;

    const userdatausingemail = await User.findOne({ email: userdetails });
    const userdatausingphonnumber = await User.findOne({
      phonenumber: userdetails,
    });
    console.log(userdatausingphonnumber);
    console.log(userdatausingemail);
    let data = userdatausingphonnumber || userdatausingemail;
    console.log(data);
    if (!data) {
      return res.status(400).json({
        status: "failed",
        messageuser: "User is not registerd",
      });
    }
    console.log(password, data.password);
    bcrypt.compare(password, data.password, function (err, result) {
      console.log("inside");
      if (!result) {
        console.log(result, err);

        return res.status(500).json({
          status: "failed",
          messagepass: "wrong password",
        });
      }
      console.log(password, data.password);
      if (result) {
        const token = jwt.sign(
          {
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
            data: data._id,
          },
          secret
        );

        res.status(200).json({
          status: "Sucess",
          token,
        });
      }
    });
  } catch (e) {
    res.status(400).json({
      status: "Login failed",
      message: e.message,
    });
  }
});

module.exports = router;
