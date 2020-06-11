import React, { useState } from "react";
import "./ContactUs.css";
import Header from "../../components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkedAlt
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookSquare,
  faWhatsappSquare,
  faYoutubeSquare
} from "@fortawesome/free-brands-svg-icons";

import {
  Form,
  Button,
  Grid,
  Responsive,
  TextArea,
  Input
} from "semantic-ui-react";
import {
  emailjsKey,
  emailjsServiceId,
  emailjsTemplateIdContactUs
} from "../../config/config";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [yourName, setYourName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [query, setQuery] = useState("");

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  // const [errorQuery, setErrorQuery] = useState(false);

  const yourNameHandler = e => {
    setYourName(e.target.value);
  };
  const emailHandler = e => {
    setEmail(e.target.value);
  };
  const phoneHandler = e => {
    setPhone(e.target.value);
  };
  const subjectHandler = e => {
    setSubject(e.target.value);
  };
  const queryHandler = e => {
    setQuery(e.target.value);
  };

  const checkEmail = () => {
    setErrorEmail(email === "");
    return email === "";
  };

  const checkPhone = () => {
    setErrorPhone(phone === "");
    return phone === "";
  };

  // const checkQuery = () => {
  //   setErrorQuery(query === "");
  //   return query === "";
  // };

  const submitHandler = () => {
    const templateParas = {
      yourName,
      email,
      phone,
      subject,
      query
    };

    if (!checkPhone() & !checkEmail()) {
      emailjs
        .send(
          emailjsServiceId,
          emailjsTemplateIdContactUs,
          templateParas,
          emailjsKey
        )
        .then(
          result => {
            console.log(result.text);
            resetHandler();
          },
          error => {
            console.log(error.text);
          }
        );
    }
  };

  const resetHandler = () => {
    setYourName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setQuery("");

    setErrorEmail(false);
    setErrorPhone(false);
    // setErrorQuery(false);
  };

  const renderForm = () => (
    <div className="contact-bg">
      <Form onSubmit={submitHandler}>
        <Form.Field className="contact-field">
          <div>Your name:</div>
        </Form.Field>
        <Form.Field className="contact-field">
          <Input
            value={yourName}
            onChange={yourNameHandler}
            placeholder="Yourname"
          ></Input>
        </Form.Field>

        <Form.Field className="contact-field">
          <div>Email:</div>
        </Form.Field>
        <Form.Field className="contact-field">
          {errorEmail ? (
            <Input
              error
              value={email}
              onChange={emailHandler}
              placeholder="Email (*)"
            ></Input>
          ) : (
            <Input
              value={email}
              onChange={emailHandler}
              placeholder="Email (*)"
            ></Input>
          )}
        </Form.Field>

        <Form.Field className="contact-field">
          <div>Phone:</div>
        </Form.Field>
        <Form.Field className="contact-field">
          {errorPhone ? (
            <Input
              error
              value={phone}
              onChange={phoneHandler}
              placeholder="Phone (*)"
            ></Input>
          ) : (
            <Input
              value={phone}
              onChange={phoneHandler}
              placeholder="Phone (*)"
            ></Input>
          )}
        </Form.Field>

        <Form.Field className="contact-field">
          <div>Subject:</div>
        </Form.Field>
        <Form.Field className="contact-field">
          <Input
            value={subject}
            onChange={subjectHandler}
            placeholder="Subject"
          ></Input>
        </Form.Field>

        <Form.Field className="contact-field">
          <div>Query:</div>
        </Form.Field>
        <Form.Field className="contact-field">
          <TextArea
            value={query}
            onChange={queryHandler}
            placeholder="Query"
          ></TextArea>
        </Form.Field>

        <div className="contact-bottom">
          <Button type="submit" className="contact-send-btn">
            &nbsp; SEND &nbsp;
          </Button>
        </div>
      </Form>
    </div>
  );

  const renderDetails = () => (
    <div className="contact-details-bg">
      <div className="contact-details-title">
        <a
          href="https://www.facebook.com/SoHoBlindsNZ/"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faFacebookSquare}
            className="contact-brand-facebook"
          />
        </a>

        <FontAwesomeIcon
          icon={faWhatsappSquare}
          className="contact-brand-whatsapp"
        />

        <FontAwesomeIcon
          icon={faYoutubeSquare}
          className="contact-brand-youtube"
        />
      </div>
      <div className="contact-details-title">Contact detail</div>

      <div className="contact-details-subtitle">
        <FontAwesomeIcon icon={faEnvelope} className="contact-details-icon" />
        peter@sohoblinds.co.nz
      </div>
      <div className="contact-details-subtitle">
        <FontAwesomeIcon icon={faPhone} className="contact-details-icon" />
        0800 765 567
      </div>
      <div className="contact-details-subtitle">
        <FontAwesomeIcon
          icon={faMapMarkedAlt}
          className="contact-details-icon"
        />
        176 Broadway New Market, Auckland 1023.
        {/* <br />
        &nbsp; &nbsp; &nbsp; &nbsp; (Viewing By Appointment Only) */}
      </div>
    </div>
  );

  const renderDetailsMoblie = () => (
    <div className="contact-details-bg-m">
      <div className="contact-details-title">
        <a
          href="https://www.facebook.com/SoHoBlindsNZ/"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faFacebookSquare}
            className="contact-brand-facebook"
          />
        </a>

        <FontAwesomeIcon
          icon={faWhatsappSquare}
          className="contact-brand-whatsapp"
        />

        <FontAwesomeIcon
          icon={faYoutubeSquare}
          className="contact-brand-youtube"
        />
      </div>
      <div className="contact-details-title">Contact detail</div>

      <div className="contact-details-subtitle">
        <FontAwesomeIcon icon={faEnvelope} className="contact-details-icon" />
        peter@sohoblinds.co.nz
      </div>
      <div className="contact-details-subtitle">
        <FontAwesomeIcon icon={faPhone} className="contact-details-icon" />
        0800 765 567
      </div>
      <div className="contact-details-subtitle">
        <FontAwesomeIcon
          icon={faMapMarkedAlt}
          className="contact-details-icon"
        />
        176 Broadway New Market, Auckland 1023.
        {/* <br />
        &nbsp; &nbsp; &nbsp; &nbsp; (Viewing By Appointment Only) */}
      </div>
    </div>
  );

  const renderTitle = () => (
    <div>
      <div className="contact-title">Do you have a query?</div>
      <div className="contact-subtitle">
        We would love to discuss your blinds requirements with you.
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <Header showQuote={false} showSale={false} showSlogan={false}></Header>
      {renderTitle()}
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        {renderDetailsMoblie()}
        {renderForm()}
      </Responsive>
      <Responsive
        minWidth={Responsive.onlyTablet.minWidth}
        maxWidth={Responsive.onlyTablet.maxWidth}
      >
        {renderDetailsMoblie()}
        {renderForm()}
      </Responsive>
      <Responsive minWidth={Responsive.onlyComputer.minWidth}>
        <Grid columns="2" style={{ margin: 0 }}>
          <Grid.Row>
            <Grid.Column>{renderDetails()}</Grid.Column>
            <Grid.Column>{renderForm()}</Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
      <br />
      <br />
    </React.Fragment>
  );
};

export default ContactUs;
