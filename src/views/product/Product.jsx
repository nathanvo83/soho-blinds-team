import React, { useEffect } from "react";
import { connect } from "react-redux";
import { menuTypes } from "../../constants/menuTypes";
import { actionTypes } from "../../constants/actionTypes";
import { Responsive } from "semantic-ui-react";
import { Container, Row, Col } from "shards-react";
import Com01 from "./Com01";
import Com02 from "./Com02";
import Com03 from "./Com03";
import "./Product.css";

const Product = props => {
  const {
    selectMenu,
    title,
    tab01,
    tab02,
    content01,
    content02,
    images
  } = props;

  useEffect(() => {
    selectMenu(menuTypes.PRODUCT);
    return () => {
      // clear
    };
  }, [selectMenu]);
  return (
    <div>
      <Container fluid>
        <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
          <Row>
            <Col xs={12} className="p-part01-m">
              <Com01 images={images}></Com01>
            </Col>
            <Col xs={12}>
              <br />
              <Com02
                title={title}
                tab01={tab01}
                tab02={tab02}
                content01={content01}
                content02={content02}
              ></Com02>
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs={12}>
              <Com03 images={images}></Com03>
            </Col>
          </Row>
        </Responsive>
        <Responsive minWidth={Responsive.onlyComputer.minWidth}>
          <br />

          <Row>
            <Col xs={6}>
              <Com01 images={images}></Com01>
            </Col>
            <Col xs={6}>
              <Com02
                title={title}
                tab01={tab01}
                tab02={tab02}
                content01={content01}
                content02={content02}
              ></Com02>
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs={12}>
              <Com03 images={images}></Com03>
            </Col>
          </Row>
        </Responsive>
      </Container>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  selectMenu: menu =>
    dispatch({
      type: actionTypes.CHANGE_MENU,
      value: menu
    })
});

export default connect(null, mapDispatchToProps)(Product);
