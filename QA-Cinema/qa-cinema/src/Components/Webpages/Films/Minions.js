import React from "react";
import "./BulletTrain.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";

function BulletTrain() {
  return (
    <>
      <nav>
        <Navbar.Brand href="./Booking">
          <ul>
            <li>
              Book NOW
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </li>
          </ul>
        </Navbar.Brand>
      </nav>

      <body>
        <h2>Minions: The Rise of Gru</h2>

        <Card align="centre" style={{ width: "60%" }}>
          <Container>
            {/* Stack the columns on mobile by making one full-width and the other half-width */}

            <Row>
              <Col xs={12} md={8}>
                <div class="row1">
                  <section id="film-synopsis" class="film-details fadeIn in">
                    <h4>Synopsis</h4>
                    <p>
                      This summer, from the biggest animated franchise in
                      history and global cultural phenomenon, comes the untold
                      story of one 12-year-old’s dream to become the world’s
                      greatest supervillain, in Minions: The Rise of Gru.
                    </p>
                    <br></br>
                    <p>
                      In the heart of the 1970s, amid a flurry of feathered hair
                      and flared jeans, Gru (Oscar® nominee Steve Carell) is
                      growing up in the suburbs. A fanboy of a supervillain
                      supergroup known as the Vicious 6, Gru hatches a plan to
                      become evil enough to join them. Luckily, he gets some
                      mayhem-making backup from his loyal followers, the
                      Minions. Together, Kevin, Stuart, Bob, and Otto - a new
                      Minion sporting braces and a desperate need to please -
                      deploy their skills as they and Gru build their first
                      lair, experiment with their first weapons and pull off
                      their first missions
                    </p>
                  </section>
                  <section
                    id="film-techspec"
                    class="film-details scrollFadeIn in"
                  >
                    <h4>Tech Spec</h4>
                    <p>
                      Release date: <br></br>
                      1st July 2022<br></br>
                    </p>
                    <p>
                      Running time:<br></br>
                      1hrs 27mins
                    </p>
                  </section>

                  <section
                    id="film-dist-partners"
                    class="film-details scrollFadeIn in"
                  >
                    <h4>Trailer</h4>
                    <div class="video-container">
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/HhIl_XJ-OGA?controls=0"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </section>
                </div>
              </Col>
              <Col xs={6} md={4}>
                <div class="row1">
                  <section id="film-synopsis" class="film-details fadeIn in">
                    <h4>Synopsis</h4>
                    <br />
                    <img
                      class="carousel__bulletTrain-image"
                      className="d-block w-100"
                      src="https://magarila.com/wp-content/uploads/2022/07/Minions-The-Rise-of-Gru-Poster-1.jpg"
                      alt="Bullet train Poster"
                    />
                  </section>
                  <section
                    id="film-techspec"
                    class="film-details scrollFadeIn in"
                  >
                    <h4>Cast</h4>
                    <p>
                      Steve Carell, Pierre Coffin, Taraji P. Henson, Michelle
                      Yeoh, Russell Brand, Julie Andrews, Alan Arkin,
                    </p>
                    
                    
                  </section>
                  <section
                    id="film-dist-partners"
                    class="film-details scrollFadeIn in"
                  >
                    <h4>Distribution Partners</h4>
                    <div> Universal Pictures</div>
                  </section>
                </div>
              </Col>
            </Row>
            <br></br>
          </Container>
        </Card>
      </body>
    </>
  );
}

export default BulletTrain;
