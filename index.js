const dotenv = require("dotenv");
dotenv.config({path:'./config.env'});
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 6000
app.use(express.json());
app.use(bodyParser.json());
require('./db/connection');


app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' })); 
app.use(cors());



app.use("/api",require('./route'))
app.use(express.urlencoded({extended:false}));


// if(process.env.NODE_ENV == "production"){
//     app.use(express.static("client/build"));
    
// }


app.listen(PORT,()=>{
    console.log("Running server on PORT ",PORT );
})