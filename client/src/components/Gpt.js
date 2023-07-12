import React,{useState,useEffect} from 'react'
import SmartToyIcon from '@mui/icons-material/SmartToy';
import axios from "axios"
import "../styles/Gpt.css"
import CharacterAnimation from './CharacterAnimation';
import TextToSpeech from "./TextToSpeech.js"
//npm i react-text-transition
const Gpt = () => {
  
  const [text,settext]=useState("");
  const[ans,setans]=useState("Mentalhealth Mentalhealth Mentalhealth Mentalhealth Mentalhealth Mentalhealth Mentalhealth Mentalhealth Mentalhealth Mentalhealth Mentalhealth Mentalhealth Mentalhealth Mentalhealth Mentalhealth Mentalhealth Mentalhealth Mentalhealth Mentalhealth Mentalhealth Mentalhealth Mentalhealth Mentalhealth Mentalhealth Mentalhealth Mentalhealth Mentalhealth Mentalhealth Mentalhealth Mentalhealth Mentalhealth Mentalhealth Mentalhealth Mentalhealth Mentalhealth Mentalhealth Mentalhealth Mentalhealth Mentalhealth ssues can affect people of all educational backgrounds, ethnicities, professions, social status, age, or gender, and providers can play a critical role in educating the public about their impacts, what they look like, and the mental health solutions that are available. Modern wearables and smartphones can report an extensive amount of relevant patient data for clinical purposes, and apps are available to track a person's mood and cognition. Stigma and a lack of mental healthcare regulations are also challenges that must be addressed to ensure that people will seek treatment for their mental health disorders.ental health issues can affect people of all educational backgrounds, ethnicities, professions, social status, age, or gender, and providers can play a critical role in educating the public about their impacts, what they look like, and the mental health solutions that are available. Modern wearables and smartphones can report an extensive amount of relevant patient data for clinical purposes, and apps are available to track a person's mood and cognition. Stigma and a lack of mental healthcare regulations are also challenges that must be addressed to ensure that people will seek treatment for their mental health disorders.ental health issues can affect people of all educational backgrounds, ethnicities, professions, social status, age, or gender, and providers can play a critical role in educating the public about their impacts, what they look like, and the mental health solutions that are available. Modern wearables and smartphones can report an extensive amount of relevant patient data for clinical purposes, and apps are available to track a person's mood and cognition. Stigma and a lack of mental healthcare regulations are also challenges that must be addressed to ensure that people will seek treatment for their mental health disorders.");
const handlesubmit = async()=>{
  const {data}=await axios.post("http://localhost:8000/api/question",{question:text})
  setans(data.response.text)
  console.log(data)
}
  return (
    <div className="gpt">
 <div className="wrappertext">
     
        <TextToSpeech text={ans}/>
       
     
      </div>
      <div className="inputtext">
        <div className="text">
        <input type="text" placeholder="Enter your text here" onChange={(e)=>settext(e.target.value)}  />
         <button onClick={handlesubmit}>Submit</button>

        </div>
        
         <div className="answer" style={{color:'white'}}>
      <CharacterAnimation text={ans}/>
     </div>
      </div>
     
      
      
      
    </div>
  )
}

export default Gpt
