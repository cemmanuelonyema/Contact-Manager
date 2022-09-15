const express = require("express");
const router = express.Router();

const { check, validationResult } = require("express-validator");
const Contact = require("../models/Contact");

/************************************************** */
// @http function:              Getting data from the server.
// @route                           Get /api/v1/contacts
// @desc                            Get all of a user's contacts
// @access                         Private

router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

/*************************************************** */
// @http function:              Sending data to the server.
// @route                           post /api/v1/contacts
// @desc                            Add a contact
// @access                         Private

router.post(
  "/",
  [
    check("name", "Name is required").notEmpty(),
    check("email", "Email is required").notEmpty(),
    check("phone", "Phone Number is required").notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, label, instagram, twitter, linkedIn } =
      req.body;

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        label,
        instagram,
        twitter,
        linkedIn,
        user: req.user.id,
      });

      const contact = await newContact.save();
      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

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
