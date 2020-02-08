import React from "react";
import "./Header.css";
// import img_h01 from "../../assets/images/nzwswe-1.jpe";
// import img_h02 from "../../assets/images/nzwswe-1.jpe";
// import img_h03 from "../../assets/images/nzwswe-1.jpe";
import { Carousel } from "react-bootstrap";
import { Responsive, Segment } from "semantic-ui-react";
import { Container, Row, Col } from "shards-react";

import img_h01 from "../../assets/images/header/img01.png";
import img_h02 from "../../assets/images/header/img02.png";
import img_h03 from "../../assets/images/header/img03.png";

function Header() {
  return (
    <div>
      <Container fluid>
        {/* mobile */}
        <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
          <Row>
            <Col xs="12"></Col>
            <Col xs="12"></Col>
          </Row>
        </Responsive>
        {/*  */}
        <Responsive
          minWidth={Responsive.onlyTablet.minWidth}
          maxWidth={Responsive.onlyTablet.maxWidth}
        >
          {/*  */}
        </Responsive>
        {/*  */}
        <Responsive minWidth={Responsive.onlyComputer.minWidth}>
          <Row>
            <Col xs="12" className="h-header-com">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="h-header-img"
                    src={img_h01}
                    alt="First slide"
                  />
                  {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="h-header-img"
                    src={img_h02}
                    alt="Third slide"
                  />

                  {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="h-header-img"
                    src={img_h03}
                    alt="Third slide"
                  />

                  {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Responsive>
      </Container>
    </div>
  );
}

export default Header;
