const express = require("express");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();
const User = require("../models/user");

router.post("/", async (req, res) => {
  const { email, password, fullName } = req.body;
  const hashedPwd = bcryptjs.hashSync(password, bcryptjs.genSaltSync(10));
  const user = new User({
    email,
    password: hashedPwd,
    fullName,
  });
  try {
    const addUser = await user.save();
    res.json({
      message: "User added Successfully",
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    const matchMyPassword = bcryptjs.compareSync(password, user.password);
    if (matchMyPassword == true) {
      let token = jwt.sign({ id: user._id }, "Secret_123", {
        expiresIn: 10 * 60,
      });
      res.json({
        message: "Login Successful",
        token,
      });
    } else {
      res.status(401).json({
        message: "unauthorized request",
      });
    }
  } catch (err) {
    res.json({
      message: "User Not Found",
      error: err,
    });
  }
});

module.exports = router;
