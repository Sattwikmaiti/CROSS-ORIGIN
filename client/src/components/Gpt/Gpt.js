import React,{useState,useEffect} from 'react'
import SmartToyIcon from '@mui/icons-material/SmartToy';
import axios from "axios"
import "./Gpt.css"
import Robot from "../images/robo.jpg"
import CharacterAnimation from './CharacterAnimation';
import TextToSpeech from "./TextToSpeech.js"
//npm i react-text-transition
const Gpt = () => {
  const [loading ,setloading]=useState(false)
  
  const [text,settext]=useState("");
  const[ans,setans]=useState("");
const handlesubmit = async()=>{
  setloading(true)
  const {data}=await axios.post("http://localhost:8000/api/question",{question:text})
  setans(data.response.text)
  setloading(false)
}
  return (
    <div className="gpt">
 <div className="wrappertext">
     
        <TextToSpeech text={ans}/>
       
     
      </div>
      
      <div className="inputtext">
        
      <div className="text">
        <img src="https://pbs.twimg.com/profile_images/1000789274202071040/zmjmTICm_400x400.jpg" alt=""/>
        <input type="text" placeholder="Enter your Problem Here" onChange={(e)=>settext(e.target.value)}  />
         <div onClick={handlesubmit}><i class='bx bx-send'></i> </div>

        </div>

        <div className="answerrobo">
          <div className="image">
          <img src={Robot}  alt=""/>
          </div>
          <div className="status">
          {
   loading && (<><div>Thinking. . .</div></>)
         }
      {
        loading===false && (<><div><i class='bx bxs-like'></i> <i class='bx bxs-dislike' ></i></div></>)   
      }
          </div>
        
        </div>
        <p className="answerrobo2">
          Response : 
          </p>
         <div className="answer" style={{color:'white'}}>

      <CharacterAnimation text={ans}  />

     </div>
      </div>
     
      
      
      
    </div>
  )
}

export default Gpt
