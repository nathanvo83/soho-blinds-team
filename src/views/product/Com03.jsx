import React from "react";
import "./Com03.css";
import { Responsive, Container, Grid } from "semantic-ui-react";
// import { Container, Row, Col } from "shards-react";

const Com03 = props => {
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
                <Grid.Column className="col-x">
                  <img
                    className="com03-image-thumb"
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
                <Grid.Column className="col-x">
                  <img
                    className="com03-image-thumb"
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
          <Grid columns="3" style={{ margin: 0 }}>
            <div className="details-title">Our Collection</div>
            <Grid.Row>
              {images.map((item, idx) => (
                <Grid.Column className="col-x">
                  <img
                    className="com03-image-thumb"
                    key={idx}
                    src={item}
                    alt={idx}
                  ></img>
                </Grid.Column>
              ))}
            </Grid.Row>
          </Grid>
        </Responsive>
      </Container>
    </div>
  );
};

export default Com03;
