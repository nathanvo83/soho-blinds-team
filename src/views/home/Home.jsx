import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "../../components/header/Header";

import { menuTypes } from "../../constants/menuTypes";
import { actionTypes } from "../../constants/actionTypes";

import "./Home.css";
// import Header from "./Header";
import { Container, Row, Col } from "shards-react";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Responsive } from "semantic-ui-react";

// import img_h01 from "../../assets/images/nzwswe-1.jpe";
// import img_h02 from "../../assets/images/nzwswe-1.jpe";
// import img_h03 from "../../assets/images/nzwswe-1.jpe";

import roller01 from "../../assets/images/blinds/roller/roller01.png";
import roller02 from "../../assets/images/blinds/roller/roller02.jpg";
import roller03 from "../../assets/images/blinds/roller/roller03.png";
import roller04 from "../../assets/images/blinds/roller/roller04.png";
// import roller05 from "../../assets/images/blinds/roller/roller05.jpeg";

import timber01 from "../../assets/images/shutter/timber/timber01.png";
import timber02 from "../../assets/images/shutter/timber/timber02.png";
import timber03 from "../../assets/images/shutter/timber/timber03.png";
import timber04 from "../../assets/images/shutter/timber/timber04.png";
// import timber05 from "../../assets/images/shutter/timber/timber05.png";
// import timber06 from "../../assets/images/shutter/timber/timber06.png";

import zebra01 from "../../assets/images/blinds/zebra/zebra01.png";
import zebra02 from "../../assets/images/blinds/zebra/zebra02.png";
import zebra03 from "../../assets/images/blinds/zebra/zebra03.png";
import zebra04 from "../../assets/images/blinds/zebra/zebra04.png";
// import zebra05 from "../../assets/images/blinds/zebra/zebra05.png";
// import zebra06 from "../../assets/images/blinds/zebra/zebra06.png";

import h_01 from "../../assets/images/home/h-01.png";
import h_02 from "../../assets/images/home/h-02.png";
import h_03 from "../../assets/images/home/h-03.png";

