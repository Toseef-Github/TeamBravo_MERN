import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Footer from './Components/Footer/Footer';
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Webpages/Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation />
    <App />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// //import express
// const express = require('express');

// // import routes
// const HomeRoutes = require('./Routes/Home');
// const ListingsGalleryRoutes = require('./Routes/ListingsGallery');

// // routing
// app.use('/', './Components/Webpages/Home/Home.js');
// app.use('/ListingsGallery', ListingsGalleryRoutes);

// // initialise the app
// const app = express();

// //set a port number and run app (parsed a function to output a message when working) - can put the port in a .env so it is hidden
// const PORT = 4000;
// app.listen(PORT, () => {
//   console.log("Server listening for requests on port:", PORT);
// });