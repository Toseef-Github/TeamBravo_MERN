import './Classifications.css';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';


function Classifications() {
    return (
        <>
            <div align="center">
                <h1 id="Classificationsh1">Classifications</h1>
            </div>
            
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Card align="center" style={{ width: '20rem' }}>
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
                        </Card>
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
                                        General viewing, but some scenes may be unsuitable for young children. A PG film should not unsettle a child aged around eight or older. Unaccompanied children of any age may watch, but parents are advised to consider whether the content may upset younger, or more sensitive, children.
                                    </p>
                                    <h2>Dangerous behaviour</h2>
                                    <p>
                                        No detail of potentially dangerous behaviour which young children are likely to copy, if that behaviour is presented as safe or fun. No glamorisation of realistic or easily accessible weapons such as knives. No focus on anti-social behaviour which young children are likely to copy.
                                    </p>
                                    <h2>Discrimination</h2>
                                    <p>
                                        Discriminatory language or behaviour is unlikely to be acceptable unless clearly disapproved of, or in an educational or historical context, or in a particularly dated work with no likely appeal to children. Discrimination by a character with whom children can readily identify is unlikely to be acceptable.
                                    </p>
                                    <h2>Drugs</h2>
                                    <p>
                                        References to illegal drugs or drug misuse must be innocuous or carry a suitable anti-drug message.
                                    </p>
                                    <h2>Language</h2>
                                    <p>
                                        Mild bad language only. Aggressive or very frequent use of mild bad language may result in a work being passed at a higher category.
                                    </p>
                                    <h2>
                                        Nudity
                                    </h2>
                                    <p>
                                        There may be nudity with no sexual context.
                                    </p>
                                    <h2>Sex</h2>
                                    <p>
                                        Sexual activity may be implied, but should be discreet and infrequent. Mild sex references and innuendo only.
                                    </p>
                                    <h2>Threat and horror</h2>
                                    <p>
                                        Frightening sequences or situations where characters are in danger should not be prolonged or intense. Fantasy settings and comedy may be mitigating factors.
                                    </p>
                                    <h2>Violence</h2>
                                    <p>
                                        Violence will usually be mild. However there may be moderate violence, without detail, if justified by its context (for example, history, comedy or fantasy).
                                    </p>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Third">
                                <div id="ClassificationsTabDiv">
                                    <h2>Overview</h2>
                                    <p>
                                        Films classified 12A and video works classified 12 contain material that is not generally suitable for children aged under 12. No one younger than 12 may see a 12A film in a cinema unless accompanied by an adult. Adults planning to take a child under 12 to view a 12A film should consider whether the film is suitable for that child. To help them decide, we recommend that they check the Ratings Info for that film in advance. No one younger than 12 may rent or buy a 12 rated video work.
                                    </p>
                                    <h2>Dangerous behaviour</h2>
                                    <p>
                                        No promotion of potentially dangerous behaviour which children are likely to copy. No glamorisation of realistic or easily accessible weapons such as knives. No endorsement of anti-social behaviour.
                                    </p>
                                    <h2>Discrimination</h2>
                                    <p>
                                        Discriminatory language or behaviour must not be endorsed by the work as a whole. Aggressive discriminatory language or behaviour is unlikely to be acceptable unless clearly condemned.
                                    </p>
                                    <h2>Drugs</h2>
                                    <p>
                                        Misuse of drugs must be infrequent and should not be glamorised or give detailed instruction.
                                    </p>
                                    <h2>Language</h2>
                                    <p>
                                        There may be moderate bad language. Strong language may be permitted, depending on the manner in which it is used, who is using the language, its frequency within the work as a whole and any special contextual justification.
                                    </p>
                                    <h2>
                                        Nudity
                                    </h2>
                                    <p>
                                        There may be nudity, but in a sexual context it must be brief and discreet.
                                    </p>
                                    <h2>Sex</h2>
                                    <p>
                                        Sexual activity may be briefly and discreetly portrayed. Moderate sex references are permitted, but frequent crude references are unlikely to be acceptable.
                                    </p>
                                    <h2>Threat and horror</h2>
                                    <p>
                                        There may be moderate physical and psychological threat and horror sequences. Although some scenes may be disturbing, the overall tone should not be. Horror sequences should not be frequent or sustained.
                                    </p>
                                    <h2>Violence</h2>
                                    <p>
                                        There may be moderate violence but it should not dwell on detail. There should be no emphasis on injuries or blood, but occasional gory moments may be permitted if justified by the context.
                                    </p>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Fourth">
                                <div id="ClassificationsTabDiv">
                                    <h2>Overview</h2>
                                    <p>
                                        Films classified 12A and video works classified 12 contain material that is not generally suitable for children aged under 12. No one younger than 12 may see a 12A film in a cinema unless accompanied by an adult. Adults planning to take a child under 12 to view a 12A film should consider whether the film is suitable for that child. To help them decide, we recommend that they check the Ratings Info for that film in advance. No one younger than 12 may rent or buy a 12 rated video work.
                                    </p>
                                    <h2>Dangerous behaviour</h2>
                                    <p>
                                        No promotion of potentially dangerous behaviour which children are likely to copy. No glamorisation of realistic or easily accessible weapons such as knives. No endorsement of anti-social behaviour.
                                    </p>
                                    <h2>Discrimination</h2>
                                    <p>
                                        Discriminatory language or behaviour must not be endorsed by the work as a whole. Aggressive discriminatory language or behaviour is unlikely to be acceptable unless clearly condemned.
                                    </p>
                                    <h2>Drugs</h2>
                                    <p>
                                        Misuse of drugs must be infrequent and should not be glamorised or give detailed instruction.
                                    </p>
                                    <h2>Language</h2>
                                    <p>
                                        There may be moderate bad language. Strong language may be permitted, depending on the manner in which it is used, who is using the language, its frequency within the work as a whole and any special contextual justification.
                                    </p>
                                    <h2>
                                        Nudity
                                    </h2>
                                    <p>
                                        There may be nudity, but in a sexual context it must be brief and discreet.
                                    </p>
                                    <h2>Sex</h2>
                                    <p>
                                        Sexual activity may be briefly and discreetly portrayed. Moderate sex references are permitted, but frequent crude references are unlikely to be acceptable.
                                    </p>
                                    <h2>Threat and horror</h2>
                                    <p>
                                        There may be moderate physical and psychological threat and horror sequences. Although some scenes may be disturbing, the overall tone should not be. Horror sequences should not be frequent or sustained.
                                    </p>
                                    <h2>Violence</h2>
                                    <p>
                                        There may be moderate violence but it should not dwell on detail. There should be no emphasis on injuries or blood, but occasional gory moments may be permitted if justified by the context.
                                    </p>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Fifth">
                                <div id="ClassificationsTabDiv">
                                    <h2>Overview</h2>
                                    <p>
                                        No one younger than 15 may see a 15 film in a cinema. No one younger than 15 may rent or buy a 15 rated video work.
                                    </p>
                                    <h2>Dangerous behaviour</h2>
                                    <p>
                                        Dangerous behaviour (for example, suicide, self-harming and asphyxiation) should not dwell on detail which could be copied. Whether the depiction of easily accessible weapons is acceptable will depend on factors such as realism, context and setting.
                                    </p>
                                    <h2>Discrimination</h2>
                                    <p>
                                        The work as a whole must not endorse discriminatory language or behaviour, although there may be racist, homophobic or other discriminatory themes and language.
                                    </p>
                                    <h2>Drugs</h2>
                                    <p>
                                        Drug taking may be shown but the work as a whole must not promote or encourage drug misuse (for example, through detailed instruction). The misuse of easily accessible and highly dangerous substances (for example, aerosols or solvents) is unlikely to be acceptable.
                                    </p>
                                    <h2>Language</h2>
                                    <p>
                                        There may be strong language. Very strong language may be permitted, depending on the manner in which it is used, who is using the language, its frequency within the work as a whole and any special contextual justification.
                                    </p>
                                    <h2>
                                        Nudity
                                    </h2>
                                    <p>
                                        There are no constraints on nudity in a non-sexual or educational context. Sexual nudity may be permitted but strong detail is likely to be brief or presented in a comic context.
                                    </p>
                                    <h2>Sex</h2>
                                    <p>
                                        Sexual activity may be portrayed, but usually without strong detail. There may be strong verbal references to sexual behaviour. Repeated very strong references, particularly those using pornographic language, are unlikely to be acceptable. Works whose primary purpose is sexual arousal are unacceptable.
                                    </p>
                                    <h2>Sexual Violence and sexual threat</h2>
                                    <p>
                                        There may be strong verbal references to sexual violence but any depiction of the stronger forms of sexual violence, including rape, must not be detailed or prolonged. A strong and sustained focus on sexual threat is unacceptable.
                                    </p>
                                    <h2>Threat and horror</h2>
                                    <p>
                                        There may be strong threat and horror. A sustained focus on sadistic threat is unlikely to be acceptable.
                                    </p>
                                    <h2>Violence</h2>
                                    <p>
                                        Violence may be strong but should not dwell on the infliction of pain or injury. The strongest gory images are unlikely to be acceptable. Strong sadistic violence is also unlikely to be acceptable.
                                    </p>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Sixth">
                                <div id="ClassificationsTabDiv">
                                    <h2>Overview</h2>
                                    <p>
                                        No one younger than 18 may see an 18 film in a cinema. No one younger than 18 may rent or buy an 18 rated video work. Adults should be free to choose their own entertainment.
                                    </p>
                                    <p>Exceptions are most likely in the following areas:
                                        <ul>
                                            <li>
                                                where the material is in breach of the criminal law, or has been created through the commission of a criminal offence.
                                            </li>
                                            <br />
                                            <li>
                                                where material or treatment appears to us to risk harm to individuals or, through their behaviour, to society. For example, the detailed portrayal of violent or dangerous acts, or of illegal drug use, which may cause harm to public health or morals. This may include portrayals of sadistic violence, rape or other non-consensual sexually violent behaviour which make this violence look appealing; reinforce the suggestion that victims enjoy rape or other non-consensual sexually violent behaviour; or which invite viewer complicity in rape, other non-consensual sexually violent behaviour or other harmful violent activities.
                                            </li>
                                            <br />
                                            <li>
                                                where there are more explicit images of sexual activity in the context of a sex work (see right) In the case of video works, which may be more accessible to younger viewers, intervention may be more frequent than for cinema films.
                                            </li>
                                        </ul>
                                    </p>
                                    <h2>Sex works at 18</h2>
                                    <p>
                                        Adults should be free to choose their own entertainment. Exceptions are most likely in the following areas:<br />
                                        Sex works are works whose primary purpose is sexual arousal or stimulation. Sex works containing only material which may be simulated are generally passed 18. Sex works containing clear images of real sex, strong fetish material, sexually explicit animated images, or other very strong sexual images will be confined to the R18 category. Material which is unacceptable in a sex work at R18 is also unacceptable in a sex work at 18.
                                    </p>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Seventh">
                                <div id="ClassificationsTabDiv">
                                    <h2>Overview</h2>
                                    <p>
                                    The R18 category is a special and legally-restricted classification primarily for explicit works of consenting sex or strong fetish material involving adults. Films may only be shown to adults in specially licensed cinemas, and video works may be supplied to adults only in licensed sex shops. R18 video works may not be supplied by mail order.
                                    </p>
                                    <h2>Searching for R18 titles</h2>
                                    <p>
                                    R18 titles are filtered out from the main public search as they can have explicit and/or offensive titles. Details of R18 works will only appear if you 'enable adult content' using the advanced search option. You'll also be prompted to enter a date of birth.
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