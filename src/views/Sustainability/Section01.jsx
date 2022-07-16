import React from "react";
import "./Section01.css";
import { sustainability } from "../../data/sustainability";
import { Responsive, Grid } from "semantic-ui-react";
import img_p01 from "../../assets/images/sustainability/p01.jpg";
import img_p02 from "../../assets/images/sustainability/p02.jpg";
import img_p03 from "../../assets/images/sustainability/p03.png";
import img_p04 from "../../assets/images/sustainability/p04.jpg";

const renderMobile = () => (
  <div className="section01">
    <div className="section01-container-m">
      <Grid columns="1" style={{ margin: 0 }}>
        <Grid.Row>
          <Grid.Column>
            <div className="section01-center">
              <div className="section01-image-group-m">
                <img className="section01-image01-m" src={img_p01} alt="" />
                <img className="section01-image02-m" src={img_p02} alt="" />
                <img className="section01-image03-m" src={img_p03} alt="" />
                <img className="section01-image04-m" src={img_p04} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="section01-title">{sustainability.section01.title}</div>
            <div className="section01-subtitle">
              {sustainability.section01.content.map((item, idx) => (
                <div className="section01-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </div>
);

const renderTablet = () => (
  <div className="section01">
    <div className="section01-container-t">
      <Grid columns="1">
        <Grid.Row>
          <Grid.Column>
            <div className="section01-center">
              <div className="section01-image-group">
                <img className="section01-image01" src={img_p01} alt="" />
                <img className="section01-image02" src={img_p02} alt="" />
                <img className="section01-image03" src={img_p03} alt="" />
                <img className="section01-image04" src={img_p04} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="section01-title">{sustainability.section01.title}</div>
            <div className="section01-subtitle">
              {sustainability.section01.content.map((item, idx) => (
                <div className="section01-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </div>
);

const renderDesktop = () => (
  <div className="section01">
    <div className="section01-container">
      <Grid columns="2">
        <Grid.Row>
          <Grid.Column>
            <div className="section01-center">
              <div className="section01-image-group">
                <img className="section01-image01" src={img_p01} alt="" />
                <img className="section01-image02" src={img_p02} alt="" />
                <img className="section01-image03" src={img_p03} alt="" />
                <img className="section01-image04" src={img_p04} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="section01-title">{sustainability.section01.title}</div>
            <div className="section01-subtitle">
              {sustainability.section01.content.map((item, idx) => (
                <div className="section01-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </div>
);

const renderContent = () => (
  <div>
    <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
      {renderMobile()}
    </Responsive>
    <Responsive
      minWidth={Responsive.onlyTablet.minWidth}
      maxWidth={Responsive.onlyTablet.maxWidth}
    >
      {renderTablet()}
    </Responsive>
    <Responsive minWidth={Responsive.onlyComputer.minWidth}>
      {renderDesktop()}
    </Responsive>
  </div>
);

const Section01 = () => {
  return <div>{renderContent()}</div>;
};

export default Section01;
