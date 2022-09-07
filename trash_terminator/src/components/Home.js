import React from "react";
import { Container, Row } from "react-bootstrap";
import Card from "./Card";
import "./Home.css";

//Images
import mailImg from "../images/mail.png";
import instaImg from "../images/instagram.png";
import fbImg from "../images/Facebook-logo.png";

const Home = () => {
  const processList = [
    {
      id: 1,
      img: require("../images/segregate.png"),
      title: "Seperate",
      textMsg:
        "Seperate all the waste by their category like Newspaper, Plastic, E-waste, etc",
    },
    {
      id: 2,
      img: require("../images/schedule.png"),
      title: "Schedule",
      textMsg:
        "Schedule the pickup date and time, so our team can examine and pick your trash.",
    },
    {
      id: 3,
      img: require("../images/encash.png"),
      title: "Payment",
      textMsg:
        "Our collection team will pay you for the trash that was collected.",
    },
    {
      id: 4,
      img: require("../images/recycle.jpg"),
      title: "Recycle",
      textMsg:
        "The collected waste is now recycled or reused depending on the condition and the type of material it is.",
    },
  ];
  const whatWeCollectList = [
    {
      id: 1,
      img: require("../images/newspapers.png"),
      title: "Papers",
      textMsg:
        "Newspaper, Books/Copies, Paper Bags, Carton Boxes, Paper Utensils",
    },
    {
      id: 2,
      img: require("../images/metal.png"),
      title: "Metals",
      textMsg: "Utensils, Aluminium, Copper, Iron, Tin, Tool Supplies",
    },
    {
      id: 3,
      img: require("../images/plasticss.png"),
      title: "Plastics",
      textMsg: "Cups/Plates/Utensils, Poly-Bags, Bottles",
    },
    {
      id: 4,
      img: require("../images/ewaste.jpg"),
      title: "E-Waste",
      textMsg: "Computer parts, TV Parts, Electric Wires, Old Electric Devices",
    },
  ];
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
        {processList.map((item) => (
          <Card items={item} key={item.id} />
        ))}
      </Row>
      <Row className="heading">
        <h2>What We Collect</h2>
      </Row>
      <Row>
        {whatWeCollectList.map((item) => (
          <Card items={item} />
        ))}
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
