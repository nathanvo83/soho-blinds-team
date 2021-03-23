import React from "react";
import "./Section01.css";
import { home } from "../../data/home";
import { Responsive, Grid } from "semantic-ui-react";
import zebra01 from "../../assets/images/home/p0301.png";
import zebra02 from "../../assets/images/home/p0302.png";
import zebra03 from "../../assets/images/home/p0303.png";
import zebra04 from "../../assets/images/home/p0304.png";

const renderMobile = () => (
  <div className="section01">
    <div className="section01-container-m">
      <Grid columns="1" style={{ margin: 0 }}>
        <Grid.Row>
          <Grid.Column>
            <div className="section01-center">
              <div className="section01-image-group-m">
                <img className="section01-image01-m" src={zebra01} alt="" />
                <img className="section01-image02-m" src={zebra02} alt="" />
                <img className="section01-image03-m" src={zebra03} alt="" />
                <img className="section01-image04-m" src={zebra04} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="section01-title">{home.section03.title}</div>
            <div className="section01-subtitle">
              {home.section03.content.map((item, idx) => (
                <div className="h-section-subtitle-item" key={idx}>
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
                <img className="section01-image01" src={zebra01} alt="" />
                <img className="section01-image02" src={zebra02} alt="" />
                <img className="section01-image03" src={zebra03} alt="" />
                <img className="section01-image04" src={zebra04} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="section01-title">{home.section03.title}</div>
            <div className="section01-subtitle">
              {home.section03.content.map((item, idx) => (
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
                <img className="section01-image01" src={zebra01} alt="" />
                <img className="section01-image02" src={zebra02} alt="" />
                <img className="section01-image03" src={zebra03} alt="" />
                <img className="section01-image04" src={zebra04} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="section01-title">{home.section03.title}</div>
            <div className="section01-subtitle">
              {home.section03.content.map((item, idx) => (
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

const Section03 = () => {
  return <div>{renderContent()}</div>;
};

export default Section03;
