import React from "react";
import { Carousel } from "react-bootstrap";
import "./Com01.css";

const Com01 = props => {
  const { images } = props;

  return (
    <div>
      <Carousel className="com01-content">
        <Carousel.Item>
          <img className="com01-image" src={images[0]} alt="First slide" />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img className="com01-image" src={images[1]} alt="Third slide" />

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img className="com01-image" src={images[2]} alt="Third slide" />

          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Com01;
