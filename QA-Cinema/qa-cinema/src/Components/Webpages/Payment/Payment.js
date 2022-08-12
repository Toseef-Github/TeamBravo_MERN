import "./Payment.css";

function Payment() {
  return (
    <div class="row">
      <div class="col-75">
<div class="payemnetcontainer" >
          <form action="/action_page.php">
            <div class="row">
              <div class="col-50">
                <h3>Billing Address</h3>
                <label for="fname">
                  <i class="fa fa-user"></i> Full Name
                </label>
                <input
                  type="text"
                  id="fname"
                  name="firstname"nnnn
                  placeholder="Forename Surname"
                />
                <label for="email">
                  <i class="fa fa-envelope"></i> Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                />
                <label for="adr">
                  <i class="fa fa-address-card-o"></i> Address
                </label>
                <input
                  type="text"
                  id="adr"
                  name="address"
                  placeholder="195 Ber Street"
                />
                <label for="city">
                  <i class="fa fa-institution"></i> City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="London"
                />
                <div class="row">
                  <div class="col-50">
                    <label for="state">County</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      placeholder="Dagenham"
                    />
                  </div>
                  <div class="col-50">
                    <label for="zip">Post code</label>
                    <input
                      type="text"
                      id="zip"
                      name="zip"
                      
                    />
                  </div>
                </div>
              </div>
              <div class="col-50">
                <h3>Payment</h3>
                <label for="fname">Accepted Cards</label>
                <div class="icon-container">
                  <i class="fa fa-cc-visa" tyle={{ color: "navy" }}></i>
                  <i class="fa fa-cc-amex" style={{ color: "blue" }}></i>
                  <i class="fa fa-cc-mastercard" style={{ color: "red" }}></i>
                  <i class="fa fa-cc-discover" style={{ color: "orange" }}></i>
                </div>
                <label for="cname">Name on Card</label>
                <input
                  type="text"
                  id="cname"
                  name="cardname"
                  placeholder="John More Doe"
                ></input>
                <label for="ccnum">Credit card number</label>
                <input
                  type="text"
                  id="ccnum"
                  name="cardnumber"
                  placeholder="1111-2222-3333-4444"
                ></input>
                <label for="expmonth">Exp Month</label>
                <input
                  type="text"
                  id="expmonth"
                  name="expmonth"
                  placeholder="September"
                ></input>
                <div class="row">
                  <div class="col-50">
                    <label for="expyear">Exp Year</label>
                    <input
                      type="text"
                      id="expyear"
                      name="expyear"
                      placeholder="2018"
                    />
                  </div>
                  <div class="col-50">
                    <label for="cvv">CVV</label>
                    <input type="text" id="cvv" name="cvv" placeholder="352" />
                  </div>
                </div>
                <div class="row">
                </div>
              </div>
            </div>
            <label>
              <input type="checkbox" checked="checked" name="sameadr" />{" "}
              Shipping address same as billing
            </label>
            <input type="submit" value="Complete Payement" class="btnpayement" />

            <div class="col-25">
              <div class="payemnetcontainer">
                <h4>
                  Cart
                  <span class="price" style={{ color: "black" }}>
                    <i class="fa fa-shopping-cart"></i>
                    <b>4</b>
                  </span>
                </h4>
                <p>
                  <h7>Bulltet Train: 3 tickets </h7><span class="price">£30</span>
                </p>
                                
                <hr />
                <p>
                  Total{" "}
                  <span class="price" style={{ color: "white" }}>
                    <b>£30</b>
                  </span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;
