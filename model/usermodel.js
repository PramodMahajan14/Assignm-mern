const mongoose= require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("../route")
const schemauser = new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        trim:true
    },
    lname:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email id alredy exist"],
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid mail");
            }
        }
    },
    phone:{
        type:Number,
        min:10,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    },
    password:{
        required:true,
        type:String
    },
        tokens:[{
            token:{
                type:String,
                require:true
            }
        }]
})
//generating token for Authentication purpose =>jsonwebtoken
schemauser.methods.generateAuthToken = async function(){
    
   try{                                           //#++++++++++++++++++++++++++++++++++++++# =>token
    const token = jwt.sign({_id:this._id.toString()},process.env.Token_KEY);
    this.tokens = this.tokens.concat({token:token});
    await this.save();
    return token;
   }catch(err){
        console.log(err)
    return res.status(500).json({msg:err.message})
   
   }
}
//applying hashing algorithm for security purpose=>bcryptjs
schemauser.pre("save",async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10);
     
    }
    next();
})

const User = new mongoose.model("User",schemauser);
module.exports = User;