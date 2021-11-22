import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Form ,Button }from "react-bootstrap";
//import {Link} from"react-router-dom";
import "./main.css";
 function Singin(){
   return(
     
     <div style={{textAlign:"center",marginLeft:"45%",width:"200px"}}>
       <div><h1>You Need Login</h1></div>
<Form dir-align="center">
<Form.Group className="mb-3" controlId="formBasicFirstName">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="firstname" placeholder="Enter first name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicLastName">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="lastname" placeholder="Enter Last Name" />
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicAge">
    <Form.Label>Age</Form.Label>
    <Form.Control type="age" placeholder="Enter Age" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicNumberPhone">
    <Form.Label>Number Phone:</Form.Label>
    <Form.Control type="numberphone:" placeholder="Enter Number Phone:" />
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicCity">
    <Form.Label>City</Form.Label>
    <Form.Control type="City" placeholder="Enter City" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPlatoon">
    <Form.Label>Platoon</Form.Label>
    <Form.Control type="platoon" placeholder="Enter platoon" />
  </Form.Group>
  
  {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

     </div>
   )
 }
 export default Singin;
// class Singin extends Component {
//   handleSubmit = (e) => {
//     e.preventDefault();
//     const data = {
//       firstname:this.firstname,
//          lastname:this.lastname,
//          email:this.email,
//          numberphone:this.numberphone,
//          age:this.age,
//          city:this.city,
//          platoon:this.platoon,
     
//     };
    
//       }

//     }
  
//   render() 
//     return (
//       <div>
       
//         <div className="container" >
//         <div className="row" >
//         <div className="col" >
//         <div className="col-10" >
       
          
//             <form className="form" onSubmit={this.handleSubmit}>
//               <h3>sing in</h3>

//               <input className="input"
//                 type="text"
//                 placeholder="Enter You First Name"
//                 onChange={(e) => (this.firstname = e.target.value)}
//               />
//                 <input className="input"
//                 type="text"
//                 placeholder="Enter You Last Name"
//                 onChange={(e) => (this.lastname = e.target.value)}
//               />
//                 <input className="input"
//                 type="text"
//                 placeholder="Enter You Email"
//                 onChange={(e) => (this.email = e.target.value)}
//               />
//               <input className="input"
//                 type="num"
//                 placeholder="Enter You NumberPhone"
//                 onChange={(e) => (this.numberphone = e.target.value)}
//               />
//                 <input className="input"
//                 type="num"
//                 placeholder="Enter You Age"
//                 onChange={(e) => (this.age = e.target.value)}
//               />
//                 <input className="input"
//                 type="text"
//                 placeholder="Enter You  City"
//                 onChange={(e) => (this.city = e.target.value)}
//               />
//                 <input className="input"
//                 type="text"
//                 placeholder="Enter You  Platoon"
//                 onChange={(e) => (this.platoon = e.target.value)}
//               />
//               <input className="input"
//                 type="text"
//                 placeholder="Enter You  Platoon"
//                 onChange={(e) => (this.platoon = e.target.value)}
//               />
          
//               <button> <Link to="/mein"/> log in </button>
//             </form>
//           </div></div> </div>
          
// </div>
//           <br/>
//           <br/>
//           <br/>
        
        
       
//         </div>
//     );



