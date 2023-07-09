import React ,{useState,useEffect}from 'react'
import "../styles/Profile.css"
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import Box from '@mui/material/Box';
import {useNavigate,Link} from "react-router-dom"
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const Profile = () => {
  const navigate=useNavigate()
  

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
       
        <div className="back">
            <p>
            <Link to="/"> <i class='bx bx-left-arrow-alt '></i></Link></p> Back To home
        </div>
        

        <div className="profile">
            <div className="profiledetails">
                <img src={users?.user.profileimagelink} alt="" />

            </div>

            <div className="profiledetails">
                USERNAME : {users?.user.username}
            </div>
            <div className="profiledetails">
                PROFILENAME : {users?.user.profilename}
            </div>
            <div className="profiledetails">
            EMAIL : {users?.user.email}
            </div>

            <div className="profiledetails">
              <div className="contributions">
                {users?.user.contributions.length} Contributions
              </div>
            </div>
            <div className="profiledetails">
              <div className="followers">
                {users?.user.followers.length} Followers
              </div>
            </div>
            <div className="profiledetails">
              <div className="contributions">
                {users?.user.savedarticles.length} Saved Articles
              </div>
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
            


           
        </div>
      
    </div>
  )
}

export default Profile
