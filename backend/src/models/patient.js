const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: Number,
  comments: [{ body: String, date: Date }],
});

module.exports = mongoose.model("Patient", PatientSchema);
