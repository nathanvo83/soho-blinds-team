import React from "react";
import "./Section04.css";
import { showroom } from "../../data/showroom";
import { Responsive, Grid } from "semantic-ui-react";
import {
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const renderMobile = () => (
  <div className="section04">
    <div className="section04-container-m">
      <div className="section04-header">Why people choose us</div>

      <Grid columns="1" style={{ margin: 0 }}>
        <Grid.Row>
          <Grid.Column>
            <div className="section04-col">
              <div className="section04-icon">
                <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
              </div>
              <div className="section04-body">
                <div className="section04-title">
                  {showroom.section04.item_01.title}
                </div>
                <div className="section04-subtitle">
                  {showroom.section04.item_01.content}
                </div>
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="section04-col">
              <div className="section04-icon">
                <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
              </div>
              <div className="section04-body">
                <div className="section04-title">
                  {showroom.section04.item_02.title}
                </div>
                <div className="section04-subtitle">
                  {showroom.section04.item_02.content}
                </div>
              </div>
            </div>
          </Grid.Column>

          <Grid.Column>
            <div className="section04-col">
              <div className="section04-icon">
                <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
              </div>
              <div className="section04-body">
                <div className="section04-title">
                  {showroom.section04.item_03.title}
                </div>
                <div className="section04-subtitle">
                  {showroom.section04.item_03.content}
                </div>
              </div>
            </div>
          </Grid.Column>

          <Grid.Column>
            <div className="section04-col">
              <div className="section04-icon">
                <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
              </div>
              <div className="section04-body">
                <div className="section04-title">
                  {showroom.section04.item_06.title}
                </div>
                <div className="section04-subtitle">
                  {showroom.section04.item_06.content}
                </div>
              </div>
            </div>
          </Grid.Column>

          <Grid.Column>
            <div className="section04-col">
              <div className="section04-icon">
                <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
              </div>
              <div className="section04-body">
                <div className="section04-title">
                  {showroom.section04.item_05.title}
                </div>
                <div className="section04-subtitle">
                  {showroom.section04.item_05.content}
                </div>
              </div>
            </div>
          </Grid.Column>

          <Grid.Column>
            <div className="section04-col">
              <div className="section04-icon">
                <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
              </div>
              <div className="section04-body">
                <div className="section04-title">
                  {showroom.section04.item_04.title}
                </div>
                <div className="section04-subtitle">
                  {showroom.section04.item_04.content}
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
      <div className="section04-header">Why people choose us</div>

      <Grid columns="2">
        <Grid.Row>
          <Grid.Column>
            <div className="section04-col">
              <div className="section04-icon">
                <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
              </div>
              <div className="section04-body">
                <div className="section04-title">
                  {showroom.section04.item_01.title}
                </div>
                <div className="section04-subtitle">
                  {showroom.section04.item_01.content}
                </div>
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="section04-col">
              <div className="section04-icon">
                <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
              </div>
              <div className="section04-body">
                <div className="section04-title">
                  {showroom.section04.item_02.title}
                </div>
                <div className="section04-subtitle">
                  {showroom.section04.item_02.content}
                </div>
              </div>
            </div>
          </Grid.Column>

          <Grid.Column>
            <div className="section04-col">
              <div className="section04-icon">
                <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
              </div>
              <div className="section04-body">
                <div className="section04-title">
                  {showroom.section04.item_03.title}
                </div>
                <div className="section04-subtitle">
                  {showroom.section04.item_03.content}
                </div>
              </div>
            </div>
          </Grid.Column>

          <Grid.Column>
            <div className="section04-col">
              <div className="section04-icon">
                <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
              </div>
              <div className="section04-body">
                <div className="section04-title">
                  {showroom.section04.item_06.title}
                </div>
                <div className="section04-subtitle">
                  {showroom.section04.item_06.content}
                </div>
              </div>
            </div>
          </Grid.Column>

          <Grid.Column>
            <div className="section04-col">
              <div className="section04-icon">
                <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
              </div>
              <div className="section04-body">
                <div className="section04-title">
                  {showroom.section04.item_05.title}
                </div>
                <div className="section04-subtitle">
                  {showroom.section04.item_05.content}
                </div>
              </div>
            </div>
          </Grid.Column>

          <Grid.Column>
            <div className="section04-col">
              <div className="section04-icon">
                <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
              </div>
              <div className="section04-body">
                <div className="section04-title">
                  {showroom.section04.item_04.title}
                </div>
                <div className="section04-subtitle">
                  {showroom.section04.item_04.content}
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
      <div className="section04-header">Why people choose us</div>

      <Grid columns="2">
        <Grid.Row>
          <Grid.Column>
            <div className="section04-col">
              <div className="section04-icon">
                <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
              </div>
              <div className="section04-body">
                <div className="section04-title">
                  {showroom.section04.item_01.title}
                </div>
                <div className="section04-subtitle">
                  {showroom.section04.item_01.content}
                </div>
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="section04-col">
              <div className="section04-icon">
                <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
              </div>
              <div className="section04-body">
                <div className="section04-title">
                  {showroom.section04.item_02.title}
                </div>
                <div className="section04-subtitle">
                  {showroom.section04.item_02.content}
                </div>
              </div>
            </div>
          </Grid.Column>

          <Grid.Column>
            <div className="section04-col">
              <div className="section04-icon">
                <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
              </div>
              <div className="section04-body">
                <div className="section04-title">
                  {showroom.section04.item_03.title}
                </div>
                <div className="section04-subtitle">
                  {showroom.section04.item_03.content}
                </div>
              </div>
            </div>
          </Grid.Column>

          <Grid.Column>
            <div className="section04-col">
              <div className="section04-icon">
                <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
              </div>
              <div className="section04-body">
                <div className="section04-title">
                  {showroom.section04.item_06.title}
                </div>
                <div className="section04-subtitle">
                  {showroom.section04.item_06.content}
                </div>
              </div>
            </div>
          </Grid.Column>

          <Grid.Column>
            <div className="section04-col">
              <div className="section04-icon">
                <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
              </div>
              <div className="section04-body">
                <div className="section04-title">
                  {showroom.section04.item_05.title}
                </div>
                <div className="section04-subtitle">
                  {showroom.section04.item_05.content}
                </div>
              </div>
            </div>
          </Grid.Column>

          <Grid.Column>
            <div className="section04-col">
              <div className="section04-icon">
                <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
              </div>
              <div className="section04-body">
                <div className="section04-title">
                  {showroom.section04.item_04.title}
                </div>
                <div className="section04-subtitle">
                  {showroom.section04.item_04.content}
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
