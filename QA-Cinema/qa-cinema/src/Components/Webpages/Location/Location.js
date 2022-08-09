import './Location.css';
import Card from 'react-bootstrap/Card';


function Location() {
    return (
        <>
            <Card align="center" style={{ width: '45rem' }}>
                <Card.Body>
                <div>
                    
                    <h1 id="Locationh1">Location:</h1>
                    <br />
                    <h2 id="Locationh2">Address</h2>
                    <p id="Locationp">3rd Floor, International House,</p>
                    <p id="Locationp">1 St Katharine's Way,</p>
                    <p id="Locationp">London E1W 1UN</p>
                    <iframe title="iframe1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.310641942026!2d-0.07599238434295964!3d51.50751667963515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603544462f21d%3A0x60c3dd1ddc3bc0b7!2sQA%20Ltd.!5e0!3m2!1sen!2suk!4v1659899598353!5m2!1sen!2suk" width="400" height="300" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <br />
                <div align="center">
                    <p id="Locationp">If you can't find the location please call us on 03450747829 and someone will help with directions.</p>
                
                </div></Card.Body></Card>
           
        </>
    );
}

export default Location;