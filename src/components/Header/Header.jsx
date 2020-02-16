import React from "react";
import { Responsive } from "semantic-ui-react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Header.css";

import Quote from "../Quote/Quote";
import img_h01 from "../../assets/images/header/img01.jpg";
import img_h02 from "../../assets/images/header/img02.jpeg";
import img_h03 from "../../assets/images/header/img03.png";

import Slogan from "../Slogan/Slogan";
import Sale from "../Sale/Sale";

// import img_h01 from "../../assets/images/curtain/day/day01.jpeg";
// import img_h02 from "../../assets/images/curtain/day/day02.jpg";
// import img_h03 from "../../assets/images/curtain/day/day03.jpeg";

const Header = () => {
  return (
    <div>
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <div className="h-outbound">
          <Carousel
            showStatus={false}
            autoPlay={true}
            showThumbs={false}
            infiniteLoop={true}
            showArrows={false}
            className="h-header-com"
          >
            <div>
              <img className="h-header-img" src={img_h01} alt="First slide" />
            </div>
            <div>
              <img className="h-header-img" src={img_h02} alt="First slide" />
            </div>
            <div>
              <img className="h-header-img" src={img_h03} alt="First slide" />
            </div>
          </Carousel>

          <div className="sale-area">
            <Sale></Sale>
          </div>
        </div>
        {/* <Carousel
          showStatus={false}
          autoPlay={true}
          showThumbs={false}
          infiniteLoop={true}
          showArrows={false}
          className="h-header-com"
        >
          <div>
            <img className="h-header-img" src={img_h01} alt="First slide" />
          </div>
          <div>
            <img className="h-header-img" src={img_h02} alt="First slide" />
          </div>
          <div>
            <img className="h-header-img" src={img_h03} alt="First slide" />
          </div>
        </Carousel>
         */}
        <Slogan></Slogan>
        <Quote></Quote>
      </Responsive>
      <Responsive minWidth={Responsive.onlyComputer.minWidth}>
        <div className="h-outbound">
          <Carousel
            showStatus={false}
            autoPlay={true}
            showThumbs={false}
            infiniteLoop={true}
            showArrows={false}
            className="h-header-com"
          >
            <div>
              <img className="h-header-img" src={img_h01} alt="First slide" />
            </div>
            <div>
              <img className="h-header-img" src={img_h02} alt="First slide" />
            </div>
            <div>
              <img className="h-header-img" src={img_h03} alt="First slide" />
            </div>
          </Carousel>
          <div className="quote-outbound">
            <div className="quote-area">
              <Quote></Quote>
            </div>
          </div>
          <div className="sale-area">
            <Sale></Sale>
          </div>
        </div>
        <Slogan></Slogan>
      </Responsive>
    </div>
  );
};

export default Header;
