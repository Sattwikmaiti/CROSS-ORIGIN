const router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const CryptoJS = require("crypto-js");

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      jwt.verify(token, process.env.JWT_SEC, (err, user) => {
        if (err) res.status(403).json("Token is not valid!");
        req.user = user;
        next();
      });
    } else {
      return res.status(401).json("You are not authenticated!");
    }
  };
  const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.id === req.params.id || req.user.isAdmin) {
        next();
      } else {
        res.status(403).json("You are not alowed to do that!");
      }
    });
  };
  
  const verifyTokenAndAdmin = (req, res, next) => {
      verifyToken(req, res, () => {
          //console.log(req.user)
        if (req.user.isAdmin) {
          next();
        } else {
          res.status(403).json("You are not alowed to do that..Here !");
        }
      });
    };


    router.get('/all',async(req,res)=>
    {   try{
        const users=await User.find();
        res.status(200).json(users)
    } catch(err){
        res.status(500).json(err)
    }
    });


    router.post("/register", async (req, res) => {
      
        const newUser = new User({
          username: req.body.username,
          profilename:req.body.profilename,
          email: req.body.email,
         profileimagelink:req.body.profileimagelink,
         isAdmin:false,
         password:req.body.password,

        });
      
        try {
          const savedUser = await newUser.save();
         // const {...others}=savedUser._doc
          //console.log(others)
          res.status(201).json(savedUser);
        } catch (err) {
          res.status(500).json(err);
        }
      });

     

      router.post('/login', async (req, res) => {
        try {
          const user = await User.findOne({
            username: req.body.username,
          });
      
          if (!user) {
            return res.status(401).json('Wrong User Name');
          }
      
          
          const originalPassword =user.password;
          const inputPassword = req.body.password;
      
          if (originalPassword !== inputPassword) {
            return res.status(401).json('Wrong Password');
          }
      
          const accessToken = jwt.sign(
            {
              id: user._id,
              isAdmin: user.isAdmin,
            },
            process.env.JWT_SEC,
            { expiresIn: '3d' }
          );
      
          const { password, ...others } = user._doc;
          console.log(accessToken)
          return res.status(200).json({ ...others, accessToken });
        } catch (err) {
          return res.status(500).json(err);
        }
      });
      
    router.get('/userdetails/:id',async(req,res)=>
    {
      const user=await User.findById(req.params.id);

     
       res.json({ user: user, originalPassword: user.password });
    });
    router.delete("/delete/:id",  async (req, res) => {
        try {
          await User.findByIdAndDelete(req.params.id);
          res.status(200).json("User has been deleted...");
        } catch (err) {
          res.status(500).json(err);
        }
      });

      router.put("/updateuserdetails/:id", async (req, res) => {
        
      
        try {
       

          const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
              $set: req.body
              
            },
            { new: true }
          );
      console.log(updatedUser);
          res.status(200).json(updatedUser);
        } catch (err) {
          res.status(500).json(err);
        }
      });
      
   
    
    
    
module.exports = router;