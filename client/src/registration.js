import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './signup.css'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from "axios"
const Signup =()=>{
    const[user,setuser] = useState({
		fname:'', lname:'', email:'',phone:'',address:'', password:''
	});
	
    let name,value;
    const userInput =(e)=>{
        name = e.target.name;
        value = e.target.value;
        setuser({...user,[name]:value})
    }
    const SignupUser = async(e)=>{
	  
		e.preventDefault();
		const {fname,lname,email,phone,address,password} = user;
		try{
            console.log("user:",user)

            // const response = await fetch('/api/registration',{
			// 	method:'POST',
			// 	headers:{
			// 		"Content-Type":"application/json"
			// 	},
			// 	body:JSON.stringify({
			// 		fname,lname,email,phone,address,password
			// 	})
			// });
            const response = await axios.post('/api/registration', {fname,lname,email,phone,address,password}
            )
			console.log(response);
            if(response.status == 200){
                toast.success("Your Profile Updated.",{position:'top-center'})
            }
		}catch(err){
			console.log(err);
			
		}

	}




    return(<>
    <header className="header nav" role="banner" aria-label="The Top">
  <div className="header__wrapper">
    <h1 className="header__logo">TheTOP</h1>
    <nav className="[ nav ] [ flow ]" aria-role="navigation">
      <ul className="nav__list" role="list">
        <li className="nav__item"><Link to={'/'}><a className="active" href="#">Home</a></Link></li>
        <li className="nav__item"><Link to={'/login'}><a href="#">Login</a></Link></li>
      
      </ul>
    </nav>
  </div>
</header>
      <div className="wrapper">
    <h1>Create Your Account</h1>

   
    <div className="form-container">
    <form>
      
        <div className="flex">
            <div className="flex-item">
          
                <div className="field-container">
                    <label for="full-name">First Name: <span className="required">*</span></label>
                    <input type="text" name="fname"    id="full-name" placeholder="Your full name" required="required" 
                         value={user.fname} onChange={userInput}
                    />             
                </div>
            
             
                <div className="field-container">
                    <label for="email">Email: <span className="required">*</span></label>
                    <input type="email" name="email" id="email" placeholder="Your email" required="required" 
                         value={user.email} onChange={userInput}
                    />
                </div>

            
                <div className="field-container">
                    <label for="confirm-email">Address: <span className="required">*</span></label>
                    <input type="text" name="address" id="confirm-email" placeholder="Address" required="required" 
                         value={user.address} onChange={userInput}
                    />
                </div>
                
            </div>
            <div className="flex-item">
                
                <div className="field-container">
                    <label for="contact-no">Last Name <span className="required">*</span></label>
                    <input type="tel" name="lname"  id="contact-no" placeholder="" required="required" 
                     value={user.lname} onChange={userInput} />
                </div>

         
                <div className="field-container">
                    <label for="passkey">Phone <span className="required">*</span></label>
                  
                    <input type="number" name="phone"   placeholder="Phone Number" required="required" 
                         value={user.phone} onChange={userInput}
                    />
                
                
                </div>

               
                <div className="field-container">
                    <label for="confirm-passkey"> password: <span className="required">*</span></label>
                   
                    <input type="password" name="password"  placeholder="password" required="required" 
                         value={user.password} onChange={userInput}
                    />
                    
                    
                  
                </div>
                
            </div>
        </div>
       
        <div className="center"><input type="submit" onClick={SignupUser} value="Register"/></div>
    </form><ToastContainer/>  
    </div>

</div>


    </>)
}
export default Signup;