import React from "react";
import { Responsive, Grid } from "semantic-ui-react";
import "./Promotion.css";

const Promotion_bk = () => {
  return (
    <div>
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <div className="pro-bg-m">
          <Grid columns="3" style={{ margin: 0 }}>
            <Grid.Row>
              <Grid.Column>
                <div className="pro-out-m">
                  <div className="pro-content-m">
                    <div className="pro-01-line01-m">summer</div>
                    <div className="pro-01-line02-m">savings</div>
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className="pro-out-m">
                  <div className="pro-content-m">
                    <div className="pro-02-line01-m">up to</div>
                    <div className="pro-02-line02-m">50% off</div>
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className="pro-out-m">
                  <div className="pro-content-m">
                    <div className="pro-03-line01-m">plus an extra</div>
                    <div className="pro-03-line02-m">15% off</div>
                    <div className="pro-03-line03-m">everything</div>
                  </div>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Responsive>
      <Responsive
        minWidth={Responsive.onlyTablet.minWidth}
        maxWidth={Responsive.onlyTablet.maxWidth}
      >
        <div className="pro-bg-t">
          <Grid columns="3" style={{ margin: 0 }}>
            <Grid.Row>
              <Grid.Column>
                <div className="pro-out-t">
                  <div className="pro-content-t">
                    <div className="pro-01-line01-t">summer</div>
                    <div className="pro-01-line02-t">savings</div>
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className="pro-out-t">
                  <div className="pro-content-t">
                    <div className="pro-02-line01-t">up to</div>
                    <div className="pro-02-line02-t">50% off</div>
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className="pro-out-t">
                  <div className="pro-content-t">
                    <div className="pro-03-line01-t">plus an extra</div>
                    <div className="pro-03-line02-t">15% off</div>
                    <div className="pro-03-line03-t">everything</div>
                  </div>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Responsive>
      <Responsive minWidth={Responsive.onlyComputer.minWidth}>
        <div className="pro-bg-d">
          <Grid columns="3" style={{ margin: 0 }}>
            <Grid.Row>
              <Grid.Column>
                <div className="pro-out">
                  <div className="pro-content">
                    <div className="pro-01-line01">summer</div>
                    <div className="pro-01-line02">savings</div>
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className="pro-out">
                  <div className="pro-content">
                    <div className="pro-02-line01">up to</div>
                    <div className="pro-02-line02">50% off</div>
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className="pro-out">
                  <div className="pro-content">
                    <div className="pro-03-line01">plus an extra</div>
                    <div className="pro-03-line02">15% off</div>
                    <div className="pro-03-line03">everything</div>
                  </div>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Responsive>
    </div>
  );
};

export default Promotion_bk;
