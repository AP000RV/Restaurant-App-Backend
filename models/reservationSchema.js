import mongoose from "mongoose";
import validator from "validator";

const resevationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [2, "FirstName must contain atleast 2 characters"],
    maxLength: [30, "FirstName must contain atleast 30 characters"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [2, "LastName must contain atleast 2 characters"],
    maxLength: [30, "LastName must contain atleast 30 characters"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please provide a valid Email!"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "Phone number must contain atleast 10 digits"],
    maxLength: [11, "Phone number must contain atleast 10 digits"],
  },
  time: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
});

export const Reservation = mongoose.model("Reservation", resevationSchema);
// we'll export it in a diff way cuz our schema is being created by this...
