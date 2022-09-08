const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
  //create a relationship with a particular user
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },

  //schema
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  contact_label: {
    type: String,
  },
  twitter: {
    type: String,
  },
  instagram: {
    type: String,
  },
  linkedIn: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("contacts", ContactSchema);
