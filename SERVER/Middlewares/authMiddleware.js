const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const auth = asyncHandler(async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      const token = req.headers.authorization.replace("Bearer ", "");

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const user = await User.findById(decoded.id).select("-password");

      req.user = user;

      next();
    } catch (error) {
      return res.status(401).json({ message: "User is not authorized" });
    }
  } else {
    return res.status(401).json({ message: "Not authorized" });
  }
});

module.exports = auth;
