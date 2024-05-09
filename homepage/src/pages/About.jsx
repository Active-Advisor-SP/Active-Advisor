import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import "./about.css";
import FooterComp from "../components/FooterComp";
import { Link } from "react-router-dom/cjs/react-router-dom";

function About() {
  return (
    <div>
      <NavbarComponent />
      <div className="about">
        <h1 className="text-center header">About Us</h1>
        <section class="container py-4">
          <p class="lead text-center info">
            We are a group of passionate developers and designers who have come
            together to create this platform. We are here to bring communities
            together to help people to socialize with the help of power of
            sports!
          </p>
        </section>
        <section id="team" class="text-white pt-5  serviceCont">
            <div class="container text-center">
            <h3 className="text-center">Services</h3>

<div className="serviceImg">
  <div className="row">
    <div className="col-md-4 serviceCols">
      <img
        src="https://cdnwebsite.databox.com/wp-content/uploads/2019/09/09115927/content-marketing-communities.png"
        alt="communities"
        className="service"
      />
      <br />
      <Link to="/Communities" className="serviceLinks">Join Communities</Link>
    </div>
    <div className="col-md-4">
      <img
        src="https://t4.ftcdn.net/jpg/04/36/69/09/360_F_436690953_CAE5tKKUOUZUoPnLwv7IllHSpqLqiehk.jpg"
        alt="sportsfields"
        className="service"
      />
      <br />
      <Link to="/SportsFields" className="serviceLinks">Look For Sports Fields</Link>
    </div>
    <div className="col-md-4">
      <img
        src="https://images.ctfassets.net/rxqefefl3t5b/1W1RgkJB2MOnl9Dru658y3/3b5ed0c01622b109fefa9407f1917336/vs_hackney_festival_17_221.jpg?fl=progressive&q=80"
        alt="events"
        className="service"
      />
      <br />
      <Link to="/" className="serviceLinks">Checkout Upcoming Events</Link>
    </div>
  </div>
</div>
            </div>
        </section>
        
      </div>

      <FooterComp />
    </div>
  );
}

export default About;
