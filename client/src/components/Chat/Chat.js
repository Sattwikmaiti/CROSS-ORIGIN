import React from 'react'
import "./Chat.css"
const Chat = () => {
  const data=[
    {
      "sender":"admin",
      "time":"12:00 PM",
      
      "message":"Hi bro,Whats up"
    },
    {
      "sender":"receiver",
      "time":"12:00 PM",
      "message":"I am fine,tell about your startup Cross Origin"
    },
    {
      "sender":"admin",
      "time":"12:00 PM",
      "message":"Its a startup which is going to be a big company in future."
    },
    {
      "sender":"receiver",
      "time":"12:00 PM",
      "message":"Wow,thats great.I would like to contribute here"
    },{

      "sender":"receiver",
      "time":"12:00 PM",
      "message":"Also Send me the link of your website"

    },{

      "sender":"admin",
      "time":"12:00 PM",
      "message":"Wow ,thats great.I would love to have you onboard"
    },{

      "sender":"admin",
      "time":"12:00 PM",
      "message":"Shall I mail you formally ?"
    }
    ,{

      "sender":"receiver",
      "time":"12:00 PM",
    "message":"Yea Sure ..Sounds Good.Do You live in India ? Last time ,we met it was a wonderful place .Like to work again there,with the briliant ecosystem"
    }
  ]

  const receipients=[

  { 

    "name":"Mehul",
    "profileimage":"https://www.storypick.com/wp-content/uploads/2022/12/16.jpeg",
    "lastmessage":"Yea ,Enjoying working in your Startup",
    "lasttime":"12:00 PM"
  },
  {
    "name":"Rana",
    "profileimage":"https://images1.wionews.com/images/wion/900x1600/2023/6/27/1687858707308_Screenshot20230627150817.png",
    "lastmessage":"Completed with the task . Uptodate.Give me the next set of task",
    "lasttime":"12:00 PM"
  },
  {
    "name":"Sachin",
    "profileimage":"https://cdn.pixabay.com/photo/2023/01/28/20/24/ai-generated-7751691_960_720.jpg",
    "lastmessage":"Cool Stuff,this weekend",
    "lasttime":"12:00 PM"
  },
  {
    "name":"Puja",
    "profileimage":"https://img.freepik.com/premium-photo/natural-real-person-portrait-closeup-woman-girl-female-outside-nature-forest-artistic-edgy-cute-pretty-face-ai-generated_590464-133619.jpg?w=2000",
    "lastmessage":"Yea ,Enjoying working in your Startup",
    "lasttime":"12:00 PM"
  },
  {
    "name":"Seetal",
    "profileimage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOh85CMe8FV-NiMOiHYFKAICR3M4ITko5itFNRU7xc0cW-FgHcdcHaRF3V8JM-d_kWPCU&usqp=CAU",
    "lastmessage":"Nice to work with you ,champ",
    "lasttime":"12:00 PM"
  },
  { 

    "name":"Mehul",
    "profileimage":"https://www.storypick.com/wp-content/uploads/2022/12/16.jpeg",
    "lastmessage":"Yea ,Enjoying working in your Startup",
    "lasttime":"12:00 PM"
  },
  ]
  return (
    <div className="chatroom">

      <div className="personchat">
        <div className="navperson">
          <div className="navimage">
            <img src="https://www.storypick.com/wp-content/uploads/2022/12/16.jpeg" alt="profileimage" />
          </div>
           <div className="navname">
              Mehul Gupta
           </div>
        </div>
        <div className="chatboxx"> 
        {
          data.map((item)=>{
                return (
                  <>
                  <div className={`messagewrapper + ${item.sender}`}>
                  <div className="navimage">
            {item.sender==="admin"?<img src="https://www.storypick.com/wp-content/uploads/2022/12/16.jpeg" alt="profileimage" />:<img  src="https://img.freepik.com/premium-photo/natural-real-person-portrait-closeup-woman-girl-female-outside-nature-forest-artistic-edgy-cute-pretty-face-ai-generated_590464-133619.jpg?w=2000" alt=""/>}
          </div><div className={`messagebox + ${item.sender}`}>

<div className="messagetexts">
  {item.message}
  <div className="messagetime">
 {item.time}
</div>
</div>

</div>

                  </div>
                  
                  </>

               )

           })
        }
        

          </div>
          <div className="send">
            <input type="text" placeholder="Type your Message " />
            <i class='bx bx-send'></i>
          </div>



      </div>

      <div className="allchats">
        <p>All Chats</p>


        {
          receipients.map((item)=>{
            return (<div className="receipient">
              <div className="recepdetail">
                <div className="recepimage"> 
                <img src={item.profileimage} alt ="profileimage" />

                </div>
                <div className="recepname">
                  {item.name}

                </div>
                </div>
                <div className="lastmessage">
                     <div className="message">
                        {item.lastmessage}
                     </div>
                     <div className="time">
                        {item.lasttime}

                     </div>
                </div>

            </div>)
          })
        }

      </div>
      
    </div>
  )
}

export default Chat
