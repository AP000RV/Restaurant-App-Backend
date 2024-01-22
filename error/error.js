class ErrorHandler extends Error {
  constructor(message, statusCode) {
    // msg and statusCode are coming from Error Class (super class)
    super(message);
    this.statusCode = statusCode;
  }
}

//creating middleware to use above errorhandler
export const errorMiddleWare = (err, req, res, next) => {
  err.message = err.message || "Internal Server Error!";
  err.statusCode = err.statusCode || 500;

  return res.status(err.statusCode).json({
    success: false, // if there is any error then only this work is use so we have to stop that here from proceeding furthur...
    message: err.message,
  });
};

export default ErrorHandler;
