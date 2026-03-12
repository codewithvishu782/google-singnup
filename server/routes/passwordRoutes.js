const express = require("express");

const authMiddleware = require("../middleware/authMiddleware.js");

const { updatePassword } = require("../controller/passwordController.js");

const router = express.Router();

router.put("/", authMiddleware, updatePassword);

module.exports = router;
