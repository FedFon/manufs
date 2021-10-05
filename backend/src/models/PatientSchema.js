import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const PatientSchema = new Schema({
  firstName: {
    type: String,
    required: "Enter a first name",
  },
  lastName: {
    type: String,
    required: "Enter a last name",
  },
  email: {
    type: String,
    required: "Enter an email",
  },
  phone: {
    type: Number,
    required: "Enter a phone number",
  },
});
