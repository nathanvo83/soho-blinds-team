import React, { useState } from "react";
import "./ShowRoom.css";
import Header from "../../components/Header/Header";
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

  const renderDetails = () => (
    <div className="contact-details">
      <div className="contact-details-title">What to expect</div>
      <div>
        Our advisors job is to make your life as easy as possible, with
        inspiring ideas and practical solutions for your home.
      </div>
      <div className="contact-details-subtitle">Your advisor will</div>
      <div className="contact-details-item">
        <FontAwesomeIcon icon={faHeart} className="contact-details-icon" />
        Take a relaxed approach, offering inspiring ideas and practical
        solutions
      </div>
      <div className="contact-details-item">
        <FontAwesomeIcon icon={faHeart} className="contact-details-icon" />
        Stay as long as you need, usually only around 45 minutes (a little
        longer for shutters and conservatory roof blinds)
      </div>
      <div className="contact-details-item">
        <FontAwesomeIcon icon={faHeart} className="contact-details-icon" />
        Measure your windows
      </div>
      <div className="contact-details-item">
        <FontAwesomeIcon icon={faHeart} className="contact-details-icon" />
        Provide an accurate quote for your chosen product
      </div>
    </div>
  );

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
        {renderShowRoom("")}
        {renderTitle()}
        <Grid columns="2" style={{ margin: 0 }}>
          <Grid.Row>
            <Grid.Column>{renderDetails()}</Grid.Column>
          </Grid.Row>
        </Grid>
        {renderNote()}
      </div>
    </div>
  );

  const renderMobile = () => (
    <div>
      <div className="contact-container-m">
        {renderShowRoom("m")}
        {renderTitle()}
        <Grid columns="1" style={{ margin: 0 }}>
          <Grid.Row>
            <Grid.Column>{renderDetails()}</Grid.Column>
          </Grid.Row>
        </Grid>
        {renderNote()}
      </div>
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
