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
// import s from "./style01.scss";
// import Carousel from "nuka-carousel";
// import {
//   ButtonBack,
//   ButtonFirst,
//   ButtonLast,
//   ButtonNext,
//   CarouselProvider,
//   DotGroup,
//   ImageWithZoom,
//   Slide,
//   Slider
// } from "pure-react-carousel";
// import "pure-react-carousel/dist/react-carousel.es.css";

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
      {/* <Carousel
        renderTopCenterControls={({ currentSlide }) => (
          <div>Slide: {currentSlide}</div>
        )}
        renderCenterLeftControls={({ previousSlide }) => (
          <button onClick={previousSlide}> {"<"} </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <span onClick={nextSlide}>{"->"}</span>
          // <button onClick={nextSlide}>{">"}</button>
        )}
      >
        <img src={img_h01} />
        <img src={img_h02} />
        <img src={img_h03} />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
      </Carousel> */}

      {/* <CarouselProvider
        visibleSlides={1}
        totalSlides={6}
        step={1}
        naturalSlideWidth={400}
        naturalSlideHeight={500}
        hasMasterSpinner
        lockOnWindowScroll
      >
        <h2 className={s.headline}>
          Carousel (lockOnWindowScroll set to TRUE)
        </h2>
        <p>
          - When scrolling the browser, up and down, horizontal scrollers will
          not scroll horizontally.
        </p>
        <p>
          - When scrolling the browser, left and right, vertical scrollers will
          not scroll vertically.
        </p>
        <p>
          - This spinner will go away after all the images have loaded.
          <br />
        </p>
        <Slider className={s.slider}>
          <Slide index={0}>
            <ImageWithZoom src={img_h01} />
          </Slide>
          <Slide index={1}>
            <ImageWithZoom src={img_h01} />
          </Slide>
          <Slide index={2}>
            <ImageWithZoom src={img_h01} />
          </Slide>
          <Slide index={3}>
            <ImageWithZoom src={img_h01} />
          </Slide>
          <Slide index={4}>
            <ImageWithZoom src={img_h01} />
          </Slide>
          <Slide index={5}>
            <ImageWithZoom src={img_h01} />
          </Slide>
        </Slider>
        <ButtonFirst>First</ButtonFirst>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
        <ButtonLast>Last</ButtonLast>
        <DotGroup />
      </CarouselProvider> */}

      <Container fluid>
        <Segment.Group>
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
            <Row className="h-section-01">
              <Col xs="6">
                <img
                  className="h-section-img-d"
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
        </Segment.Group>
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
