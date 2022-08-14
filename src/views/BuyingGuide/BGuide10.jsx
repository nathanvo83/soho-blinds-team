import React from "react";
import "./BGuide10.css";
import { buyingGuide } from "../../data/buying-guide";
import { Responsive, Grid } from "semantic-ui-react";
import img01 from "../../assets/images/shutter/tier/img01.webp";
import img02 from "../../assets/images/shutter/tier/img02.webp";
import img03 from "../../assets/images/shutter/tier/img03.webp";
import img04 from "../../assets/images/shutter/tier/img04.webp";

const renderMobile = () => (
  <div className="bguide10">
    <div className="bguide10-container-m">
      <div className="bguide10-title">{buyingGuide.bguide10.title}</div>
      <Grid columns="1" style={{ margin: 0 }}>
        <Grid.Row>
          <Grid.Column>
            <div className="bguide10-center">
              <div className="bguide10-image-group-m">
                <img className="bguide10-image01-m" src={img01} alt="" />
                <img className="bguide10-image02-m" src={img02} alt="" />
                <img className="bguide10-image03-m" src={img03} alt="" />
                <img className="bguide10-image04-m" src={img04} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="bguide10-subtitle" style={{ marginTop: 30 }}>
              {buyingGuide.bguide10.description.map((item, idx) => (
                <div className="bguide10-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
            <ul className="bguide10-subtitle">
              {buyingGuide.bguide10.content.map((item, idx) => (
                <li className="bguide10-subtitle-item" key={idx}>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ textAlign: 'center' }}>
              <a href={buyingGuide.bguide10.link} className="ui button">
                Discover {buyingGuide.bguide10.title}
              </a>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </div>
);

const renderTablet = () => (
  <div className="bguide10">
    <div className="bguide10-container-t">
      <div className="bguide10-title">{buyingGuide.bguide10.title}</div>
      <Grid columns="1">
        <Grid.Row>
          <Grid.Column>
            <div className="bguide10-center">
              <div className="bguide10-image-group">
                <img className="bguide10-image01" src={img01} alt="" />
                <img className="bguide10-image02" src={img02} alt="" />
                <img className="bguide10-image03" src={img03} alt="" />
                <img className="bguide10-image04" src={img04} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="bguide10-subtitle">
              {buyingGuide.bguide10.description.map((item, idx) => (
                <div className="bguide10-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
            <ul className="bguide10-subtitle">
              {buyingGuide.bguide10.content.map((item, idx) => (
                <li className="bguide10-subtitle-item" key={idx}>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ textAlign: 'center' }}>
              <a href={buyingGuide.bguide10.link} className="ui button">
                Discover {buyingGuide.bguide10.title}
              </a>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </div>
);

const renderDesktop = () => (
  <div className="bguide10">
    <div className="bguide10-container">
      <div className="bguide10-title">{buyingGuide.bguide10.title}</div>
      <Grid columns="2">
        <Grid.Row>
          <Grid.Column>
            <div className="bguide10-subtitle">
              {buyingGuide.bguide10.description.map((item, idx) => (
                <div className="bguide10-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
            <ul className="bguide10-subtitle">
              {buyingGuide.bguide10.content.map((item, idx) => (
                <li className="bguide10-subtitle-item" key={idx}>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ textAlign: 'center' }}>
              <a href={buyingGuide.bguide10.link} className="ui button">
                Discover {buyingGuide.bguide10.title}
              </a>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="bguide10-center">
              <div className="bguide10-image-group">
                <img className="bguide10-image01" src={img01} alt="" />
                <img className="bguide10-image02" src={img02} alt="" />
                <img className="bguide10-image03" src={img03} alt="" />
                <img className="bguide10-image04" src={img04} alt="" />
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

const bguide10 = () => {
  return <div>{renderContent()}</div>;
};

export default bguide10;
