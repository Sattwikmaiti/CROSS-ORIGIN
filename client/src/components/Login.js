import React,{useState,useEffect} from 'react'
import "../styles/Register.css"
import axios from "axios"
const Login = () => {
const[err,setErr]=useState("")
const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
const handleSubmit = async (e) => {


  e.preventDefault();
  try {
    const res= await axios.post("http://localhost:8000/api/users/login", {  
      username:username,
      password:password

    });
    localStorage.setItem("user",res.data._id);
    console.log(res.data)
    window.location.replace("/");
    
  } catch (err) {

    setErr(err.message)
  }
};
  return (
    <div>
       <div   className="form">
      <form onSubmit={handleSubmit} >
        <div className="wrapper">
        
        {
          err &&  <div className="input-container">
         
         {err}
         
          
          </div> 
        }
        <div className="input-container">
         <input
        type="text"
       
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      </div>
      <div className="input-container">
      <input
        type="password"
        
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      </div>
      <div className=" button-container input-container">
      <button  className="input" onClick={handleSubmit}>Login</button>
      </div>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Login