import { home } from "../../data/home";
import * as ROUTES from "../../constants/routes";

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
      <Header></Header>

      <Container fluid>
        {/* mobile */}
        <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
          {/* section A */}
          <Row className="sectionA">
            <Col xs="12">
              <div className="sectionA-title">OUR WORKS</div>
              <div className="sectionA-subtitle">
                Featured Service that We Provide
              </div>
            </Col>

            <Col xs="12">
              <div className="sectionA-container">
                <img class="sectionA-image" src={h_01} alt="" />
                <div className="sectionA-top-left">blinds</div>
                <div className="sectionA-top-right">
                  <div className="sectionA-promo-normal">up to</div>
                  <div className="sectionA-promo-high">50% off</div>
                  <div className="sectionA-promo-normal">on selected</div>
                </div>
              </div>
              <div className="sectionA-details">
                <a
                  className="sectionA-item"
                  href={ROUTES.BLINDS_ROLLER}
                  rel="noopener noreferrer"
                >
                  Roller
                </a>
                {" / "}
                <a
                  className="sectionA-item"
                  href={ROUTES.BLINDS_VENETIAN}
                  rel="noopener noreferrer"
                >
                  Venetian
                </a>
                {" / "}
                <a
                  className="sectionA-item"
                  href={ROUTES.BLINDS_VERTICAL}
                  rel="noopener noreferrer"
                >
                  Vertical
                </a>
                {" / "}
                <a
                  className="sectionA-item"
                  href={ROUTES.BLINDS_ZEBRA}
                  rel="noopener noreferrer"
                >
                  Zebra
                </a>
              </div>
            </Col>

            <Col xs="12">
              <div className="sectionA-container">
                <img class="sectionA-image" src={h_02} alt="" />
                <div className="sectionA-top-left">curtain</div>
                <div className="sectionA-top-right">
                  <div className="sectionA-promo-normal">up to</div>
                  <div className="sectionA-promo-high">50% off</div>
                  <div className="sectionA-promo-normal">on selected</div>
                </div>
              </div>
              <div className="sectionA-details">
                <a
                  className="sectionA-item"
                  href={ROUTES.CURTAIN_WAVE}
                  rel="noopener noreferrer"
                >
                  Wave
                </a>
                {" / "}
                <a
                  className="sectionA-item"
                  href={ROUTES.CURTAIN_EYELET}
                  rel="noopener noreferrer"
                >
                  Eyelet
                </a>
                {" / "}
                <a
                  className="sectionA-item"
                  href={ROUTES.CURTAIN_PINCHPLEAT}
                  rel="noopener noreferrer"
                >
                  Pinch Pleat
                </a>
              </div>
            </Col>
            <Col xs="12">
              <div className="sectionA-container">
                <img class="sectionA-image" src={h_03} alt="" />
                <div className="sectionA-top-left">shutter</div>
                <div className="sectionA-top-right">
                  <div className="sectionA-promo-normal">up to</div>
                  <div className="sectionA-promo-high">50% off</div>
                  <div className="sectionA-promo-normal">on selected</div>
                </div>
              </div>

              <div className="sectionA-details">
                <a
                  className="sectionA-item"
                  href={ROUTES.SHUTTER_TIMBER}
                  rel="noopener noreferrer"
                >
                  Timber
                </a>
                {" / "}

                <a
                  className="sectionA-item"
                  href={ROUTES.SHUTTER_ALYCOREPLUSPVC}
                  rel="noopener noreferrer"
                >
                  Alycore plus PVC
                </a>
                {" / "}

                <a
                  className="sectionA-item"
                  href={ROUTES.SHUTTER_EXTERIOR}
                  rel="noopener noreferrer"
                >
                  Exterior
                </a>
              </div>
            </Col>
          </Row>
          {/* section 01 */}
          <Row className="section01-outbound">
            <Col xs="12" className="section-center">
              <div class="section01-m">
                <img class="section01-image01-m" src={roller01} alt="" />
                <img class="section01-image02-m" src={roller02} alt="" />
                <img class="section01-image03-m" src={roller03} alt="" />
                <img class="section01-image04-m" src={roller04} alt="" />
              </div>
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
          {/* section 02 */}
          <Row className="section02-outbound">
            <Col xs="12" className="section-center">
              <div class="section02-m">
                <img class="section02-image01-m" src={timber01} alt="" />
                <img class="section02-image02-m" src={timber02} alt="" />
                <img class="section02-image03-m" src={timber03} alt="" />
                <img class="section02-image04-m" src={timber04} alt="" />
              </div>
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
          {/* section 03 */}
          <Row className="section01-outbound">
            <Col xs="12" className="section-center">
              <div class="section01-m">
                <img class="section01-image01-m" src={zebra01} alt="" />
                <img class="section01-image02-m" src={zebra02} alt="" />
                <img class="section01-image03-m" src={zebra03} alt="" />
                <img class="section01-image04-m" src={zebra04} alt="" />
              </div>
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
          {/* section 04 */}
          <Row className="section-04">
            <Col xs="12">
              <div className="s04-header">About us</div>
            </Col>
            <Col xs="12">
              <div className="s04-col">
                <div className="s04-icon">
                  <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
                </div>
                <div className="s04-body">
                  <div className="s04-title">
                    {home.section04.aboutUs_01.title}
                  </div>
                  <div className="s04-subtitle">
                    {home.section04.aboutUs_01.content}
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="12">
              <div className="s04-col">
                <div className="s04-icon">
                  <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
                </div>
                <div className="s04-body">
                  <div className="s04-title">
                    {home.section04.aboutUs_02.title}
                  </div>
                  <div className="s04-subtitle">
                    {home.section04.aboutUs_02.content}
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="12">
              <div className="s04-col">
                <div className="s04-icon">
                  <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
                </div>
                <div className="s04-body">
                  <div className="s04-title">
                    {home.section04.aboutUs_03.title}
                  </div>
                  <div className="s04-subtitle">
                    {home.section04.aboutUs_03.content}
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="12">
              <div className="s04-col">
                <div className="s04-icon">
                  <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
                </div>
                <div className="s04-body">
                  <div className="s04-title">
                    {home.section04.aboutUs_04.title}
                  </div>
                  <div className="s04-subtitle">
                    {home.section04.aboutUs_04.content}
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="12">
              <div className="s04-col">
                <div className="s04-icon">
                  <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
                </div>
                <div className="s04-body">
                  <div className="s04-title">
                    {home.section04.aboutUs_05.title}
                  </div>
                  <div className="s04-subtitle">
                    {home.section04.aboutUs_05.content}
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="12">
              <div className="s04-col">
                <div className="s04-icon">
                  <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
                </div>
                <div className="s04-body">
                  <div className="s04-title">
                    {home.section04.aboutUs_06.title}
                  </div>
                  <div className="s04-subtitle">
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
          {/* section A */}
          <Row className="sectionA">
            <Col xs="12">
              <div className="sectionA-title">OUR WORKS</div>
              <div className="sectionA-subtitle">
                Featured Service that We Provide
              </div>
            </Col>

            <Col xs="12">
              <div className="sectionA-container">
                <img class="sectionA-image" src={h_01} alt="" />
                <div className="sectionA-top-left">blinds</div>
                <div className="sectionA-top-right">
                  <div className="sectionA-promo-normal">up to</div>
                  <div className="sectionA-promo-high">50% off</div>
                  <div className="sectionA-promo-normal">on selected</div>
                </div>
              </div>
              <div className="sectionA-details">
                <a
                  className="sectionA-item"
                  href={ROUTES.BLINDS_ROLLER}
                  rel="noopener noreferrer"
                >
                  Roller
                </a>
                {" / "}
                <a
                  className="sectionA-item"
                  href={ROUTES.BLINDS_VENETIAN}
                  rel="noopener noreferrer"
                >
                  Venetian
                </a>
                {" / "}
                <a
                  className="sectionA-item"
                  href={ROUTES.BLINDS_VERTICAL}
                  rel="noopener noreferrer"
                >
                  Vertical
                </a>
                {" / "}
                <a
                  className="sectionA-item"
                  href={ROUTES.BLINDS_ZEBRA}
                  rel="noopener noreferrer"
                >
                  Zebra
                </a>
              </div>
            </Col>

            <Col xs="12">
              <div className="sectionA-container">
                <img class="sectionA-image" src={h_02} alt="" />
                <div className="sectionA-top-left">curtain</div>
                <div className="sectionA-top-right">
                  <div className="sectionA-promo-normal">up to</div>
                  <div className="sectionA-promo-high">50% off</div>
                  <div className="sectionA-promo-normal">on selected</div>
                </div>
              </div>
              <div className="sectionA-details">
                <a
                  className="sectionA-item"
                  href={ROUTES.CURTAIN_WAVE}
                  rel="noopener noreferrer"
                >
                  Wave
                </a>
                {" / "}
                <a
                  className="sectionA-item"
                  href={ROUTES.CURTAIN_EYELET}
                  rel="noopener noreferrer"
                >
                  Eyelet
                </a>
                {" / "}
                <a
                  className="sectionA-item"
                  href={ROUTES.CURTAIN_PINCHPLEAT}
                  rel="noopener noreferrer"
                >
                  Pinch Pleat
                </a>
              </div>
            </Col>
            <Col xs="12">
              <div className="sectionA-container">
                <img class="sectionA-image" src={h_03} alt="" />
                <div className="sectionA-top-left">shutter</div>
                <div className="sectionA-top-right">
                  <div className="sectionA-promo-normal">up to</div>
                  <div className="sectionA-promo-high">50% off</div>
                  <div className="sectionA-promo-normal">on selected</div>
                </div>
              </div>

              <div className="sectionA-details">
                <a
                  className="sectionA-item"
                  href={ROUTES.SHUTTER_TIMBER}
                  rel="noopener noreferrer"
                >
                  Timber
                </a>
                {" / "}

                <a
                  className="sectionA-item"
                  href={ROUTES.SHUTTER_ALYCOREPLUSPVC}
                  rel="noopener noreferrer"
                >
                  Alycore plus PVC
                </a>
                {" / "}

                <a
                  className="sectionA-item"
                  href={ROUTES.SHUTTER_EXTERIOR}
                  rel="noopener noreferrer"
                >
                  Exterior
                </a>
              </div>
            </Col>
          </Row>
          {/* section 01 */}
          <Row className="section01-outbound">
            <Col xs="12" className="section-center">
              <div class="section01-m">
                <img class="section01-image01-m" src={roller01} alt="" />
                <img class="section01-image02-m" src={roller02} alt="" />
                <img class="section01-image03-m" src={roller03} alt="" />
                <img class="section01-image04-m" src={roller04} alt="" />
              </div>
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
          {/* section 02 */}
          <Row className="section02-outbound">
            <Col xs="12" className="section-center">
              <div class="section02-m">
                <img class="section02-image01-m" src={timber01} alt="" />
                <img class="section02-image02-m" src={timber02} alt="" />
                <img class="section02-image03-m" src={timber03} alt="" />
                <img class="section02-image04-m" src={timber04} alt="" />
              </div>
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
          {/* section 03 */}
          <Row className="section01-outbound">
            <Col xs="12" className="section-center">
              <div class="section01-m">
                <img class="section01-image01-m" src={zebra01} alt="" />
                <img class="section01-image02-m" src={zebra02} alt="" />
                <img class="section01-image03-m" src={zebra03} alt="" />
                <img class="section01-image04-m" src={zebra04} alt="" />
              </div>
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
          {/* section 04 */}
          <Row className="section-04">
            <Col xs="12">
              <div className="s04-header">About us</div>
            </Col>
            <Col xs="6">
              <div className="s04-col">
                <div className="s04-icon">
                  <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
                </div>
                <div className="s04-body">
                  <div className="s04-title">
                    {home.section04.aboutUs_01.title}
                  </div>
                  <div className="s04-subtitle">
                    {home.section04.aboutUs_01.content}
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="6">
              <div className="s04-col">
                <div className="s04-icon">
                  <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
                </div>
                <div className="s04-body">
                  <div className="s04-title">
                    {home.section04.aboutUs_02.title}
                  </div>
                  <div className="s04-subtitle">
                    {home.section04.aboutUs_02.content}
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="6">
              <div className="s04-col">
                <div className="s04-icon">
                  <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
                </div>
                <div className="s04-body">
                  <div className="s04-title">
                    {home.section04.aboutUs_03.title}
                  </div>
                  <div className="s04-subtitle">
                    {home.section04.aboutUs_03.content}
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="6">
              <div className="s04-col">
                <div className="s04-icon">
                  <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
                </div>
                <div className="s04-body">
                  <div className="s04-title">
                    {home.section04.aboutUs_04.title}
                  </div>
                  <div className="s04-subtitle">
                    {home.section04.aboutUs_04.content}
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="6">
              <div className="s04-col">
                <div className="s04-icon">
                  <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
                </div>
                <div className="s04-body">
                  <div className="s04-title">
                    {home.section04.aboutUs_05.title}
                  </div>
                  <div className="s04-subtitle">
                    {home.section04.aboutUs_05.content}
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="6">
              <div className="s04-col">
                <div className="s04-icon">
                  <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
                </div>
                <div className="s04-body">
                  <div className="s04-title">
                    {home.section04.aboutUs_06.title}
                  </div>
                  <div className="s04-subtitle">
                    {home.section04.aboutUs_06.content}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Responsive>

        {/* desktop */}
        <Responsive minWidth={Responsive.onlyComputer.minWidth}>
          {/* section A */}
          <Row className="sectionA">
            <Col xs="12">
              <div className="sectionA-title">OUR WORKS</div>
              <div className="sectionA-subtitle">
                Featured Service that We Provide
              </div>
            </Col>

            <Col xs="4">
              <div className="sectionA-container">
                <img class="sectionA-image" src={h_01} alt="" />
                <div className="sectionA-top-left">blinds</div>
                <div className="sectionA-top-right">
                  <div className="sectionA-promo-normal">up to</div>
                  <div className="sectionA-promo-high">50% off</div>
                  <div className="sectionA-promo-normal">on selected</div>
                </div>
              </div>

              <div className="sectionA-details">
                <a
                  className="sectionA-item"
                  href={ROUTES.BLINDS_ROLLER}
                  rel="noopener noreferrer"
                >
                  Roller
                </a>
                {" / "}
                <a
                  className="sectionA-item"
                  href={ROUTES.BLINDS_VENETIAN}
                  rel="noopener noreferrer"
                >
                  Venetian
                </a>
                {" / "}
                <a
                  className="sectionA-item"
                  href={ROUTES.BLINDS_VERTICAL}
                  rel="noopener noreferrer"
                >
                  Vertical
                </a>
                {" / "}
                <a
                  className="sectionA-item"
                  href={ROUTES.BLINDS_ZEBRA}
                  rel="noopener noreferrer"
                >
                  Zebra
                </a>
              </div>
            </Col>

            <Col xs="4">
              <div className="sectionA-container">
                <img class="sectionA-image" src={h_02} alt="" />
                <div className="sectionA-top-left">curtain</div>
                <div className="sectionA-top-right">
                  <div className="sectionA-promo-normal">up to</div>
                  <div className="sectionA-promo-high">50% off</div>
                  <div className="sectionA-promo-normal">on selected</div>
                </div>
              </div>

              <div className="sectionA-details">
                <a
                  className="sectionA-item"
                  href={ROUTES.CURTAIN_WAVE}
                  rel="noopener noreferrer"
                >
                  Wave
                </a>
                {" / "}
                <a
                  className="sectionA-item"
                  href={ROUTES.CURTAIN_EYELET}
                  rel="noopener noreferrer"
                >
                  Eyelet
                </a>
                {" / "}
                <a
                  className="sectionA-item"
                  href={ROUTES.CURTAIN_PINCHPLEAT}
                  rel="noopener noreferrer"
                >
                  Pinch Pleat
                </a>
              </div>
            </Col>
            <Col xs="4">
              <div className="sectionA-container">
                <img class="sectionA-image" src={h_03} alt="" />
                <div className="sectionA-top-left">shutter</div>
                <div className="sectionA-top-right">
                  <div className="sectionA-promo-normal">up to</div>
                  <div className="sectionA-promo-high">50% off</div>
                  <div className="sectionA-promo-normal">on selected</div>
                </div>
              </div>

              <div className="sectionA-details">
                <a
                  className="sectionA-item"
                  href={ROUTES.SHUTTER_TIMBER}
                  rel="noopener noreferrer"
                >
                  Timber
                </a>
                {" / "}

                <a
                  className="sectionA-item"
                  href={ROUTES.SHUTTER_ALYCOREPLUSPVC}
                  rel="noopener noreferrer"
                >
                  Alycore plus PVC
                </a>
                {" / "}

                <a
                  className="sectionA-item"
                  href={ROUTES.SHUTTER_EXTERIOR}
                  rel="noopener noreferrer"
                >
                  Exterior
                </a>
              </div>
            </Col>
          </Row>
          {/* section 01 */}
          <Row className="section01-outbound">
            <Col xs="6" className="section-center">
              <div class="section01">
                <img class="section01-image01" src={roller01} alt="" />
                <img class="section01-image02" src={roller02} alt="" />
                <img class="section01-image03" src={roller03} alt="" />
                <img class="section01-image04" src={roller04} alt="" />
              </div>
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
          {/* section 02 */}
          <Row className="section02-outbound">
            <Col xs="6">
              <div className="h-section-title">{home.section02.title}</div>
              <div className="h-section-subtitle">
                {home.section02.content.map(item => (
                  <div className="h-section-subtitle-item">{item}</div>
                ))}
              </div>
            </Col>
            <Col xs="6" className="section-center">
              <div class="section02">
                <img class="section02-image01" src={timber01} alt="" />
                <img class="section02-image02" src={timber02} alt="" />
                <img class="section02-image03" src={timber03} alt="" />
                <img class="section02-image04" src={timber04} alt="" />
              </div>
            </Col>
          </Row>
          {/* section 03 */}
          <Row className="section01-outbound">
            <Col xs="6" className="section-center">
              <div class="section01">
                <img class="section01-image01" src={zebra01} alt="" />
                <img class="section01-image02" src={zebra02} alt="" />
                <img class="section01-image03" src={zebra03} alt="" />
                <img class="section01-image04" src={zebra04} alt="" />
              </div>
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
          {/* section 04 */}
          <Row className="section-04">
            <Col xs="12">
              <div className="s04-header">About us</div>
            </Col>
            <Col xs="4">
              <div className="s04-col">
                <div className="s04-icon">
                  <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
                </div>
                <div className="s04-body">
                  <div className="s04-title">
                    {home.section04.aboutUs_01.title}
                  </div>
                  <div className="s04-subtitle">
                    {home.section04.aboutUs_01.content}
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="4">
              <div className="s04-col">
                <div className="s04-icon">
                  <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
                </div>
                <div className="s04-body">
                  <div className="s04-title">
                    {home.section04.aboutUs_02.title}
                  </div>
                  <div className="s04-subtitle">
                    {home.section04.aboutUs_02.content}
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="4">
              <div className="s04-col">
                <div className="s04-icon">
                  <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
                </div>
                <div className="s04-body">
                  <div className="s04-title">
                    {home.section04.aboutUs_03.title}
                  </div>
                  <div className="s04-subtitle">
                    {home.section04.aboutUs_03.content}
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="4">
              <div className="s04-col">
                <div className="s04-icon">
                  <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
                </div>
                <div className="s04-body">
                  <div className="s04-title">
                    {home.section04.aboutUs_04.title}
                  </div>
                  <div className="s04-subtitle">
                    {home.section04.aboutUs_04.content}
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="4">
              <div className="s04-col">
                <div className="s04-icon">
                  <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
                </div>
                <div className="s04-body">
                  <div className="s04-title">
                    {home.section04.aboutUs_05.title}
                  </div>
                  <div className="s04-subtitle">
                    {home.section04.aboutUs_05.content}
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="4">
              <div className="s04-col">
                <div className="s04-icon">
                  <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
                </div>
                <div className="s04-body">
                  <div className="s04-title">
                    {home.section04.aboutUs_06.title}
                  </div>
                  <div className="s04-subtitle">
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
