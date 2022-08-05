import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';

function Home() {
    return (
        <>
        
        <body>
            <div>
                <h1 id="welcomeTitle">Welcome to QA Cinema</h1>
            </div>

        <Carousel variant="dark" class = "mx-auto" div className="col-lg-8 col-md-12  align-center text-center  card w-8 bg-dark">
        
         <Carousel.Item>
         <img
          className="d-block w-100"
          src="https://media3.giphy.com/media/IAo3cBSgXHHhb50cVC/giphy.gif?cid=ecf05e47oef04x2xbqiu7wsly8oga944ufnhniiqrcbw1ilv&rid=giphy.gif&ct=g?text=First slide&bg=f5f5f5"
          alt="First slide"
        />
        <Carousel.Caption>
         <a href="https://github.com"> Minion gru </a>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.
            
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media4.giphy.com/media/sf3PYOIUwF2tiPaSSI/giphy.gif?cid=ecf05e476i5ttk9qixs4omr7557taviqn30stjcigmghq9nj&rid=giphy.gif&ct=g?text=Second slide&bg=eee"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 id="h5">Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img 
          className="d-block w-100"
          src="https://media1.giphy.com/media/pL6mkjytFkTlekNMtM/giphy.gif?cid=ecf05e47c1nj5qlax4tbpq6ewfw5ht15ifgj40qaupbsuilm&rid=giphy.gif&ct=g?text=third slide&bg=e6e5e5"
          alt="third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media0.giphy.com/media/nWfnOfr7k6QZLv5Z65/giphy.gif?cid=ecf05e4701mc0gbxzbt4wygqyaiph5r0ufrd8m53z4xctyh7&rid=giphy.gif&ct=g?text=fourth slide&bg=e5e5e5"
          alt="fourth slide"
        />
        <Carousel.Caption>
          <h5>Fourth slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
        </body>

        </>

    );
};

export default Home;

