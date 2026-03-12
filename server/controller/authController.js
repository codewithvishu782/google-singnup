const User = require("../model/User.js");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken.js");

exports.signup = async (req, res) => {
  try {
    const { name, email, password, mobile } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({
      name,
      email,
      password,
      mobile,
    });

    const token = generateToken(user._id);

    res.json({
      user,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    if (!user.password) {
      return res.status(500).json({ message: "User password not set" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user._id);

    user.password = undefined;

    res.json({
      user,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
