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
        <h2>Bullet Train</h2>

        <Card align="centre" style={{ width: "60%" }}>
          <Container>
            {/* Stack the columns on mobile by making one full-width and the other half-width */}

            <Row>
              <Col xs={12} md={8}>
                <div class="row1">
                  <section id="film-synopsis" class="film-details fadeIn in">
                    <h4>Synopsis</h4>
                    <p>
                      In Bullet Train, Brad Pitt stars as Ladybug, an unlucky
                      assassin determined to do his job peacefully after one too
                      many gigs gone off the rails. Fate, however, may have
                      other plans.
                    </p>
                    <br></br>
                    <p>
                      Ladybug is an unlucky assassin who's determined to do his
                      job peacefully after one too many gigs has gone off the
                      rails. Fate, however, may have other plans as his latest
                      mission puts him on a collision course with lethal
                      adversaries from around the globe -- all with connected
                      yet conflicting objectives -- on the world's fastest
                      train.
                    </p>
                  </section>
                  <section
                    id="film-techspec"
                    class="film-details scrollFadeIn in"
                  >
                    <h4>Tech Spec</h4>
                    <p>
                      Release date: <br></br>
                      3rd August 2022<br></br>
                    </p>
                    <p>
                      Running time:<br></br>
                      2hrs 6mins
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
                        src="https://www.youtube-nocookie.com/embed/0IOsk2Vlc4o?controls=0&amp;start=1?modestbranding=1?rel=0"
                        title="YouTube video player"
                        controls="0"
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
                    <h4>Poster</h4>
                    <br />
                    <img
                      class="carousel__bulletTrain-image"
                      className="d-block w-100"
                      src="https://m.media-amazon.com/images/M/MV5BMDU2ZmM2OTYtNzIxYy00NjM5LTliNGQtN2JmOWQzYTBmZWUzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"
                      alt="Bullet train Poster"
                    />
                  </section>
                  <section
                    id="film-techspec"
                    class="film-details scrollFadeIn in"
                  >
                    <h4>Cast</h4>
                    <p>
                      Brad Pitt, Joey King, Aaron Taylor-Johnson, Brian Tyree Henry,
                      Andrew Koji, Hiroyuki Sanada, Michael Shannon, Benito A
                      Martínez Ocasio, Sandra Bullock
                    </p>
                    <p>
                      Running time:<br></br>
                      2hrs 6mins
                    </p>
                  </section>
                  <section
                    id="film-dist-partners"
                    class="film-details scrollFadeIn in"
                  >
                    <h4>Distribution Partners</h4>
                    <div>	Sony Pictures</div>
                    
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
