const Item = require("../models/item");

exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json({
      data: items,
    });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

exports.getItemById = async (req, res) => {
  const id = req.params.id;
  // console.log(id);
  try {
    const item = await Item.findById(id);

    res.json({
      data: item,
    });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

exports.addItem = async (req, res) => {
  const { name, price } = req.body;
  const item = new Item({ name, price });
  try {
    const savedItem = await item.save();
    res.json({
      message: "item saved",
      data: savedItem,
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};

exports.editItemById = async (req, res) => {
  const id = req.params.id;
  const { name, price } = req.body;
  try {
    const item = await Item.findById(id);
    item.name = name;
    item.price = price;
    const editedItem = await item.save();
    res.json({
      message: "item edited",
      editedValue: editedItem,
    });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

exports.deleteItemById = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteItem = await Item.findByIdAndDelete(id);
    res.json({
      message: "item deleted successfully",
    });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};
