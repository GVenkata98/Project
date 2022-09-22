const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderSchema = new mongoose.Schema(
  {
    washtype1: {
      // shirts: {
      //   quantity: { type: Number, default: 0 },
      //   washing: { type: Boolean, defalut: false },
      //   ironing: { type: Boolean, defalut: false },
      //   drying: { type: Boolean, defalut: false },
      //   chemical_wash: { type: Boolean, defalut: false },
      // },
      // t_shirts: {
      //   quantity: { type: Number, default: 0 },
      //   washing: { type: Boolean, defalut: 0 },
      //   ironing: { type: Boolean, defalut: 0 },
      //   drying: { type: Boolean, defalut: 0 },
      //   chemical_wash: { type: Boolean, defalut: 0 },
      // },
      // trousers: {
      //   quantity: { type: Number, default: 0 },
      //   washing: { type: Boolean, defalut: 0 },
      //   ironing: { type: Boolean, defalut: 0 },
      //   drying: { type: Boolean, defalut: 0 },
      //   chemical_wash: { type: Boolean, defalut: 0 },
      // },
      // jeans: {
      //   quantity: { type: Number, default: 0 },
      //   washing: { type: Boolean, defalut: 0 },
      //   ironing: { type: Boolean, defalut: 0 },
      //   drying: { type: Boolean, defalut: 0 },
      //   chemical_wash: { type: Boolean, defalut: 0 },
      // },
      // boxers: {
      //   quantity: { type: Number, default: 0 },
      //   washing: { type: Boolean, defalut: 0 },
      //   ironing: { type: Boolean, defalut: 0 },
      //   drying: { type: Boolean, defalut: 0 },
      //   chemical_wash: { type: Boolean, defalut: 0 },
      // },
      // joggers: {
      //   quantity: { type: Number, default: 0 },
      //   washing: { type: Boolean, defalut: 0 },
      //   ironing: { type: Boolean, defalut: 0 },
      //   drying: { type: Boolean, defalut: 0 },
      //   chemical_wash: { type: Boolean, defalut: 0 },
      // },
      // others: {
      //   quantity: { type: Number, default: 0 },
      //   washing: { type: Boolean, defalut: 0 },
      //   ironing: { type: Boolean, defalut: 0 },
      //   drying: { type: Boolean, defalut: 0 },
      //   chemical_wash: { type: Boolean, defalut: 0 },
      // },
      type: Array,
    },
    totalquantity: Number,
    totalprice: Number,
    orderdate: {
      type: String,
    },
    subtotalcost: Number,
    totalcost: Number,
    orderid: String,
    user: { type: Schema.Types.ObjectId, ref: "registerschema" },
    storelocation: {
      required: true,
      type: String,
    },
  },

  { timestamps: true }
);
const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
