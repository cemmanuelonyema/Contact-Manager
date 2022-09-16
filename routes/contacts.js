const express = require("express");
const router = express.Router();

const { check, validationResult } = require("express-validator");
const Contact = require("../models/Contact");
const auth = require("../middleware/auth");

/************************************************** */
// @http function:              Getting data from the server.
// @route                           Get /api/v1/contacts
// @desc                            Get all of a user's contacts
// @access                         Private

router.get("/", auth, async (req, res) => {
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
    auth,
    [
      check("name", "Name is required").notEmpty(),
      check("email", "Email is required").notEmpty(),
      check("phone", "Phone Number is required").notEmpty(),
    ],
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
        name: name ? name : "",
        email: email ? email : "",
        phone: phone ? phone : "",
        label: label ? label : "",
        instagram: instagram ? instagram : "",
        twitter: twitter ? twitter : "",
        linkedIn: linkedIn ? linkedIn : "",
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

router.put("/:id", async (req, res) => {
  console.log(req.body);
  const { name, email, phone, label, instagram, twitter, linkedIn } = req.body;

  const updatedContact = new Contact({
    _id: req.params.id,
    name: name ? name : "",
    email: email ? email : "",
    phone: phone ? phone : "",
    label: label ? label : "",
    instagram: instagram ? instagram : "",
    twitter: twitter ? twitter : "",
    linkedIn: linkedIn ? linkedIn : "",
  });

  try {
    const contact = await Contact.updateOne(
      { _id: req.params.id },
      updatedContact
    );
    console.log(contact);

    res.status(201).json(contact);
  } catch (err) {
    res.json({ err: err.response.msg });
  }

  //   if (name) userContact.name = name;
  //   if (email) userContact.email = email;
  //   if (phone) userContact.phone = phone;
  //   if (label) userContact.label = label;
  //   if (instagram) userContact.twitter = twitter;
  //   if (twitter) userContact.instagram = instagram;
  //   if (linkedIn) userContact.linkedIn = linkedIn;

  //   try {
  //     // get contact id to be updated
  //     let contact = await Contact.findById(req.params.id);
  //     if (!contact) return res.status(404).json({ msg: "Contact not found" });

  //     // Make sure user owns contact
  //     if (contact.user.toString() !== req.user.id) {
  //       return res.status(401).json({ msg: "Not authorized" });
  //     }
  //   } catch (err) {

  //   }

  //   res.json({ msg: "Update  contact " });
});

/*************************************************** */
// @http function:              Deleting data to the server.
// @route                           Delete /api/v1/contacts
// @desc                            Delete a user
// @access                         Private

router.delete("/:id", async (req, res) => {
  try {
    await Contact.deleteOne({ _id: req.params.id });
    res.status(200).json({ msg: "Deleted successfully" });
  } catch (err) {
    res.json({ err: err.response.msg });
  }

  //   res.json({ msg: "Deleted a contact successfully" });
});
module.exports = router;
