const express = require("express");

const router = express.Router();

const {
  getAllItems,
  getItemById,
  addItem,
  editItemById,
  deleteItemById,
} = require("../controllers/items");

const { verifyToken } = require("../middlewares/verifyToken");

router.get("/", verifyToken, getAllItems);

router.post("/", verifyToken, addItem);

router.get("/:id", getItemById);

router.patch("/:id", editItemById);

router.delete("/:id", deleteItemById);

module.exports = router;
