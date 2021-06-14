const express = require("express");

const router = express.Router();

const {
  getAllItems,
  getItemById,
  addItem,
  editItemById,
  deleteItemById,
} = require("../controllers/items");

router.get("/", getAllItems);

router.post("/", addItem);

router.get("/:id", getItemById);

router.patch("/:id", editItemById);

router.delete("/:id", deleteItemById);

module.exports = router;
