import React, {useState} from "react";
import {Form ,Button,Card, Container,img}from "react-bootstrap";
// import {useNavigate} from 'react-router-dom';
import "./Signin.css";
 import swal from 'sweet-alert';
import axios from 'axios'
export default function SignIn() {
//   const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword,profile,img] = useState("");

    // const navigation = useNavigate();
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  axios
  .post('users/login',
 {
   email: email,
   password: password,

 }).then(res =>{
    console.log(res)
    if(res.data === 'User not found')
    ;
    //swal('Incorrect user name or password');
}).catch(err => {
console.log(err); 
 //swal('not correct') 
});
   }
  return (

  
  

   <div  className="main">
     
     <div className="sub-main">

     <div className= "img" >
       <div>
     <div className= "Container-img" >
       <img style={{width:"100px",height:"100px"}} src="https://cdn04.qudsn.co/thumb/w1110/uploads/2016/01/face.jpg" alt="profile"  className="name ">  
         
         </img>
         
    </div>


    </div>
     <div>

   <h1>SignIn</h1>
  <div> 
  <input type="text" placeholder="user name" className="name1" />
  <img style={{width:"20px",height:"20px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVvBT4W7EoXYk-xWQvsgoMQQ87xddefgYTCIvZz7vwPCSR9gzD2gbow_OnEeTEwRaCdBc&usqp=CAU" alt="email"></img>
  

  </div>
  <div>
   
  <input type="text" placeholder="password"  className="name2"/>
  <img style={{width:"20px",height:"20px",marginBottom:"100px"}} src="https://www.freeiconspng.com/uploads/lock-icon-png-14.png" alt="password"/>
   
  
  
     </div>
     <button style={{width:"80px",height:"50px",marginTop:100,backgroundColor:"gray"}}>SignIn</button>
     </div>
    </div>

    
    
   </div>
   
     </div>   
  );
}