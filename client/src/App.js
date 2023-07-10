import React from 'react'

import Home from './components/Home.js'
import Login from './components/Login.js'
import Register from './components/Register.js'
import Profile from './components/Profile.js'
import Job from './components/Job.js'
import Gpt from './components/Gpt.js'
import College from './components/College.js'
import Hackathon from './components/Hackathon.js'
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
        <Route exact path="/college" element ={<College/>}/>
        <Route exact path="/hackathon" element ={<Hackathon/>}/>
      </Routes>
    </Router>
      
    </div>
  )
}

export default App
