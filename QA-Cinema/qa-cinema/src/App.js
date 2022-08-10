import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import About from "./Components/Webpages/About/About";
import Booking from "./Components/Webpages/Booking/Booking";
import Classifications from "./Components/Webpages/Classifications/Classifications";
import ContactUs from "./Components/Webpages/ContactUs/ContactUs";
import DiscussionBoard from "./Components/Webpages/DiscussionBoard/DiscussionBoard";
import Comments from "./comments/Comments";
import Home from "./Components/Webpages/Home/Home";
import ListingsGallery from "./Components/Webpages/ListingsGallery/ListingsGallery";
import Location from "./Components/Webpages/Location/Location";
import NewReleases from "./Components/Webpages/NewReleases/NewReleases";
import OpeningTimes from "./Components/Webpages/OpeningTimes/OpeningTimes";
import Payment from "./Components/Webpages/Payment/Payment";
import PlacesToGo from "./Components/Webpages/PlacesToGo/PlacesToGo";
import Screens from "./Components/Webpages/Screens/Screens";
import Seating from "./Components/Webpages/Seating/Seating";
import BulletTrain from "./Components/Webpages/Films/BulletTrain";
import Minions from "./Components/Webpages/Films/Minions";
import Thor from "./Components/Webpages/Films/Thor";
import Superpets from "./Components/Webpages/Films/Superpets";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Booking" element={<Booking />}></Route>
          <Route path="/Classifications" element={<Classifications />}></Route>
          <Route path="/ContactUs" element={<ContactUs />}></Route>
          {/* <Route path="/DiscussionBoard" element={<DiscussionBoard />}></Route> */}
          <Route path="/DiscussionBoard" element={<Comments />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/ListingsGallery" element={<ListingsGallery />}></Route>
          <Route path="/Location" element={<Location />}></Route>
          <Route path="/NewReleases" element={<NewReleases />}></Route>
          <Route path="/OpeningTimes" element={<OpeningTimes />}></Route>
          <Route path="/Payment" element={<Payment />}></Route>
          <Route path="/PlacesToGo" element={<PlacesToGo />}></Route>
          <Route path="/Screens" element={<Screens />}></Route>
          <Route path="/Seating" element={<Seating />}></Route>
          <Route path="/BulletTrain" element={<BulletTrain />}></Route>
          <Route path="/Minions" element={<Minions />}></Route>
          <Route path="/Thor" element={<Thor />}></Route>
          <Route path="/Superpets" element={<Superpets />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
