import "./About.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function About() {
  return (
    <div className="row  text-white" align="center">
      <h1 id="AboutTitle">About Us:</h1>
      <div class="col-sm-12">
        <Card style={{ width: "45rem" }}>
          <Card.Img
            variant="top"
            src="https://pbs.twimg.com/profile_images/516887486476611584/xjFRrhdD_400x400.jpeg"
          />
          <Card.Body>
            <Card.Title>Devin</Card.Title>
            <Card.Text>
              I only need two buttons, Ctrl + C and Ctrl + V.
            </Card.Text>
            <Button variant="primary" href="https://github.com/D-Pats/">
              GitHub
            </Button>
          </Card.Body>
        </Card>
      </div>

      <div class="col-sm-12">
        <Card style={{ width: "45rem" }}>
          <Card.Img
            variant="top"
            src="https://c4.wallpaperflare.com/wallpaper/456/996/977/funny-coding-humor-technics-wallpaper-preview.jpg"
          />
          <Card.Body>
            <Card.Title>Hodan</Card.Title>
            <Card.Text>
              If you put a million monkeys at a million keyboards, one of them
              will eventually write a Java program.
            </Card.Text>
            <Button variant="primary" href="https://github.com/HodanB">
              GitHub
            </Button>
          </Card.Body>
        </Card>
      </div>

      <div class="col-sm-12">
        <Card style={{ width: "45rem" }}>
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

      <div class="col-sm-12">
        <Card style={{ width: "45rem" }}>
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
