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
        <h2>Thor: Love and Thunder</h2>

        <Card align="centre" style={{ width: "60%" }}>
          <Container>
            {/* Stack the columns on mobile by making one full-width and the other half-width */}

            <Row>
              <Col xs={12} md={8}>
                <div class="row1">
                  <section id="film-synopsis" class="film-details fadeIn in">
                    <h4>Synopsis</h4>
                    <p>
                      Marvel surprised us when they dropped the long-awaited
                      trailer for Thor: Love and Thunder on April 18, 2022. We
                      got hit with first looks at Natalie Portman’s the Mighty
                      Thor, as well as Russell Crowe’s Zeus, and what appears to
                      be another truly wild Thor movie from director Taika
                      Waititi
                    </p>
                    <br></br>
                    <p>
                      Thor embarks on a journey unlike anything he's ever faced
                      -- a quest for inner peace. However, his retirement gets
                      interrupted by Gorr the God Butcher, a galactic killer who
                      seeks the extinction of the gods. To combat the threat,
                      Thor enlists the help of King Valkyrie, Korg and
                      ex-girlfriend Jane Foster, who -- to his surprise --
                      inexplicably wields his magical hammer. Together, they set
                      out on a harrowing cosmic adventure to uncover the mystery
                      of the God Butcher's vengeance.
                    </p>
                  </section>
                  <section
                    id="film-techspec"
                    class="film-details scrollFadeIn in"
                  >
                    <h4>Tech Spec</h4>
                    <p>
                      Release date: <br></br>
                      18th April 2022<br></br>
                    </p>
                    <p>
                      Running time:<br></br>
                      1hrs 58mins
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
                        src="https://www.youtube.com/embed/Go8nTmfrQd8"
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
                      class="carousel__thor-image"
                      className="d-block w-100"
                      src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F06%2Fthor-love-and-thunder-character-posters-first-look-info-001.jpg?q=75&w=800&cbr=1&fit=max"
                      alt="Bullet train Poster"
                    />
                  </section>
                  <section
                    id="film-techspec"
                    class="film-details scrollFadeIn in"
                  >
                    <h4>Cast</h4>
                    <p>
                      Chris Hemsworth, Christian Bale, Tessa Thompson, Jaimie
                      Alexander, Taika Waititi, Russell Crowe, Natalie Portman
                    </p>
                  </section>
                  <section
                    id="film-dist-partners"
                    class="film-details scrollFadeIn in"
                  >
                    <h4>Distribution Partners</h4>
                    <div> Walt Disney Studios Motion Pictures</div>
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
