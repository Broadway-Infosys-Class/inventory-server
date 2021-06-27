const express = require("express");
const { addBills, getBills } = require("../controllers/bills");

const router = express.Router();

router.post("/", addBills);
router.get("/", getBills);

module.exports = router;
