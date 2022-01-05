import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './signin.css'
import './home.scss'
import './signup.css'
import axios from 'axios'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useHistory } from 'react-router-dom'
const Signin = ()=>{
  const [email,setemail] = useState('');
  const[password,setpassword] = useState('');
  const hist = useHistory();

  const Loginuser =async(e)=>{
    e.preventDefault();
       
          try{
            const response = await axios.post('/api/login', {email,password} )
            console.log(response.status)
           
            if(response.status == 200){
              localStorage.setItem('loginuser',response.data.token)
              toast.success("Login Successfully.",{position:'top-center'})
              hist.push('/login/profile')
            }else{
              toast.error("Invalid user",{position:'top-right'})
            }
          }catch(err){
            console.log(err)
          }
  }

    return(<>

<header className="header nav" role="banner" aria-label="The Top">
  <div className="header__wrapper">
    <h1 className="header__logo">TheTOP</h1>
    <nav className="[ nav ] [ flow ]" aria-role="navigation">
      <ul className="nav__list" role="list">
        <li className="nav__item"><Link to={'/'}><a className="active" href="#">Home</a></Link></li>
        <li className="nav__item"><Link to={'/registration'}><a href="#">Registration</a></Link></li>
      
      </ul>
    </nav>
  </div>
</header>
       <div className="login-form">    
    <form action="" method="post">
		<div className="avatar"><i className="material-icons">&#xE7FF;</i></div>
    	<h4 className="modal-title">Login to Your Account</h4>
        <div className="form-group">
            <input type="text" name="email" className="form-control" placeholder="Email" required="required" 
              value={email} onChange={(e)=>setemail(e.target.value)}
            />
        </div>
        <div className="form-group">
            <input type="password" name="password" className="form-control" placeholder="Password" required="required" 
              value={password} onChange={(e)=>setpassword(e.target.value)}
            />
        </div>
        <div className="form-group small clearfix">
            <label className="checkbox-inline"><input type="checkbox"/> Remember me</label>
            <a href="#" className="forgot-link">Forgot Password?</a>
        </div> 
        <input type="submit" onClick={Loginuser} className="btn btn-primary btn-block btn-lg" value="Login"/>              
    </form> <ToastContainer/>			
    <div className="text-center small">Don't have an account? <a href="#">Sign up</a></div>
</div>

    </>)
}
export default Signin;