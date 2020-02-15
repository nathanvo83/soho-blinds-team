import React from "react";
// import { Carousel } from "react-bootstrap";
import "./Com01.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Com01 = props => {
  const { images } = props;

  return (
    <div>
      <Carousel
        showStatus={false}
        autoPlay={true}
        showThumbs={false}
        infiniteLoop={true}
        showArrows={false}
        className="com01-content"
      >
        <div>
          <img className="com01-image" src={images[0]} alt="First slide" />
          {/* <img src="https://dummyimage.com/800x300/123/aaa" alt="First slide" /> */}
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img className="com01-image" src={images[1]} alt="First slide" />
          {/* <img src="https://dummyimage.com/800x300/123/aaa" alt="First slide" /> */}
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img className="com01-image" src={images[2]} alt="First slide" />
          {/* <img src="https://dummyimage.com/800x300/123/aaa" alt="First slide" /> */}
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </div>
  );
};

export default Com01;
