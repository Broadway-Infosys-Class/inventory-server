const Bill = require("../models/bill");
const Item = require("../models/item");

exports.addBills = async (req, res) => {
  const { billNo, vendor, item, quantity } = req.body;
  const newBill = new Bill({
    billNo,
    vendor,
    item,
    quantity,
  });
  try {
    const savedBill = await newBill.save();
    const myItem = await Item.findById(item);
    if (myItem) {
      myItem.quantity += quantity;
      const changedItem = await myItem.save();
      res.json({
        bill: savedBill,
        item: changedItem.name,
        newQuantity: changedItem.quantity,
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
    const bills = await Bill.find();
    let newBills = bills;
    let temp = [];
    newBills.map((bill, index) => {
      let tempBill = bill;
      let newBill = { ...tempBill, itemName: "Test" };
      console.log(newBill);
      temp.push(newBill);
    });
    res.json({
      bills: newBills,
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};
