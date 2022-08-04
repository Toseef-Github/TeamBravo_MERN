import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Webpages/Home/Home'
import OpeningTimes from './Components/Webpages/OpeningTimes/OpeningTimes'


function App() {
  return (
    <Router>
      <div>
      <Routes>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/OpeningTimes' element={<OpeningTimes />}></Route>

      </Routes>
      </div>
    </Router>
    );
}

export default App;
