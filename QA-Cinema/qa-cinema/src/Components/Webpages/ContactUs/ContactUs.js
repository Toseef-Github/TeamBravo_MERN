import './ContactUs.css';

function ContactUs() {
    return (
<div class="text-white" id="form-div">
  <form align="center" class="form" id="form1" action="https://formsubmit.co/toseef.mehdi@hotmail.co.uk" method="POST">
  <div><label for="Input1">Full Name:</label>
  </div>
  <input type="text" name="name" required></input>
<div>
  <label for="InputEmail">Email address:</label>
  </div>
  <input type="text" name="email" required></input>
  <div>
  <label for="SelectTopic">Topic</label>
  </div>
    <select>
      <option>Showings</option>
      <option>Website</option>
      <option>Location</option>
      <option>Bookings</option>
      <option>Other</option>
    </select>

<div>
  <label for="InputInfo">Tell Us More:</label>
  </div>
  <input type="text" name="moreinfo" required></input>
<div>
  <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
</div>
    );
}

export default ContactUs;