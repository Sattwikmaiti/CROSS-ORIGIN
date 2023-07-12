import * as React from 'react';
import "../styles/Hackathon.css"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Chip from '@mui/material/Chip';
import Select from '@mui/material/Select';
import Data from "../Hackathon.json"
export default function Hackathon() {
  const [filter, setfilter] = React.useState('');

  const handleChange = (event) => {
    setfilter(event.target.value);
  };
const filteredData = Data.filter((data) => {
if(filter==='' ||filter==='All') {return data}
else {
  if(data.category.includes(filter)) {
    return data
  }
 
}


})


  return (
    
      <>
      <div className="page">

      
      <div className="categorys">
        <InputLabel id="demo-simple-select-label" >Select Category to filter</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter}
         
          onChange={handleChange}
          
        >
          <MenuItem value={"All"}>All</MenuItem>
          <MenuItem value={"Hackathon"}>Hackathon</MenuItem>
          <MenuItem value={"ReactJS"}>ReactJS</MenuItem>
          <MenuItem value={"Project"}>Project</MenuItem>
          <MenuItem value={"Challenge"}>Challenge</MenuItem>
        </Select>
        </div>
        <div className="result">
          { 

         filteredData.map((data) => {

          return(<div className="element">
              <div className="img">
                <img src={data.image} alt="img" />
              </div>
              
            <div className="title">{data.name}</div>
             
              <div className="category">
              {
        data.category.map((e)=>{
          
            return <Chip label={e} className="categories"/>
        })
    }
              </div>
              <div className="link">
                <a href={data.link} target="_blank" rel="noreferrer">{data.link}</a>
              </div>



          </div>)
         }
         )

                   
         


          }
        </div>
        </div>
        </>
    
    
  );
}
