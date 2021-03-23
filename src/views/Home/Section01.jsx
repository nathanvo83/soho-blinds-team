import React from "react";
import "./Section01.css";
import { home } from "../../data/home";
import { Responsive, Grid } from "semantic-ui-react";
import roller01 from "../../assets/images/home/p0101.png";
import roller02 from "../../assets/images/home/p0102.jpg";
import roller03 from "../../assets/images/home/p0103.png";
import roller04 from "../../assets/images/home/p0104.png";

const renderMobile = () => (
  <div className="section01">
    <div className="section01-container-m">
      <Grid columns="1" style={{ margin: 0 }}>
        <Grid.Row>
          <Grid.Column>
            <div className="section01-center">
              <div className="section01-image-group-m">
                <img className="section01-image01-m" src={roller01} alt="" />
                <img className="section01-image02-m" src={roller02} alt="" />
                <img className="section01-image03-m" src={roller03} alt="" />
                <img className="section01-image04-m" src={roller04} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="section01-title">{home.section01.title}</div>
            <div className="section01-subtitle">
              {home.section01.content.map((item, idx) => (
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
                <img className="section01-image01" src={roller01} alt="" />
                <img className="section01-image02" src={roller02} alt="" />
                <img className="section01-image03" src={roller03} alt="" />
                <img className="section01-image04" src={roller04} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="section01-title">{home.section01.title}</div>
            <div className="section01-subtitle">
              {home.section01.content.map((item, idx) => (
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
                <img className="section01-image01" src={roller01} alt="" />
                <img className="section01-image02" src={roller02} alt="" />
                <img className="section01-image03" src={roller03} alt="" />
                <img className="section01-image04" src={roller04} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="section01-title">{home.section01.title}</div>
            <div className="section01-subtitle">
              {home.section01.content.map((item, idx) => (
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
