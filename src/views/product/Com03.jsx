import React from "react";
import "./Com03.css";
import { Responsive } from "semantic-ui-react";
import { Container, Row, Col } from "shards-react";

const Com03 = props => {
  const { images } = props;
  return (
    <div className="com03">
      <Container fluid>
        <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
          <Row>
            <Col xs={12}>
              <div className="details-title">Our Collection</div>
            </Col>
          </Row>
          <Row>
            {images.map((item, idx) => (
              <Col xs={12} className="col-x">
                <img
                  className="com03-image-thumb"
                  key={idx}
                  src={item}
                  alt={idx}
                ></img>
              </Col>
            ))}
          </Row>
        </Responsive>
        <Responsive minWidth={Responsive.onlyComputer.minWidth}>
          <Row>
            <Col xs={12}>
              <div className="details-title">Our Collection</div>
            </Col>
          </Row>
          <Row>
            {images.map((item, idx) => (
              <Col xs={3} className="col-x">
                <img
                  className="com03-image-thumb"
                  key={idx}
                  src={item}
                  alt={idx}
                ></img>
              </Col>
            ))}
          </Row>
        </Responsive>
      </Container>
    </div>
  );
};

export default Com03;
