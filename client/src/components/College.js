import React from 'react';
import "../styles/College.css";
import axios from "axios";

import colleges from "../collegeoutput.json";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

const College = () => {
   
  const [data, setData] = React.useState([]);
  const [search, setSearch] = React.useState("Select a college  and Click Me");

  const onClick = () => {
    try {
      console.log("clicked");
      axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyDTKI7W_oIt7dmuo5UImQiWqeGBPR-4pvA&cx=462124cef8db04c98&q=${search}`)
        .then((re) => {
        setData(re.data.items);
          
          console.log(re.data);
        });
    } catch (err) {
      console.error(err);
    }
  };

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    
    console.log("Searcehd",string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log("Hovered",result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    setSearch(item.collegeName)
    onClick()
    console.log("Selected",item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {
    return (
      <>
       
        <div style={{ display: 'block', textAlign: 'left' }}>{item.collegeName}</div>
      </>
    )
  }
  return (
    <>

<div className="thesearch">
  <div className="1">
  <button className="hitme"  data-toggle="modal" data-target="#exampleModalLong" onClick={onClick}>
         Search
        </button>
  </div>
  
        <div style={{ width: 400 }}>
          <ReactSearchAutocomplete
           items={colleges}
           formatResult={formatResult}
           fuseOptions={{ keys: ["collegeName"] }} // Search on both fields
           resultStringKeyName="collegeName" // String to display in the results
           onSearch={handleOnSearch}
           onHover={handleOnHover}
           onSelect={handleOnSelect}
           onFocus={handleOnFocus}
          
           styling={{
            height: "34px",
            border: "1px solid darkgreen",
            borderRadius: "4px",
            backgroundColor: " white",
            boxShadow: "none",
            hoverBackgroundColor: "lightgreen",
            color: "darkgreen",
            fontSize: "12px",
            fontFamily: "Courier",
            iconColor: "green",
            lineColor: "lightgreen",
            placeholderColor: "darkgreen",
            clearIconMargin: "3px 8px 0 0",
            zIndex: 2,
          }}
          />
        </div>
            </div> 
       
    <div className="allcollege ">
          
        


<div class="modal fade bd-example-modal-xl  bg-dark" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog modal-xl bg-dark" role="document">
    <div class="modal-content  bg-dark">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Top 10 Results </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      {data?.map((item,i) => {
                return (<div>
            <div className="box">
                <div className="title">
                  {i+1})  {item.title}
                </div>
                <div className="links">
                    <a href={item.link} target="_blank" rel="noreferrer">{item.link}</a>
                </div>
                <div className="desc">
                   <p>{item.snippet}</p> 
                </div>
            </div>


                </div>)



            })}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
     
      
      {colleges.map((college) => (
        <div
          className="college"
          onClick={() => setSearch(college.collegeName)}
        >
          {college.collegeName}
        </div>
      ))}



    </div>
    </>
  );
};

export default College;
