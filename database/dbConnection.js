import mongoose from "mongoose";

const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "Restraunt-app",
    })
    .then(() => {
      console.log("Database connected successfully!");
    })
    .catch((err) => {
      console.log(`Unable to connect, Error: ${err}`);
    });
};

export default dbConnection;
