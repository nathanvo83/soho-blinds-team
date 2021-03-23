import React from "react";
import "./Com03.css";
import { Responsive, Container, Grid } from "semantic-ui-react";
// import { Container, Row, Col } from "shards-react";

const Com03 = (props) => {
  const { images } = props;
  return (
    <div className="com03">
      <Container fluid>
        {/* mobile */}
        <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
          <Grid columns="1">
            <div className="details-title">Our Collection</div>
            <Grid.Row>
              {images.map((item, idx) => (
                <Grid.Column className="col-x" key={idx}>
                  <img
                    className="com03-image-thumb-m"
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
            <div className="details-title">Our Collection</div>
            <Grid.Row>
              {images.map((item, idx) => (
                <Grid.Column className="col-x" key={idx}>
                  <img
                    className="com03-image-thumb-t"
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
          <div class="com03-gallery-image">
            <Grid columns="4">
              <div className="details-title">Our Collection</div>
              <Grid.Row>
                {images.map((item, idx) => (
                  <Grid.Column className="col-x" key={idx}>
                    {/* <div className="com03-img-box">
                    <img
                      className="com03-image-thumb-d"
                      key={idx}
                      src={item}
                      alt={idx}
                    ></img>
                  </div> */}
                    <div class="com03-img-box">
                      <img key={idx} src={item} alt={idx} />
                      <div class="com03-transparent-box"></div>
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

export default Com03;
