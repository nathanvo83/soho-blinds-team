import React from "react";
import "./Section03.css";
import { Responsive, Grid } from "semantic-ui-react";

import h_01 from "../../assets/images/showroom/section03_1.jpg";
import h_02 from "../../assets/images/showroom/section03_2.jpg";
import h_03 from "../../assets/images/showroom/section03_3.jpg";

const renderMobile = () => (
  <div className="section03">
    <div className="section03-container-m">
      <div className="section03-title">
        What to do next
      </div>

      <div className="section03-gallery-image">
        <Grid columns="1" style={{ margin: 0 }}>
          <Grid.Row>
            <Grid.Column>
              <div className="col-container-m">
                <div>
                  <div className="section03-image-box">
                    <img className="section03-image-m" src={h_01} alt="" />
                    <div className="section03-image-cover"></div>
                  </div>
                </div>
                <div className="section-header-details">
                  1. Book a free in-home appointment
                </div>
                <div className="section03-item-details">
                  Choose a time that suits you, including evenings and weekends.
                </div>
              </div>
            </Grid.Column>

            <Grid.Column>
              <br />
              <br />
              <div className="col-container-m">
                <div>
                  <div className="section03-image-box">
                    <img className="section03-image-m" src={h_02} alt="" />
                    <div className="section03-image-cover"></div>
                  </div>
                </div>
                <div className="section-header-details">
                  2. Get expert advice
                </div>
                <div className="section03-item-details">
                  Your local advisor will bring all our samples to your appointment.
                  They'll measure your windows and leave you with a quote for all your favourite looks.
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <br />
              <br />
              <div className="col-container-m">
                <div>
                  <div className="section03-image-box">
                    <img className="section03-image-m" src={h_03} alt="" />
                    <div className="section03-image-cover"></div>
                  </div>
                </div>
                <div className="section-header-details">
                  3. Professional fitting included
                </div>
                <div className="section03-item-details">
                  Once your order is ready, your advisor will take care of fitting
                  - at a time that suits you
                  - so you can expect a perfect finish.
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  </div>
);

const renderTablet = () => (
  <div className="section03">
    <div className="section03-container-t">
      <div className="section03-title">
        What to do next
      </div>

      <div className="section03-gallery-image">
        <Grid columns="1" style={{ margin: 0 }}>
          <Grid.Row>
            <Grid.Column>
              <div className="col-container-t">
                <div>
                  <div className="section03-image-box">
                    <img className="section03-image-t" src={h_01} alt="" />
                    <div className="section03-image-cover"></div>
                  </div>
                </div>
                <div className="section-header-details">
                  1. Book a free in-home appointment
                </div>
                <div className="section03-item-details">
                  Choose a time that suits you, including evenings and weekends.
                </div>
              </div>
            </Grid.Column>

            <Grid.Column>
              <br />
              <br />
              <div className="col-container-t">
                <div>
                  <div className="section03-image-box">
                    <img className="section03-image-t" src={h_02} alt="" />
                    <div className="section03-image-cover"></div>
                  </div>
                </div>
                <div className="section-header-details">
                  2. Get expert advice
                </div>
                <div className="section03-item-details">
                  Your local advisor will bring all our samples to your appointment.
                  They'll measure your windows and leave you with a quote for all your favourite looks.
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <br />
              <br />
              <div className="col-container-t">
                <div>
                  <div className="section03-image-box">
                    <img className="section03-image-t" src={h_03} alt="" />
                    <div className="section03-image-cover"></div>
                  </div>
                </div>
                <div className="section-header-details">
                  3. Professional fitting included
                </div>
                <div className="section03-item-details">
                  Once your order is ready, your advisor will take care of fitting
                  - at a time that suits you
                  - so you can expect a perfect finish.
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  </div>
);

const renderDesktop = () => (
  <div className="section03">
    <div className="section03-container">
      <div className="section03-title">
        What to do next
      </div>

      <div className="section03-gallery-image">
        <Grid columns="3">
          <Grid.Row>
            <Grid.Column>
              <div className="col-container">
                <div>
                  <div className="section03-image-box">
                    <img className="section03-image" src={h_01} alt="Book an Appointment" />
                    <div className="section03-image-cover"></div>
                  </div>
                </div>
                <div className="section-header-details">
                  1. Book a free in-home appointment
                </div>
                <div className="section03-item-details">
                  Choose a time that suits you, including evenings and weekends.
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="col-container">
                <div>
                  <div className="section03-image-box">
                    <img className="section03-image" src={h_02} alt="Get Expert Advice" />
                    <div className="section03-image-cover"></div>
                  </div>
                </div>
                <div className="section-header-details">
                  2. Get expert advice
                </div>
                <div className="section03-item-details">
                  Your local advisor will bring all our samples to your appointment.
                  They'll measure your windows and leave you with a quote for all your favourite looks.
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="col-container">
                <div>
                  <div className="section03-image-box">
                    <img className="section03-image" src={h_03} alt="Professional fitting" />
                    <div className="section03-image-cover"></div>
                  </div>
                </div>
                <div className="section-header-details">
                  3. Professional fitting included
                </div>
                <div className="section03-item-details">
                  Once your order is ready, your advisor will take care of fitting
                  - at a time that suits you
                  - so you can expect a perfect finish.
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
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

const Section03 = () => {
  return <div>{renderContent()}</div>;
};

export default Section03;
