import React from "react";
import "./Section05.css";
import { Responsive, Container, Grid } from "semantic-ui-react";
import image01 from "../../assets/images/showroom/section05_01.jpg";
import image02 from "../../assets/images/showroom/section05_02.jpg";
import image03 from "../../assets/images/showroom/section05_05.jpg";
import image04 from "../../assets/images/showroom/section05_04.jpg";

const Section05 = () => {
  const images = [image01, image02, image03, image04];
  return (
    <div className="section05">
      <Container fluid>
        {/* mobile */}
        <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
          <Grid columns="1">
            <Grid.Row>
              {images.map((item, idx) => (
                <Grid.Column className="col-x" key={idx}>
                  <img
                    className="section05-image-thumb-m"
                    key={idx}
                    src={item}
                    alt={idx}
                  ></img>
                </Grid.Column>
              ))}
            </Grid.Row>
          </Grid>
        </Responsive>

        {/* tablet */}
        <Responsive
          minWidth={Responsive.onlyTablet.minWidth}
          maxWidth={Responsive.onlyTablet.maxWidth}
        >
          <Grid columns="2" style={{ margin: 0 }}>
            <Grid.Row>
              {images.map((item, idx) => (
                <Grid.Column className="col-x" key={idx}>
                  <img
                    className="section05-image-thumb-t"
                    key={idx}
                    src={item}
                    alt={idx}
                  ></img>
                </Grid.Column>
              ))}
            </Grid.Row>
          </Grid>
        </Responsive>

        {/* desktop */}
        <Responsive minWidth={Responsive.onlyComputer.minWidth}>
          <div className="section05-gallery-image">
            <Grid columns="4">
              <Grid.Row>
                {images.map((item, idx) => (
                  <Grid.Column className="col-x" key={idx}>
                    <div className="section05-img-box">
                      <img key={idx} src={item} alt={idx} />
                      <div className="section05-transparent-box"></div>
                    </div>
                  </Grid.Column>
                ))}
              </Grid.Row>
            </Grid>
          </div>
        </Responsive>
      </Container>
    </div>
  );
};

export default Section05;
