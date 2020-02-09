import React, { useEffect } from "react";
import { connect } from "react-redux";
import { menuTypes } from "../../constants/menuTypes";
import { actionTypes } from "../../constants/actionTypes";
import Header from "../../components/header/Header";
import "./ContactUs.css";

import {
  Form,
  FormInput,
  FormGroup,
  Container,
  Row,
  Col,
  FormTextarea,
  Button
} from "shards-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";

const ContactUs = props => {
  const { selectMenu } = props;

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      // .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .sendForm(
        "sohoblinds",
        "template_F5oS1EzI",
        e.target,
        "user_LLMu57ayluwNKKBGwVB4M"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
  }

  useEffect(() => {
    selectMenu(menuTypes.CONTACTUS);
    return () => {
      // clear
    };
  }, [selectMenu]);

  return (
    <React.Fragment>
      <Header></Header>
      <div className="c-title">Do you have a query?</div>
      <div className="c-subtitle">
        We would love to discuss your blinds requirements with you.
      </div>

      <div className="c-section-01">
        <Container>
          <Row>
            <Col sm="12" md="6">
              <div className="c-s01-title">Contact detail</div>
              <div className="c-s01-subtitle">
                <FontAwesomeIcon icon={faEnvelope} /> peter@sohoblinds.co.nz{" "}
              </div>
              <div className="c-s01-subtitle">
                <FontAwesomeIcon icon={faPhone} /> 0226713464
              </div>
              <br />
              <br />
            </Col>
            <Col sm="12" md="6">
              {/* <form className="contact-form" onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" />
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
              </form> */}
              <Form onSubmit={sendEmail}>
                <FormGroup>
                  <FormInput
                    id="#your_name"
                    name="your_name"
                    placeholder="Yourname (*)"
                  />
                </FormGroup>
                <FormGroup>
                  <FormInput id="#email" name="email" placeholder="Email (*)" />
                </FormGroup>
                <FormGroup>
                  <FormInput id="#phone" name="phone" placeholder="Phone (*)" />
                </FormGroup>
                <FormGroup>
                  <FormInput
                    id="#subject"
                    name="subject"
                    placeholder="Subject"
                  />
                </FormGroup>
                <FormGroup>
                  <FormTextarea
                    id="#query"
                    name="query"
                    placeholder="Query (*)"
                  />
                </FormGroup>

                <Button theme="success" type="submit">
                  SEND
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  selectMenu: menu =>
    dispatch({
      type: actionTypes.CHANGE_MENU,
      value: menu
    })
});

export default connect(null, mapDispatchToProps)(ContactUs);
