import React from "react";
import { Responsive } from "semantic-ui-react";
import "./Slogan.css";
import price_icon from "../../assets/images/slogan/best-price.png";

const Slogan = () => {
  return (
    <React.Fragment>
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <div className="slogan-m">
          <img className="slogan-01-m" src={price_icon} alt=""></img>
          <div className="slogan-02-m">
            Whether it's elegant draperies, roller blinds, or shutters you
            require, we will work with you to ensure that your window
            furnishings not only complete your architectural vision but
            possesses the enduring performance to withstand time.
          </div>
        </div>
      </Responsive>
      <Responsive
        minWidth={Responsive.onlyTablet.minWidth}
        maxWidth={Responsive.onlyTablet.maxWidth}
      >
        <div className="slogan-m">
          <img className="slogan-01-m" src={price_icon} alt=""></img>
          <div className="slogan-02-m">
            Whether it's elegant draperies, roller blinds, or shutters you
            require, we will work with you to ensure that your window
            furnishings not only complete your architectural vision but
            possesses the enduring performance to withstand time.
          </div>
        </div>
      </Responsive>
      <Responsive minWidth={Responsive.onlyComputer.minWidth}>
        <div className="slogan">
          <img className="slogan-01" src={price_icon} alt=""></img>

          <div className="slogan-02">
            Whether it's elegant draperies, roller blinds, or shutters you
            require, we will work with you to ensure that your window
            furnishings not only complete your architectural vision but
            possesses the enduring performance to withstand time.
          </div>
        </div>
      </Responsive>
    </React.Fragment>
  );
};

export default Slogan;
