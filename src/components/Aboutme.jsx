import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../components/Home.css";
import Man from '../images/man.png';
import Work from '../images/briefcase.png';
import certifications from '../images/certificate.png';

function AboutMe() {
  return (
    <Container fluid className='aboutme-container' id="aboutme">
        <hr />
      <Row>
        <Col xs={12} className='d-flex justify-content-between mb-4'>
          <h2 className="text-center text-white">About</h2>
          <h2 className="text-center text-white">002</h2>
        </Col>
        <br />
        <br />
      </Row>
      <Row className='mb-4'>
        {/* Left Section */}
        <Col xs={12} md={6} className='text-start mb-4'>
          <div className="about-me-heading text-left d-flex">
            <img className='icon-image mx-2' src={Man} alt="man" />
            <h4>About Me</h4>
          </div>
        </Col>
        {/* Right Section */}
        <Col xs={12} md={6} className='text-start mb-4'>
          <div className="additional-info ">
            <h3 >Hi, I am Karan Rawat, a front-end developer dedicated to creating visually appealing and functional web experiences that are designed to enhance the user experience. With a background in product design, I bring a unique perspective to my work. I create aesthetically pleasing websites that not only look great, but also function seamlessly. When I'm not coding, you can find me exploring new destinations, sipping on unique teas, and staying up-to-date on the hottest javascript frameworks.</h3>
          </div>
        </Col>
      </Row>
      {/* Work Experience */}
      <Row>
        {/* Left Section */}
        <Col xs={12} md={6} className='text-start mb-4'>
          <div className="about-me-heading text-left d-flex">
            <img className='icon-image mx-2' src={Work} alt="Work Experience" />
            <h4>Work Experience</h4>
          </div>
        </Col>
        {/* Right Section */}
        <Col xs={12} md={6} className='text-start mb-4'>
          <div className="additional-info ">
            <div className='d-flex justify-content-between'>
                <h4 className='mx-1'>01/2023-06/2023</h4>
                <h4 className='mx-1'>Frontend Developer </h4>
                <h4 className='mx-1'>Infoscience Labs </h4>
                <h4 className='mx-1'>Delhi-Remote </h4>
            </div>
            <hr />
          </div>
          <div className="additional-info ">
            <div className='d-flex justify-content-between'>
                <h4 className='mx-1'>07/2023-present</h4>
                <h4 className='mx-1'>React JS Developer</h4>
                <h4 className='mx-1'>PlannDesign </h4>
                <h4 className='mx-1'>Delhi-Remote </h4>
            </div>
            <hr />
          </div>
        </Col>
      </Row>
      {/* Certifications */}
      <Row>
        {/* Left Section */}
        <Col xs={12} md={6} className='text-start mb-4'>
          <div className="about-me-heading text-left d-flex">
            <img className='icon-image mx-2' src={certifications} alt="Certifications" />
            <h4>Certifications</h4>
          </div>
        </Col>
        {/* Right Section */}
        <Col xs={12} md={6} className='text-start mb-4'>
          <div className="additional-info ">
          <h4>Responsive Web Design - freeCodeCamp</h4>
          <hr />
          <h4>JavaScript Algorithms and Data Structures - freeCodeCamp</h4>
          <hr />
          </div>
        </Col>
      </Row>
      <hr />
    </Container>
  );
}

export default AboutMe;

