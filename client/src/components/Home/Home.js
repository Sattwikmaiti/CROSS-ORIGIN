import React,{useEffect,useState,useRef} from 'react'
import axios from "axios"
import {Link} from "react-router-dom"

import logo from "../images/ll.png"
import "./Home.css"
import { Reveal, Tween } from 'react-gsap';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import TextTransition from 'react-text-transition';
import presets from 'react-text-transition';
const Home = () => {

const TEXTS = ['World', 'Universe', 'Earth', 'Origin']
const [index, setIndex] = React.useState(0);

React.useEffect(() => {
  const intervalId = setInterval(
    () => setIndex((index) => index + 1),
    1000, // every 3 seconds
  );
  return () => clearTimeout(intervalId);
}, []);

    const [users,setusers]=useState()
   
    useEffect(() =>{

    axios.get(`http://localhost:8000/api/users/userdetails/${localStorage.getItem('user')}`).then((res)=>{setusers(res.data)}).catch((err)=>console.log(err))

    },[users])



    
  const [closed, setClosed] = useState(true);

  
  const toggleSidebar = () => {
    setClosed(!closed);
  };



    
  return (
   
      
    <div className="body">
       <nav className={`sidebar  ${closed ? 'close' : ''}`}>
      <div className="logo_items flex">
        <span className="nav_image">
          <img src={users?.user.profileimagelink} onClick={toggleSidebar} alt="logo_img"  />
        </span>
        <span className="logo_name">{users?.user.username}</span>
        
        <i className="bx bx-x" id="sidebar-close" onClick={toggleSidebar}></i>
      </div>
      <div className="menu_container">
        <div className="menu_items">
          <ul className="menu_item">
            <div className="menu_title flex">
              <span className="title item">Dashboard</span>
              <span className="line"></span>
            </div>
            <li className="item">
              <Link to="/" className="link flex">
                <i className="bx bx-home-alt"></i>
                <span>Home</span>
              </Link>
            </li>
            <li className="item">
              <Link to="/profile" className="link flex">
                <i className="bx bx-cog"></i>
                <span>Profile</span>
              </Link>
            </li>
          </ul>
          <ul className="menu_item">
            <div className="menu_title flex">
              <span className="title item">CROSSORIGIN</span>
              <span className="line"></span>
            </div>
            <li className="item">
              
              <Link to="/job" className="link flex">
                <i className="bx bxs-briefcase-alt-2"></i>
                <span>Job / Internships</span>
              </Link>
            </li>
            <li className="item">
              <Link to="/hackathon" className="link flex">
              <i class='bx bxl-dev-to'></i>
                <span>Edu-a-Ton</span>
              </Link>
            </li>
           
            <li className="item">
              <a href="/college" className="link flex">
              <i class='bx bxs-graduation'></i>
                <span>Collge Connect</span>
              </a>
            </li>
            <li className="item">
              
              <Link to="/map" className="link flex" >
                
              <i class='bx bxs-map-pin' ></i>
                <span>Cross Map</span>
              </Link>
            </li>
            <li className="item">
              
              <Link to="/chat" className="link flex" >
                
                <i class='bx bxs-message-alt-dots'></i>
                <span>CrossOrigin Chat</span>
              </Link>
            </li>
            <li className="item">
              
              <Link to="/gpt" className="link flex" >
                
                <i class='bx bx-flashing'><SmartToyIcon/></i>
                <span>AI CHAT</span>
              </Link>
            </li>
            

          </ul>
          
        </div>
       
      </div>
    </nav>

    <div className="heros">


    <div class="containers">
 
  <Tween to={{ x: '1500px', display:'none' }} duration={8} ease="back.out(1.7)">
  <div class="overlay first"/>
   
  </Tween>
  
  

  <Tween to={{ x: '1500px',display:'none'  }} duration={10} ease="back.out(1.7)">
  <div class="overlay second"></div>
   
  </Tween>
  <Tween to={{ x: '1500px',  display:'none'}} duration={12} ease="back.out(1.7)">
  <div class="overlay third"></div>
   
  </Tween>
  





<img src={logo} alt="" class="product-img"/>

<div class="product-text">
<Tween from={{ y: '-100px', opacity:0}} duration={2} ease="back.out(1.7)"  to={{ y: '50px', opacity:0.8 }}>
<h1 class="product-title">crossorigin.</h1>
  </Tween>
   
</div>

<div class="product-desc">
<Reveal repeat>
  <Tween from={{ opacity: 0 }} duration={2} to={{opacity:1}}>
    <p>Connect Across   <TextTransition springConfig={presets.wobbly} >
    {TEXTS[index % TEXTS.length]}
      </TextTransition>
 with</p>
  </Tween>
</Reveal>
    
   
</div>

<div class="size">
    <ul>
        <span></span>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</div>



<div class="bottom-right left-button">
    <ul>
        <li><i class='bx bxl-github'></i></li>
        <li><i class='bx bxl-gmail' ></i></li>
        <li><i class='bx bxl-linkedin-square' ></i></li>
    </ul>
</div>


</div>



        




























      </div>
    
    
    </div>
  )
}

export default Home
