import './ListingsGallery.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ListingsGallery() {
    return (
        <>
            <body>
            <h1 id="ListingsGalleryh1">Listings Gallery</h1>
            <Container>
      <Row>
        <Col sm={8}><h2 id="ListingsGalleryh2">Minions: Rise of Gru</h2>
        <br />
        <p id="ListingsGalleryp">Description: </p>
        <br />
        <p  id="ListingsGalleryp"></p>
        <br />
        <p id="ListingsGalleryp">Actors:</p>
        <br />
        <p id="ListingsGalleryp"></p>
        <br />
        <p id="ListingsGalleryp">Classification:</p>
        <br />
        <p id="ListingsGalleryp"></p>
        </Col>
        <Col sm={4}>
            <img src="https://images.mymovies.net/images/film/cin/350x522/fid20178.jpg" alt="minions poster" />
        </Col>
      </Row>
      <Row>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col sm={8}><h2 id="ListingsGalleryh2">Bullet Train</h2>
        <br />
        <p id="ListingsGalleryp">Description: </p>
        <br />
        <p  id="ListingsGalleryp"></p>
        <br />
        <p id="ListingsGalleryp">Actors:</p>
        <br />
        <p id="ListingsGalleryp"></p>
        <br />
        <p id="ListingsGalleryp">Classification:</p>
        <br />
        <p id="ListingsGalleryp"></p>
        </Col>
        <Col sm={4}>
            <img src="https://images.mymovies.net/images/film/cin/350x522/fid21493.jpg" alt="bullet train poster"/>
        </Col>
      </Row>
      <Row>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
      </Row>
    </Container>
    <br />
    <Container>
      <Row>
        <Col sm={8}><h2 id="ListingsGalleryh2">Thor: Love and Thunder</h2>
        <br />
        <p id="ListingsGalleryp">Description: </p>
        <br />
        <p  id="ListingsGalleryp"></p>
        <br />
        <p id="ListingsGalleryp">Actors:</p>
        <br />
        <p id="ListingsGalleryp"></p>
        <br />
        <p id="ListingsGalleryp">Classification:</p>
        <br />
        <p id="ListingsGalleryp"></p>
        </Col>
        <Col sm={4}>
            <img src="https://images.mymovies.net/images/film/cin/350x522/fid21005.jpg" alt="thor poster"/>
        </Col>
      </Row>
      <Row>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
      </Row>
    </Container>
    <br />
    <Container>
      <Row>
        <Col sm={8}><h2 id="ListingsGalleryh2">DC: League of Super-pets</h2>
        <br />
        <p id="ListingsGalleryp">Description: </p>
        <br />
        <p  id="ListingsGalleryp"></p>
        <br />
        <p id="ListingsGalleryp">Actors:</p>
        <br />
        <p id="ListingsGalleryp"></p>
        <br />
        <p id="ListingsGalleryp">Classification:</p>
        <br />
        <p id="ListingsGalleryp"></p>
        </Col>
        <Col sm={4}>
            <img src="https://images.mymovies.net/images/film/cin/350x522/fid21007.jpg" alt="superpets poster"/>
        </Col>
      </Row>
      <Row>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
      </Row>
    </Container>
            </body>
        </>
    );
}

export default ListingsGallery;