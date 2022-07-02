import React from "react";
import "./BGuide01.css";
import { buyingGuide } from "../../data/buying-guide";
import { Responsive, Grid } from "semantic-ui-react";
import roller01 from "../../assets/images/blinds/roller/roller01.png";
import roller02 from "../../assets/images/blinds/roller/roller02.jpg";
import roller03 from "../../assets/images/blinds/roller/roller03.png";
import roller04 from "../../assets/images/blinds/roller/roller04.png";

const renderMobile = () => (
  <div className="bguide01">
    <div className="bguide01-container-m">
      <div className="bguide01-title">{buyingGuide.bguide01.title}</div>
      <Grid columns="1" style={{ margin: 0 }}>
        <Grid.Row>
          <Grid.Column>
            <div className="bguide01-center">
              <div className="bguide01-image-group-m">
                <img className="bguide01-image01-m" src={roller01} alt="" />
                <img className="bguide01-image02-m" src={roller02} alt="" />
                <img className="bguide01-image03-m" src={roller03} alt="" />
                <img className="bguide01-image04-m" src={roller04} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="bguide01-subtitle" style={{ marginTop: 30 }}>
              {buyingGuide.bguide01.description.map((item, idx) => (
                <div className="bguide01-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
            <ul className="bguide01-subtitle">
              {buyingGuide.bguide01.content.map((item, idx) => (
                <li className="bguide01-subtitle-item" key={idx}>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ textAlign: 'center' }}>
              <a href={buyingGuide.bguide01.link} className="ui button">
                Discover {buyingGuide.bguide01.title}
              </a>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </div>
);

const renderTablet = () => (
  <div className="bguide01">
    <div className="bguide01-container-t">
      <div className="bguide01-title">{buyingGuide.bguide01.title}</div>
      <Grid columns="1">
        <Grid.Row>
          <Grid.Column>
            <div className="bguide01-center">
              <div className="bguide01-image-group">
                <img className="bguide01-image01" src={roller01} alt="" />
                <img className="bguide01-image02" src={roller02} alt="" />
                <img className="bguide01-image03" src={roller03} alt="" />
                <img className="bguide01-image04" src={roller04} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="bguide01-subtitle">
              {buyingGuide.bguide01.description.map((item, idx) => (
                <div className="bguide01-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
            <ul className="bguide01-subtitle">
              {buyingGuide.bguide01.content.map((item, idx) => (
                <li className="bguide01-subtitle-item" key={idx}>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ textAlign: 'center' }}>
              <a href={buyingGuide.bguide01.link} className="ui button">
                Discover {buyingGuide.bguide01.title}
              </a>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </div>
);

const renderDesktop = () => (
  <div className="bguide01">
    <div className="bguide01-container">
      <div className="bguide01-title">{buyingGuide.bguide01.title}</div>
      <Grid columns="2">
        <Grid.Row>
          <Grid.Column>
            <div className="bguide01-center">
              <div className="bguide01-image-group">
                <img className="bguide01-image01" src={roller01} alt="" />
                <img className="bguide01-image02" src={roller02} alt="" />
                <img className="bguide01-image03" src={roller03} alt="" />
                <img className="bguide01-image04" src={roller04} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="bguide01-subtitle">
              {buyingGuide.bguide01.description.map((item, idx) => (
                <div className="bguide01-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
            <ul className="bguide01-subtitle">
              {buyingGuide.bguide01.content.map((item, idx) => (
                <li className="bguide01-subtitle-item" key={idx}>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ textAlign: 'center' }}>
              <a href={buyingGuide.bguide01.link} className="ui button">
                Discover {buyingGuide.bguide01.title}
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

const BGuide01 = () => {
  return <div>{renderContent()}</div>;
};

export default BGuide01;
