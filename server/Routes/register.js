const { response } = require("express");
const express = require("express");
const app = express();
const router = express.Router();
const User = require("../models/registerSchema");

router.get("/", async (req, res) => {
  try {
    const data = await User.find();
    res.json({
      message: "success",
      data,
    });
  } catch (e) {
    res.json({
      message: e.message,
    });
  }
});
router.post("/", async (req, res) => {
  try {
    const data = await User.create(req.body);
  } catch (e) {
    res.json({
      message: e.message,
    });
  }
});

module.exports = router;
