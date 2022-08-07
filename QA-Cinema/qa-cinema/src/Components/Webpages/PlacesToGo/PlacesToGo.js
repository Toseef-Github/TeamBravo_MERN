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
                            <Card.Img variant="top" src={require('./Images/MapSnipPingPong.png')} />
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
                            <Card.Img variant="top" src={require('./Images/MapSnipHonestBurger.png')} />
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
                            <Card.Img variant="top" src={require('./Images/MapSnipEmilias.png')} />
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
                            <Card.Img variant="top" src={require('./Images/MapSnipSlug&Lettuce.png')} />
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
                            <Card.Img variant="top" src={require('./Images/MapSnipKilikyas.png')} />
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
                            <Card.Img variant="top" src={require('./Images/MapSnipBeachBar.png')} />
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
                            <Card.Img variant="top" src={require('./Images/MapSnipTowerOfLondon.png')} />
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
                            <Card.Img variant="top" src={require('./Images/MapSnipTowerBridge.png')} />
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
                            <Card.Img variant="top" src={require('./Images/MapSnipDog&Cone.png')} />
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