import React from 'react'
import './App.css'
import Navbar from './components/navBar/index'
import Home from "./page/Home/index"
import Programming from "./page/Programming/index"
import {  Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Programming" element={<Programming />} />
          </Routes>
{/* 
      <section className='main-Content'>
        <Home />
      </section> */}
      
    </div>
  )
}

export default App
