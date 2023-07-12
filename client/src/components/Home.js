import React,{useEffect,useState} from 'react'
import axios from "axios"
import {Link} from "react-router-dom"
import AppBar from '@mui/material/AppBar';
import logo from "../images/logos.jpeg"
import "../styles/Home.css"
import SmartToyIcon from '@mui/icons-material/SmartToy';
const Home = () => {
  
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

    <div className="hero">

      <div className="section1">
      
      <AppBar position="static" color="grey" className="mobilenav" enableColorOnDark onClick={toggleSidebar}>
        <div className="logo">
          <div className="div">
          <i class='bx bx-menu'></i>
            </div> 
            <div className="div">
           <h4> CROSS ORIGIN</h4>
            </div>
   </div>
     
      

        </AppBar>
        
        

      </div>


        <div className="section2">

        <div className="section2_1">

          

          
          <div className="moto">
          <h3>Cross Origin</h3>
            <p>
              <div className="div">
              "Cross Origin is driven by a powerful vision to bridge the gap between students and valuable job/internship opportunities they often miss out on.We, a  dynamic platform that gathers comprehensive information about ongoing hackathons. Our goal is to provide students with easy access to a centralized hub of hackathon opportunities from various sources. By curating and updating a database of hackathons, we ensure that students stay informed about the latest events and can participate in the ones that align with their interests and skills. We understand the significance of hackathons in fostering creativity, innovation, and collaboration, which are essential for personal and professional growth. Through our efforts, we aim to empower students by connecting them to these exciting opportunities and helping them explore their potential in a competitive and rapidly evolving technological landscape. We are Open-Source Organization and we are always open to new ideas and contributions. "
          
          
              </div>
           
            </p>

 
          </div>


          </div>


        </div>

        <div className="section2_2">

          <div className="it">
          <i class='bx bxl-github'></i>

          </div>
          <div className="it">
          <i class='bx bxs-envelope' ></i>

          </div>
          <div className="it">
          <i class='bx bxl-linkedin-square'></i>

          </div>

        </div>






























      </div>
    
    
    </div>
  )
}

export default Home
