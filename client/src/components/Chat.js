import React from 'react'
import '../styles/Chat.css'

const Chat = () => {

  return (
    <div className="Chat">
      
      <div className="messagecontainers">
        <div className="msgnavbar">
          <div className="profileimages">
                <img src="https://cdn.pixabay.com/photo/2023/01/21/15/16/ai-generated-7734340_1280.jpg" alt=""/>
          </div>
          <div className="profilename">
               Hermoine Janger
          </div>
        </div>
        <div className="chats">
          <div className="message sender">
            <div className="messageimage ">
         <img src="https://cdn.magicstudio.com/assets/photobooth-hero-images/10.jpg" alt="" />
            </div>
          <div className="text">
            Hi Hermy, Wanna Join CROSS ORIGIN ?

              </div>
          </div>
          <div className="message">
            <div className="messageimage receiver">
         <img src="https://cdn.pixabay.com/photo/2023/01/21/15/16/ai-generated-7734340_1280.jpg" alt="" />
            </div>
          <div className="text">
            Company Name Sounds Great. What is all about?

              </div>
          </div>
          <div className="message sender">
            <div className="messageimage ">
         <img src="https://cdn.magicstudio.com/assets/photobooth-hero-images/10.jpg" alt="" />
            </div>
          <div className="text">
           A Blend of Information ,Technology and lot more . Its a Open Source Project ,would like to see you in Github then.Will I send you the Github Repo?
           A Blend of Information ,Technology and lot more . Its a Open Source Project ,would like to see you in Github then.Will I send you the Github Repo?A Blend of Information ,Technology and lot more . Its a Open Source Project ,would like to see you in Github then.Will I send you the Github Repo?A Blend of Information ,Technology and lot more . Its a Open Source Project ,would like to see you in Github then.Will I send you the Github Repo?

              </div>
          </div>
          <div className="message receiver">
            <div className="messageimage ">
         <img src="https://cdn.pixabay.com/photo/2023/01/21/15/16/ai-generated-7734340_1280.jpg" alt="" />
            </div>
          <div className="text">
            Sure Mike, I am in . Will love to Contribute in it.Lets Make a Change in the World.

              </div>
          </div>
          
        </div>

        <div className="sendmessage">
          <input type="text" placeholder="Type a Message" /><i class='bx bx-send'></i>
        </div>

      </div>




      
    </div>
  )
}

export default Chat
