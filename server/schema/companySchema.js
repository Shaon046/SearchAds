import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    require: true,
  },
  url: {
    type: String,
    require: true,
  },
});

const Company = mongoose.model("company", companySchema);

export default Company;
