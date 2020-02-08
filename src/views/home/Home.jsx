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

      <Container fluid>
        <Responsive>
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
              <br></br>
              <div>
                <span className="sectionA-item">Roller</span>
                {" / "}
                <span className="sectionA-item">Venetian</span>
                {" / "}
                <span className="sectionA-item">Vertical</span>
                {" / "}
                <span className="sectionA-item">Zebra</span>
                {/* <div className="sectionA-item">Roller -> </div>
                <div className="sectionA-item">Venetian -> </div>
                <div className="sectionA-item">Vetical -> </div>
                <div className="sectionA-item">Cellular -> </div>
                <div className="sectionA-item">Zebra -> </div> */}
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
              <br></br>
              <div>
                <span className="sectionA-item">Wave</span>
                {" / "}
                <span className="sectionA-item">Eyelet</span>
                {" / "}
                <span className="sectionA-item">Pinch Pleat</span>
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
              <br></br>
              <div>
                <span className="sectionA-item">Timber</span>
                {" / "}
                <span className="sectionA-item">Alycore plus PVC</span>
                {" / "}
                <span className="sectionA-item">Exterior</span>{" "}
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs="6">
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

          <Row>
            <Col xs="6">
              <div className="h-section-title">{home.section02.title}</div>
              <div className="h-section-subtitle">
                {home.section02.content.map(item => (
                  <div className="h-section-subtitle-item">{item}</div>
                ))}
              </div>
            </Col>
            <Col xs="6">
              <div class="section02">
                <img class="section02-image01" src={timber01} alt="" />
                <img class="section02-image02" src={timber02} alt="" />
                <img class="section02-image03" src={timber03} alt="" />
                <img class="section02-image04" src={timber04} alt="" />
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs="6">
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

      {/* <div class="parent">
        <img class="image1" src={img_h01} alt="" />
        <img class="image2" src={img_h02} alt="" />
        <img class="image3" src={img_h01} alt="" />
        <img class="image4" src={img_h02} alt="" />
      </div> */}

      {/* <div className="parents">
        <div className="section01">
          <img src={img_h01} alt="img_h01" className="section01-image01"></img>
          <img src={img_h01} alt="img_h01" className="section01-image02"></img>
        </div>
      </div> */}
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
