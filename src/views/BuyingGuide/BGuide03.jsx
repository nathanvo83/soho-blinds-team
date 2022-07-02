import React from "react";
import "./BGuide03.css";
import { buyingGuide } from "../../data/buying-guide";
import { Responsive, Grid } from "semantic-ui-react";
import venetian01 from "../../assets/images/blinds/venetian/venetian01.png";
import venetian02 from "../../assets/images/blinds/venetian/venetian02.png";
import venetian03 from "../../assets/images/blinds/venetian/venetian03.png";
import venetian04 from "../../assets/images/blinds/venetian/venetian04.png";

const renderMobile = () => (
  <div className="bguide03">
    <div className="bguide03-container-m">
      <div className="bguide03-title">{buyingGuide.bguide03.title}</div>
      <Grid columns="1" style={{ margin: 0 }}>
        <Grid.Row>
          <Grid.Column>
            <div className="bguide03-center">
              <div className="bguide03-image-group-m">
                <img className="bguide03-image01-m" src={venetian01} alt="" />
                <img className="bguide03-image02-m" src={venetian02} alt="" />
                <img className="bguide03-image03-m" src={venetian03} alt="" />
                <img className="bguide03-image04-m" src={venetian04} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="bguide03-subtitle" style={{ marginTop: 30 }}>
              {buyingGuide.bguide03.description.map((item, idx) => (
                <div className="bguide03-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
            <ul className="bguide03-subtitle">
              {buyingGuide.bguide03.content.map((item, idx) => (
                <li className="bguide03-subtitle-item" key={idx}>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ textAlign: 'center' }}>
              <a href={buyingGuide.bguide03.link} className="ui button">
                Discover {buyingGuide.bguide03.title}
              </a>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </div>
);

const renderTablet = () => (
  <div className="bguide03">
    <div className="bguide03-container-t">
      <div className="bguide03-title">{buyingGuide.bguide03.title}</div>
      <Grid columns="1">
        <Grid.Row>
          <Grid.Column>
            <div className="bguide03-center">
              <div className="bguide03-image-group">
                <img className="bguide03-image01" src={venetian01} alt="" />
                <img className="bguide03-image02" src={venetian02} alt="" />
                <img className="bguide03-image03" src={venetian03} alt="" />
                <img className="bguide03-image04" src={venetian04} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="bguide03-subtitle">
              {buyingGuide.bguide03.description.map((item, idx) => (
                <div className="bguide03-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
            <ul className="bguide03-subtitle">
              {buyingGuide.bguide03.content.map((item, idx) => (
                <li className="bguide03-subtitle-item" key={idx}>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ textAlign: 'center' }}>
              <a href={buyingGuide.bguide03.link} className="ui button">
                Discover {buyingGuide.bguide03.title}
              </a>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </div>
);

const renderDesktop = () => (
  <div className="bguide03">
    <div className="bguide03-container">
      <div className="bguide03-title">{buyingGuide.bguide03.title}</div>
      <Grid columns="2">
        <Grid.Row>
          <Grid.Column>
            <div className="bguide03-center">
              <div className="bguide03-image-group">
                <img className="bguide03-image01" src={venetian01} alt="" />
                <img className="bguide03-image02" src={venetian02} alt="" />
                <img className="bguide03-image03" src={venetian03} alt="" />
                <img className="bguide03-image04" src={venetian04} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="bguide03-subtitle">
              {buyingGuide.bguide03.description.map((item, idx) => (
                <div className="bguide03-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
            <ul className="bguide03-subtitle">
              {buyingGuide.bguide03.content.map((item, idx) => (
                <li className="bguide03-subtitle-item" key={idx}>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ textAlign: 'center' }}>
              <a href={buyingGuide.bguide03.link} className="ui button">
                Discover {buyingGuide.bguide03.title}
              </a>
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

const BGuide03 = () => {
  return <div>{renderContent()}</div>;
};

export default BGuide03;
