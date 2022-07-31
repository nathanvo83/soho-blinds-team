import React from "react";
import "./BGuide07.css";
import { buyingGuide } from "../../data/buying-guide";
import { Responsive, Grid } from "semantic-ui-react";
import pinch01 from "../../assets/images/curtain/pinch-pleat/pinch01.webp";
import pinch02 from "../../assets/images/curtain/pinch-pleat/pinch02.webp";
import pinch03 from "../../assets/images/curtain/pinch-pleat/pinch03.webp";
import pinch04 from "../../assets/images/curtain/pinch-pleat/pinch04.webp";

const renderMobile = () => (
  <div className="bguide07">
    <div className="bguide07-container-m">
      <div className="bguide07-title">{buyingGuide.bguide07.title}</div>
      <Grid columns="1" style={{ margin: 0 }}>
        <Grid.Row>
          <Grid.Column>
            <div className="bguide07-center">
              <div className="bguide07-image-group-m">
                <img className="bguide07-image01-m" src={pinch01} alt="" />
                <img className="bguide07-image02-m" src={pinch02} alt="" />
                <img className="bguide07-image03-m" src={pinch03} alt="" />
                <img className="bguide07-image04-m" src={pinch04} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="bguide07-subtitle" style={{ marginTop: 30 }}>
              {buyingGuide.bguide07.description.map((item, idx) => (
                <div className="bguide07-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
            <ul className="bguide07-subtitle">
              {buyingGuide.bguide07.content.map((item, idx) => (
                <li className="bguide07-subtitle-item" key={idx}>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ textAlign: 'center' }}>
              <a href={buyingGuide.bguide07.link} className="ui button">
                Discover {buyingGuide.bguide07.title}
              </a>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </div>
);

const renderTablet = () => (
  <div className="bguide07">
    <div className="bguide07-container-t">
      <div className="bguide07-title">{buyingGuide.bguide07.title}</div>
      <Grid columns="1">
        <Grid.Row>
          <Grid.Column>
            <div className="bguide07-center">
              <div className="bguide07-image-group">
                <img className="bguide07-image01" src={pinch01} alt="" />
                <img className="bguide07-image02" src={pinch02} alt="" />
                <img className="bguide07-image03" src={pinch03} alt="" />
                <img className="bguide07-image04" src={pinch04} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="bguide07-subtitle">
              {buyingGuide.bguide07.description.map((item, idx) => (
                <div className="bguide07-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
            <ul className="bguide07-subtitle">
              {buyingGuide.bguide07.content.map((item, idx) => (
                <li className="bguide07-subtitle-item" key={idx}>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ textAlign: 'center' }}>
              <a href={buyingGuide.bguide07.link} className="ui button">
                Discover {buyingGuide.bguide07.title}
              </a>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </div>
);

const renderDesktop = () => (
  <div className="bguide07">
    <div className="bguide07-container">
      <div className="bguide07-title">{buyingGuide.bguide07.title}</div>
      <Grid columns="2">
        <Grid.Row>
          <Grid.Column>
            <div className="bguide07-center">
              <div className="bguide07-image-group">
                <img className="bguide07-image01" src={pinch01} alt="" />
                <img className="bguide07-image02" src={pinch02} alt="" />
                <img className="bguide07-image03" src={pinch03} alt="" />
                <img className="bguide07-image04" src={pinch04} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="bguide07-subtitle">
              {buyingGuide.bguide07.description.map((item, idx) => (
                <div className="bguide07-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
            <ul className="bguide07-subtitle">
              {buyingGuide.bguide07.content.map((item, idx) => (
                <li className="bguide07-subtitle-item" key={idx}>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ textAlign: 'center' }}>
              <a href={buyingGuide.bguide07.link} className="ui button">
                Discover {buyingGuide.bguide07.title}
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

const bguide07 = () => {
  return <div>{renderContent()}</div>;
};

export default bguide07;
