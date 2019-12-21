import React, { useEffect } from "react";
import { connect } from "react-redux";
import { menuTypes } from "../../constants/menuTypes";
import { actionTypes } from "../../constants/actionTypes";

import "./ContactUs.css";
import Header from "./Header";
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

const ContactUs = props => {
  const { selectMenu } = props;

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
          <Form>
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
                <Form>
                  <FormGroup>
                    {/* <label htmlFor="#yourname">Your name</label> */}
                    <FormInput id="#yourname" placeholder="Yourname (*)" />
                  </FormGroup>
                  <FormGroup>
                    {/* <label htmlFor="#email">Email address</label> */}
                    <FormInput id="#email" placeholder="Email (*)" />
                  </FormGroup>
                  <FormGroup>
                    {/* <label htmlFor="#phone">Phone number</label> */}
                    <FormInput id="#phone" placeholder="Phone (*)" />
                  </FormGroup>
                  <FormGroup>
                    {/* <label htmlFor="#subject">Subject</label> */}
                    <FormInput id="#subject" placeholder="Subject" />
                  </FormGroup>
                  <FormGroup>
                    {/* <label htmlFor="#query">Query</label> */}
                    <FormTextarea id="#query" placeholder="Query (*)" />
                  </FormGroup>

                  <Button theme="success">Send</Button>
                </Form>
              </Col>
            </Row>
          </Form>
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
