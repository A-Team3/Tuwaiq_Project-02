import React from 'react';
import { Route } from 'react-router-dom';
import Singin from './components/main/Singin'

const App = () => {
	return <div>
<Route/>
		<Singin/>
	</div>
};

import Footer from "./components/footer/Footer";

import "./App.css";
// import {  Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      {/* <Header />
      <div>
      <Routes>
          <Route path="Body" element={<Body />} />
           <Route path="ChatLive" element={<ChatLive />} />
          <Route path="SingUp" element={<SingUp/>}/>
          <Route path="SingIn" element={<SingIn/>}/>
          <Route path="Rooms" element={<Rooms/>}/>
          
        </Routes>
      </div> */}
      <Footer/>
    </div>
    
  );
}
