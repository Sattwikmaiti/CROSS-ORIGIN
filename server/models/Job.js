const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {


    createdby: { type: String, required: true,  },
    description: { type: String, required: true, },
    link: { type: String, required: true, unique: true},
    categories :{type:Array,required:true},
    views: {type:Number,required:true},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);