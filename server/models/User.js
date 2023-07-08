const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {


    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    profileimagelink: { type: String, default:"https://t4.ftcdn.net/jpg/01/39/64/23/360_F_139642301_uNZWVsW4ob2xJgY7s6fsTmCcjwcBk3GV.jpg" },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);