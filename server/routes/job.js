// const router = require("express").Router();
// const Job= require("../models/Job");
import express from "express";
import Job from "../models/Job.js";
const router = express.Router();
router.post("/post", async (req, res) => {
      
    const newJobs = new Job({
        createdby: req.body.createdby,
        description: req.body.description,
        link:req.body.link,
        categories:req.body.categories,
        views:0,


    });
  
    try {
      const savedJobs = await newJobs.save();
     // const {...others}=savedJobjsjs._doc
      //console.log(others)
      res.status(201).json(savedJobs);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.put("/update/:id", async (req, res) => {
    try {
      const todo = await Job.findById(req.params.id);
      //pass the created by from frontend 
      const { description, link, categories } = req.body;
      if (todo.createdby === req.body.createdby) {
        try {
          const updatedJob = await Job.findOneAndUpdate(
            { _id: req.params.id },
            { $set: { description, link, categories } },
            { new: true }
          );
          res.status(200).json(updatedJob);
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).json("You can update only your Job!");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });



router.put("/updatelikes/:id", async (req, res) => {
  
    const todo = await Job.findOneAndUpdate({_id: req.params.id},{new:true});
   todo.likes+=1;

      todo.save();
    
      res.json(todo);


});

router.put("/updateviews/:id", async (req, res) => {
  
  const todo = await Job.findOneAndUpdate({_id: req.params.id},{new:true});
 todo.views+=1;
 
    todo.save();
  
    res.json(todo);


});



//DELETE Job
router.delete("/:id", async (req, res) => {
  try {
    const todo = await Job.findById(req.params.id);
    //console.log(req.body.username)
    if (todo.username === req.body.username) {
     
      try {
        await Job.deleteOne({ _id: req.params.id });
        res.status(200).json("Job has been deleted...");
      } catch (err) {
        console.log(`You can delete only your Job! ${todo.username} and ${req.body.username}`)
        res.status(500).json(`You can delete only your Job! ${todo.username} and ${req.body.username}`);
      }
    } else {
    
      res.status(401).json(`You can delete only your Job! ${todo.username} and ${req.body.username}`);
    }
  } catch (err) {
  
    res.status(500).json(`You can delete only your Job! ${todo.username} and ${req.body.username}`);
  }
});

//GET Job
router.get("/:id", async (req, res) => {
  try {
    const todo = await Job.findById(req.params.id);
    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json(err);
  }
});

//multiple filter not working 

// ?user=john&?cat=music
router.get("/", async (req, res) => {
    //query looks for ? in router.get("/")
    const username = req.query.user;
    const catName = req.query.cat;
    
    try {
      let todo;
      if (username) {
        todo = await Job.find({ username }).sort({createdAt:1});
      } else if (catName) {
       // console.log( catName)
        var temp = new Array();
          temp = catName.split(","); // Convert comma-separated string to an array
        
       console.log(temp)
        //from categories array ...if inside it ..includes catname ...
        todo = await Job.find({
          categories: {
            $in:temp,
          },
        }).sort({createdAt:1})
      } else {
        // no category name no username ...fetch all Jobs 
        todo = await Job.find().sort({createdAt:-1})
      }
      res.status(200).json(todo);
    } catch (err) {
      res.status(500).json(err);
    }
  });

 // Required Correction in this route. Not Working Properly
  
  router.get('/all',async(req,res)=>{
    console.log("Hi,",req.query)
    try {
  await Job.createIndex({description:"text"});
     const searchText = req.query.t ;
     const projection = {
      _id: 0,
      createdby: 1,
    };
  
     const query = {$text: { $search:searchText}};
      
     const todos=await Job.find(query).project(projection);
      res.status(200).json();
    } catch (err) {
      res.status(500).json(err);
    }
  })




  export default router;