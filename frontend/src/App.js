import React from 'react';
import SignIn from './components/main/SignIn';
import SignUp from './components/main/SignUp'
import Header from "./components/navigation/Header";
import "./App.css";
import {  Route, Routes, Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from './components/main/Home';

export default function App() {
  return (
    <div>
    <Header />
    <div>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="SignUp" element={<SignUp/>}/>
        <Route path="SignIn" element={<SignIn/>}/>
        
        
      </Routes>
      <Outlet/>
    </div>
    <Footer/>
  </div>
  
);
}
