import React from 'react'
import './App.css'
import Navbar from './components/navBar/index'
import Home from "./page/Home/index"
import Programming from "./page/Programming/index"
import Covid from "./page/Covid/index"
import Saved from "./page/Saved/index"
import Search from "./page/Search/index"
import {  Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Programming" element={<Programming />} />
            <Route path="/Covid" element={<Covid />} />
            <Route path="/Saved" element={<Saved />} />
            <Route path="/Search" element={<Search />} />
          </Routes>
    </div>
  )
}

export default App
