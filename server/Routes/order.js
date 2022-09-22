const express = require("express");
const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.json());
const storeorder = require("../models/orderSchema");
const router = express.Router();
router.get("/", async (req, res) => {
  const orders = await storeorder.find({ user: req.user });

  res.status(200).json({
    status: "Success",
    orders,
  });
});

router.post("/", async (req, res) => {
  const order = req.body.washtype;
  const cloth = [
    "shirts",
    "tshirts",
    "trousers",
    "jeans",
    "boxers",
    "joggers",
    "others",
  ];
  const final = [];
  let totalcost = 0;
  let totalquantity = 0;
  order.forEach((element, i) => {
    var arr = [];
    if (element.m || element.i || element.t || element.b) {
      totalcost = totalcost + element.tot;
      totalquantity = totalquantity + element.sc;
      if (element.m) {
        arr.push("machining");
      }
      if (element.i) {
        arr.push("ironing");
      }
      if (element.t) {
        arr.push("towel");
      }
      if (element.b) {
        arr.push("bleech");
      }
      const dataman = arr.join(",");
      arr = [];
      arr.push(cloth[i]);
      arr.push(dataman);
      arr.push(element.sc);
      arr.push(element.bill);
      arr.push(element.tot);
      final.push(arr);
    }
  });

  const orders = await storeorder.create({
    washtype1: final,
    totalquantity,
    subtotalcost: totalcost,
    totalcost: totalcost + 90,
    orderdate: Date.now(),
    storelocation: "banglore",
  });
  res.status(200).json({
    status: "Success",
    orders,
  });
});

module.exports = router;
