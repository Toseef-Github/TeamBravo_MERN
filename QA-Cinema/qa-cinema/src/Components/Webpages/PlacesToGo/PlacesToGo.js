import './PlacesToGo.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import CardGroup from 'react-bootstrap/CardGroup';


function PlacesToGo() {
    return (
        <>
            <h1 id="PlacesToGoh1">Places To Go</h1>
            <div id="PlacesToGoDiv">
                <h2 id="PlacesToGoh2">Restaurants</h2>
                <div class="col-sm-12">
                    <CardGroup>
                        <Card bg='dark' key='dark' border='dark' text='white' style={{ width: '18rem' }} id="PlacesToGoCard">
                        <iframe title="iframepingpong" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.310641942026!2d-0.07599238434295964!3d51.50751667963515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603490addee27%3A0x565135c8d54f3e72!2sPing%20Pong%20St%20Katharine%20Docks!5e0!3m2!1sen!2suk!4v1659900142459!5m2!1sen!2suk" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            <Card.Body>
                                <Card.Title>Ping Pong</Card.Title>
                                <Card.Text>
                                    Handmade Dim Sum & Cocktails
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Rating: 8</ListGroup.Item>
                                <ListGroup.Item>Price: $$</ListGroup.Item>
                                <ListGroup.Item>Walking time: 2 minutes</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="https://www.pingpongdimsum.com/food/">Website</Card.Link>
                            </Card.Body>
                        </Card>
                        <Card bg='dark' key='dark' border='dark' text='white' style={{ width: '18rem' }} id="PlacesToGoCard">
                        <iframe title="iframehonestburger" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d484.49535705239873!2d-0.07246890449877942!3d51.50798517604655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760396d0debead%3A0x8b24c3194820a92!2sHonest%20Burgers%20St%20Katharine%20Docks!5e0!3m2!1sen!2suk!4v1659900619612!5m2!1sen!2suk" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            <Card.Body>
                                <Card.Title>Honest Burger</Card.Title>
                                <Card.Text>
                                    Local burgers in collaboration with nearby food heroes
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Rating: 7.5</ListGroup.Item>
                                <ListGroup.Item>Price: $$</ListGroup.Item>
                                <ListGroup.Item>Walking time: 3 minutes</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="https://www.honestburgers.co.uk/locations/st-katharine-docks/">Website</Card.Link>
                            </Card.Body>
                        </Card>
                        <Card bg='dark' key='dark' border='dark' text='white' style={{ width: '18rem' }} id="PlacesToGoCard">
                        <iframe title="iframeemilias" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d484.50088480944055!2d-0.0717739542281408!3d51.50746534228555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1b713290cb21ac2c!2sEmilia&#39;s%20Crafted%20Pasta%20(St.%20Katharine%20Docks)!5e0!3m2!1sen!2suk!4v1659900719589!5m2!1sen!2suk" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            <Card.Body>
                                <Card.Title>Emilia's Crafted Pasta</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Rating: 7.5</ListGroup.Item>
                                <ListGroup.Item>Price: $$$</ListGroup.Item>
                                <ListGroup.Item>Walking time: 5 minutes</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="https://www.emiliaspasta.com/">Website</Card.Link>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </div>
            </div>
            <br />
            <div id="PlacesToGoDiv">
                <h2 id="PlacesToGoh2">Bars</h2>
                <div class="col-sm-12">
                    <CardGroup>
                        <Card bg='dark' key='dark' border='dark' text='white' style={{ width: '18rem' }} id="PlacesToGoCard">
                        <iframe title="iframeslugandlettuce" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d484.4915610622402!2d-0.07341713483793391!3d51.5083421511848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876034974e166ef%3A0xd50885920e5ef4af!2sSlug%20%26%20Lettuce%20Tower%20Bridge!5e0!3m2!1sen!2suk!4v1659900859931!5m2!1sen!2suk" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            <Card.Body>
                                <Card.Title>Slug & Lettuce</Card.Title>
                                <Card.Text>
                                    All about getting together over heavenly cocktail trees
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Rating: 6.5</ListGroup.Item>
                                <ListGroup.Item>Price: $$$</ListGroup.Item>
                                <ListGroup.Item>Walking time: 2 minutes</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="https://www.slugandlettuce.co.uk/towerbridge">Website</Card.Link>
                            </Card.Body>
                        </Card>
                        <Card bg='dark' key='dark' border='dark' text='white' style={{ width: '18rem' }} id="PlacesToGoCard">
                        <iframe title="iframekilikyas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d484.50008127439116!2d-0.07176976778072736!3d51.50754090746171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760349cb7986a7%3A0x8b3278a248dc39d3!2sKilikya%E2%80%99s%20Gastro%2C%20Cocktails%2C%20Lounge!5e0!3m2!1sen!2suk!4v1659900933772!5m2!1sen!2suk" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            <Card.Body>
                                <Card.Title>Kilikya's</Card.Title>
                                <Card.Text>
                                    Fairy-tale ambience and the superb service offered by our friendly team, accompanied by the magnificent view of St.Katharine Docks
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Rating: 8</ListGroup.Item>
                                <ListGroup.Item>Price: $$</ListGroup.Item>
                                <ListGroup.Item>Walking time: 5 minutes</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="https://www.kilikyasgastro.co.uk/">Website</Card.Link>
                            </Card.Body>
                        </Card>
                        <Card bg='dark' key='dark' border='dark' text='white' style={{ width: '18rem' }} id="PlacesToGoCard">
                        <iframe title="iframebeachbar" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d484.5122728932648!2d-0.07372693194653197!3d51.506394387872454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760348ef88e977%3A0x38d582e06ee79e46!2sBeach%20Bar!5e0!3m2!1sen!2suk!4v1659901000651!5m2!1sen!2suk" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            <Card.Body>
                                <Card.Title>Beach Bar</Card.Title>
                                <Card.Text>
                                    Outside bar right opposite Tower Bridge
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Rating: 7</ListGroup.Item>
                                <ListGroup.Item>Price: $$$</ListGroup.Item>
                                <ListGroup.Item>Walking time: 4 minutes</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="https://www.guoman.com/the-tower/restaurants-and-bars">Website</Card.Link>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </div>
            </div>
            <br />
            <div id="PlacesToGoDiv">
                <h2 id="PlacesToGoh2">Experiences</h2>
                <div class="col-sm-12">
                    <CardGroup>
                        <Card bg='dark' key='dark' border='dark' text='white' style={{ width: '18rem' }} id="PlacesToGoCard">
                        <iframe title="iframetoweroflondon" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1207.6423468550222!2d-0.0754763686057341!3d51.507372761966934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760349331f38dd%3A0xa8bf49dde1d56467!2sTower%20of%20London!5e0!3m2!1sen!2suk!4v1659901064549!5m2!1sen!2suk" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            <Card.Body>
                                <Card.Title>Tower of London</Card.Title>
                                <Card.Text>
                                    Explore London's iconic castle and World Heritage Site. Get up close to the Crown Jewels.
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Rating: 10</ListGroup.Item>
                                <ListGroup.Item>Price: $</ListGroup.Item>
                                <ListGroup.Item>Walking time: 5 minutes</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="https://www.hrp.org.uk/tower-of-london/">Website</Card.Link>
                            </Card.Body>
                        </Card>
                        <Card bg='dark' key='dark' border='dark' text='white' style={{ width: '18rem' }} id="PlacesToGoCard">
                        <iframe title="iframetowerbridge" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1207.6829731972825!2d-0.07607115821440248!3d51.50583995619869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603438b65db49%3A0x9e78421a085a6f2d!2sTower%20Bridge!5e0!3m2!1sen!2suk!4v1659901134348!5m2!1sen!2suk" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            <Card.Body>
                                <Card.Title>Tower Bridge</Card.Title>
                                <Card.Text>
                                    High-level Walkways, take in stunning panoramic views and experience the thrill of seeing London life.
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Rating: 9</ListGroup.Item>
                                <ListGroup.Item>Price: $</ListGroup.Item>
                                <ListGroup.Item>Walking time: 10 minutes</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="https://www.towerbridge.org.uk/">Website</Card.Link>
                            </Card.Body>
                        </Card>
                        <Card bg='dark' key='dark' border='dark' text='white' style={{ width: '18rem' }} id="PlacesToGoCard">
                        <iframe title="iframedogandcone" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d541.7491877114439!2d-0.07455481732677305!3d51.506937138071216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603ff6d7e1023%3A0xe1579ebb2f66a914!2sDog%20%26%20Cone!5e0!3m2!1sen!2suk!4v1659901201159!5m2!1sen!2suk" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            <Card.Body>
                                <Card.Title>Dog & Cone</Card.Title>
                                <Card.Text>
                                    Best Ice-cream in the area!
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Rating: 7</ListGroup.Item>
                                <ListGroup.Item>Price: $</ListGroup.Item>
                                <ListGroup.Item>Walking time: 2 minutes</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="https://theuselessweb.com/">Website</Card.Link>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </div>
            </div>
        </>
    );
}

export default PlacesToGo;