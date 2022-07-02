import React from "react";
import "./BGuide02.css";
import { buyingGuide } from "../../data/buying-guide";
import { Responsive, Grid } from "semantic-ui-react";
import vertical01 from "../../assets/images/blinds/vetical/vertical01.jpeg";
import vertical02 from "../../assets/images/blinds/vetical/vertical02.png";
import vertical03 from "../../assets/images/blinds/vetical/vertical03.jpg";
import vertical04 from "../../assets/images/blinds/vetical/vertical04.jpeg";

const renderMobile = () => (
  <div className="bguide02">
    <div className="bguide02-container-m">
      <div className="bguide02-title">{buyingGuide.bguide02.title}</div>
      <Grid columns="1" style={{ margin: 0 }}>
        <Grid.Row>
          <Grid.Column>
            <div className="bguide02-center">
              <div className="bguide02-image-group-m">
                <img className="bguide02-image01-m" src={vertical01} alt="" />
                <img className="bguide02-image02-m" src={vertical02} alt="" />
                <img className="bguide02-image03-m" src={vertical03} alt="" />
                <img className="bguide02-image04-m" src={vertical04} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="bguide02-subtitle" style={{ marginTop: 30 }}>
              {buyingGuide.bguide02.description.map((item, idx) => (
                <div className="bguide02-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
            <ul className="bguide02-subtitle">
              {buyingGuide.bguide02.content.map((item, idx) => (
                <li className="bguide02-subtitle-item" key={idx}>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ textAlign: 'center' }}>
              <a href={buyingGuide.bguide02.link} className="ui button">
                Discover {buyingGuide.bguide02.title}
              </a>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </div>
);

const renderTablet = () => (
  <div className="bguide02">
    <div className="bguide02-container-t">
      <div className="bguide02-title">{buyingGuide.bguide02.title}</div>
      <Grid columns="1">
        <Grid.Row>
          <Grid.Column>
            <div className="bguide02-center">
              <div className="bguide02-image-group">
                <img className="bguide02-image01" src={vertical01} alt="" />
                <img className="bguide02-image02" src={vertical02} alt="" />
                <img className="bguide02-image03" src={vertical03} alt="" />
                <img className="bguide02-image04" src={vertical04} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="bguide02-subtitle">
              {buyingGuide.bguide02.description.map((item, idx) => (
                <div className="bguide02-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
            <ul className="bguide02-subtitle">
              {buyingGuide.bguide02.content.map((item, idx) => (
                <li className="bguide02-subtitle-item" key={idx}>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ textAlign: 'center' }}>
              <a href={buyingGuide.bguide02.link} className="ui button">
                Discover {buyingGuide.bguide02.title}
              </a>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </div>
);

const renderDesktop = () => (
  <div className="bguide02">
    <div className="bguide02-container">
      <div className="bguide02-title">{buyingGuide.bguide02.title}</div>
      <Grid columns="2">
        <Grid.Row>
          <Grid.Column>
            <div className="bguide02-subtitle">
              {buyingGuide.bguide02.description.map((item, idx) => (
                <div className="bguide02-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
            <ul className="bguide02-subtitle">
              {buyingGuide.bguide02.content.map((item, idx) => (
                <li className="bguide02-subtitle-item" key={idx}>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ textAlign: 'center' }}>
              <a href={buyingGuide.bguide02.link} className="ui button">
                Discover {buyingGuide.bguide02.title}
              </a>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="bguide02-center">
              <div className="bguide02-image-group">
                <img className="bguide02-image01" src={vertical01} alt="" />
                <img className="bguide02-image02" src={vertical02} alt="" />
                <img className="bguide02-image03" src={vertical03} alt="" />
                <img className="bguide02-image04" src={vertical04} alt="" />
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

const BGuide02 = () => {
  return <div>{renderContent()}</div>;
};

export default BGuide02;
