import React from 'react'
import "../styles/Job.css"
import axios from "axios"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Body from "../images/body.jpg"
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import FeedPost from './FeedPost.js';
const Job = () => {

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      color:"white",
      backgroundColor:"black"

      
    },
  },
};

const names = [
  'Software Engineer',
  'Web Developer',
  'Full Stack Developer',
  'Frontend Developer',
  'Backend Developer',
  'Mobile App Developer',
  'Data Scientist',
  'DevOps Engineer',
  'UI/UX Designer',
  'Product Manager',
  'JavaScript',
  'Python',
  'Java',
  'C#',
  'Ruby',
  'PHP',
  'Swift',
  'Go',
  'TypeScript',
  'HTML/CSS'
];
const notify = () => toast("Job is Posted!");
const [personName, setPersonName] = React.useState([]);
const [filter,setFilter]=useState([])
const [inputValue, setInputValue] = useState('');
const [inputValueLink, setInputValueLink] = useState('');
const handleChange = (event) => {
  const {
    target: { value },
  } = event;
  setPersonName(
    // On autofill we get a stringified value.
    typeof value === 'string' ? value.split(',') : value,
  );
};

const handleChanges = (event) => {
  const {
    target: { value },
  } = event;
  setFilter(
    // On autofill we get a stringified value.
    typeof value === 'string' ? value.split(',') : value,
  );
};

const handleChangeDesc = (event) => {
  const value = event.target.value;
    const characterLimit = 100;

    if (value.length <= characterLimit) {
      setInputValue(value);
  }
};
const handleChangeLink = (event) => {
  const value = event.target.value;
    const characterLimit = 100;

    if (value.length <= characterLimit) {
      setInputValueLink(value);
  }
};

const handlepost=async()=>
{  
  console.log('clicked');
  try{
    const res=await axios.post("http://localhost:8000/api/job/post",{categories:personName,description:inputValue,link:inputValueLink,createdby:"HAriPodo"})
    console.log(res);
    setPersonName([]);
    setInputValue(''); 
    notify()
    setInputValueLink('');                                
  }
catch(err){
  console.log(err);
}
}
const [data, setData] = useState([]);

const [allpost,setallpost]=useState([])
useEffect(()=>
{
 // console.log(filter)

  axios.get(`http://localhost:8000/api/job/?cat=${filter}`).then((res)=>setData(res.data)).catch((err)=>console.log(err))

},[filter,data])




const [text,settext]=useState("")
const search =async()=>{
  try {
    // Example array of category names
   
   const response = await fetch(`http://localhost:8000/api/job/search/${text}`);
   
   setData(response.data);
 } catch (error) {
   console.error('Error fetching data:', error);
 }



}

  return (

    <div className="job">
       <ToastContainer />
      <div className="createpost">
          
          <div className="left">
          <div className="image">
          <img src="https://www.storypick.com/wp-content/uploads/2022/12/16.jpeg" alt="" />
          </div>
          <div className="post">
            <button className="btn btn-primary" disabled={inputValueLink===''||inputValue===''||personName.length===0}  onClick={handlepost}>Create Post</button>
          </div>
            

          </div>
          <div className="right">
            
              
            
            <div className="dropdown">
<h6>Tag Categories</h6>
<FormControl sx={{ m: 1, width: 300 }}>

<Select
labelId="demo-multiple-checkbox-label"
id="demo-multiple-checkbox"
multiple
value={personName}
onChange={handleChange}
input={<OutlinedInput label="Tag" />}
renderValue={(selected) => selected.join(', ')}
MenuProps={MenuProps}
>
{names.map((name) => (
<MenuItem key={name} value={name} >
<Checkbox checked={personName.indexOf(name) > -1} />
<ListItemText primary={name} />
</MenuItem>
))}
</Select>
</FormControl>

</div>
            <div className="postlink" >
            <h6>Post Link</h6>
            <TextField sx={{color:'white'}} id="filled-basic"  variant="filled"  value={inputValueLink} onChange={handleChangeLink}/>

            </div>
            <div className="description">
            <h6>Enter Description</h6>
            <TextField style={{color:'white'}}
     
      multiline
      maxRows={1}
      value={inputValue}
      onChange={handleChangeDesc}
         className="descriptiontext"
         
    />
    <div style={{width:'4rem',margin:'1rem'}}>   {
      
      inputValue.length
    }
      /100 Characters</div>
  
            </div>

          </div>
        

      </div>

<div className="wrappertotal">
<div className="searchbar">
  <div className="search">
  <input type="text" placeholder="Search Here by Keyword..."  onSubmit={search} onChange={(e)=>settext(e.target.value)}/>
  </div>
  
  <div className="filter">
    <div className="filterbycategory">

<FormControl sx={{ m: 1, width: 300 }}>
<InputLabel id="demo-multiple-checkbox-label" >Search By Categories</InputLabel>
<Select
labelId="demo-multiple-checkbox-label"
id="demo-multiple-checkbox"
multiple
value={filter}
onChange={handleChanges}
input={<OutlinedInput label="Tag" />}
renderValue={(selected) => selected.join(', ')}
MenuProps={MenuProps}
>
{names.map((name) => (
<MenuItem key={name} value={name} >
<Checkbox checked={filter.indexOf(name) > -1} />
<ListItemText primary={name} />
</MenuItem>
))}
</Select>
</FormControl>

    </div>
  </div>
  
</div>
<div className="allposts">



{
  data?.map((item)=>{
          
    return (

     <>
     <FeedPost props={item} />



     
     
     
     </>

    )


  })
}


</div>



</div>

   

     



      
    </div>
  )
}

export default Job
