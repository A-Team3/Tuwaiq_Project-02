import React, {useState,useEffect} from "react";
import SignIn from "./components/main/SignIn";
import SignUp from "./components/main/SignUp";
import Pag1 from "./components/main/Pag1";
import Pag2 from "./components/main/Pag2";
import Pag3 from "./components/main/Pag3";
import Home from "./components/main/Home";
import Questions from "./components/main/Questions";
import Header from "./components/navigation/Header";
import People from "./components/main/People";
import "./App.css";
import { Route, Routes, Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Success from "./components/main/Success";
import Finle from "./components/main/Finle";




export default function App() {
   const [username, setUserName] = useState("");
  // const [bloodGroup, setBloodGroup] = useState("");

  // useEffect(() => {
  //   fetch("/users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const user = data.find(
  //         (elem) => elem.id === parseInt(sessionStorage.getItem("userId"))
  //       );
  //       setUserName(user.firstName);
  //       console.log(username);
  //       setBloodGroup(user.bloodGroup);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  return (
    <div>
      <Header userName = {username} />

       <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn setUserName = {setUserName} />} />
          <Route path="/Pag1" element={<Pag1 />} />
          <Route path="/Pag2" element={<Pag2 />} />
          <Route path="/Pag3" element={<Pag3 />} />
          <Route path="/Questions" element={<Questions />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<People/>} />
          <Route path="/Success" element={<Success/>} />
          <Route path="/Finle" element={<Finle/>} />
        </Routes>
        <Outlet />
      </div> 

      <Footer />
    </div>
  );
}

