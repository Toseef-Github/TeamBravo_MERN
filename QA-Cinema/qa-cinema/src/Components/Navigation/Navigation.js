import './Navigation.css';
import Nav from 'react-bootstrap/Nav';
const Navigation = () => {
    return (
      <Nav justify variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href= "/home">Movies</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">Something </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }


export default Navigation;