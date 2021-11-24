import React from 'react';
import SignIn from './components/main/SignIn';
import SignUp from './components/main/SignUp';
import Header from "./components/navigation/Header";
import "./App.css";
import {  Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from './components/main/Home';

export default function App() {
  return (
    <div>
    <Route/>
    <SignIn/>
 
    <Header />
    {/* <SignUp/> */}
    {/* <Home/> */}
      <Footer/>
    </div>
    
  );
}