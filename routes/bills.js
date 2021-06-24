const express = require("express");
const { addBills } = require("../controllers/bills");

const router = express.Router();

router.post("/", addBills);

module.exports = router;
