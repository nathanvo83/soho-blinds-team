import React, { useEffect } from "react";
import { connect } from "react-redux";
import { menuTypes } from "../../constants/menuTypes";
import { actionTypes } from "../../constants/actionTypes";

import "./Product.css";
import "./Styles01.css";
import { Link } from "react-router-dom";
import Header from "./Header";
import logo from "./images/nzwswe-1.jpe";
import { Container, Row, Col, Badge } from "shards-react";

const Product = props => {
  const { selectMenu } = props;

  useEffect(() => {
    selectMenu(menuTypes.PRODUCT);
    return () => {
      // clear
    };
  }, [selectMenu]);

  return (
    <React.Fragment>
      <Header></Header>

      <Container>
        <div className="p-section-subtitle">
          <div className="p-section-title">
            quality, service and value for money
          </div>
          As blind manufacturers, we are dedicated to producing top quality made
          to measure blinds at affordable prices. There are no middle men,
          enabling us to produce our custom made blinds without additional
          overheads. We pass these savings directly on to you, allowing us to
          focus on what really matters…….
          <br></br>
        </div>

        <Row>
          <Col className="s-col" sm="4">
            <div className="hovereffect s-section">
              <div className="s-title">
                <div>BLINDS</div>
                <Badge theme="secondary">roller</Badge>{" "}
                <Badge theme="secondary">timber venitin</Badge>{" "}
                <Badge theme="secondary">vetical</Badge>{" "}
                <Badge theme="secondary">panel</Badge>{" "}
                <Badge theme="secondary">roman</Badge>{" "}
                <Badge theme="secondary">cellular</Badge>{" "}
              </div>
              <img className="img-responsive img-size" src={logo} alt="" />

              <div className="overlay">
                <h2>BLINDS COLLECTION</h2>
                <Link to="/product/blinds" tag={Link} exact>
                  More
                </Link>
              </div>
            </div>
          </Col>
          <Col className="s-col" sm="4">
            <div className="hovereffect s-section">
              <div className="s-title">
                <div>CURTAIN</div>
                <Badge theme="secondary">sheer</Badge>{" "}
                <Badge theme="secondary">wavefold</Badge>{" "}
              </div>
              <img className="img-responsive img-size" src={logo} alt="" />

              <div className="overlay">
                <h2>CURTAIN COLLECTION</h2>
                <Link to="/product/curtain" tag={Link} exact>
                  More
                </Link>
              </div>
            </div>
          </Col>
          <Col className="s-col" sm="4">
            <div className="hovereffect s-section">
              <div className="s-title">
                <div>SHUTTER</div>
                <Badge theme="secondary">timber</Badge>{" "}
                <Badge theme="secondary">alycore plus PVC</Badge>{" "}
                <Badge theme="secondary">exterior</Badge>
              </div>
              <img className="img-responsive img-size" src={logo} alt="" />

              <div className="overlay">
                <h2>SHUTTER COLLECTION</h2>
                <Link to="/product/shutter" tag={Link} exact>
                  More
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
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

export default connect(null, mapDispatchToProps)(Product);
