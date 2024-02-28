import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../images/color-sharp.png";
import Html from "../images/html.png";
import css from "../images/css.png";
import Javascript from "../images/javascript.png"
import react from "../images/React.png";
import Bootstrap from "../images/bootstrap.png";
import Redux from "../images/redux.png";
import Nodejs from '../images/nodejs.png';
import Tailwindcss from '../images/tailwind-css.png';
import Shopify from '../images/shopify.png';
import Wordpress from '../images/wordpress.png';

function Skills() {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomInb text-white">
                        <h1>Skills</h1>
                        <h3 className='aboutme'>Web developer proficient in HTML, CSS, JavaScript, ReactJs, Redux and Bootstrap with a passion for crafting exceptional user interfaces. </h3>
                        <br />
                        <br />
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img className="Imageskill" src={Html} alt="Image" />
                                <h3>HTML</h3>
                            </div>
                            <div className="item">
                                <img className="Imageskill" src={css} alt="Image" />
                                <h3>CSS</h3>
                            </div>
                            <div className="item">
                                <img className="Imageskill" src={Javascript} alt="Image" />
                                <h3>JavaScript</h3>
                            </div>
                            <div className="item">
                                <img className="Imageskill" src={react} alt="Image" />
                                <h3>React</h3>
                            </div>
                            <div className="item">
                                <img className="Imageskill" src={Nodejs} alt="Image" />
                                <h3>NodeJs</h3>
                            </div>
                            <div className="item">
                                <img className="Imageskill" src={Redux} alt="Image" />
                                <h3>Redux</h3>
                            </div>
                            <div className="item">
                                <img className="Imageskill" src={Bootstrap} alt="Image" />
                                <h3>Bootstrap</h3>
                            </div>
                            <div className="item">
                                <img className="Imageskill" src={Tailwindcss} alt="Image" />
                                <h3>Taiwind CSS</h3>
                            </div>
                            <div className="item">
                                <img className="Imageskill" src={Shopify} alt="Image" />
                                <h3>Shopify</h3>
                            </div>
                            <div className="item">
                                <img className="Imageskill" src={Wordpress} alt="Image" />
                                <h3>Wordpress</h3>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Skills;