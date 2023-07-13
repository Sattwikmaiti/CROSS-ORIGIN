import React,{useState,useEffect} from 'react'
import "./Register.css"
import axios from "axios"
import {useNavigate}from 'react-router-dom'
const Register = () => {
  const navigate=useNavigate()
const[err,setErr]=useState("")
  const handleSubmit=(e)=>{

    e.preventDefault();


   


    try{
if(e.target[3].value!==e.target[4].value)
 setErr("Password does not match")
 else {

  axios.post("http://localhost:8000/api/users/register", {
    username: e.target[0].value,
    email: e.target[1].value,
    profileimagelink:e.target[2].value,
    isAdmin:false,
    password:e.target[3].value
  }).then(()=>{
    navigate('/login')
  }).catch((err)=>setErr(err.message))

 }
      
    }
    catch(error)
    {
      setErr(error.message)

    }
   
  }
  return (
    <div>
       <div   className="form">
      <form onSubmit={handleSubmit} >
        <div className="wrapper">
        <div className="input-container">
         
          <input type="text" name="uname" placeholder="UserName"required />
         
        </div>
        <div className="input-container">
          
          <input type="email" name="email" placeholder="Email" required />
         
        </div>
        <div className="input-container">
          
          <input type="text" name="image"  placeholder="Profile Picture Link"required />
         
        </div>
        <div className="input-container">
          
          <input type="password" name="pass" placeholder="Password"required />
          
        </div>
        <div className="input-container">
         
          <input type="password" name="pass" placeholder="Re-Enter Password" required />
          
        </div>
        {
          err &&  <div className="input-container">
         
         {err}
         
          
          </div> 
        }
        

        <div className="button-container input-container">
          <input type="submit" />
        </div>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Register
