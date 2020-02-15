import React from "react";
import { Form, Button } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import "./Quote.css";

const Quote = () => {
  return (
    <div className="quote-bg">
      <Form>
        <Form.Field className="quote-field">
          <div className="quote-phone">
            <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
            &nbsp; 0800 756 567
          </div>
        </Form.Field>
        <Form.Field>
          <div className="quote-title">Book A Free Measure & Quote</div>
        </Form.Field>
        <Form.Field className="quote-field">
          <input placeholder="Full name"></input>
        </Form.Field>
        <Form.Field className="quote-field">
          <input placeholder="Phone number"></input>
        </Form.Field>
        <Form.Field className="quote-field">
          <input placeholder="Email"></input>
        </Form.Field>
        <Form.Field className="quote-field">
          <input placeholder="Address"></input>
        </Form.Field>
        <Form.Field className="quote-field">
          <input placeholder="Postcode"></input>
        </Form.Field>
        <div className="quote-bottom">
          <Button type="submit" className="send-btn">
            &nbsp; SEND &nbsp;
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Quote;
