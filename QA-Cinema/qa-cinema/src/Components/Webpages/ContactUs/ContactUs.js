import './ContactUs.css';

function ContactUs() {
    return (
<form>
  <div class="form-group text-white">
    <label for="Input1">Full Name</label>
    <input type="text" class="form-control" id="InputName" placeholder="Enter Name Here"></input>
  </div>
  <div class="form-group">
    <label for="InputEmail">Email address</label>
    <input type="email" class="form-control" id="InputEmail" placeholder="name@example.com"></input>
  </div>
  <div class="form-group text-white">
    <label for="SelectTopic">Topic</label>
    <select multiple class="form-control" id="SelectTopic">
      <option>Showings</option>
      <option>Website</option>
      <option>Location</option>
      <option>Bookings</option>
      <option>Other</option>
    </select>
  </div>
  <div class="form-group text-white">
    <label for="InputInfo">Tell Us More</label>
    <textarea class="form-control" id="InputInfo" placeholder="Enter Text Here" rows="3"></textarea>
  </div>
  <button type="button" class="btn btn-primary">Submit</button>
</form>

    );
}

export default ContactUs;