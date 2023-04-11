import React from 'react'
import {useState} from "react"
import { useDispatch, useSelector } from "react-redux";

import { UserRegisterAction } from "../Redux/Todordx/UserAction";

export default function Register() {
  const dispatch = useDispatch();

   const [UserData, setUserData] = useState({
name : "xxx " ,
email : "xx@gamil.com " ,
password : "123" ,
   }) 


  return  <>
    <div class="container">
         <div class="row">
           <div class="col-sm-6 offset-sm-3">
             <div class="card">
              <div className='m-2'>
                <label for="name" class="form-label ">Name</label>
                <input  
                 value={UserData.name}
                 onChange={e => setUserData({...UserData  , name : e.target.value})}
                 type="text" class="form-control" id="name" placeholder="Enter Your Name"/>
              </div>
              <div className='m-2'>
                <label for="name" class="form-label ">Email</label>
                <input
                  value={UserData.email}
                  onChange={e => setUserData({...UserData  , email : e.target.value})}
                 type="text" class="form-control" id="name" placeholder="Enter Your Name"/>
              </div>
              <div className='m-2'>
                <label for="name" class="form-label ">Password</label>
                <input 
                 value={UserData.password}
                 onChange={e => setUserData({...UserData  , password : e.target.value})}
                type="text" class="form-control" id="name" placeholder="Enter Your Name"/>
              </div>
              <div className='m-3'>
                <button onClick={ e => dispatch(UserRegisterAction(UserData))} type="button" class="btn btn-success">Register</button>
             </div>
             </div>
           </div>
         </div>
       </div>
  
  </>
}
