const jwt = require("jsonwebtoken");
const userregister = require("../model/usermodel");
 
const auth = async(req,res,next)=>{
     
    try{
        const token = req.header("Authorization");
        const verifyUser = jwt.verify(token,process.env.Token_KEY);
        const user =  await userregister.findOne({_id:verifyUser._id});
          req.token = token; //logout
          req.user = user; // for logout
         next();
    }catch(err){
        return res.status(500).json({msg:err.message});
    }
}
module.exports = auth;