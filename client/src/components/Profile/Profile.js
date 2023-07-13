import React ,{useState,useEffect}from 'react'
import "./Profile.css"
import { ToastContainer, toast } from 'react-toastify';
import { Chip } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import Box from '@mui/material/Box';
import RedeemIcon from '@mui/icons-material/Redeem';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import banner from "../images/banner.jpg"
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';


const Profile = () => {
  
  

    const handleSubmit = async (e) => {
      const notify = () => toast("Profile is Updated!");

        e.preventDefault();
        try {
        await axios.put(`http://localhost:8000/api/users/updateuserdetails/${localStorage.getItem('user')}`, {  
            username:username,
            password:password,
            email:email,
            profilename:profilename,
            profileimagelink:profileimagelink,
      
          });
         // localStorage.setItem("user",res.data._id);
         notify()
         // console.log(res.data)
         
          
        } catch (err) {
          notify()
          
          console.log(err)
        }
      };
    const [users,setusers]=useState()
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [profileimagelink, setProfileimagelink] = useState('');
  const [profilename, setProfilename] = useState('');
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {setOpen(true);}
    const handleClose = () => setOpen(false);
    useEffect(() =>{

    axios.get(`http://localhost:8000/api/users/userdetails/${localStorage.getItem('user')}`).then((res)=>{
       //console.log(res.data.user)
    setusers(res.data)
    console.log(res.data.user)
    setProfilename(res.data.user.profilename);
    setUsername(res.data.user.username);
    setEmail(res.data.user.email);
    setPassword(res.data.originalPassword);
    setProfileimagelink(res.data.user.profileimagelink);
    console.log(password)

}).catch((err)=>console.log(err))

    },[])

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
      
      
      
  return (
    <div>
       
       

        <div className="profile">
            <div className="profiledetails">

            <div className="profilebanner">
                <img src={banner} alt="" />
                </div>
              <div className="profileimage">
             
              <img src={users?.user.profileimagelink} alt="" />
              </div>
                
                

            </div>

            <div className="profiledetails username">

                USERNAME : {users?.user.username}
            </div>
            <div className="profiledetailsinfo">
              <div className="leftwrapper">
              <div className="profilename">
             {users?.user.profilename} 
             </div>
              <div className="edit">
            <i class='bx bxs-edit' onClick={handleOpen}></i>
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box  sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update Details
          </Typography>
         
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <form onSubmit={handleSubmit} >
        <div className="wrapper">
        
       
        <div className="input-container">
         <input
        type="text"
       
        placeholder="ProfileName"
        value={profilename}
        onChange={(e) => setProfilename(e.target.value)}
      />
      </div>
      <div className="input-container">
        
      <input
        type="text"
       
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      </div>
      <div className="input-container">
        
        <input
          type="text"
         
          placeholder="Profile Image Link"
          value={profileimagelink}
          onChange={(e) => setProfileimagelink(e.target.value)}
        />
        </div>
        <div className="input-container">
        
        <input
          type="text"
         
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
      <div className=" button-container input-container">
      <button  className="input" onClick={handleSubmit}>Update</button>
      <ToastContainer />
      </div>
        </div>
      </form>
          </Typography>
        </Box>
      </Modal>
            </div>
            <div className="desc">
            Whereas disregard and contempt for human rights have resulted
            Cloud Computing and Data Analytics @ Google | Cloud Track Lead @ Women Who Code Cloud | I empower women to excel in their Tech Careers | All opinions are my own.
            Cloud Computing and Data Analytics @ Google | Cloud Track Lead @ Women Who Code Cloud | I empower women to excel in their Tech Careers | All opinions are my own.
            <p>
            <Chip label="Follow" variant="outlined" color="primary"/>
            </p>
            
            </div>
                 
              </div>
             
                <div className="rightwrapper">
                <div className="profileemail">
             {users?.user.email}
            </div>
            <div className="userstats">
              
            <div className="contributions stat">
            
                {users?.user.contributions.length+10} Contributions
                
                <Divider/>
             
            </div>
            
              <div className="followers stat">
              
                {users?.user.followers.length+18} Followers
                

                <Divider/>
              
            </div>
           
              <div className="contributions stat">
               
                {users?.user.savedarticles.length+2} Saved Articles
               
                <Divider  />
               
              </div>
            
              <div className="crosspoints stat">
              
        
        {users?.user.savedarticles.length+users?.user.savedarticles.length +users?.user.followers.length+10} CrossPoints
      
               
      <Divider/>
              </div>
              <div className="redeem stat">
              <Fab variant="extended">
        <RedeemIcon sx={{ mr: 1 }} />
       Cross Swags
      </Fab><Divider/>
              </div>
            
            </div>
              
                </div>
             
            
            </div>
          
            
            

            
  


           


           
        </div>
      
    </div>
  )
}

export default Profile
