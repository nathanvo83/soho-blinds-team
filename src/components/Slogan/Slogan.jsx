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
            <div>Best price and high quality</div>
            <div>for a better future.</div>
          </div>
        </div>
      </Responsive>
      <Responsive
        minWidth={Responsive.onlyTablet.minWidth}
        maxWidth={Responsive.onlyTablet.maxWidth}
      >
        <div className="slogan-t">
          <img className="slogan-01-t" src={price_icon} alt=""></img>
          <div className="slogan-02-t">
            <div>Best price and high quality</div>
            <div>for a better future.</div>
          </div>
        </div>
      </Responsive>
      <Responsive minWidth={Responsive.onlyComputer.minWidth}>
        <div className="slogan">
          <img className="slogan-01" src={price_icon} alt=""></img>

          <div className="slogan-02">
            <div>Best price and high quality</div>
            <div>for a better future.</div>
          </div>
        </div>
      </Responsive>
    </React.Fragment>
  );
};

export default Slogan;
