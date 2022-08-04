import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Webpages/Home/Home'
import OpeningTimes from './Components/Webpages/OpeningTimes/OpeningTimes'
import DiscussionBoard from './Components/Webpages/DiscussionBoard/DiscussionBoard';
import ContactUs from './Components/Webpages/ContactUs/ContactUs';
import Booking from './Components/Webpages/Booking/Booking';
import ListingsGallery from './Components/Webpages/ListingsGallery/ListingsGallery';
import Location from './Components/Webpages/Location/Location';
import NewReleases from './Components/Webpages/NewReleases/NewReleases';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Booking' element={<Booking />}></Route>
          <Route path='/Classifications' element={<Classifications />}></Route>
          <Route path='/ContactUs' element={<ContactUs />}></Route>
          <Route path='/DiscussionBoard' element={<DiscussionBoard />}></Route>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/ListingsGallery' element={<ListingsGallery />}></Route>
          <Route path='/Location' element={<Location />}></Route>
          <Route path='/NewReleases' element={<NewReleases />}></Route>
          <Route path='/OpeningTimes' element={<OpeningTimes />}></Route>
          <Route path='/Payment' element={<Payment />}></Route>
          <Route path='/PlacesToGo' element={<PlacesToGo />}></Route>
          <Route path='/Screens' element={<Screens />}></Route>
          <Route path='/Seating' element={<Seating />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
