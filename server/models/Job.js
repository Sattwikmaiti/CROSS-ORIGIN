import mongoose from "mongoose";
/*
{JSON
   "createdby":"Sattwik",
   "link":"https://salesforce.wd12.myworkdayjobs.com/External_Career_Site",
   "description":"A salesforce Initiative ",
   "categories":["Frontend","Backend"],
    "views":0,
    "likes":0


}



*/
const JobSchema = new mongoose.Schema(
  {


    createdby: { type: String, required: true,  },
    description: { type: String, required: true, },
    link: { type: String, required: true, unique: true},
    categories :{type:Array,required:true,default:[]},
    views: {type:Number,default:0},
    likes:{type:Number,default:0},
  },
  { timestamps: true }
);


const Chat = mongoose.model("Job", JobSchema);

export default Chat;