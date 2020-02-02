import React, { useEffect } from "react";
import { connect } from "react-redux";
import { menuTypes } from "../../constants/menuTypes";
import { actionTypes } from "../../constants/actionTypes";

import "./Home.css";
import Header from "./Header";
import { Container, Row, Col } from "shards-react";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Responsive, Segment } from "semantic-ui-react";
import img_h01 from "./images/nzwswe-1.jpe";
import img_h02 from "./images/nzwswe-1.jpe";
import img_h03 from "./images/nzwswe-1.jpe";

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
      <Header></Header>
      <Container fluid>
        <Segment.Group>
          {/* mobile */}
          <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
            <Row>
              <Col xs="12" className="col-01">
                <div className="title">{home.col01.title}</div>
                <div className="text">{home.col01.text}</div>
              </Col>
              <Col xs="12" className="col-02">
                <div className="title">{home.col02.title}</div>
                <div className="text">{home.col02.text}</div>
              </Col>
            </Row>
          </Responsive>

          {/* tablet */}
          <Responsive
            minWidth={Responsive.onlyTablet.minWidth}
            maxWidth={Responsive.onlyTablet.maxWidth}
          >
            <Row>
              <Col xs="6" className="col-01">
                <div className="title">{home.col01.title}</div>
                <div className="text">{home.col01.text}</div>
              </Col>
              <Col xs="6" className="col-02">
                <div className="title">{home.col02.title}</div>
                <div className="text">{home.col02.text}</div>
              </Col>
              <Col xs="6" className="col-02">
                <div className="title">{home.col03.title}</div>
                <div className="text">{home.col03.text}</div>
              </Col>
              <Col xs="6" className="col-01">
                <div className="title">{home.col04.title}</div>
                <div className="text">{home.col04.text}</div>
              </Col>
            </Row>
          </Responsive>

          {/* destop */}
          <Responsive minWidth={Responsive.onlyComputer.minWidth}>
            <Row>
              <Col xs="3" className="col-01">
                <div className="title">{home.col01.title}</div>
                <div className="text">{home.col01.text}</div>
              </Col>
              <Col xs="3" className="col-02">
                <div className="title">{home.col02.title}</div>
                <div className="text">{home.col02.text}</div>
              </Col>
              <Col xs="3" className="col-01">
                <div className="title">{home.col03.title}</div>
                <div className="text">{home.col03.text}</div>
              </Col>
              <Col xs="3" className="col-02">
                <div className="title">{home.col04.title}</div>
                <div className="text">{home.col04.text}</div>
              </Col>
            </Row>
          </Responsive>

          <hr />

          <Responsive maxWidth={767}>
            <Row>
              <Col xs="12" className="col-01">
                <div className="title">{home.col01.title}</div>
                <div className="text">{home.col01.text}</div>
              </Col>
              <Col xs="12" className="col-02">
                <div className="title">{home.col02.title}</div>
                <div className="text">{home.col02.text}</div>
              </Col>
              <Col xs="12" className="col-01">
                <div className="title">{home.col03.title}</div>
                <div className="text">{home.col03.text}</div>
              </Col>
              <Col xs="12" className="col-02">
                <div className="title">{home.col04.title}</div>
                <div className="text">{home.col04.text}</div>
              </Col>
            </Row>
          </Responsive>
          <Responsive minWidth={768} maxWidth={1365}>
            <Row>
              <Col xs="6" className="col-01">
                <div className="title">{home.col01.title}</div>
                <div className="text">{home.col01.text}</div>
              </Col>
              <Col xs="6" className="col-02">
                <div className="title">{home.col02.title}</div>
                <div className="text">{home.col02.text}</div>
              </Col>
              <Col xs="6" className="col-02">
                <div className="title">{home.col03.title}</div>
                <div className="text">{home.col03.text}</div>
              </Col>
              <Col xs="6" className="col-01">
                <div className="title">{home.col04.title}</div>
                <div className="text">{home.col04.text}</div>
              </Col>
            </Row>
          </Responsive>
          <Responsive minWidth={1366}>
            <Row>
              <Col xs="3" className="col-01">
                <div className="title">{home.col01.title}</div>
                <div className="text">{home.col01.text}</div>
              </Col>
              <Col xs="3" className="col-02">
                <div className="title">{home.col02.title}</div>
                <div className="text">{home.col02.text}</div>
              </Col>
              <Col xs="3" className="col-01">
                <div className="title">{home.col03.title}</div>
                <div className="text">{home.col03.text}</div>
              </Col>
              <Col xs="3" className="col-02">
                <div className="title">{home.col04.title}</div>
                <div className="text">{home.col04.text}</div>
              </Col>
            </Row>
          </Responsive>
        </Segment.Group>
      </Container>

      <Segment.Group>
        <Responsive as={Segment} maxWidth={600}>
          <div className="h-section-01-m">
            <img className="h-section-img-m" src={img_h01} alt="img_h01"></img>
            <div className="h-section-title">Title</div>
            <div className="h-section-subtitle">
              Fabric vertical blinds have long been the go to window covering
              when it comes to glass sliding doors, bifold doors and large glass
              windows. Our made to measure vertical blinds are a light, hardy
              and cost effective window treatment for these situations. Up to 5
              metres in width they seamlessly cover very wide doors and windows.
            </div>
          </div>
          <div className="h-section-02-m">
            <img className="h-section-img-m" src={img_h02} alt="img_h02"></img>
            <div className="h-section-title">Title</div>
            <div className="h-section-subtitle">
              Fabric vertical blinds have long been the go to window covering
              when it comes to glass sliding doors, bifold doors and large glass
              windows. Our made to measure vertical blinds are a light, hardy
              and cost effective window treatment for these situations. Up to 5
              metres in width they seamlessly cover very wide doors and windows.
            </div>
          </div>
          <div className="h-section-03-m">
            <img className="h-section-img-m" src={img_h03} alt="img_h03"></img>
            <div className="h-section-title">Title</div>
            <div className="h-section-subtitle">
              Fabric vertical blinds have long been the go to window covering
              when it comes to glass sliding doors, bifold doors and large glass
              windows. Our made to measure vertical blinds are a light, hardy
              and cost effective window treatment for these situations. Up to 5
              metres in width they seamlessly cover very wide doors and windows.
            </div>
          </div>
        </Responsive>
        <Responsive as={Segment} minWidth={601}>
          <div className="h-section-01">
            <Container>
              <Row>
                <Col>
                  <img
                    className="h-section-img"
                    src={img_h01}
                    alt="img_h01"
                  ></img>
                </Col>
                <Col>
                  <div className="h-section-title">Title</div>
                  <div className="h-section-subtitle">
                    Fabric vertical blinds have long been the go to window
                    covering when it comes to glass sliding doors, bifold doors
                    and large glass windows. Our made to measure vertical blinds
                    are a light, hardy and cost effective window treatment for
                    these situations. Up to 5 metres in width they seamlessly
                    cover very wide doors and windows.
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="h-section-02">
            <Container>
              <Row>
                <Col>
                  <div className="h-section-title">Title</div>
                  <div className="h-section-subtitle">
                    Fabric vertical blinds have long been the go to window
                    covering when it comes to glass sliding doors, bifold doors
                    and large glass windows. Our made to measure vertical blinds
                    are a light, hardy and cost effective window treatment for
                    these situations. Up to 5 metres in width they seamlessly
                    cover very wide doors and windows.
                  </div>
                </Col>
                <Col>
                  <img
                    className="h-section-img"
                    src={img_h01}
                    alt="img_h01"
                  ></img>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="h-section-03">
            <Container>
              <Row>
                <Col>
                  <img
                    className="h-section-img"
                    src={img_h01}
                    alt="img_h01"
                  ></img>
                </Col>
                <Col>
                  <div className="h-section-title">Title</div>
                  <div className="h-section-subtitle">
                    Fabric vertical blinds have long been the go to window
                    covering when it comes to glass sliding doors, bifold doors
                    and large glass windows. Our made to measure vertical blinds
                    are a light, hardy and cost effective window treatment for
                    these situations. Up to 5 metres in width they seamlessly
                    cover very wide doors and windows.
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Responsive>
      </Segment.Group>

      <div className="h-section-04">
        <div>
          <h1 className="text-center h-s04-header">about us</h1>

          <Container>
            <Row>
              <Col sm="12" md="4">
                <div className="h-s04-col">
                  <div className="h-s04-icon">
                    <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
                  </div>
                  <div className="h-s04-body">
                    <div className="h-s04-title">New Zealand wide shipping</div>
                    <div className="h-s04-subtitle">
                      We ship our window blinds throughout New Zealand from our
                      Auckland manufacturing facility.
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm="12" md="4">
                <div className="h-s04-col">
                  <div className="h-s04-icon">
                    <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
                  </div>
                  <div className="h-s04-body">
                    <div className="h-s04-title">New Zealand wide shipping</div>
                    <div className="h-s04-subtitle">
                      We ship our window blinds throughout New Zealand from our
                      Auckland manufacturing facility.
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm="12" md="4">
                <div className="h-s04-col">
                  <div className="h-s04-icon">
                    <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
                  </div>
                  <div className="h-s04-body">
                    <div className="h-s04-title">New Zealand wide shipping</div>
                    <div className="h-s04-subtitle">
                      We ship our window blinds throughout New Zealand from our
                      Auckland manufacturing facility.
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm="12" md="4">
                <div className="h-s04-col">
                  <div className="h-s04-icon">
                    <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
                  </div>
                  <div className="h-s04-body">
                    <div className="h-s04-title">New Zealand wide shipping</div>
                    <div className="h-s04-subtitle">
                      We ship our window blinds throughout New Zealand from our
                      Auckland manufacturing facility.
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm="12" md="4">
                <div className="h-s04-col">
                  <div className="h-s04-icon">
                    <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
                  </div>
                  <div className="h-s04-body">
                    <div className="h-s04-title">New Zealand wide shipping</div>
                    <div className="h-s04-subtitle">
                      We ship our window blinds throughout New Zealand from our
                      Auckland manufacturing facility.
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm="12" md="4">
                <div className="h-s04-col">
                  <div className="h-s04-icon">
                    <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
                  </div>
                  <div className="h-s04-body">
                    <div className="h-s04-title">New Zealand wide shipping</div>
                    <div className="h-s04-subtitle">
                      We ship our window blinds throughout New Zealand from our
                      Auckland manufacturing facility.
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
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

export default connect(null, mapDispatchToProps)(Home);
