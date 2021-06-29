const mongoose = require("mongoose");
const Bill = require("../models/bill");
const Item = require("../models/item");

exports.addBills = async (req, res) => {
  const { billNo, vendor, itemId, quantity } = req.body;

  const newBill = new Bill({
    billNo,
    vendor,
    itemId,
    quantity,
  });
  try {
    const savedBill = await newBill.save();
    const myItem = await Item.findById(itemId);
    if (myItem) {
      myItem.quantity += quantity;
      const changedItem = await myItem.save();
      res.json({
        bill: savedBill,
        itemDetail: {
          item: changedItem.name,
          newQuantity: changedItem.quantity,
        },
      });
    } else {
      res.json({
        message: "Item Not found",
      });
    }
  } catch (err) {
    res.json({
      error: err,
    });
  }
};

exports.getBills = async (req, res) => {
  try {
    const bills = await Bill.find().populate("itemId");
    // const newBills = await bills.populate("item").execPopulate();
    res.json({
      bills: bills,
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};
