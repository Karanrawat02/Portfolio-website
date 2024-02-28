import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Home.css";
import Headerimage from "../images/header-img.svg";
import arrow from '../images/arrow.png';

function Header() {
  return (
    <Container fluid className="header-container" id="home">
      <Row>
        {/* Left Section */}
        <Col xs={12} md={6} className="header-left m-auto">
          <div className="container">
            <div className="header-content p-2">
              <h2 className="header-heading text-white">
                A Frontend Developer with a background in Product design,
                focusing on creating visually appealing and functional web
                experiences
              </h2>
              <div className="d-flex justify-content-flex-end">
                <a className="contact-button text-left fs-4 text-white" href="Karan-Rawat-Resume.pdf" download="Karan-Rawat-Resume.pdf">Download Resume</a>
                <a className="mx-2" href="#"><img className="arrow m-auto"  src={arrow} alt="arrow" /></a>
              </div>
            </div>
          </div>
        </Col>
        {/* Right Section */}
        <Col xs={12} md={6} className="header-right">
          <div className="header-svg-container">
            <img className="headerimage" src={Headerimage} alt="headerimage" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
