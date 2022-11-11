import mongoose from "mongoose";

const Connect = async (URL) => {
  try {
    await mongoose
      .connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
      .then(),
      console.log("MongoDB connected successfully");
  } catch (error) {
    console.log(`Error while connecting to DB :- ${error.message}`);
  }
};
export default Connect;
