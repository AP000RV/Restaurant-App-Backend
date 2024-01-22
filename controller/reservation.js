import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, phone, time, date } = req.body; // Want these many values from frontend...
  if (!firstName || !lastName || !email || !phone || !time || !date) {
    return next(
      new ErrorHandler("Please provide full details for reservation!", 400)
    );
  }
  try {
    await Reservation.create({ firstName, lastName, email, phone, time, date });
    res.status(201).json({
      success: true,
      message: "Reservation Sent Successfully!",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const ValidationErrors = Object.values(error.errors).map(
        (err) => err.message
      ); //Error Messages Extraction: it extracts error messages from each property of the errors object within the error object. It assumes that the errors object has properties with message attributes.

      return next(new ErrorHandler(ValidationErrors.join(" , "), 400)); // It returns a new instance of an ErrorHandler class (presumably defined elsewhere in the code) with the concatenated error messages as the first argument and a status code of 400 (Bad Request) as the second argument. The next function is then called with this ErrorHandler instance, indicating that this is an error and should be passed to the next error-handling middleware.
    }
    return next(error);
  }
};
