const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const router = express.Router();

const User = require("../models/User");
const config = require("config");

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
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //pull out  req fields
    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      //if user already exists, don't register and terminate
      if (user) {
        return res.status(400).json({ msg: "User already exists" });
      }

      //else register
      user = new User({
        //from the fields pulled out
        name,
        email,
        password,
      });

      // and hash the password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      //then save into the database
      await user.save();

      //and return the jwtToken
      //Object to send in the token
      const payload = {
        user: {
          id: user.id,
        },
      };

      //Generate a token
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 360000, //optional
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: "Server Error" });
    }
  }
);

module.exports = router;
