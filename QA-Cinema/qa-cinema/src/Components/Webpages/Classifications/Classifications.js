import './Classifications.css';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

function Classifications() {
    return (
        <>
            <div>
                <h1 id="Classificationsh1">Classifications</h1>
            </div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="First">(U) Suitable for all</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Second">(PG) Parental Guidance</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Third">(12A) Cinema for 12 and over</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Fourth">(12) Video for 12 and over</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Fifth">(15) For 15 and over</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Sixth">(18) Adults only</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Seventh">(R18) Adults for licensed premises</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="First">
                                <div id="ClassificationsTabDiv">
                                    <h2>Overview</h2>
                                    <p>
                                        A U film should be suitable for audiences aged four years and over, although it is impossible to predict what might upset any particular child. <br />
                                        U films should be set within a positive framework and should offer reassuring counterbalances to any violence, threat or horror. If a work is particularly suitable for pre-school children, this will be indicated in the Ratings Info.
                                    </p>
                                    <h2>Dangerous behaviour</h2>
                                    <p>
                                        Potentially dangerous or anti-social behaviour which young children may copy must be clearly disapproved of. No emphasis on realistic or easily accessible weapons.
                                    </p>
                                    <h2>Discrimination</h2>
                                    <p>
                                        Discriminatory language or behaviour is unlikely to be acceptable unless clearly disapproved of.
                                    </p>
                                    <h2>Drugs</h2>
                                    <p>
                                        References to illegal drugs or drug misuse must be infrequent and innocuous, or have a clear educational purpose or anti-drug message suitable for young children.
                                    </p>
                                    <h2>Language</h2>
                                    <p>
                                        Infrequent use only of very mild bad language.
                                    </p>
                                    <h2>
                                        Nudity
                                    </h2>
                                    <p
                                    >Occasional nudity, with no sexual context.
                                    </p>
                                    <h2>Sex</h2>
                                    <p>
                                        Only very mild sexual behaviour (for example, kissing) and references to such behaviour.
                                    </p>
                                    <h2>Threat and horror</h2>
                                    <p>
                                        Scary or potentially unsettling sequences should be mild, brief and unlikely to cause undue anxiety to young children. The outcome should be reassuring.
                                    </p>
                                    <h2>Violence</h2>
                                    <p>
                                        Violence will generally be very mild. Mild violence may be acceptable if it is justified by context (for example, comedic, animated, wholly unrealistic).
                                    </p>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Second">
                                                               <div id="ClassificationsTabDiv">
                                    <h2>Overview</h2>
                                    <p>
                                        A U film should be suitable for audiences aged four years and over, although it is impossible to predict what might upset any particular child. <br />
                                        U films should be set within a positive framework and should offer reassuring counterbalances to any violence, threat or horror. If a work is particularly suitable for pre-school children, this will be indicated in the Ratings Info.
                                    </p>
                                    <h2>Dangerous behaviour</h2>
                                    <p>
                                        Potentially dangerous or anti-social behaviour which young children may copy must be clearly disapproved of. No emphasis on realistic or easily accessible weapons.
                                    </p>
                                    <h2>Discrimination</h2>
                                    <p>
                                        Discriminatory language or behaviour is unlikely to be acceptable unless clearly disapproved of.
                                    </p>
                                    <h2>Drugs</h2>
                                    <p>
                                        References to illegal drugs or drug misuse must be infrequent and innocuous, or have a clear educational purpose or anti-drug message suitable for young children.
                                    </p>
                                    <h2>Language</h2>
                                    <p>
                                        Infrequent use only of very mild bad language.
                                    </p>
                                    <h2>
                                        Nudity
                                    </h2>
                                    <p
                                    >Occasional nudity, with no sexual context.
                                    </p>
                                    <h2>Sex</h2>
                                    <p>
                                        Only very mild sexual behaviour (for example, kissing) and references to such behaviour.
                                    </p>
                                    <h2>Threat and horror</h2>
                                    <p>
                                        Scary or potentially unsettling sequences should be mild, brief and unlikely to cause undue anxiety to young children. The outcome should be reassuring.
                                    </p>
                                    <h2>Violence</h2>
                                    <p>
                                        Violence will generally be very mild. Mild violence may be acceptable if it is justified by context (for example, comedic, animated, wholly unrealistic).
                                    </p>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Third">
                                                               <div id="ClassificationsTabDiv">
                                    <h2>Overview</h2>
                                    <p>
                                        A U film should be suitable for audiences aged four years and over, although it is impossible to predict what might upset any particular child. <br />
                                        U films should be set within a positive framework and should offer reassuring counterbalances to any violence, threat or horror. If a work is particularly suitable for pre-school children, this will be indicated in the Ratings Info.
                                    </p>
                                    <h2>Dangerous behaviour</h2>
                                    <p>
                                        Potentially dangerous or anti-social behaviour which young children may copy must be clearly disapproved of. No emphasis on realistic or easily accessible weapons.
                                    </p>
                                    <h2>Discrimination</h2>
                                    <p>
                                        Discriminatory language or behaviour is unlikely to be acceptable unless clearly disapproved of.
                                    </p>
                                    <h2>Drugs</h2>
                                    <p>
                                        References to illegal drugs or drug misuse must be infrequent and innocuous, or have a clear educational purpose or anti-drug message suitable for young children.
                                    </p>
                                    <h2>Language</h2>
                                    <p>
                                        Infrequent use only of very mild bad language.
                                    </p>
                                    <h2>
                                        Nudity
                                    </h2>
                                    <p
                                    >Occasional nudity, with no sexual context.
                                    </p>
                                    <h2>Sex</h2>
                                    <p>
                                        Only very mild sexual behaviour (for example, kissing) and references to such behaviour.
                                    </p>
                                    <h2>Threat and horror</h2>
                                    <p>
                                        Scary or potentially unsettling sequences should be mild, brief and unlikely to cause undue anxiety to young children. The outcome should be reassuring.
                                    </p>
                                    <h2>Violence</h2>
                                    <p>
                                        Violence will generally be very mild. Mild violence may be acceptable if it is justified by context (for example, comedic, animated, wholly unrealistic).
                                    </p>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Fourth">
                                                               <div id="ClassificationsTabDiv">
                                    <h2>Overview</h2>
                                    <p>
                                        A U film should be suitable for audiences aged four years and over, although it is impossible to predict what might upset any particular child. <br />
                                        U films should be set within a positive framework and should offer reassuring counterbalances to any violence, threat or horror. If a work is particularly suitable for pre-school children, this will be indicated in the Ratings Info.
                                    </p>
                                    <h2>Dangerous behaviour</h2>
                                    <p>
                                        Potentially dangerous or anti-social behaviour which young children may copy must be clearly disapproved of. No emphasis on realistic or easily accessible weapons.
                                    </p>
                                    <h2>Discrimination</h2>
                                    <p>
                                        Discriminatory language or behaviour is unlikely to be acceptable unless clearly disapproved of.
                                    </p>
                                    <h2>Drugs</h2>
                                    <p>
                                        References to illegal drugs or drug misuse must be infrequent and innocuous, or have a clear educational purpose or anti-drug message suitable for young children.
                                    </p>
                                    <h2>Language</h2>
                                    <p>
                                        Infrequent use only of very mild bad language.
                                    </p>
                                    <h2>
                                        Nudity
                                    </h2>
                                    <p
                                    >Occasional nudity, with no sexual context.
                                    </p>
                                    <h2>Sex</h2>
                                    <p>
                                        Only very mild sexual behaviour (for example, kissing) and references to such behaviour.
                                    </p>
                                    <h2>Threat and horror</h2>
                                    <p>
                                        Scary or potentially unsettling sequences should be mild, brief and unlikely to cause undue anxiety to young children. The outcome should be reassuring.
                                    </p>
                                    <h2>Violence</h2>
                                    <p>
                                        Violence will generally be very mild. Mild violence may be acceptable if it is justified by context (for example, comedic, animated, wholly unrealistic).
                                    </p>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Fifth">
                                                               <div id="ClassificationsTabDiv">
                                    <h2>Overview</h2>
                                    <p>
                                        A U film should be suitable for audiences aged four years and over, although it is impossible to predict what might upset any particular child. <br />
                                        U films should be set within a positive framework and should offer reassuring counterbalances to any violence, threat or horror. If a work is particularly suitable for pre-school children, this will be indicated in the Ratings Info.
                                    </p>
                                    <h2>Dangerous behaviour</h2>
                                    <p>
                                        Potentially dangerous or anti-social behaviour which young children may copy must be clearly disapproved of. No emphasis on realistic or easily accessible weapons.
                                    </p>
                                    <h2>Discrimination</h2>
                                    <p>
                                        Discriminatory language or behaviour is unlikely to be acceptable unless clearly disapproved of.
                                    </p>
                                    <h2>Drugs</h2>
                                    <p>
                                        References to illegal drugs or drug misuse must be infrequent and innocuous, or have a clear educational purpose or anti-drug message suitable for young children.
                                    </p>
                                    <h2>Language</h2>
                                    <p>
                                        Infrequent use only of very mild bad language.
                                    </p>
                                    <h2>
                                        Nudity
                                    </h2>
                                    <p
                                    >Occasional nudity, with no sexual context.
                                    </p>
                                    <h2>Sex</h2>
                                    <p>
                                        Only very mild sexual behaviour (for example, kissing) and references to such behaviour.
                                    </p>
                                    <h2>Threat and horror</h2>
                                    <p>
                                        Scary or potentially unsettling sequences should be mild, brief and unlikely to cause undue anxiety to young children. The outcome should be reassuring.
                                    </p>
                                    <h2>Violence</h2>
                                    <p>
                                        Violence will generally be very mild. Mild violence may be acceptable if it is justified by context (for example, comedic, animated, wholly unrealistic).
                                    </p>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Sixth">
                                                               <div id="ClassificationsTabDiv">
                                    <h2>Overview</h2>
                                    <p>
                                        A U film should be suitable for audiences aged four years and over, although it is impossible to predict what might upset any particular child. <br />
                                        U films should be set within a positive framework and should offer reassuring counterbalances to any violence, threat or horror. If a work is particularly suitable for pre-school children, this will be indicated in the Ratings Info.
                                    </p>
                                    <h2>Dangerous behaviour</h2>
                                    <p>
                                        Potentially dangerous or anti-social behaviour which young children may copy must be clearly disapproved of. No emphasis on realistic or easily accessible weapons.
                                    </p>
                                    <h2>Discrimination</h2>
                                    <p>
                                        Discriminatory language or behaviour is unlikely to be acceptable unless clearly disapproved of.
                                    </p>
                                    <h2>Drugs</h2>
                                    <p>
                                        References to illegal drugs or drug misuse must be infrequent and innocuous, or have a clear educational purpose or anti-drug message suitable for young children.
                                    </p>
                                    <h2>Language</h2>
                                    <p>
                                        Infrequent use only of very mild bad language.
                                    </p>
                                    <h2>
                                        Nudity
                                    </h2>
                                    <p
                                    >Occasional nudity, with no sexual context.
                                    </p>
                                    <h2>Sex</h2>
                                    <p>
                                        Only very mild sexual behaviour (for example, kissing) and references to such behaviour.
                                    </p>
                                    <h2>Threat and horror</h2>
                                    <p>
                                        Scary or potentially unsettling sequences should be mild, brief and unlikely to cause undue anxiety to young children. The outcome should be reassuring.
                                    </p>
                                    <h2>Violence</h2>
                                    <p>
                                        Violence will generally be very mild. Mild violence may be acceptable if it is justified by context (for example, comedic, animated, wholly unrealistic).
                                    </p>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Seventh">
                                                               <div id="ClassificationsTabDiv">
                                    <h2>Overview</h2>
                                    <p>
                                        A U film should be suitable for audiences aged four years and over, although it is impossible to predict what might upset any particular child. <br />
                                        U films should be set within a positive framework and should offer reassuring counterbalances to any violence, threat or horror. If a work is particularly suitable for pre-school children, this will be indicated in the Ratings Info.
                                    </p>
                                    <h2>Dangerous behaviour</h2>
                                    <p>
                                        Potentially dangerous or anti-social behaviour which young children may copy must be clearly disapproved of. No emphasis on realistic or easily accessible weapons.
                                    </p>
                                    <h2>Discrimination</h2>
                                    <p>
                                        Discriminatory language or behaviour is unlikely to be acceptable unless clearly disapproved of.
                                    </p>
                                    <h2>Drugs</h2>
                                    <p>
                                        References to illegal drugs or drug misuse must be infrequent and innocuous, or have a clear educational purpose or anti-drug message suitable for young children.
                                    </p>
                                    <h2>Language</h2>
                                    <p>
                                        Infrequent use only of very mild bad language.
                                    </p>
                                    <h2>
                                        Nudity
                                    </h2>
                                    <p
                                    >Occasional nudity, with no sexual context.
                                    </p>
                                    <h2>Sex</h2>
                                    <p>
                                        Only very mild sexual behaviour (for example, kissing) and references to such behaviour.
                                    </p>
                                    <h2>Threat and horror</h2>
                                    <p>
                                        Scary or potentially unsettling sequences should be mild, brief and unlikely to cause undue anxiety to young children. The outcome should be reassuring.
                                    </p>
                                    <h2>Violence</h2>
                                    <p>
                                        Violence will generally be very mild. Mild violence may be acceptable if it is justified by context (for example, comedic, animated, wholly unrealistic).
                                    </p>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </>
    );
}

export default Classifications;