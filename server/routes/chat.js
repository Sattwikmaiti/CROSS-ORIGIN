const router = require("express").Router();
const User = require("../models/User");
const Chat = require("../models/chat");
const Text = require("../models/text");
router.post("/",async(req,res)=>{
console.log("chat api called")
    const text = new Text({
        senderid:req.body.senderid,
        sendername:req.body.sendername,
        message:req.body.message,
        
    })
   
    const endtoendchat1=new Chat({ 
        receiverid:req.body.receiverid,
        text:text


    })
    const endtoendchat2=new Chat({ 
        receiverid:req.body.senderid,
        text:text


    })


    //console.log("debug",req.body.senderid,req.body.receiverid)
    const senderuser = await User.findById(req.body.senderid);
   
    const receiveruser = await User.findById(req.body.receiverid);
    
    const chatsenderExists = senderuser.chats.find((chatId) => chatId.receiverid === req.body.receiverid);
    const chatreceiverExists = receiveruser.chats.find((chatId) => chatId.receiverid === req.body.senderid);
    
    try{
    if (chatsenderExists!=undefined&&chatreceiverExists!=undefined) {
      console.log("checked")
      senderuser.chats.map((chatId) => {if(chatId.receiverid === req.body.receiverid) {chatId.text.push(text)}},{new:true});
      receiveruser.chats.map((chatId) => {if(chatId.receiverid === req.body.senderid) chatId.text.push(text)},{new :true});
        //chatsenderExists.text.push(text);
        //chatreceiverExists.text.push(text);
       // res.status(200).json(senderuser)
       senderuser.markModified('chats');
       receiveruser.markModified('chats');
       await senderuser.save();
       await receiveruser.save()

      
    }else {
        console.log("chat not exists")
        senderuser.chats.push(endtoendchat1);
        receiveruser.chats.push(endtoendchat2);

        
    }

    console.log(senderuser)
    res.status(200).json(receiveruser);
     
    
}
catch(err)
{
    res.status(500).json(err.message)
}
   





}

)


module.exports = router;