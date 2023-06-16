import React, { useEffect, useState } from "react";
import "./ContactUs.css";
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
import {
  emailjsKey,
  emailjsServiceId,
  emailjsTemplateIdContactUs,
} from "../../config/config";
import emailjs from "emailjs-com";
import { faClock, faHeart, faHome } from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  const [yourName, setYourName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [query, setQuery] = useState("");

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  useEffect(() => {
    let hash = window.location.hash;
    let el = hash ? document.querySelector(hash) : null;
    if (el) {
      window.scrollTo({
        top: el.offsetTop + 70,
        left: 0,
        behavior: "smooth",
      });
    }
  });
  // const [errorQuery, setErrorQuery] = useState(false);

  const yourNameHandler = (e) => {
    setYourName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };
  const subjectHandler = (e) => {
    setSubject(e.target.value);
  };
  const queryHandler = (e) => {
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

  const submitHandler = () => {
    const templateParas = {
      yourName,
      email,
      phone,
      subject,
      query,
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
          (result) => {
            console.log(result.text);
            resetHandler();
          },
          (error) => {
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
    <div className="contact-form">
      <Form onSubmit={submitHandler}>
        <Form.Field className="contact-field">
          <div className="contact-field-title">Your name:</div>
        </Form.Field>
        <Form.Field className="contact-field">
          <Input
            value={yourName}
            onChange={yourNameHandler}
            placeholder="Yourname"
          ></Input>
        </Form.Field>

        <Form.Field className="contact-field">
          <div className="contact-field-title">Email:</div>
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
          <div className="contact-field-title">Phone:</div>
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
          <div className="contact-field-title">Subject:</div>
        </Form.Field>
        <Form.Field className="contact-field">
          <Input
            value={subject}
            onChange={subjectHandler}
            placeholder="Subject"
          ></Input>
        </Form.Field>

        <Form.Field className="contact-field">
          <div className="contact-field-title">Your Message:</div>
        </Form.Field>
        <Form.Field className="contact-field">
          <TextArea
            value={query}
            onChange={queryHandler}
            placeholder="Your Message"
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
      <div id="contact-showroom" className={`contact-showroom ${type}`}>
        <div className="title">
          <div className="text">showroom</div>
        </div>

        <div className="content">
          <div>
            <FontAwesomeIcon icon={faHome} className="icon" /> 25/183
            Karangahape Road, Auckland CBD, Auckland 1010.
          </div>
          <div>
            <FontAwesomeIcon icon={faClock} className="icon" /> Visit by
            appointment only.
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
            <Grid.Column>{renderForm()}</Grid.Column>
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
            <Grid.Column>{renderForm()}</Grid.Column>
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

export default ContactUs;
