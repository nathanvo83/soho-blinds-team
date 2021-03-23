import React from "react";
import "./Section02.css";
import { home } from "../../data/home";
import { Responsive, Grid } from "semantic-ui-react";

import timber01 from "../../assets/images/home/p0201.jpg";
import timber02 from "../../assets/images/home/p0202.png";
import timber03 from "../../assets/images/home/p0203.png";
import timber04 from "../../assets/images/home/p0204.png";

const renderMobile = () => (
  <div className="section02">
    <div className="section02-container-m">
      <Grid columns="1" style={{ margin: 0 }}>
        <Grid.Row>
          <Grid.Column>
            <div className="section02-center">
              <div className="section02-image-group-m">
                <img className="section02-image01-m" src={timber01} alt="" />
                <img className="section02-image02-m" src={timber02} alt="" />
                <img className="section02-image03-m" src={timber03} alt="" />
                <img className="section02-image04-m" src={timber04} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="section02-title">{home.section02.title}</div>
            <div className="section02-subtitle">
              {home.section02.content.map((item, idx) => (
                <div className="section02-subtitle-item" key={idx}>
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
  <div className="section02">
    <div className="section02-container-t">
      <Grid columns="1" style={{ margin: 0 }}>
        <Grid.Row>
          <Grid.Column>
            <div className="section02-center">
              <div className="section02-image-group-m">
                <img className="section02-image01-m" src={timber01} alt="" />
                <img className="section02-image02-m" src={timber02} alt="" />
                <img className="section02-image03-m" src={timber03} alt="" />
                <img className="section02-image04-m" src={timber04} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="section02-title">{home.section02.title}</div>
            <div className="section02-subtitle">
              {home.section02.content.map((item, idx) => (
                <div className="section02-subtitle-item" key={idx}>
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
  <div className="section02">
    <div className="section02-container">
      <Grid columns="2">
        <Grid.Row>
          <Grid.Column>
            <div className="section02-title">{home.section02.title}</div>
            <div className="section02-subtitle">
              {home.section02.content.map((item, idx) => (
                <div className="section02-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="section02-center">
              <div className="section02-image-group">
                <img className="section02-image01" src={timber01} alt="" />
                <img className="section02-image02" src={timber02} alt="" />
                <img className="section02-image03" src={timber03} alt="" />
                <img className="section02-image04" src={timber04} alt="" />
              </div>
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

const Section02 = () => {
  return <div>{renderContent()}</div>;
};

export default Section02;
