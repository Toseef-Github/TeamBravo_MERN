import './About.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function About() {
  return (
<div className="row  text-white">
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Devin</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">GitHub</Button>
      </Card.Body>
    </Card>
    </div>

    <div>
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Hodan</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <Button variant="primary">GitHub</Button>
  </Card.Body>
    </Card>
    </div>

    <div>
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Toseef</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <Button variant="primary">GitHub</Button>
  </Card.Body>
    </Card>
    </div>

    <div>
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Waseem</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <Button variant="primary">GitHub</Button>
  </Card.Body>
    </Card>
    </div>
</div>
  );
}

export default About;