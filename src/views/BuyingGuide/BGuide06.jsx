import React from "react";
import "./BGuide06.css";
import { buyingGuide } from "../../data/buying-guide";
import { Responsive, Grid } from "semantic-ui-react";
import pencil01 from "../../assets/images/curtain/pencil-pleat/pencil01.webp";
import pencil02 from "../../assets/images/curtain/pencil-pleat/pencil02.webp";
import pencil03 from "../../assets/images/curtain/pencil-pleat/pencil03.webp";
import pencil04 from "../../assets/images/curtain/pencil-pleat/pencil04.webp";

const renderMobile = () => (
  <div className="bguide06">
    <div className="bguide06-container-m">
      <div className="bguide06-title">{buyingGuide.bguide06.title}</div>
      <Grid columns="1" style={{ margin: 0 }}>
        <Grid.Row>
          <Grid.Column>
            <div className="bguide06-center">
              <div className="bguide06-image-group-m">
                <img className="bguide06-image01-m" src={pencil01} alt="" />
                <img className="bguide06-image02-m" src={pencil02} alt="" />
                <img className="bguide06-image03-m" src={pencil03} alt="" />
                <img className="bguide06-image04-m" src={pencil04} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="bguide06-subtitle" style={{ marginTop: 30 }}>
              {buyingGuide.bguide06.description.map((item, idx) => (
                <div className="bguide06-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
            <ul className="bguide06-subtitle">
              {buyingGuide.bguide06.content.map((item, idx) => (
                <li className="bguide06-subtitle-item" key={idx}>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ textAlign: 'center' }}>
              <a href={buyingGuide.bguide06.link} className="ui button">
                Discover {buyingGuide.bguide06.title}
              </a>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </div>
);

const renderTablet = () => (
  <div className="bguide06">
    <div className="bguide06-container-t">
      <div className="bguide06-title">{buyingGuide.bguide06.title}</div>
      <Grid columns="1">
        <Grid.Row>
          <Grid.Column>
            <div className="bguide06-center">
              <div className="bguide06-image-group">
                <img className="bguide06-image01" src={pencil01} alt="" />
                <img className="bguide06-image02" src={pencil02} alt="" />
                <img className="bguide06-image03" src={pencil03} alt="" />
                <img className="bguide06-image04" src={pencil04} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="bguide06-subtitle">
              {buyingGuide.bguide06.description.map((item, idx) => (
                <div className="bguide06-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
            <ul className="bguide06-subtitle">
              {buyingGuide.bguide06.content.map((item, idx) => (
                <li className="bguide06-subtitle-item" key={idx}>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ textAlign: 'center' }}>
              <a href={buyingGuide.bguide06.link} className="ui button">
                Discover {buyingGuide.bguide06.title}
              </a>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </div>
);

const renderDesktop = () => (
  <div className="bguide06">
    <div className="bguide06-container">
      <div className="bguide06-title">{buyingGuide.bguide06.title}</div>
      <Grid columns="2">
        <Grid.Row>
          <Grid.Column>
            <div className="bguide06-subtitle">
              {buyingGuide.bguide06.description.map((item, idx) => (
                <div className="bguide06-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
            <ul className="bguide06-subtitle">
              {buyingGuide.bguide06.content.map((item, idx) => (
                <li className="bguide06-subtitle-item" key={idx}>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ textAlign: 'center' }}>
              <a href={buyingGuide.bguide06.link} className="ui button">
                Discover {buyingGuide.bguide06.title}
              </a>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="bguide06-center">
              <div className="bguide06-image-group">
                <img className="bguide06-image01" src={pencil01} alt="" />
                <img className="bguide06-image02" src={pencil02} alt="" />
                <img className="bguide06-image03" src={pencil03} alt="" />
                <img className="bguide06-image04" src={pencil04} alt="" />
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

const bguide06 = () => {
  return <div>{renderContent()}</div>;
};

export default bguide06;
