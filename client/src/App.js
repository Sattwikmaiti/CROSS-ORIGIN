import React from 'react'

import Home from './components/Home.js'
import Login from './components/Login.js'
import Register from './components/Register.js'
import Profile from './components/Profile.js'
import Job from './components/Job.js'
import Gpt from './components/Gpt.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
 
} from "react-router-dom";

const App = () => {
  return (
    <div>
       <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/register" element={<Register />}/>
        <Route exact path="/profile" element={<Profile />}/>
        <Route exact path="/job" element ={<Job />}/>
        <Route exact path="/gpt" element ={<Gpt/>}/>
       
      </Routes>
    </Router>
      
    </div>
  )
}

export default App
