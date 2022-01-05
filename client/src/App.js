import React,{useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./home";
import Signup from './registration';
import Signin from "./login";
import Myprofile from "./profile";
const App =()=>{
 
  
  return(<>
 <Router>
   
   <Switch>

      <Route path="/"   exact component={Home}/>
      <Route path="/registration"   exact component={Signup}/>
      <Route path="/login"   exact component={Signin}/>
      <Route path="/login/profile"   exact component={Myprofile}/>
      
   </Switch>
  
   </Router>
                
  </>)
}

export default App;