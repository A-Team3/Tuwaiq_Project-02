import React from 'react';
import Singin from './components/main/Singin'
import Header from "./components/navigation/Header";
import "./App.css";
import {  Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <div>
    <Route/>
		<Singin/>
    <Header />
      <Footer/>
    </div>
    
  );
}