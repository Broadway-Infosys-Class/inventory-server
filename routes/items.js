const express = require("express");

const router = express.Router();

const {
  getAllItems,
  getItemById,
  addItem,
  editItemById,
  deleteItemById,
} = require("../controllers/items");

router.get("/item", getAllItems);

router.post("/item", addItem);

router.get("/item/:id", getItemById);

router.patch("/item/:id", editItemById);

router.delete("/item/:id", deleteItemById);

module.exports = router;
