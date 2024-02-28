import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../components/Home.css'; 
import me from '../images/me.png';

const CardGrid = () => {
  return (
    <section className="wrapper" id="project">
      <Container>
        <Row>
          <Col className="text-center mb-5">
            <h1 className="display-4 font-weight-bolder">My Web Development Projects</h1>
            <p className="lead">Explore some of the web development projects I've worked on. From responsive websites to dynamic web applications, each project showcases my skills and expertise in web development.</p>
          </Col>
        </Row>
        <Row>
          {/* Repeat this block for each card */}
          <Col sm={12} md={6} lg={4} className="mb-4">
            <Card className="text-dark card-has-bg click-col" style={{backgroundImage: "url('https://source.unsplash.com/600x900/?tech,street')" }}>
              <div className="card-img-overlay d-flex flex-column">
                <div className="card-body">
                  <small className="card-meta mb-2">Web Developer</small>
                  <h4 className="card-title mt-0"><a className="text-dark" href="#" target="_blank">Portfolio Website</a></h4>
                  <small><i className="far fa-clock"></i>Elegant portfolio presenting my diverse web development projects and expertise.</small>
                </div>
                <div className="card-footer">
                  <div className="media">
                    <img className="mr-3 rounded-circle" src={me} alt="Generic placeholder image" style={{maxWidth: "50px"}} />
                    <div className="media-body">
                      <h6 className="my-0 text-dark d-block">Karan Rawat</h6>
                      <small>Frontend Developer</small>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
          {/* End of card block */}
          
          {/* Repeat this block for each card */}
          <Col sm={12} md={6} lg={4} className="mb-4">
            <Card className="text-dark card-has-bg click-col" style={{backgroundImage: "url('https://source.unsplash.com/600x900/?tech,street')" }}>
              <div className="card-img-overlay d-flex flex-column">
                <div className="card-body">
                  <small className="card-meta mb-2">Web Developer</small>
                  <h4 className="card-title mt-0"><a className="text-dark" href="https://github.com/Karanrawat02/Weather-App" target="_blank">Weather App</a></h4>
                  <small><i className="far fa-clock"></i>Stay informed on-the-go with our React.js weather app powered by live weather API.</small>
                </div>
                <div className="card-footer">
                  <div className="media">
                    <img className="mr-3 rounded-circle" src={me} alt="Generic placeholder image" style={{maxWidth: "50px"}} />
                    <div className="media-body">
                      <h6 className="my-0 text-dark d-block">Karan Rawat</h6>
                      <small>Frontend Developer</small>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
          {/* End of card block */}

          {/* Repeat this block for each card */}
          <Col sm={12} md={6} lg={4} className="mb-4">
            <Card className="text-dark card-has-bg click-col" style={{backgroundImage: "url('https://source.unsplash.com/600x900/?tech,street')" }}>
              <div className="card-img-overlay d-flex flex-column">
                <div className="card-body">
                  <small className="card-meta mb-2">Web Developer</small>
                  <h4 className="card-title mt-0"><a className="text-dark" href="https://github.com/Karanrawat02/IMDb-Clone-app" target="_blank">IMDB Clone Website</a></h4>
                  <small><i className="far fa-clock"></i>Discover movies with our IMDb clone, leveraging Movie API for seamless browsing.</small>
                </div>
                <div className="card-footer">
                  <div className="media">
                    <img className="mr-3 rounded-circle" src={me} alt="Generic placeholder image" style={{maxWidth: "50px"}} />
                    <div className="media-body">
                      <h6 className="my-0 text-dark d-block">Karan Rawat</h6>
                      <small>Frontend Developer</small>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
          {/* End of card block */}

          {/* Repeat this block for each card */}
          <Col sm={12} md={6} lg={4} className="mb-4">
            <Card className="text-dark card-has-bg click-col" style={{backgroundImage: "url('https://source.unsplash.com/600x900/?tech,street')" }}>
              <div className="card-img-overlay d-flex flex-column">
                <div className="card-body">
                  <small className="card-meta mb-2">Web Developer</small>
                  <h4 className="card-title mt-0"><a className="text-dark" href="https://karanrawat02.github.io/CRUD-App/" target="_blank">CRUD APP</a></h4>
                  <small><i className="far fa-clock"></i>Efficiently manage data with our React.js CRUD app for seamless interaction.</small>
                </div>
                <div className="card-footer">
                  <div className="media">
                    <img className="mr-3 rounded-circle" src={me} alt="Generic placeholder image" style={{maxWidth: "50px"}} />
                    <div className="media-body">
                      <h6 className="my-0 text-dark d-block">Karan Rawat</h6>
                      <small>Frontend Developer</small>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
          {/* End of card block */}

          {/* Repeat this block for each card */}
          <Col sm={12} md={6} lg={4} className="mb-4">
            <Card className="text-dark card-has-bg click-col" style={{backgroundImage: "url('https://source.unsplash.com/600x900/?tech,street')" }}>
              <div className="card-img-overlay d-flex flex-column">
                <div className="card-body">
                  <small className="card-meta mb-2">Web Developer</small>
                  <h4 className="card-title mt-0"><a className="text-dark" href="https://github.com/Karanrawat02/Ecommerce-App/tree/main/ecomapp" target="_blank">Ecommerce App</a></h4>
                  <small><i className="far fa-clock"></i> Shop seamlessly with our React.js Ecommerce app for effortless online shopping.</small>
                </div>
                <div className="card-footer">
                  <div className="media">
                    <img className="mr-3 rounded-circle" src={me} alt="Generic placeholder image" style={{maxWidth: "50px"}} />
                    <div className="media-body">
                      <h6 className="my-0 text-dark d-block">Karan Rawat</h6>
                      <small>Frontend Developer</small>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
          {/* End of card block */}

          {/* Repeat this block for each card */}
          <Col sm={12} md={6} lg={4} className="mb-4">
            <Card className="text-dark card-has-bg click-col" style={{backgroundImage: "url('https://source.unsplash.com/600x900/?tech,street')" }}>
              <div className="card-img-overlay d-flex flex-column">
                <div className="card-body">
                  <small className="card-meta mb-2">Web Developer</small>
                  <h4 className="card-title mt-0"><a className="text-dark" href="#" target="_blank">Blog App</a></h4>
                  <small><i className="far fa-clock"></i> Explore, share, and engage with our React.js-powered blog app for seamless content creation.</small>
                </div>
                <div className="card-footer">
                  <div className="media">
                    <img className="mr-3 rounded-circle" src={me} alt="Generic placeholder image" style={{maxWidth: "50px"}} />
                    <div className="media-body">
                      <h6 className="my-0 text-dark d-block">Karan Rawat</h6>
                      <small>Frontend Developer</small>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
          {/* End of card block */}
        </Row>
      </Container>
    </section>
  );
}

export default CardGrid;
