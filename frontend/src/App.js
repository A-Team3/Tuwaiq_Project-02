import React from "react";
import SignIn from "./components/main/SignIn";
import SignUp from "./components/main/SignUp";
import Pag1 from "./components/main/Pag1";
import Pag2 from "./components/main/Pag2";
import Pag3 from "./components/main/Pag3";
import Home from "./components/main/Home";
import Questions from "./components/main/Questions";
import Header from "./components/navigation/Header";
import "./App.css";
import { Route, Routes, Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";





export default function App() {
  return (
    <div>

      <Header />
      <SignIn/>
      {/* <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Pag1" element={<Pag1 />} />
          <Route path="/Pag2" element={<Pag2 />} />
          <Route path="/Pag3" element={<Pag3 />} />
          <Route path="/Questions" element={<Questions />} />
        </Routes>

        <Outlet />
      </div> */}

      <Footer />
    </div>
  );
}

