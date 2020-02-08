import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "../../../components/header/Header";

import { menuTypes } from "../../../constants/menuTypes";
import { actionTypes } from "../../../constants/actionTypes";

import "./Home.css";
// import Header from "./Header";
import { Container, Row, Col } from "shards-react";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Responsive, Segment } from "semantic-ui-react";
import img_h01 from "../../assets/images/nzwswe-1.jpe";
import img_h02 from "../../assets/images/nzwswe-1.jpe";
import img_h03 from "../../assets/images/nzwswe-1.jpe";

import { home } from "../../../data/home";

const Home = props => {
  const { selectMenu } = props;

  useEffect(() => {
    selectMenu(menuTypes.HOME);
    return () => {
      // clear
    };
  }, [selectMenu]);

  return (
    <React.Fragment>
      {/* <div>
        <img src={img_h03} className="test-header-image"></img>
      </div>
      <br />
      <br />
      <br /> */}

      <Header></Header>
      <br />

      <div className="section01">
        <div className="section01-image01">
          <img src={img_h01} alt="img_h01"></img>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Container fluid>
        {/* mobile */}
        <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
          <Row className="h-section-01">
            <Col xs="12">
              <img
                className="h-section-img-m"
                src={img_h01}
                alt="img_h01"
              ></img>
            </Col>
            <Col xs="12">
              <div className="h-section-title">{home.section01.title}</div>
              <div className="h-section-subtitle">
                {home.section01.content.map(item => (
                  <div className="h-section-subtitle-item">{item}</div>
                ))}
              </div>
            </Col>
          </Row>
          <Row className="h-section-02">
            <Col xs="12">
              <img
                className="h-section-img-m"
                src={img_h02}
                alt="img_h02"
              ></img>
            </Col>
            <Col xs="12">
              <div className="h-section-title">{home.section02.title}</div>
              <div className="h-section-subtitle">
                {home.section02.content.map(item => (
                  <div className="h-section-subtitle-item">{item}</div>
                ))}
              </div>
            </Col>
          </Row>
          <Row className="h-section-03">
            <Col xs="12">
              <img
                className="h-section-img-m"
                src={img_h03}
                alt="img_h03"
              ></img>
            </Col>
            <Col xs="12">
              <div className="h-section-title">{home.section03.title}</div>
              <div className="h-section-subtitle">
                {home.section03.content.map(item => (
                  <div className="h-section-subtitle-item">{item}</div>
                ))}
              </div>
            </Col>
          </Row>
          <Row className="h-section-04">
            <Col xs="12">
              <div className="h-s04-header">About us</div>
            </Col>

            <Col xs="12">
              <div className="h-s04-col">
                <div className="h-s04-icon">
                  <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
                </div>
                <div className="h-s04-body">
                  <div className="h-s04-title">
                    {home.section04.aboutUs_01.title}
                  </div>
                  <div className="h-s04-subtitle">
                    {home.section04.aboutUs_01.content}
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="12">
              <div className="h-s04-col">
                <div className="h-s04-icon">
                  <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
                </div>
                <div className="h-s04-body">
                  <div className="h-s04-title">
                    {home.section04.aboutUs_02.title}
                  </div>
                  <div className="h-s04-subtitle">
                    {home.section04.aboutUs_02.content}
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="12">
              <div className="h-s04-col">
                <div className="h-s04-icon">
                  <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
                </div>
                <div className="h-s04-body">
                  <div className="h-s04-title">
                    {home.section04.aboutUs_03.title}
                  </div>
                  <div className="h-s04-subtitle">
                    {home.section04.aboutUs_03.content}
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="12">
              <div className="h-s04-col">
                <div className="h-s04-icon">
                  <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
                </div>
                <div className="h-s04-body">
                  <div className="h-s04-title">
                    {home.section04.aboutUs_04.title}
                  </div>
                  <div className="h-s04-subtitle">
                    {home.section04.aboutUs_04.content}
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="12">
              <div className="h-s04-col">
                <div className="h-s04-icon">
                  <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
                </div>
                <div className="h-s04-body">
                  <div className="h-s04-title">
                    {home.section04.aboutUs_05.title}
                  </div>
                  <div className="h-s04-subtitle">
                    {home.section04.aboutUs_05.content}
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="12">
              <div className="h-s04-col">
                <div className="h-s04-icon">
                  <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
                </div>
                <div className="h-s04-body">
                  <div className="h-s04-title">
                    {home.section04.aboutUs_06.title}
                  </div>
                  <div className="h-s04-subtitle">
                    {home.section04.aboutUs_06.content}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Responsive>

        {/* tablet */}
        <Responsive
          minWidth={Responsive.onlyTablet.minWidth}
          maxWidth={Responsive.onlyTablet.maxWidth}
        >
          <Row className="h-section-01">
            <Col xs="6">
              <img
                className="h-section-img-t"
                src={img_h01}
                alt="img_h01"
              ></img>
            </Col>
            <Col xs="6">
              <div className="h-section-title">{home.section01.title}</div>
              <div className="h-section-subtitle">
                {home.section01.content.map(item => (
                  <div className="h-section-subtitle-item">{item}</div>
                ))}
              </div>
            </Col>
          </Row>
          <Row className="h-section-02">
            <Col xs="6">
              <div className="h-section-title">{home.section02.title}</div>
              <div className="h-section-subtitle">
                {home.section02.content.map(item => (
                  <div className="h-section-subtitle-item">{item}</div>
                ))}
              </div>
            </Col>
            <Col xs="6">
              <img
                className="h-section-img-t"
                src={img_h02}
                alt="img_h02"
              ></img>
            </Col>
          </Row>
          <Row className="h-section-03">
            <Col xs="6">
              <img
                className="h-section-img-t"
                src={img_h03}
                alt="img_h03"
              ></img>
            </Col>
            <Col xs="6">
              <div className="h-section-title">{home.section03.title}</div>
              <div className="h-section-subtitle">
                {home.section03.content.map(item => (
                  <div className="h-section-subtitle-item">{item}</div>
                ))}
              </div>
            </Col>
          </Row>
          <Row className="h-section-04">
            <Col xs="12">
              <div className="h-s04-header">About us</div>
            </Col>
            <Col xs="6">
              <div className="h-s04-col">
                <div className="h-s04-icon">
                  <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
                </div>
                <div className="h-s04-body">
                  <div className="h-s04-title">
                    {home.section04.aboutUs_01.title}
                  </div>
                  <div className="h-s04-subtitle">
                    {home.section04.aboutUs_01.content}
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="6">
              <div className="h-s04-col">
                <div className="h-s04-icon">
                  <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
                </div>
                <div className="h-s04-body">
                  <div className="h-s04-title">
                    {home.section04.aboutUs_02.title}
                  </div>
                  <div className="h-s04-subtitle">
                    {home.section04.aboutUs_02.content}
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="6">
              <div className="h-s04-col">
                <div className="h-s04-icon">
                  <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
                </div>
                <div className="h-s04-body">
                  <div className="h-s04-title">
                    {home.section04.aboutUs_03.title}
                  </div>
                  <div className="h-s04-subtitle">
                    {home.section04.aboutUs_03.content}
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="6">
              <div className="h-s04-col">
                <div className="h-s04-icon">
                  <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
                </div>
                <div className="h-s04-body">
                  <div className="h-s04-title">
                    {home.section04.aboutUs_04.title}
                  </div>
                  <div className="h-s04-subtitle">
                    {home.section04.aboutUs_04.content}
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="6">
              <div className="h-s04-col">
                <div className="h-s04-icon">
                  <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
                </div>
                <div className="h-s04-body">
                  <div className="h-s04-title">
                    {home.section04.aboutUs_05.title}
                  </div>
                  <div className="h-s04-subtitle">
                    {home.section04.aboutUs_05.content}
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="6">
              <div className="h-s04-col">
                <div className="h-s04-icon">
                  <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
                </div>
                <div className="h-s04-body">
                  <div className="h-s04-title">
                    {home.section04.aboutUs_06.title}
                  </div>
                  <div className="h-s04-subtitle">
                    {home.section04.aboutUs_06.content}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Responsive>

        {/* destop */}
        <Responsive minWidth={Responsive.onlyComputer.minWidth}>
          <br />
          <div className="h-section-00-title">OUR WORKS</div>
          <div className="h-section-00-subtitle">
            Featured Service that We Provide
          </div>
          <Row className="h-section-00">
            <Col xs="3" className="promo">
              ON SALE 25%
            </Col>
            <Col xs="3">
              <div className="container">
                <img
                  className="h-section-img-d"
                  src={img_h01}
                  alt="img_h01"
                ></img>
                <div className="bottom-left">Blinds</div>
              </div>
            </Col>
            <Col xs="3">
              <div className="container">
                <img
                  className="h-section-img-d"
                  src={img_h01}
                  alt="img_h01"
                ></img>
                <div className="bottom-left">Curtain</div>
              </div>
            </Col>
            <Col xs="3">
              <div className="container">
                <img
                  className="h-section-img-d"
                  src={img_h01}
                  alt="img_h01"
                ></img>
                <div className="bottom-left">Shutter</div>
              </div>
            </Col>
          </Row>
          <Row className="h-section-01">
            <Col xs="6">
              <img
                className="h-section-img-d"
                src={img_h01}
                alt="img_h01"
              ></img>
            </Col>
            <Col xs="6">
              <div className="h-section-title-revert">
                {home.section01.title}
              </div>
              <div className="h-section-subtitle-revert">
                {home.section01.content.map(item => (
                  <div className="h-section-subtitle-item">{item}</div>
                ))}
              </div>
            </Col>
          </Row>
          <Row className="h-section-02">
            <Col xs="6">
              <div className="h-section-title">{home.section02.title}</div>
              <div className="h-section-subtitle">
                {home.section02.content.map(item => (
                  <div className="h-section-subtitle-item">{item}</div>
                ))}
              </div>
            </Col>
            <Col xs="6">
              <img
                className="h-section-img-d"
                src={img_h02}
                alt="img_h02"
              ></img>
            </Col>
          </Row>
          <Row className="h-section-03">
            <Col xs="6">
              <img
                className="h-section-img-d"
                src={img_h03}
                alt="img_h03"
              ></img>
            </Col>
            <Col xs="6">
              <div className="h-section-title">{home.section03.title}</div>
              <div className="h-section-subtitle">
                {home.section03.content.map(item => (
                  <div className="h-section-subtitle-item">{item}</div>
                ))}
              </div>
            </Col>
          </Row>

          <Row className="h-section-04">
            <Col xs="12">
              <div className="h-s04-header">About us</div>
            </Col>
            <Col xs="4">
              <div className="h-s04-col">
                <div className="h-s04-icon">
                  <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
                </div>
                <div className="h-s04-body">
                  <div className="h-s04-title">
                    {home.section04.aboutUs_01.title}
                  </div>
                  <div className="h-s04-subtitle">
                    {home.section04.aboutUs_01.content}
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="4">
              <div className="h-s04-col">
                <div className="h-s04-icon">
                  <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
                </div>
                <div className="h-s04-body">
                  <div className="h-s04-title">
                    {home.section04.aboutUs_02.title}
                  </div>
                  <div className="h-s04-subtitle">
                    {home.section04.aboutUs_02.content}
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="4">
              <div className="h-s04-col">
                <div className="h-s04-icon">
                  <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
                </div>
                <div className="h-s04-body">
                  <div className="h-s04-title">
                    {home.section04.aboutUs_03.title}
                  </div>
                  <div className="h-s04-subtitle">
                    {home.section04.aboutUs_03.content}
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="4">
              <div className="h-s04-col">
                <div className="h-s04-icon">
                  <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
                </div>
                <div className="h-s04-body">
                  <div className="h-s04-title">
                    {home.section04.aboutUs_04.title}
                  </div>
                  <div className="h-s04-subtitle">
                    {home.section04.aboutUs_04.content}
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="4">
              <div className="h-s04-col">
                <div className="h-s04-icon">
                  <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
                </div>
                <div className="h-s04-body">
                  <div className="h-s04-title">
                    {home.section04.aboutUs_05.title}
                  </div>
                  <div className="h-s04-subtitle">
                    {home.section04.aboutUs_05.content}
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="4">
              <div className="h-s04-col">
                <div className="h-s04-icon">
                  <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
                </div>
                <div className="h-s04-body">
                  <div className="h-s04-title">
                    {home.section04.aboutUs_06.title}
                  </div>
                  <div className="h-s04-subtitle">
                    {home.section04.aboutUs_06.content}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Responsive>
      </Container>
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

export default connect(null, mapDispatchToProps)(Home);
