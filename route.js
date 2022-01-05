const express = require('express')
const path = require('path');
const User = require('./model/usermodel');
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt= require('jsonwebtoken');
const auth = require("./middleware/auth")

router.post('/registration',async(req,res)=>{
    try{
      console.log(req.body)
    
  
      const {fname,lname,email,phone,address,password} = req.body;
    
      if(fname && lname && email && phone && address && password){
           const userdata = new User({
                 fname,lname,email,phone,address,password
            });
            
            const token = await userdata.generateAuthToken();   //this midleware to generate token
   
            res.cookie("jwt",token,{                     
             expires:new Date(Date.now() + 70000),
             httpOnly:true
            });
            console.log(userdata)
           await userdata.save();
          
           res.json({msg:"Registration Successfully !"})
        }else{
            res.status(401).json({msg:"all filed required"})
        }
  
    }catch(err){
        return res.status(500).json({msg:err.message})
    }
  });

  router.post('/login',async(req,res)=>{
    try{
          const email = req.body.email;
          const pass = req.body.password;
          console.log(email , pass)
          const correctEmail = await User.findOne({email:email});
          if(!correctEmail) return  res.json({msg:"This email not exist!"})
          
          const correctPassword = await bcrypt.compare(pass,correctEmail.password);
     
        if(correctPassword && correctEmail){
            res.cookie("jwt",correctEmail.tokens[0].token,{                                      
                expires:new Date(Date.now() + 60000),
                httpOnly:true                      
              });
              let token = correctEmail.tokens[0].token;
              res.json({msg:"Login  Successfully !",token})
        }

    }catch(err){
        return res.status(500).json({msg:err.message})
    }   
   });

   router.get('/userinfo',auth,async(req,res)=>{
       try{
           
        const uinfo = await User.findById(req.user.id).select('-password')
          res.json(uinfo)
       }catch(err){
        return res.status(500).json({msg:err.message})
       }
    });
    router.get('/logout',async(req,res)=>{
      try{
          res.clearCookie('jwt');
         res.json({msg:'logout'})
         console.log("ok")
      }catch(err){
       return res.status(500).json({msg:err.message})
      }
   });


  module.exports = router;
//   res.cookie('refreshtoken', refresh_token, {
                
// 61d4272dc6738620ba9e491c
//     path: "http://localhost:6000/api/getdata",
//      httpOnly: true,
//      maxAge: 7*24*60*60*1000 
//  })