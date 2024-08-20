const mongoose = require("mongoose")

const EmployeeSchema = new mongoose.Schema(
  {
    Eid: { type: Number },
    firstname: { type: String },
    lastname: { type: String},
    email: { type: String},
    phone: { type: String}, // Change to String if you want to store it as a string
    address: { type: String},
  },
  {
    collection: "Employee",
  }
);

module.exports = mongoose.model("Employee",EmployeeSchema);