import './ListingsGallery.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function ListingsGallery() {
    return (
        <>
         <Card align="center" style={{ width: '100rem' }}>
                <Card.Body>
        
            <body>
              
            <h1 id="ListingsGalleryh1">Listings Gallery</h1>
            <Container>
      <Row>
        <Col sm={8}>
        <h2 id="ListingsGalleryh2"><a href="./Minions">Minions: Rise of Gru</a></h2>
        <br />
        <p id="ListingsGalleryp">Description: </p>
        <br />
        <p  id="ListingsGalleryp">This summer, from the biggest global animated franchise in history, comes the origin story of how the world's greatest supervillain first met his iconic Minions.</p>
        <br />
        <p id="ListingsGalleryp">Actors:</p>
        <br />
        <p id="ListingsGalleryp">Steve Carell, Michelle Yeoh, Pierre Coffin, Taraji P. Henson, Julie Andrews, Russell Brand, Danny Trejo</p>
        <br />
        <p id="ListingsGalleryp">Classification:</p>
        <br />
        <p id="ListingsGalleryp">U</p>
        </Col>
        <Col sm={4}>
            <img src="https://images.mymovies.net/images/film/cin/350x522/fid20178.jpg" alt="minions poster" />
        </Col>
      </Row>
      <Row>
        <Col sm></Col>
        <Col sm></Col>
        <Col sm></Col>
      </Row>
    </Container>
    <br />
    <Container>
      <Row>
        <Col sm={8}>
        <h2 id="ListingsGalleryh2"><a href="./BulletTrain">Bullet Train</a></h2>
        <br />
        <p id="ListingsGalleryp">Description: </p>
        <br />
        <p  id="ListingsGalleryp">In Bullet Train, Brad Pitt stars as Ladybug, an unlucky assassin determined to do his job peacefully after one too many gigs gone off the rails. Fate, however, may have other plans.</p>
        <br />
        <p id="ListingsGalleryp">Actors:</p>
        <br />
        <p id="ListingsGalleryp">Brad Pitt, Joey King, Aaron Taylor-Johnson, Brian Tyree Henry, Bad Bunny</p>
        <br />
        <p id="ListingsGalleryp">Classification:</p>
        <br />
        <p id="ListingsGalleryp">15</p>
        </Col>
        <Col sm={4}>
            <img src="https://images.mymovies.net/images/film/cin/350x522/fid21493.jpg" alt="bullet train poster"/>
        </Col>
      </Row>
      <Row>
        <Col sm></Col>
        <Col sm></Col>
        <Col sm></Col>
      </Row>
    </Container>
    <br />
    <Container>
      <Row>
        <Col sm={8}>
        <h2 id="ListingsGalleryh2"><a href="./Thor">Thor: Love and Thunder</a></h2>
        <br />
        <p id="ListingsGalleryp">Description: </p>
        <br />
        <p  id="ListingsGalleryp">Thor embarks on a journey unlike anything he's ever faced -- a quest for inner peace. However, his retirement gets interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods.</p>
        <br />
        <p id="ListingsGalleryp">Actors:</p>
        <br />
        <p id="ListingsGalleryp">Chris Hemsworth, Natalie Portman, Tessa Thompson</p>
        <br />
        <p id="ListingsGalleryp">Classification:</p>
        <br />
        <p id="ListingsGalleryp">12A</p>
        </Col>
        <Col sm={4}>
            <img src="https://images.mymovies.net/images/film/cin/350x522/fid21005.jpg" alt="thor poster"/>
        </Col>
      </Row>
      <Row>
        <Col sm></Col>
        <Col sm></Col>
        <Col sm></Col>
      </Row>
    </Container>
    <br />
    <Container>
      <Row>
        <Col sm={8}>
            <h2 id="ListingsGalleryh2"><a href="./Superpets">DC: League of Super-pets</a></h2>
        <br />
        <p id="ListingsGalleryp">Description: </p>
        <br />
        <p  id="ListingsGalleryp">When Superman and the Justice League are kidnapped, Krypto must convince a rag-tag shelter pack - Ace the hound, PB the potbellied pig, Merton the turtle and Chip the squirrel - to master their own newfound powers and help him rescue the superheroes.</p>
        <br />
        <p id="ListingsGalleryp">Actors:</p>
        <br />
        <p id="ListingsGalleryp">Dwayne Johnson, Kevin Hart, Kate McKinnon</p>
        <br />
        <p id="ListingsGalleryp">Classification:</p>
        <br />
        <p id="ListingsGalleryp">PG</p>
        </Col>
        <Col sm={4}>
            <img src="https://images.mymovies.net/images/film/cin/350x522/fid21007.jpg" alt="superpets poster"/>
        </Col>
      </Row>
      <Row>
        <Col sm></Col>
        <Col sm></Col>
        <Col sm></Col>
      </Row>
    </Container>
            </body></Card.Body></Card>
        </>
    );
}

export default ListingsGallery;