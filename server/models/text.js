import mongoose from "mongoose";
const textSchema = new mongoose.Schema(
  {


    senderid: { type: String, required: true,  },
    sendername :{type:String,required:true},
    message:{type:String,required:true},

   
  },
{
    timestamps: true
}
  
);


const Chat = mongoose.model("text", textSchema);

export default Chat;