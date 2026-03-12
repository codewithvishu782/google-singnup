const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const {
  getProfile,
  updateProfile,
} = require("../controller/profileController");

router.get("/", protect, getProfile);
router.put("/", protect, upload.single("profilePic"), updateProfile);

module.exports = router;
