import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slider = () => {
  const slideImages = [
    "images/hero-bg.jpg",
    "images/b2.jpg",
    "images/b3.jpg",
    "images/b4.jpg",
    "images/b5.jpg",
  ];

  const properties = {
    duration: 4000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 1.4,
    arrows: true,
    pauseOnHover: false,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    },
  };
  return (
    <div className="slide-container">
      <Slide {...properties}>
        <div className="each-slide ">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
            {/* <span>Slide 1</span> */}
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
            {/* <span>Slide 2</span> */}
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
            {/* <span>Slide 3</span> */}
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Slider;
