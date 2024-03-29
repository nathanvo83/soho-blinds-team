import React from "react";
import "./BGuide13.css";
import { buyingGuide } from "../../data/buying-guide";
import { Responsive, Grid } from "semantic-ui-react";
import img01 from "../../assets/images/shutter/shaped/img01.webp";
import img02 from "../../assets/images/shutter/shaped/img02.webp";
import img03 from "../../assets/images/shutter/shaped/img03.webp";
import img04 from "../../assets/images/shutter/shaped/img04.webp";

const renderMobile = () => (
  <div className="bguide13">
    <div className="bguide13-container-m">
      <div className="bguide13-title">{buyingGuide.bguide13.title}</div>
      <Grid columns="1" style={{ margin: 0 }}>
        <Grid.Row>
          <Grid.Column>
            <div className="bguide13-center">
              <div className="bguide13-image-group-m">
                <img className="bguide13-image01-m" src={img01} alt="" />
                <img className="bguide13-image02-m" src={img02} alt="" />
                <img className="bguide13-image03-m" src={img03} alt="" />
                <img className="bguide13-image04-m" src={img04} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="bguide13-subtitle" style={{ marginTop: 30 }}>
              {buyingGuide.bguide13.description.map((item, idx) => (
                <div className="bguide13-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
            <ul className="bguide13-subtitle">
              {buyingGuide.bguide13.content.map((item, idx) => (
                <li className="bguide13-subtitle-item" key={idx}>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ textAlign: 'center' }}>
              <a href={buyingGuide.bguide13.link} className="ui button">
                Discover {buyingGuide.bguide13.title}
              </a>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </div>
);

const renderTablet = () => (
  <div className="bguide13">
    <div className="bguide13-container-t">
      <div className="bguide13-title">{buyingGuide.bguide13.title}</div>
      <Grid columns="1">
        <Grid.Row>
          <Grid.Column>
            <div className="bguide13-center">
              <div className="bguide13-image-group">
                <img className="bguide13-image01" src={img01} alt="" />
                <img className="bguide13-image02" src={img02} alt="" />
                <img className="bguide13-image03" src={img03} alt="" />
                <img className="bguide13-image04" src={img04} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="bguide13-subtitle">
              {buyingGuide.bguide13.description.map((item, idx) => (
                <div className="bguide13-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
            <ul className="bguide13-subtitle">
              {buyingGuide.bguide13.content.map((item, idx) => (
                <li className="bguide13-subtitle-item" key={idx}>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ textAlign: 'center' }}>
              <a href={buyingGuide.bguide13.link} className="ui button">
                Discover {buyingGuide.bguide13.title}
              </a>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </div>
);

const renderDesktop = () => (
  <div className="bguide13">
    <div className="bguide13-container">
      <div className="bguide13-title">{buyingGuide.bguide13.title}</div>
      <Grid columns="2">
        <Grid.Row>
          <Grid.Column>
            <div className="bguide13-center">
              <div className="bguide13-image-group">
                <img className="bguide13-image01" src={img01} alt="" />
                <img className="bguide13-image02" src={img02} alt="" />
                <img className="bguide13-image03" src={img03} alt="" />
                <img className="bguide13-image04" src={img04} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="bguide13-subtitle">
              {buyingGuide.bguide13.description.map((item, idx) => (
                <div className="bguide13-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
            <ul className="bguide13-subtitle">
              {buyingGuide.bguide13.content.map((item, idx) => (
                <li className="bguide13-subtitle-item" key={idx}>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ textAlign: 'center' }}>
              <a href={buyingGuide.bguide13.link} className="ui button">
                Discover {buyingGuide.bguide13.title}
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

const bguide13 = () => {
  return <div>{renderContent()}</div>;
};

export default bguide13;
