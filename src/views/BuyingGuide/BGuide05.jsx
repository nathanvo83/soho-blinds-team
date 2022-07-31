import React from "react";
import "./BGuide05.css";
import { buyingGuide } from "../../data/buying-guide";
import { Responsive, Grid } from "semantic-ui-react";
import eyelet01 from "../../assets/images/curtain/eyelet/eyelet01.webp";
import eyelet02 from "../../assets/images/curtain/eyelet/eyelet02.webp";
import eyelet03 from "../../assets/images/curtain/eyelet/eyelet03.webp";
import eyelet04 from "../../assets/images/curtain/eyelet/eyelet04.webp";

const renderMobile = () => (
  <div className="bguide05">
    <div className="bguide05-container-m">
      <div className="bguide05-title">{buyingGuide.bguide05.title}</div>
      <Grid columns="1" style={{ margin: 0 }}>
        <Grid.Row>
          <Grid.Column>
            <div className="bguide05-center">
              <div className="bguide05-image-group-m">
                <img className="bguide05-image01-m" src={eyelet01} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="bguide05-subtitle" style={{ marginTop: 30 }}>
              {buyingGuide.bguide05.description.map((item, idx) => (
                <div className="bguide05-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
            <ul className="bguide05-subtitle">
              {buyingGuide.bguide05.content.map((item, idx) => (
                <li className="bguide05-subtitle-item" key={idx}>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ textAlign: 'center' }}>
              <a href={buyingGuide.bguide05.link} className="ui button">
                Discover {buyingGuide.bguide05.title}
              </a>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </div>
);

const renderTablet = () => (
  <div className="bguide05">
    <div className="bguide05-container-t">
      <div className="bguide05-title">{buyingGuide.bguide05.title}</div>
      <Grid columns="1">
        <Grid.Row>
          <Grid.Column>
            <div className="bguide05-center">
              <div className="bguide05-image-group">
                <img className="bguide05-image01" src={eyelet01} alt="" />
                <img className="bguide05-image02" src={eyelet02} alt="" />
                <img className="bguide05-image03" src={eyelet03} alt="" />
                <img className="bguide05-image04" src={eyelet04} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="bguide05-subtitle">
              {buyingGuide.bguide05.description.map((item, idx) => (
                <div className="bguide05-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
            <ul className="bguide05-subtitle">
              {buyingGuide.bguide05.content.map((item, idx) => (
                <li className="bguide05-subtitle-item" key={idx}>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ textAlign: 'center' }}>
              <a href={buyingGuide.bguide05.link} className="ui button">
                Discover {buyingGuide.bguide05.title}
              </a>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </div>
);

const renderDesktop = () => (
  <div className="bguide05">
    <div className="bguide05-container">
      <div className="bguide05-title">{buyingGuide.bguide05.title}</div>
      <Grid columns="2">
        <Grid.Row>
          <Grid.Column>
            <div className="bguide05-center">
              <div className="bguide05-image-group">
                <img className="bguide05-image01" src={eyelet01} alt="" />
                <img className="bguide05-image02" src={eyelet02} alt="" />
                <img className="bguide05-image03" src={eyelet03} alt="" />
                <img className="bguide05-image04" src={eyelet04} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="bguide05-subtitle">
              {buyingGuide.bguide05.description.map((item, idx) => (
                <div className="bguide05-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
            <ul className="bguide05-subtitle">
              {buyingGuide.bguide05.content.map((item, idx) => (
                <li className="bguide05-subtitle-item" key={idx}>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ textAlign: 'center' }}>
              <a href={buyingGuide.bguide05.link} className="ui button">
                Discover {buyingGuide.bguide05.title}
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

const bguide05 = () => {
  return <div>{renderContent()}</div>;
};

export default bguide05;
