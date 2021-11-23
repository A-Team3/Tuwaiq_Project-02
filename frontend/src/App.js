import React from 'react';
import SingUp from './components/main/SignUp'
import Header from "./components/navigation/Header";
import "./App.css";
import {  Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import SignIn from './components/main/signIn';

export default function App() {
  return (
    <div>
    <Route/>
		<SingUp/>
    <SignIn/> 
    <Header />
      <Footer/>
    </div>
    
  );
}