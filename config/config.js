const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  // http://localhost:3001/api/?token=
  const token = req.header("x-auth-token");

  if (!token) {
    return res
      .status(401)
      .json({ message: "You are not allowed to view this page!" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET);

    req.user = decoded.user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Your token is invalid!" });
  }
};
