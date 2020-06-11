import React from "react";
import { Responsive, Grid } from "semantic-ui-react";
import "./Promotion.css";
import {
  faHandHoldingUsd,
  faSmileWink,
  faUserShield,
  // faHandshake,
  // faRunning,
  // faGlassCheers,
  // faGifts,
  // faShippingFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Promotion = () => {
  return (
    <div>
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Grid columns="3" style={{ margin: 0 }}>
          <Grid.Row>
            <Grid.Column>
              <div className="promotion-col-m">
                <div className="promotion-icon-m">
                  <FontAwesomeIcon icon={faHandHoldingUsd}></FontAwesomeIcon>
                </div>
                <div className="promotion-body">
                  <div className="promotion-title-m">BEST PRICE</div>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="promotion-col-m">
                <div className="promotion-icon-m">
                  <FontAwesomeIcon icon={faUserShield}></FontAwesomeIcon>
                </div>
                <div className="promotion-body">
                  <div className="promotion-title-m">CHILDSAFE</div>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="promotion-col-m">
                <div className="promotion-icon-m">
                  <FontAwesomeIcon icon={faSmileWink}></FontAwesomeIcon>
                </div>
                <div className="promotion-body">
                  <div className="promotion-title-m">Satisfaction</div>
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
      <Responsive
        minWidth={Responsive.onlyTablet.minWidth}
        maxWidth={Responsive.onlyTablet.maxWidth}
      >
        <Grid columns="3" style={{ margin: 0 }}>
          <Grid.Row>
            <Grid.Column>
              <div className="promotion-col">
                <div className="promotion-icon">
                  <FontAwesomeIcon icon={faHandHoldingUsd}></FontAwesomeIcon>
                  <div className="promotion-title">BEST PRICE</div>
                </div>
                {/* <div className="promotion-body">
                  <div className="promotion-title">BEST PRICE</div>
                  <div className="promotion-subtitle">Buy more, pay less.</div>
                </div> */}
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="promotion-col">
                <div className="promotion-icon">
                  <FontAwesomeIcon icon={faUserShield}></FontAwesomeIcon>
                  <div className="promotion-title">CHILDSAFE</div>
                </div>
                {/* <div className="promotion-body">
                  <div className="promotion-title">CHILDSAFE</div>
                  <div className="promotion-subtitle">
                    Together, protection children.
                  </div>
                </div> */}
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="promotion-col">
                <div className="promotion-icon">
                  <FontAwesomeIcon icon={faSmileWink}></FontAwesomeIcon>
                </div>
                <div className="promotion-body">
                  <div className="promotion-title">100%</div>
                  <div className="promotion-subtitle">
                    Customer Satisfaction.
                  </div>
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
      <Responsive minWidth={Responsive.onlyComputer.minWidth}>
        <Grid columns="3" style={{ margin: 0 }}>
          <Grid.Row>
            <Grid.Column>
              <div className="promotion-col-outter">
                <div className="promotion-col">
                  <div className="promotion-icon">
                    <FontAwesomeIcon icon={faHandHoldingUsd}></FontAwesomeIcon>
                  </div>
                  <div className="promotion-body">
                    <div className="promotion-title">BEST PRICE</div>
                    <div className="promotion-subtitle">
                      Buy more, pay less.
                    </div>
                  </div>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="promotion-col-outter">
                <div className="promotion-col">
                  <div className="promotion-icon">
                    <FontAwesomeIcon icon={faUserShield}></FontAwesomeIcon>
                  </div>
                  <div className="promotion-body">
                    <div className="promotion-title">CHILDSAFE</div>
                    <div className="promotion-subtitle">
                      Together, protection children.
                    </div>
                  </div>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="promotion-col-outter">
                <div className="promotion-col">
                  <div className="promotion-icon">
                    <FontAwesomeIcon icon={faSmileWink}></FontAwesomeIcon>
                  </div>
                  <div className="promotion-body">
                    <div className="promotion-title">100%</div>
                    <div className="promotion-subtitle">
                      Customer Satisfaction.
                    </div>
                  </div>
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
    </div>
  );
};

export default Promotion;
