import React from "react";
import "./BGuide08.css";
import { buyingGuide } from "../../data/buying-guide";
import { Responsive, Grid } from "semantic-ui-react";
import wave01 from "../../assets/images/curtain/wave/wave01.webp";
import wave02 from "../../assets/images/curtain/wave/wave02.webp";
import wave03 from "../../assets/images/curtain/wave/wave03.webp";
import wave04 from "../../assets/images/curtain/wave/wave04.webp";

const renderMobile = () => (
  <div className="bguide08">
    <div className="bguide08-container-m">
      <div className="bguide08-title">{buyingGuide.bguide08.title}</div>
      <Grid columns="1" style={{ margin: 0 }}>
        <Grid.Row>
          <Grid.Column>
            <div className="bguide08-center">
              <div className="bguide08-image-group-m">
                <img className="bguide08-image01-m" src={wave01} alt="" />
                <img className="bguide08-image02-m" src={wave02} alt="" />
                <img className="bguide08-image03-m" src={wave03} alt="" />
                <img className="bguide08-image04-m" src={wave04} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="bguide08-subtitle" style={{ marginTop: 30 }}>
              {buyingGuide.bguide08.description.map((item, idx) => (
                <div className="bguide08-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
            <ul className="bguide08-subtitle">
              {buyingGuide.bguide08.content.map((item, idx) => (
                <li className="bguide08-subtitle-item" key={idx}>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ textAlign: 'center' }}>
              <a href={buyingGuide.bguide08.link} className="ui button">
                Discover {buyingGuide.bguide08.title}
              </a>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </div>
);

const renderTablet = () => (
  <div className="bguide08">
    <div className="bguide08-container-t">
      <div className="bguide08-title">{buyingGuide.bguide08.title}</div>
      <Grid columns="1">
        <Grid.Row>
          <Grid.Column>
            <div className="bguide08-center">
              <div className="bguide08-image-group">
                <img className="bguide08-image01" src={wave01} alt="" />
                <img className="bguide08-image02" src={wave02} alt="" />
                <img className="bguide08-image03" src={wave03} alt="" />
                <img className="bguide08-image04" src={wave04} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="bguide08-subtitle">
              {buyingGuide.bguide08.description.map((item, idx) => (
                <div className="bguide08-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
            <ul className="bguide08-subtitle">
              {buyingGuide.bguide08.content.map((item, idx) => (
                <li className="bguide08-subtitle-item" key={idx}>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ textAlign: 'center' }}>
              <a href={buyingGuide.bguide08.link} className="ui button">
                Discover {buyingGuide.bguide08.title}
              </a>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </div>
);

const renderDesktop = () => (
  <div className="bguide08">
    <div className="bguide08-container">
      <div className="bguide08-title">{buyingGuide.bguide08.title}</div>
      <Grid columns="2">
        <Grid.Row>
          <Grid.Column>
            <div className="bguide08-subtitle">
              {buyingGuide.bguide08.description.map((item, idx) => (
                <div className="bguide08-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
            <ul className="bguide08-subtitle">
              {buyingGuide.bguide08.content.map((item, idx) => (
                <li className="bguide08-subtitle-item" key={idx}>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ textAlign: 'center' }}>
              <a href={buyingGuide.bguide08.link} className="ui button">
                Discover {buyingGuide.bguide08.title}
              </a>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="bguide08-center">
              <div className="bguide08-image-group">
                <img className="bguide08-image01" src={wave01} alt="" />
                <img className="bguide08-image02" src={wave02} alt="" />
                <img className="bguide08-image03" src={wave03} alt="" />
                <img className="bguide08-image04" src={wave04} alt="" />
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

const bguide08 = () => {
  return <div>{renderContent()}</div>;
};

export default bguide08;
