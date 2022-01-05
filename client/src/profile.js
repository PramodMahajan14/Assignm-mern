import React, { useEffect, useState } from "react"
import './signup.css'
import './profile.css'
import axios from 'axios'
import { Link } from "react-router-dom"
import Cookies from 'js-cookie';
import { useHistory } from "react-router-dom";

let tokens =0;
const Myprofile =()=>{
    const [user,setuser] = useState({});
    const hist = useHistory()
    const token = localStorage.getItem('loginuser')
    console.log(token)
    const userdata = async()=>{
        try{  
             const res = await axios.get('/api/userinfo',{
               headers: {Authorization: token}});
               setuser(res.data)
        }catch(err){
            console.log(err)
        }
    }
 
       
     const logout =async()=>{
         try{
             const res = await axios.get('/api/logout');
              console.log(res)
              localStorage.removeItem('loginuser')
              hist.push('/login');
              console.log("it ok")
         }catch(err){
             console.log(err)
         }
     }
     
    useEffect(()=>{
        if(token){
            userdata();
            tokens++;
          }else{
        hist.push('/login');
          }
    })  
    return(<>
    <header className="header nav" role="banner" aria-label="The Top">
  <div className="header__wrapper">
    <h1 className="header__logo">TheTOP</h1>
    <nav className="[ nav ] [ flow ]" aria-role="navigation">
      <ul className="nav__list" role="list">

        <li className="nav__item"><a href="#" onClick={logout}>Logout</a></li>
      </ul>
    </nav>
  </div>
</header>

<div className="page-content page-container" id="page-content" style={{marginTop:'10rem',width:'100%'}}>
    <div className="padding">
        <div className="row container d-flex justify-content-center" >
            <div className="col-xl-6 col-md-12">
                <div className="card user-card-full">
                    <div className="row m-l-0 m-r-0">
                        <div className="col-sm-4 bg-c-lite-green user-profile">
                            <div className="card-block text-center text-white">
                                <div className="m-b-25"> <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image" /> </div>
                                <h6 className="f-w-600">Myprofile</h6>
                                
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="card-block">
                                <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Email</p>
                                        <h6 className="text-muted f-w-400">{user.email}</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Phone</p>
                                        <h6 className="text-muted f-w-400">{user.phone}</h6>
                                    </div>
                                </div>
                                <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Address : {user.address}</h6>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">First Name</p>
                                        <h6 className="text-muted f-w-400">{user.fname}</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Last Name</p>
                                        <h6 className="text-muted f-w-400">{user.lname}</h6>
                                    </div>
                                </div>
                                <ul className="social-link list-unstyled m-t-40 m-b-10">
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i className="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i className="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i className="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>)
}
export default Myprofile;