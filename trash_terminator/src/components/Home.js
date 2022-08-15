import React from "react";
import { Container, Image, Row } from "react-bootstrap";
import "./Home.css";

//Images
import seperateImg from "../images/segregate.png";
import scheduleImg from "../images/schedule.png";
import payImg from "../images/encash.png";
import recycleImg from "../images/recycle.jpg";
import newspaperImg from "../images/newspapers.png";
import metalImg from "../images/metal.png";
import plasticImg from "../images/plasticss.png";
import ewasteImg from "../images/ewaste.jpg";
import mailImg from "../images/mail.png";
import instaImg from "../images/instagram.png";
import fbImg from "../images/Facebook-logo.png";
const Home = () => {
  return (
    <>
      <div className="container my-5">
        <Container className="bg-image p-5 text-center shadow-1-strong rounded mb-5">
          <div className="center-text">
            <h1>
              <strong>Trash Terminator</strong>
            </h1>
            <h2>
              <strong>Waste Management Made Easy</strong>
            </h2>
          </div>
        </Container>
      </div>
      <Row className="heading">
        <h1>FILTER, SCHEDULE & RECYCLE</h1>
      </Row>
      <Row className="heading">
        <h2>4 Step Method:</h2>
      </Row>
      <Row>
        <div className="card">
          <Image src={seperateImg} className="images"></Image>
          <h3>1. Seperate</h3>
          <p>
            Seperate all the waste by their category like Newspaper, Plastic,
            E-Waste, etc.
          </p>
        </div>
        <div className="card">
          <Image src={scheduleImg} className="images"></Image>
          <h3>2. Schedule</h3>
          <p>
            Schedule the pickup date and time, so our team can examine and pick
            your trash.
          </p>
        </div>
        <div className="card">
          <Image src={payImg} className="images"></Image>
          <h3>3. Payment</h3>
          <p>
            Our collection team will pay you for the trash that was collected.
          </p>
        </div>
        <div className="card">
          <Image src={recycleImg} className="images"></Image>
          <h3>4. Recycle</h3>
          <p>
            The collected waste is now recycled or reused depending on the
            condition and the type of material it is.
          </p>
        </div>
      </Row>
      <Row className="heading">
        <h2>What We Collect</h2>
      </Row>
      <Row>
        <div className="card">
          <Image src={newspaperImg} className="images"></Image>
          <h3>Papers</h3>
          <ul>
            <li>Newspaper</li>
            <li>Books/Copies</li>
            <li>Paper Bags</li>
            <li>Carton Boxes</li>
            <li>Paper Utensils</li>
          </ul>
        </div>
        <div className="card">
          <Image src={metalImg} className="images"></Image>
          <h3>Metals</h3>
          <ul>
            <li>Utensils</li>
            <li>Aluminium, Copper</li>
            <li>Iron, Tin</li>
            <li>Tool Supplies</li>
          </ul>
        </div>
        <div className="card">
          <Image src={plasticImg} className="images"></Image>
          <h3>Plastics</h3>
          <ul>
            <li>Cups/Plates/Utensils</li>
            <li>Poly-Bags</li>
            <li>Bottles</li>
          </ul>
        </div>
        <div className="card">
          <Image src={ewasteImg} className="images"></Image>
          <h3>E-Waste</h3>
          <ul>
            <li>Computer parts</li>
            <li>TV Parts</li>
            <li>Electric Wires</li>
            <li>Old Electric Devices</li>
          </ul>
        </div>
      </Row>
      <Row>
        <div className="contact">
          <Row className="heading">
            <h2>CONTACT US</h2>
          </Row>
          <p>
            In case of any query you are free to contact us and we will do our
            best to solve your query.
          </p>
          <p>You can reach us at</p>
          <div className="socials">
            <div>
              <img src={mailImg} className="mail-logo" alt="" />
              abc123@example.com
            </div>
            <div>
              <img src={instaImg} className="instagram-logo" alt="" />
              Follow us on Instagram
            </div>
            <div>
              <img src={fbImg} className="facebook-logo" alt="" />
              Follow us on Facebook
            </div>
          </div>
        </div>
      </Row>
    </>
  );
};

export default Home;
