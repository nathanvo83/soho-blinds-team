import React from "react";
import "./BGuide12.css";
import { buyingGuide } from "../../data/buying-guide";
import { Responsive, Grid } from "semantic-ui-react";
import img01 from "../../assets/images/shutter/tracked/img01.webp";
import img02 from "../../assets/images/shutter/tracked/img02.webp";
import img03 from "../../assets/images/shutter/tracked/img03.webp";
import img04 from "../../assets/images/shutter/tracked/img04.webp";

const renderMobile = () => (
  <div className="bguide12">
    <div className="bguide12-container-m">
      <div className="bguide12-title">{buyingGuide.bguide12.title}</div>
      <Grid columns="1" style={{ margin: 0 }}>
        <Grid.Row>
          <Grid.Column>
            <div className="bguide12-center">
              <div className="bguide12-image-group-m">
                <img className="bguide12-image01-m" src={img01} alt="" />
                <img className="bguide12-image02-m" src={img02} alt="" />
                <img className="bguide12-image03-m" src={img03} alt="" />
                <img className="bguide12-image04-m" src={img04} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="bguide12-subtitle" style={{ marginTop: 30 }}>
              {buyingGuide.bguide12.description.map((item, idx) => (
                <div className="bguide12-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
            <ul className="bguide12-subtitle">
              {buyingGuide.bguide12.content.map((item, idx) => (
                <li className="bguide12-subtitle-item" key={idx}>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ textAlign: 'center' }}>
              <a href={buyingGuide.bguide12.link} className="ui button">
                Discover {buyingGuide.bguide12.title}
              </a>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </div>
);

const renderTablet = () => (
  <div className="bguide12">
    <div className="bguide12-container-t">
      <div className="bguide12-title">{buyingGuide.bguide12.title}</div>
      <Grid columns="1">
        <Grid.Row>
          <Grid.Column>
            <div className="bguide12-center">
              <div className="bguide12-image-group">
                <img className="bguide12-image01" src={img01} alt="" />
                <img className="bguide12-image02" src={img02} alt="" />
                <img className="bguide12-image03" src={img03} alt="" />
                <img className="bguide12-image04" src={img04} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="bguide12-subtitle">
              {buyingGuide.bguide12.description.map((item, idx) => (
                <div className="bguide12-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
            <ul className="bguide12-subtitle">
              {buyingGuide.bguide12.content.map((item, idx) => (
                <li className="bguide12-subtitle-item" key={idx}>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ textAlign: 'center' }}>
              <a href={buyingGuide.bguide12.link} className="ui button">
                Discover {buyingGuide.bguide12.title}
              </a>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </div>
);

const renderDesktop = () => (
  <div className="bguide12">
    <div className="bguide12-container">
      <div className="bguide12-title">{buyingGuide.bguide12.title}</div>
      <Grid columns="2">
        <Grid.Row>
          <Grid.Column>
            <div className="bguide12-subtitle">
              {buyingGuide.bguide12.description.map((item, idx) => (
                <div className="bguide12-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
            <ul className="bguide12-subtitle">
              {buyingGuide.bguide12.content.map((item, idx) => (
                <li className="bguide12-subtitle-item" key={idx}>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ textAlign: 'center' }}>
              <a href={buyingGuide.bguide12.link} className="ui button">
                Discover {buyingGuide.bguide12.title}
              </a>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="bguide12-center">
              <div className="bguide12-image-group">
                <img className="bguide12-image01" src={img01} alt="" />
                <img className="bguide12-image02" src={img02} alt="" />
                <img className="bguide12-image03" src={img03} alt="" />
                <img className="bguide12-image04" src={img04} alt="" />
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

const bguide12 = () => {
  return <div>{renderContent()}</div>;
};

export default bguide12;
