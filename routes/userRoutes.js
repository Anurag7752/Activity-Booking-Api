const express = require("express");
const { registerUser, login } = require("../controllers/userController");
const router = express.Router();
const { body } = require("express-validator");

router.post(
  "/register",
  [
    body("name").isLength(),
    body("email").isEmail(),
    body("phone").isLength({ min: 10 }),
    body("password").isLength({ min: 6 }),
  ],
  registerUser
);

router.post("/login", login);

module.exports = router;
