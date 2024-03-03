const mongoose = require("mongoose");

// userModel

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: String,
  avatar: String,
  // role: {
  //   type: String,
  //   enum: ["admin", "faculty", "student", "visiter"],
  //   required: true,
  // },
});

const userModel = mongoose.model("register_data", userSchema);

module.exports = userModel;
