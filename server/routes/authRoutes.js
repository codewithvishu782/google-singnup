const express = require("express");
const router = express.Router();
const passport = require("passport");

const { signup, login } = require("../controller/authController.js");
const generateToken = require("../utils/generateToken.js");

router.post("/signup", signup);
router.post("/login", login);

/* Google Login */

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
);

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    const token = generateToken(req.user._id);

    res.redirect(`http://localhost:5173/dashboard?token=${token}`);
  },
);

module.exports = router;
