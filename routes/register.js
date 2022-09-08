const express = require("express");
const { check, validationResult } = require("express-validator/check");
const router = express.Router();

const User = require("../models/User");

/*************************************************** */
// @http function:              Sending data to the server.
// @route                           POST /api/v1/register
// @desc                            Register a user
// @access                         Public

router.post(
  "/",
  [
    check("name", "name is required").notEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 8 or more characters"
    ).isLength({ min: 8 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.json({ res: req.body });
  }
);

module.exports = router;
