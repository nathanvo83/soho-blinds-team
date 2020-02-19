import React from "react";
import { Responsive, Grid } from "semantic-ui-react";
import "./Promotion.css";
import { faGift } from "@fortawesome/free-solid-svg-icons";

const Promotion = () => {
  return (
    <div>
      <div className="pro-bg">
        {/* <div className="pro-boby">aaa</div> */}

        {/* <div className="pro-boby">
          <div className="pro-01">
            <div className="pro-01-line01">summer</div>
            <div className="pro-01-line02">savings</div>
          </div>
        </div> */}
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
    </div>
  );
};

export default Promotion;
