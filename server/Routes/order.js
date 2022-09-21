const express = require("express");
const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.json());
const order = require("../models/orderSchema");
const router = express.Router();
router.get("/", async (req, res) => {
  const orders = await order.find();

  res.status(200).json({
    status: "Success",
    orders,
  });
});

router.post("/", async (req, res) => {
  const orders = await order.create(
    // user: req.user,
    req.body
  );
  res.status(200).json({
    status: "Success",
    orders,
  });
});

module.exports = router;
