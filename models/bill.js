const mongoose = require("mongoose");
const Item = require("./item");

const billSchema = new mongoose.Schema({
  billNo: {
    required: true,
    type: String,
  },
  vendor: {
    required: true,
    type: String,
  },
  itemId: {
    required: true,
    type: mongoose.Schema.ObjectId,
    ref: "item",
  },
  quantity: {
    required: true,
    type: Number,
    default: 1,
  },
});

module.exports = mongoose.model("bills", billSchema);
