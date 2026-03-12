const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const passport = require("passport");

const connectDB = require("./config/db.js");
require("./config/passport.js");
const authRoutes = require("./routes/authRoutes.js");
const profileRoutes = require("./routes/profileRoutes.js");
const passwordRoutes = require("./routes/passwordRoutes.js");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use("/uploads", express.static("uploads"));

app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/password", passwordRoutes);

app.get("/", (req, res) => {
  res.send("Server Running Successfully 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
