import React, { useState } from "react";
import "./ShowRoom.css";
import Header from "../../components/Header/Header";
import Section01 from "./Section01";
import Section03 from "./Section03";
import Section04 from "./Section04";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as ROUTES from "../../constants/routes";

import {
  Form,
  Button,
  Grid,
  Responsive,
  TextArea,
  Input,
} from "semantic-ui-react";
import { faClock, faHeart, faHome } from "@fortawesome/free-solid-svg-icons";

const ShowRoom = () => {
  // const [errorQuery, setErrorQuery] = useState(false);

  const renderTitle = () => (
    <div className="contact-bottom">
      <a href={ROUTES.CONTACTUS + '#contact-showroom'} rel="noopener noreferrer">
        <Button className="CustomerFeedback-button">
          Book A Free Measure & Quote
        </Button>
      </a>
    </div>
  );

  const renderNote = () => {
    return (
      <div className="contact-note">
        *Terms and Conditions apply. Product design specifications and colours
        are subject to change without notice and may vary from those shown.
        Images displayed on website pages are for illustration purposes only.
        Images are intended to help illustrate how various products appear and
        how they can be applied in different situations.
      </div>
    );
  };

  const renderShowRoom = (type) => {
    return (
      <div className={`contact-showroom ${type}`}>
        <div className="title">
          <div className="text">showroom</div>
        </div>

        <div className="content">
          <div>
            <FontAwesomeIcon icon={faHome} className="icon" /> Auckland Showroom
            293 Dominion Road Mount Eden, Auckland 1024.
          </div>
          <div>
            <FontAwesomeIcon icon={faClock} className="icon" /> Visit by appointment only.
          </div>
        </div>
      </div>
    );
  };

  const renderDesktop = () => (
    <div>
      <Section04 />
      <div className="contact-container">
        {renderShowRoom("")}
        {renderTitle()}
      </div>
      <Section01 />
      <Section03 />
    </div>
  );

  const renderMobile = () => (
    <div>
      <Section04 />
      <div className="contact-container-m">
        {renderShowRoom("m")}
        {renderTitle()}
      </div>
      <Section01 />
      <Section03 />
    </div>
  );

  return (
    <React.Fragment>
      {/* <Header showQuote={false} showSale={false} showSlogan={false}></Header> */}
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        {/*  */}
        {renderMobile()}
      </Responsive>
      <Responsive
        minWidth={Responsive.onlyTablet.minWidth}
        maxWidth={Responsive.onlyTablet.maxWidth}
      >
        {renderMobile()}
      </Responsive>
      <Responsive minWidth={Responsive.onlyComputer.minWidth}>
        {renderDesktop()}
      </Responsive>
      <br />
      <br />
    </React.Fragment>
  );
};

export default ShowRoom;
