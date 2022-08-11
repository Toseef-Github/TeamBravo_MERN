import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavScroll() {
 async function onSearch() {
    console.log("onSearch called!!");
    const response = await fetch(`https://imdb-api.com/en/API/Title/k_12345678/tt1375666/FullCast,Posters,Images,Trailer,Ratings,`);
    console.log("response: ", response);
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="./Home">
          <img
            src="./QA Cinemas-logos.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100%" }}
            navbarScroll
          >
            <Nav.Link href="./Home">Home</Nav.Link>
            <Nav.Link href="./About">About</Nav.Link>
            <Nav.Link href="./ListingsGallery">Listings</Nav.Link>
            <Nav.Link href="./Booking">Booking</Nav.Link>
            <NavDropdown title="More" id="navbarScrollingDropdown">
              <NavDropdown.Item href="./Location">Location</NavDropdown.Item>
              <NavDropdown.Item href="./ContactUs">
                {" "}
                Contact Us
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="./About">
                About QA Cinema
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" onClick={onSearch}>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;
