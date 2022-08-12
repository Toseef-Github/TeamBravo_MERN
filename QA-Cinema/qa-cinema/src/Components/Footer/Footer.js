import './Footer.css';

function Footer() {
    return (
        <div id="footerdiv">
            <section>
            <table id="footertable">
                <tr>
                    <th>Getting in Touch</th>
                    <th>About QA Cinema</th>
                    <th>Social</th>
                </tr>
                <tr>
                    <td><a href="ContactUs">Contact Us</a></td>
                    <td><a href="About">About Us</a></td>
                    <td>Facebook</td>
                </tr>
                <tr>
                    <td><a href="DiscussionBoard">Discussion Board</a></td>
                    <td><a href="Location">Location</a></td>
                    <td>Twitter</td>
                </tr>
                <tr>
                    <td><a href="PlacesToGo">Places to Go</a></td>
                    <td><a href="Screens">Screens</a></td>
                    <td>Instagram</td>
                </tr>
                <tr>
                    <td></td>
                    <td><a href="Classifications">Classifications</a></td>
                    <td>Youtube</td>
                </tr>
                <tr>
                    <td></td>
                    <td><a href="OpeningTimes">Opening Times</a></td>
                    <td></td>
                </tr>
            </table>
            </section>
        </div>
    );   
};
export default Footer;