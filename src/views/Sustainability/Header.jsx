import React from "react";
import { Responsive } from "semantic-ui-react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Header.css";

import img_h01 from "../../assets/images/sustainability/h01.jpg";
import img_h02 from "../../assets/images/sustainability/h02.jpg";
import img_h03 from "../../assets/images/sustainability/h03.jpg";
import img_h04 from "../../assets/images/sustainability/h04.jpg";

// import Promotion from "../Promotion/Promotion";

const Header = (props) => {
  const { showQuote, showSale, showSlogan } = props;
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
          >
            <div>
              <img className="h-header-img-m" src={img_h01} alt="First slide" />
            </div>
            <div>
              <img className="h-header-img-m" src={img_h02} alt="First slide" />
            </div>
            <div>
              <img className="h-header-img-m" src={img_h03} alt="First slide" />
            </div>
          </Carousel>

        </div>

      </Responsive>

      <Responsive
        minWidth={Responsive.onlyTablet.minWidth}
        maxWidth={Responsive.onlyTablet.maxWidth}
      >
        <div className="h-outbound">
          <Carousel
            showStatus={false}
            autoPlay={true}
            showThumbs={false}
            infiniteLoop={true}
            showArrows={false}
          >
            <div>
              <img className="h-header-img-t" src={img_h01} alt="First slide" />
            </div>
            <div>
              <img className="h-header-img-t" src={img_h02} alt="First slide" />
            </div>
            <div>
              <img className="h-header-img-t" src={img_h03} alt="First slide" />
            </div>
            <div>
              <img className="h-header-img-t" src={img_h04} alt="First slide" />
            </div>
          </Carousel>

        </div>

      </Responsive>

      <Responsive minWidth={Responsive.onlyComputer.minWidth}>
        {/* <br /> */}
        <div className="h-outbound">
          <Carousel
            showStatus={false}
            autoPlay={true}
            showThumbs={false}
            infiniteLoop={true}
            showArrows={false}
          >
            <div>
              <img className="h-header-img-d" src={img_h01} alt="First slide" />
            </div>
            <div>
              <img className="h-header-img-d" src={img_h02} alt="First slide" />
            </div>
            <div>
              <img className="h-header-img-d" src={img_h03} alt="First slide" />
            </div>
            <div>
              <img className="h-header-img-d" src={img_h04} alt="First slide" />
            </div>
          </Carousel>

        </div>

      </Responsive>
    </div>
  );
};

export default Header;
