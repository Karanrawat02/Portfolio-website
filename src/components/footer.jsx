import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer bg-dark text-light py-4">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="text-center text-lg-start mb-3 mb-sm-0">
          <a href="#home" className="text-decoration-none text-light fs-3">Karan Rawat</a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icons fs-3">
              <a href="https://www.linkedin.com/in/karan-rawat-01/" className="me-3 text-light" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="https://github.com/Karanrawat02" className="me-3 text-light" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="mailto:rawatkaranb02@gmail.com" className="text-light" target="_blank"><FontAwesomeIcon icon={faGoogle} /></a>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p className="mb-0">© 2024 Karan Rawat. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
