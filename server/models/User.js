const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {

  //you can not change username ,but can change profile name
    username: { type: String, required: true, unique: true },
    profilename:{type:String,required:true,},
    email: { type: String, required: true, unique: true },
    profileimagelink: { type: String, default:"https://t4.ftcdn.net/jpg/01/39/64/23/360_F_139642301_uNZWVsW4ob2xJgY7s6fsTmCcjwcBk3GV.jpg" },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    contributions:{type:Array,default:[]},
    followers:{type:Array,default:[]},
    savedarticles:{type:Array,default:[]},
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);