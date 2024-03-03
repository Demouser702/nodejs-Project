const { default: mongoose } = require("mongoose");
const contactSchema = new mongoose.Schema({
  name: {
    type: String,

    minlength: 1,
    maxlength: 50,
  },
  email: {
    type: String,

    minlength: 1,
    maxlength: 50,
  },
  phone: {
    type: String,

    minlength: 8,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
});

const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;
