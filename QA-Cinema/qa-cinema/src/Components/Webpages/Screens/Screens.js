import './Screens.css';
import Card from 'react-bootstrap/Card';
import standardScreen from './StandardScreen.png'
import deluxeScreen from './DeluxeScreen.png'

function Screens() {
    return (
        <>
            <div>
                <h1 id="Screensh1">Screens</h1>
            </div>
            <br />
            <h2 id="Screensh2">Standard Screen</h2>
            <Card>
                <Card.Img variant="top" src={standardScreen} />
                <Card.Body>
                    <Card.Text>
                        Standard Screen - Seating up to (some number) of people with (some number) of standard seats and (some number) of premium seats.
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
            <h2 id="Screensh2">Deluxe Screen</h2>
            <Card>
            <Card.Img variant="top" src={deluxeScreen} />
                <Card.Body>
                    <Card.Text>
                        Deluxe Screen - Seating up to (some number) of people with (some number) of standard seats and (some number) of premium seats.
                    </Card.Text>
                </Card.Body>
            </Card>

        </>
    );
}

export default Screens;
