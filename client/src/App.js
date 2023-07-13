import React from 'react'

import Home from './components/Home/Home.js'
import Login from './components/Login/Login.js'
import Register from './components/Login/Register.js'
import Profile from './components/Profile/Profile.js'
import Job from './components/Job/Job.js'
import Gpt from './components/Gpt/Gpt.js'
import College from './components/College/College.js'
import Hackathon from './components/Hackathon/Hackathon.js'
import Map from "./components/Map/Map.js"
import Chat from "./components/Chat/Chat.js"
import CrossDonation from './components/Donation/CrossDonation.js'
import Post from './components/Posts/Post.js'
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
        <Route exact path="/map" element={<Map />}/>
        <Route exact path="/chat" element={<Chat />}/>
        <Route exact path="/donation" element={<CrossDonation />}/>
        <Route exact path="/post" element={<Post />}/>
      </Routes>
    </Router>
      
    </div>
  )
}

export default App
