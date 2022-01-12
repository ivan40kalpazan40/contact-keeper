const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, ref: 'User' },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  type: { type: String, default: 'Personal' },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Contact = mongoose.model('Contact', ContactSchema);
module.exports = Contact;
