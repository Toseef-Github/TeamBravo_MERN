import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Home.css";
import Navbar from "react-bootstrap/Navbar";

function Home() {
  return (
    <>
      <body>
      <div class="nine">
  <h1>QA Cinema<span>Movies the way they were meant to be seen</span></h1>
</div>

        <Carousel variant="light" class="mx-auto">
          <Carousel.Item>
            <img
              class="carousel__minion-image"
              className="d-block w-100"
              src="https://media3.giphy.com/media/IAo3cBSgXHHhb50cVC/giphy.gif?cid=ecf05e47oef04x2xbqiu7wsly8oga944ufnhniiqrcbw1ilv&rid=giphy.gif&ct=g?text=First slide&bg=f5f5f5"
              alt="First slide"
              data-desktop-image="https://media3.giphy.com/media/IAo3cBSgXHHhb50cVC/giphy.gif?cid=ecf05e47oef04x2xbqiu7wsly8oga944ufnhniiqrcbw1ilv&rid=giphy.gif&ct=g"
              data-mobile-image="https://media3.giphy.com/media/IAo3cBSgXHHhb50cVC/giphy.gif?cid=ecf05e47oef04x2xbqiu7wsly8oga944ufnhniiqrcbw1ilv&rid=giphy.gif&ct=g"
              data-mobile-size="1536|864"
              data-desktop-size="1600|650"
              width="1600"
              height="850"
            />
            <Carousel.Caption>
              <a className="carouseltitle" href="Minions">
                Minions: Rise of Gru
              </a>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              class="carousel__bulletTrain-image"
              className="d-block w-100"
              src="https://media4.giphy.com/media/sf3PYOIUwF2tiPaSSI/giphy.gif?cid=ecf05e476i5ttk9qixs4omr7557taviqn30stjcigmghq9nj&rid=giphy.gif&ct=g?text=Second slide&bg=eee"
              alt="Second slide"
              data-desktop-image="https://media4.giphy.com/media/sf3PYOIUwF2tiPaSSI/giphy.gif?cid=ecf05e476i5ttk9qixs4omr7557taviqn30stjcigmghq9nj&rid=giphy.gif&ct=g"
              data-mobile-image="https://media4.giphy.com/media/sf3PYOIUwF2tiPaSSI/giphy.gif?cid=ecf05e476i5ttk9qixs4omr7557taviqn30stjcigmghq9nj&rid=giphy.gif&ct=g"
              data-mobile-size="1536|864"
              data-desktop-size="1600|650"
              width="1600"
            height="850"
            />
            <Carousel.Caption>
              <a className="carouseltitle" href="BulletTrain">
                Bullet Train
              </a>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              class="carousel__thor-image"
              className="d-block w-100"
              src="https://media1.giphy.com/media/pL6mkjytFkTlekNMtM/giphy.gif?cid=ecf05e47c1nj5qlax4tbpq6ewfw5ht15ifgj40qaupbsuilm&rid=giphy.gif&ct=g?text=third slide&bg=e6e5e5"
              alt="third slide"
              data-desktop-image="https://media1.giphy.com/media/pL6mkjytFkTlekNMtM/giphy.gif?cid=ecf05e47c1nj5qlax4tbpq6ewfw5ht15ifgj40qaupbsuilm&rid=giphy.gif&ct=g"
              data-mobile-image="https://media1.giphy.com/media/pL6mkjytFkTlekNMtM/giphy.gif?cid=ecf05e47c1nj5qlax4tbpq6ewfw5ht15ifgj40qaupbsuilm&rid=giphy.gif&ct=g"
              data-mobile-size="1536|864"
              data-desktop-size="1600|6500"
              width="1600"
            height="850"
            />
            <Carousel.Caption>
              <a className="carouseltitle" href="Thor">
                Thor:Love and Thunder
              </a>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              class="carousel__superPets-image"
              className="d-block w-100"
              src="https://media0.giphy.com/media/nWfnOfr7k6QZLv5Z65/giphy.gif?cid=ecf05e4701mc0gbxzbt4wygqyaiph5r0ufrd8m53z4xctyh7&rid=giphy.gif&ct=g?text=fourth slide&bg=e5e5e5"
              alt="fourth slide"
              data-desktop-image="https://media0.giphy.com/media/nWfnOfr7k6QZLv5Z65/giphy.gif?cid=ecf05e4701mc0gbxzbt4wygqyaiph5r0ufrd8m53z4xctyh7&rid=giphy.gif"
              data-mobile-image="/https://media0.giphy.com/media/nWfnOfr7k6QZLv5Z65/giphy.gif?cid=ecf05e4701mc0gbxzbt4wygqyaiph5r0ufrd8m53z4xctyh7&rid=giphy.gif"
              data-mobile-size="1536|864"
              data-desktop-size="1600|650"
              width="1600"
            height="850"
            />
            <Carousel.Caption>
              <a className="carouseltitle" href="Superpets">
                DC: League of Super-Pets
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        
      </body>
    </>
  );
}

export default Home;
