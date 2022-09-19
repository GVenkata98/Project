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
        message: "User is not registerd",
      });
    }

    bcrypt.compare(password, data.password, function (err, result) {
      if (err) {
        return res.status(500).json({
          status: "failed",
          message: err.message,
        });
      }

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
          data,
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
