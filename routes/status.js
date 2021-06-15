const express = require("express");

const {
  addStatus,
  editStatus,
  deleteStatus,
} = require("../controllers/status");

const router = express.Router();

router.post("/", addStatus);

router.patch("/:id", editStatus);

router.delete("/:id", deleteStatus);

module.exports = router;
