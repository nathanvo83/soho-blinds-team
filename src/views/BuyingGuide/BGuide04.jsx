import React from "react";
import "./BGuide04.css";
import { buyingGuide } from "../../data/buying-guide";
import { Responsive, Grid } from "semantic-ui-react";
import vertical01 from "../../assets/images/blinds/vetical/vertical01.jpeg";
import vertical02 from "../../assets/images/blinds/vetical/vertical02.png";
import vertical03 from "../../assets/images/blinds/vetical/vertical03.jpg";
import vertical04 from "../../assets/images/blinds/vetical/vertical04.jpeg";

const renderMobile = () => (
  <div className="bguide04">
    <div className="bguide04-container-m">
      <div className="bguide04-title">{buyingGuide.bguide04.title}</div>
      <Grid columns="1" style={{ margin: 0 }}>
        <Grid.Row>
          <Grid.Column>
            <div className="bguide04-center">
              <div className="bguide04-image-group-m">
                <img className="bguide04-image01-m" src={vertical01} alt="" />
                <img className="bguide04-image02-m" src={vertical02} alt="" />
                <img className="bguide04-image03-m" src={vertical03} alt="" />
                <img className="bguide04-image04-m" src={vertical04} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="bguide04-subtitle" style={{ marginTop: 30 }}>
              {buyingGuide.bguide04.description.map((item, idx) => (
                <div className="bguide04-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
            <ul className="bguide04-subtitle">
              {buyingGuide.bguide04.content.map((item, idx) => (
                <li className="bguide04-subtitle-item" key={idx}>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ textAlign: 'center' }}>
              <a href={buyingGuide.bguide04.link} className="ui button">
                Discover {buyingGuide.bguide04.title}
              </a>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </div>
);

const renderTablet = () => (
  <div className="bguide04">
    <div className="bguide04-container-t">
      <div className="bguide04-title">{buyingGuide.bguide04.title}</div>
      <Grid columns="1">
        <Grid.Row>
          <Grid.Column>
            <div className="bguide04-center">
              <div className="bguide04-image-group">
                <img className="bguide04-image01" src={vertical01} alt="" />
                <img className="bguide04-image02" src={vertical02} alt="" />
                <img className="bguide04-image03" src={vertical03} alt="" />
                <img className="bguide04-image04" src={vertical04} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="bguide04-subtitle">
              {buyingGuide.bguide04.description.map((item, idx) => (
                <div className="bguide04-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
            <ul className="bguide04-subtitle">
              {buyingGuide.bguide04.content.map((item, idx) => (
                <li className="bguide04-subtitle-item" key={idx}>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ textAlign: 'center' }}>
              <a href={buyingGuide.bguide04.link} className="ui button">
                Discover {buyingGuide.bguide04.title}
              </a>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </div>
);

const renderDesktop = () => (
  <div className="bguide04">
    <div className="bguide04-container">
      <div className="bguide04-title">{buyingGuide.bguide04.title}</div>
      <Grid columns="2">
        <Grid.Row>
          <Grid.Column>
            <div className="bguide04-subtitle">
              {buyingGuide.bguide04.description.map((item, idx) => (
                <div className="bguide04-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
            <ul className="bguide04-subtitle">
              {buyingGuide.bguide04.content.map((item, idx) => (
                <li className="bguide04-subtitle-item" key={idx}>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ textAlign: 'center' }}>
              <a href={buyingGuide.bguide04.link} className="ui button">
                Discover {buyingGuide.bguide04.title}
              </a>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="bguide04-center">
              <div className="bguide04-image-group">
                <img className="bguide04-image01" src={vertical01} alt="" />
                <img className="bguide04-image02" src={vertical02} alt="" />
                <img className="bguide04-image03" src={vertical03} alt="" />
                <img className="bguide04-image04" src={vertical04} alt="" />
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

const BGuide04 = () => {
  return <div>{renderContent()}</div>;
};

export default BGuide04;
