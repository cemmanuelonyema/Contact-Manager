const express = require("express");
const router = express.Router();

/*************************************************** */
// @http function:              Sending data to the server.
// @route                           POST /api/v1/register
// @desc                            Register a user
// @access                         Public

router.post("/", (req, res) => {
  res.json({ msg: "Register a user" });
});

module.exports = router;
