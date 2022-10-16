import React from "react";
import { Responsive } from "semantic-ui-react";
// import { Carousel } from "react-bootstrap";
import "./Com01.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Com01 = props => {
  const { images, title } = props;

  return (
    <div>
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Carousel
          showStatus={false}
          autoPlay={true}
          showThumbs={false}
          infiniteLoop={true}
          showArrows={false}
          className="com01-content"
        >
          <div>
            <img className="com01-image-m" src={images[0]} alt={title} />
          </div>
          <div>
            <img className="com01-image-m" src={images[1]} alt={title} />
          </div>
          <div>
            <img className="com01-image-m" src={images[2]} alt={title} />
          </div>
        </Carousel>
      </Responsive>
      <Responsive
        minWidth={Responsive.onlyTablet.minWidth}
        maxWidth={Responsive.onlyTablet.maxWidth}
      >
        <Carousel
          showStatus={false}
          autoPlay={true}
          showThumbs={false}
          infiniteLoop={true}
          showArrows={false}
          className="com01-content-t"
        >
          <div>
            <img className="com01-image-t" src={images[0]} alt={title} />
          </div>
          <div>
            <img className="com01-image-t" src={images[1]} alt={title} />
          </div>
          <div>
            <img className="com01-image-t" src={images[2]} alt={title} />
          </div>
        </Carousel>
      </Responsive>
      <Responsive minWidth={Responsive.onlyComputer.minWidth}>
        <Carousel
          showStatus={false}
          autoPlay={true}
          showThumbs={false}
          infiniteLoop={true}
          showArrows={false}
          className="com01-content-d"
        >
          <div>
            <img className="com01-image-d" src={images[0]} alt={title} />
          </div>
          <div>
            <img className="com01-image-d" src={images[1]} alt={title} />
          </div>
          <div>
            <img className="com01-image-d" src={images[2]} alt={title} />
          </div>
        </Carousel>
      </Responsive>
    </div>
  );
};

export default Com01;
