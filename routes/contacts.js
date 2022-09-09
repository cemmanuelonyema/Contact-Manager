const express = require("express");
const router = express.Router();

/************************************************** */
// @http function:              Getting data from the server.
// @route                           Get /api/v1/contacts
// @desc                            Get all of a user's contacts
// @access                         Private

router.get("/", (req, res) => {
  res.json({ msg: "Get all contacts" });
});

/*************************************************** */
// @http function:              Sending data to the server.
// @route                           post /api/v1/contacts
// @desc                            Add a contact
// @access                         Private

router.post("/", (req, res) => {
  res.json({ msg: "Add a contact" });
});

/*************************************************** */
// @http function:              Updating data to the server.
// @route                           Put /api/v1/contacts
// @desc                            Update a user's contact
// @access                         Private

router.put("/:id", (req, res) => {
  res.json({ msg: "Update  contact " });
});

/*************************************************** */
// @http function:              Deleting data to the server.
// @route                           Delete /api/v1/contacts
// @desc                            Delete a user
// @access                         Private

router.delete("/:id", (req, res) => {
  res.json({ msg: "Delete a contact" });
});
module.exports = router;
