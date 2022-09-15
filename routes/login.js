const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const auth = require("../middleware/auth");

/*************************************************** */
// @http function:              Getting data from the server.
// @route                           Get /api/v1/login
// @desc                            Get logged in user
// @access                         Private

router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

/*************************************************** */
// @http function:              Sending data to the server.
// @route                           Post /api/v1/login
// @desc                            LOG in a user
// @access                         Public

router.post(
  "/",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); //400=bad request
    }

    const { email, password } = req.body;

    try {
      //Check if existing matching email
      let user = await User.findOne({ email });
      //if none return
      if (!user) {
        return res.status(400).json({ msg: "Invalid Credentials" });
      }
      //if existing, check if password matched
      const isMatch = await bcrypt.compare(password, user.password);
      //if false, return
      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid Credentials" });
      }
      //if true send obj to the token
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
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
