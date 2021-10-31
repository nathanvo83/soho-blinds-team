import React, { useState } from "react";
import "./ShowRoom.css";
import Header from "../../components/Header/Header";
import Section01 from "./Section01";
import Section03 from "./Section03";
import Section04 from "./Section04";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    <div>
      <div className="contact-title">Book A Free Measure & Quote</div>
      <div className="contact-subtitle">
        Call 0800 765 567 or fill out the form below and a Soho sales
        representative will contact you.
      </div>
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
            <FontAwesomeIcon icon={faClock} className="icon" /> Open from 10:00
            am - 6:00 pm Monday - Saturday and Sunday by appointment.
          </div>
        </div>
      </div>
    );
  };

  const renderDesktop = () => (
    <div>
      <div className="contact-container">
        {renderTitle()}
        {renderShowRoom("")}
      </div>
      <Section01 />
      <Section03 />
      <Section04 />
    </div>
  );

  const renderMobile = () => (
    <div>
      <div className="contact-container-m">
        {renderTitle()}
        {renderShowRoom("m")}
      </div>
      <Section01 />
      <Section03 />
      <Section04 />
    </div>
  );

  return (
    <React.Fragment>
      <Header showQuote={false} showSale={false} showSlogan={false}></Header>
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
