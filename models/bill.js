const mongoose = require("mongoose");

const billSchema = new mongoose.Schema({
  billNo: {
    required: true,
    type: String,
  },
  vendor: {
    required: true,
    type: String,
  },
  item: {
    required: true,
    type: String,
  },
  quantity: {
    required: true,
    type: Number,
    default: 1,
  },
});

module.exports = mongoose.model("bills", billSchema);
