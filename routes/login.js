const express = require("express");
const router = express.Router();

/*************************************************** */
// @http function:              Getting data from the server.
// @route                           Get /api/v1/login
// @desc                            Register a user
// @access                         Private

router.get("/", (req, res) => {
  res.json({ msg: "Get logged in user" });
});

/*************************************************** */
// @http function:              Sending data to the server.
// @route                           Post /api/v1/login
// @desc                            Register a user
// @access                         Public

router.post("/", (req, res) => {
  res.json({ msg: "log in user" });
});

module.exports = router;
