const Status = require("../models/status");

exports.addStatus = async (req, res) => {
  const { type } = req.body;
  const status = new Status({ type });
  try {
    const saveStatus = await status.save();
    res.json({
      message: "saved successfully",
      data: saveStatus,
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};

exports.editStatus = async (req, res) => {
  const id = req.params.id;
  const { type } = req.body;
  try {
    const status = await Status.findById(id);
    status.type = type;
    const editedStatus = await status.save();
    res.json({
      message: "status edited",
      data: editedStatus,
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};

exports.deleteStatus = async (req, res) => {
  const id = req.params.id;
  try {
    const status = await Status.findByIdAndDelete(id);
    res.json({
      message: "deleted Successfully",
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};
