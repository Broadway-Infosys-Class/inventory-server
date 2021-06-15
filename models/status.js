const mongoose = require("mongoose");

const statusSchema = mongoose.Schema({
  type: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("status", statusSchema);
