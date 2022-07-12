import React from "react";
import "./Curtain.css";
import { Responsive, Grid } from "semantic-ui-react";
import { buyingGuide } from "../../data/buying-guide";

import h_01 from "../../assets/images/buying-guide/curtains/h01.webp";
import h_02 from "../../assets/images/buying-guide/curtains/h02.webp";
import h_03 from "../../assets/images/buying-guide/curtains/h03.webp";
import h_04 from "../../assets/images/buying-guide/curtains/h04.webp";
import h_05 from "../../assets/images/buying-guide/curtains/h05.webp";
import h_06 from "../../assets/images/buying-guide/curtains/h06.webp";

const images = [
  h_01,
  h_02,
  h_03,
  h_04,
  h_05,
  h_06,
]

const renderMobile = () => (
  <div className="sectionCurtain">
    <div className="sectionCurtain-container-m">
      <div className="sectionCurtain-title">
        { buyingGuide.bguideCurtain.title }
      </div>

      <div className="sectionCurtain-gallery-image">
        <Grid columns="1" style={{ margin: 0 }}>
          <Grid.Row>
            { buyingGuide.bguideCurtain.items.map((item, index) => <Grid.Column>
                <div className="col-container-m" style={{ marginBottom: 25 }}>
                  <div>
                    <div className="sectionCurtain-image-box">
                      <img className="sectionCurtain-image-m" src={images[index]} alt="" />
                      <div className="sectionCurtain-image-cover"></div>
                    </div>
                  </div>
                  <div className="section-header-details">
                    { item.title }
                  </div>
                  <div className="sectionCurtain-item-details">
                    { item.content }
                  </div>
                </div>
              </Grid.Column>
            ) }
          </Grid.Row>
        </Grid>
      </div>
    </div>
  </div>
);

const renderTablet = () => (
  <div className="sectionCurtain">
    <div className="sectionCurtain-container-t">
      <div className="sectionCurtain-title">
        { buyingGuide.bguideCurtain.title }
      </div>

      <div className="sectionCurtain-gallery-image">
        <Grid columns="1" style={{ margin: 0 }}>
          <Grid.Row>
            { buyingGuide.bguideCurtain.items.map((item, index) => <Grid.Column>
                <div className="col-container-t" style={{ marginBottom: 25 }}>
                  <div>
                    <div className="sectionCurtain-image-box">
                      <img className="sectionCurtain-image-t" src={images[index]} alt="" />
                      <div className="sectionCurtain-image-cover"></div>
                    </div>
                  </div>
                  <div className="section-header-details">
                    { item.title }
                  </div>
                  <div className="sectionCurtain-item-details">
                    { item.content }
                  </div>
                </div>
              </Grid.Column>
            ) }
          </Grid.Row>
        </Grid>
      </div>
    </div>
  </div>
);

const renderDesktop = () => (
  <div className="sectionCurtain">
    <div className="sectionCurtain-container">
      <div className="sectionCurtain-title">
        { buyingGuide.bguideCurtain.title }
      </div>

      <div className="sectionCurtain-gallery-image">
        <Grid columns="3">
          <Grid.Row>
            { buyingGuide.bguideCurtain.items.map((item, index) => <Grid.Column>
              <div className="sectionCurtain-col-container" style={{ marginBottom: 25 }}>
                  <div>
                    <div className="sectionCurtain-image-box">
                      <img className="sectionCurtain-image" src={images[index]} alt="" />
                      <div className="sectionCurtain-image-cover"></div>
                    </div>
                  </div>
                  <div className="section-header-details">
                    { item.title }
                  </div>
                  <div className="sectionCurtain-item-details">
                    { item.content }
                  </div>
                </div>
              </Grid.Column>
            ) }
          </Grid.Row>
        </Grid>
      </div>

      <div style={{ textAlign: 'center' }}>
        <a href={buyingGuide.bguideCurtain.link} className="ui button">
          Discover Our Curtains
        </a>
      </div>
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

const sectionCurtain = () => {
  return <div>{renderContent()}</div>;
};

export default sectionCurtain;
