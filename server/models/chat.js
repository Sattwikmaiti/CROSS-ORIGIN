const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {


    receiverid: { type: String, required: true,  },
    text :{type:Array,default:[]},
   
  },
  
);

module.exports = mongoose.model("chat", chatSchema);