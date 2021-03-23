import React from "react";
import "./Section04.css";
import { home } from "../../data/home";
import { Responsive, Grid } from "semantic-ui-react";
import {
  faHandHoldingUsd,
  faHandshake,
  faRunning,
  faGlassCheers,
  faGifts,
  faShippingFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const renderMobile = () => (
  <div className="section04">
    <div className="section04-container-m">
      <div className="section04-header">About us</div>

      <Grid columns="1" style={{ margin: 0 }}>
        <Grid.Row>
          <Grid.Column>
            <div className="section04-col">
              <div className="section04-icon">
                <FontAwesomeIcon icon={faGlassCheers}></FontAwesomeIcon>
              </div>
              <div className="section04-body">
                <div className="section04-title">
                  {home.section04.aboutUs_01.title}
                </div>
                <div className="section04-subtitle">
                  {home.section04.aboutUs_01.content}
                </div>
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="section04-col">
              <div className="section04-icon">
                <FontAwesomeIcon icon={faGifts}></FontAwesomeIcon>
              </div>
              <div className="section04-body">
                <div className="section04-title">
                  {home.section04.aboutUs_02.title}
                </div>
                <div className="section04-subtitle">
                  {home.section04.aboutUs_02.content}
                </div>
              </div>
            </div>
          </Grid.Column>

          <Grid.Column>
            <div className="section04-col">
              <div className="section04-icon">
                <FontAwesomeIcon icon={faHandshake}></FontAwesomeIcon>
              </div>
              <div className="section04-body">
                <div className="section04-title">
                  {home.section04.aboutUs_03.title}
                </div>
                <div className="section04-subtitle">
                  {home.section04.aboutUs_03.content}
                </div>
              </div>
            </div>
          </Grid.Column>

          <Grid.Column>
            <div className="section04-col">
              <div className="section04-icon">
                <FontAwesomeIcon icon={faHandHoldingUsd}></FontAwesomeIcon>
              </div>
              <div className="section04-body">
                <div className="section04-title">
                  {home.section04.aboutUs_06.title}
                </div>
                <div className="section04-subtitle">
                  {home.section04.aboutUs_06.content}
                </div>
              </div>
            </div>
          </Grid.Column>

          <Grid.Column>
            <div className="section04-col">
              <div className="section04-icon">
                <FontAwesomeIcon icon={faShippingFast}></FontAwesomeIcon>
              </div>
              <div className="section04-body">
                <div className="section04-title">
                  {home.section04.aboutUs_05.title}
                </div>
                <div className="section04-subtitle">
                  {home.section04.aboutUs_05.content}
                </div>
              </div>
            </div>
          </Grid.Column>

          <Grid.Column>
            <div className="section04-col">
              <div className="section04-icon">
                <FontAwesomeIcon icon={faRunning}></FontAwesomeIcon>
              </div>
              <div className="section04-body">
                <div className="section04-title">
                  {home.section04.aboutUs_04.title}
                </div>
                <div className="section04-subtitle">
                  {home.section04.aboutUs_04.content}
                </div>
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </div>
);

const renderTablet = () => (
  <div className="section04">
    <div className="section04-container-t">
      <div className="section04-header">About us</div>

      <Grid columns="2">
        <Grid.Row>
          <Grid.Column>
            <div className="section04-col">
              <div className="section04-icon">
                <FontAwesomeIcon icon={faGlassCheers}></FontAwesomeIcon>
              </div>
              <div className="section04-body">
                <div className="section04-title">
                  {home.section04.aboutUs_01.title}
                </div>
                <div className="section04-subtitle">
                  {home.section04.aboutUs_01.content}
                </div>
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="section04-col">
              <div className="section04-icon">
                <FontAwesomeIcon icon={faGifts}></FontAwesomeIcon>
              </div>
              <div className="section04-body">
                <div className="section04-title">
                  {home.section04.aboutUs_02.title}
                </div>
                <div className="section04-subtitle">
                  {home.section04.aboutUs_02.content}
                </div>
              </div>
            </div>
          </Grid.Column>

          <Grid.Column>
            <div className="section04-col">
              <div className="section04-icon">
                <FontAwesomeIcon icon={faHandshake}></FontAwesomeIcon>
              </div>
              <div className="section04-body">
                <div className="section04-title">
                  {home.section04.aboutUs_03.title}
                </div>
                <div className="section04-subtitle">
                  {home.section04.aboutUs_03.content}
                </div>
              </div>
            </div>
          </Grid.Column>

          <Grid.Column>
            <div className="section04-col">
              <div className="section04-icon">
                <FontAwesomeIcon icon={faHandHoldingUsd}></FontAwesomeIcon>
              </div>
              <div className="section04-body">
                <div className="section04-title">
                  {home.section04.aboutUs_06.title}
                </div>
                <div className="section04-subtitle">
                  {home.section04.aboutUs_06.content}
                </div>
              </div>
            </div>
          </Grid.Column>

          <Grid.Column>
            <div className="section04-col">
              <div className="section04-icon">
                <FontAwesomeIcon icon={faShippingFast}></FontAwesomeIcon>
              </div>
              <div className="section04-body">
                <div className="section04-title">
                  {home.section04.aboutUs_05.title}
                </div>
                <div className="section04-subtitle">
                  {home.section04.aboutUs_05.content}
                </div>
              </div>
            </div>
          </Grid.Column>

          <Grid.Column>
            <div className="section04-col">
              <div className="section04-icon">
                <FontAwesomeIcon icon={faRunning}></FontAwesomeIcon>
              </div>
              <div className="section04-body">
                <div className="section04-title">
                  {home.section04.aboutUs_04.title}
                </div>
                <div className="section04-subtitle">
                  {home.section04.aboutUs_04.content}
                </div>
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </div>
);

const renderDesktop = () => (
  <div className="section04">
    <div className="section04-container">
      <div className="section04-header">About us</div>

      <Grid columns="2">
        <Grid.Row>
          <Grid.Column>
            <div className="section04-col">
              <div className="section04-icon">
                <FontAwesomeIcon icon={faGlassCheers}></FontAwesomeIcon>
              </div>
              <div className="section04-body">
                <div className="section04-title">
                  {home.section04.aboutUs_01.title}
                </div>
                <div className="section04-subtitle">
                  {home.section04.aboutUs_01.content}
                </div>
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="section04-col">
              <div className="section04-icon">
                <FontAwesomeIcon icon={faGifts}></FontAwesomeIcon>
              </div>
              <div className="section04-body">
                <div className="section04-title">
                  {home.section04.aboutUs_02.title}
                </div>
                <div className="section04-subtitle">
                  {home.section04.aboutUs_02.content}
                </div>
              </div>
            </div>
          </Grid.Column>

          <Grid.Column>
            <div className="section04-col">
              <div className="section04-icon">
                <FontAwesomeIcon icon={faHandshake}></FontAwesomeIcon>
              </div>
              <div className="section04-body">
                <div className="section04-title">
                  {home.section04.aboutUs_03.title}
                </div>
                <div className="section04-subtitle">
                  {home.section04.aboutUs_03.content}
                </div>
              </div>
            </div>
          </Grid.Column>

          <Grid.Column>
            <div className="section04-col">
              <div className="section04-icon">
                <FontAwesomeIcon icon={faHandHoldingUsd}></FontAwesomeIcon>
              </div>
              <div className="section04-body">
                <div className="section04-title">
                  {home.section04.aboutUs_06.title}
                </div>
                <div className="section04-subtitle">
                  {home.section04.aboutUs_06.content}
                </div>
              </div>
            </div>
          </Grid.Column>

          <Grid.Column>
            <div className="section04-col">
              <div className="section04-icon">
                <FontAwesomeIcon icon={faShippingFast}></FontAwesomeIcon>
              </div>
              <div className="section04-body">
                <div className="section04-title">
                  {home.section04.aboutUs_05.title}
                </div>
                <div className="section04-subtitle">
                  {home.section04.aboutUs_05.content}
                </div>
              </div>
            </div>
          </Grid.Column>

          <Grid.Column>
            <div className="section04-col">
              <div className="section04-icon">
                <FontAwesomeIcon icon={faRunning}></FontAwesomeIcon>
              </div>
              <div className="section04-body">
                <div className="section04-title">
                  {home.section04.aboutUs_04.title}
                </div>
                <div className="section04-subtitle">
                  {home.section04.aboutUs_04.content}
                </div>
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

const Section04 = () => {
  return <div>{renderContent()}</div>;
};

export default Section04;
