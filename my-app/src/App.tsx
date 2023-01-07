import React from 'react';
import logo from './logo.svg';
import { useState, useEffect } from "react";
import './App.css';
import { json } from 'stream/consumers';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Details from './components/Details';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
     <Routes>
     <Route path="/" index element={<Home />}/>
     <Route path="home" index element={<Home />}/>
     {/* <Route path="details" index element={<Details />}/> */}
     <Route path='details/:id' element={<Details />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App;
