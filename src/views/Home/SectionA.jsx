import React from "react";
import "./SectionA.css";
import { Responsive, Grid } from "semantic-ui-react";
import * as ROUTES from "../../constants/routes";

import h_01 from "../../assets/images/home/h-01.png";
import h_02 from "../../assets/images/home/h-02.jpg";
import h_03 from "../../assets/images/home/h-03.png";

import sale_off from "../../assets/images/home/sale_off.png";

const renderMobile = () => (
  <div className="sectionA">
    <div className="sectionA-container-m">
      <div className="sectionA-title">
        &nbsp; &bull; Expertly measured
        <br />
        &nbsp; &bull; Tailor-made
        <br />
        &nbsp; &bull; Fitted to perfection
      </div>
      <div className="sectionA-subtitle">
        Curtains, shutters & blinds chosen by you. Measured, made & fitted by
        us.
      </div>

      <div className="sectionA-gallery-image">
        <Grid columns="1" style={{ margin: 0 }}>
          <Grid.Row>
            <Grid.Column>
              <div className="col-container-m">
                <a href={ROUTES.BLINDS_ROLLER} rel="noopener noreferrer">
                  <div className="sectionA-image-box">
                    <img className="sectionA-image-m" src={h_01} alt="" />
                    <img
                      className="sectionA-top-right"
                      src={sale_off}
                      alt="Up to 50% Sale Logo"
                    ></img>
                    <div className="sectionA-image-cover"></div>
                  </div>
                </a>
                <div className="section-header-details">Blinds</div>

                <div className="sectionA-item-details">
                  Combining contemporary designs with great practical benefits,
                  our huge rage of blinds offers style solution for every home.
                </div>

                <div className="sectionA-linkgroup">
                  <a
                    className="sectionA-link"
                    href={ROUTES.BLINDS_ROLLER}
                    rel="noopener noreferrer"
                  >
                    Roller
                  </a>
                  {" / "}
                  <a
                    className="sectionA-link"
                    href={ROUTES.BLINDS_VENETIAN}
                    rel="noopener noreferrer"
                  >
                    Venetian
                  </a>
                  {" / "}
                  <a
                    className="sectionA-link"
                    href={ROUTES.BLINDS_VERTICAL}
                    rel="noopener noreferrer"
                  >
                    Vertical
                  </a>
                  {" / "}
                  <a
                    className="sectionA-link"
                    href={ROUTES.BLINDS_ZEBRA}
                    rel="noopener noreferrer"
                  >
                    Zebra
                  </a>
                </div>
              </div>
            </Grid.Column>

            <Grid.Column>
              <br />
              <br />
              <div className="col-container-m">
                <a href={ROUTES.CURTAIN_DAY} rel="noopener noreferrer">
                  <div className="sectionA-image-box">
                    <img className="sectionA-image-m" src={h_02} alt="" />
                    <img
                      className="sectionA-top-right"
                      src={sale_off}
                      alt="Up to 50% Sale Logo"
                    ></img>
                    <div className="sectionA-image-cover"></div>
                  </div>
                </a>
                <div className="section-header-details">Curtains</div>

                <div className="sectionA-item-details">
                  Add a touch of luxury for your home with beautiful curtains
                  from our collection of quality fabrics and fashion forward
                  designs.
                </div>

                <div className="sectionA-linkgroup">
                  <a
                    className="sectionA-link"
                    href={ROUTES.CURTAIN_DAY}
                    rel="noopener noreferrer"
                  >
                    Day
                  </a>
                  {" / "}
                  <a
                    className="sectionA-link"
                    href={ROUTES.CURTAIN_NIGHT}
                    rel="noopener noreferrer"
                  >
                    Night
                  </a>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <br />
              <br />
              <div className="col-container-m">
                <a href={ROUTES.SHUTTER_TIMBER} rel="noopener noreferrer">
                  <div className="sectionA-image-box">
                    <img className="sectionA-image-m" src={h_03} alt="" />
                    <img
                      className="sectionA-top-right"
                      src={sale_off}
                      alt="Up to 50% Sale Logo"
                    ></img>
                    <div className="sectionA-image-cover"></div>
                  </div>
                </a>
                <div className="section-header-details">Shutters</div>

                <div className="sectionA-item-details">
                  Our collection of stunning shutters offers ranges and colours
                  to elevate any room and capture your unique style.
                </div>

                <div className="sectionA-linkgroup">
                  <a
                    className="sectionA-link"
                    href={ROUTES.SHUTTER_TIMBER}
                    rel="noopener noreferrer"
                  >
                    Timber
                  </a>
                  {" / "}

                  <a
                    className="sectionA-link"
                    href={ROUTES.SHUTTER_PVC}
                    rel="noopener noreferrer"
                  >
                    PVC
                  </a>
                  {" / "}

                  <a
                    className="sectionA-link"
                    href={ROUTES.SHUTTER_EXTERIOR}
                    rel="noopener noreferrer"
                  >
                    Exterior
                  </a>
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
  <div className="sectionA">
    <div className="sectionA-container-t">
      <div className="sectionA-title">
        Expertly measured &nbsp; &bull; &nbsp;Tailor-made &nbsp; &bull; &nbsp;
        Fitted to perfection
      </div>
      <div className="sectionA-subtitle">
        Curtains, shutters & blinds chosen by you. Measured, made & fitted by
        us.
      </div>

      <div className="sectionA-gallery-image">
        <Grid columns="1" style={{ margin: 0 }}>
          <Grid.Row>
            <Grid.Column>
              <div className="col-container-t">
                <a href={ROUTES.BLINDS_ROLLER} rel="noopener noreferrer">
                  <div className="sectionA-image-box">
                    <img className="sectionA-image-t" src={h_01} alt="" />
                    <img
                      className="sectionA-top-right"
                      src={sale_off}
                      alt="Up to 50% Sale Logo"
                    ></img>
                    <div className="sectionA-image-cover"></div>
                  </div>
                </a>
                <div className="section-header-details">Blinds</div>

                <div className="sectionA-item-details">
                  Combining contemporary designs with great practical benefits,
                  our huge rage of blinds offers style solution for every home.
                </div>

                <div className="sectionA-linkgroup">
                  <a
                    className="sectionA-link"
                    href={ROUTES.BLINDS_ROLLER}
                    rel="noopener noreferrer"
                  >
                    Roller
                  </a>
                  {" / "}
                  <a
                    className="sectionA-link"
                    href={ROUTES.BLINDS_VENETIAN}
                    rel="noopener noreferrer"
                  >
                    Venetian
                  </a>
                  {" / "}
                  <a
                    className="sectionA-link"
                    href={ROUTES.BLINDS_VERTICAL}
                    rel="noopener noreferrer"
                  >
                    Vertical
                  </a>
                  {" / "}
                  <a
                    className="sectionA-link"
                    href={ROUTES.BLINDS_ZEBRA}
                    rel="noopener noreferrer"
                  >
                    Zebra
                  </a>
                </div>
              </div>
            </Grid.Column>

            <Grid.Column>
              <br />
              <br />
              <div className="col-container-t">
                <a href={ROUTES.CURTAIN_DAY} rel="noopener noreferrer">
                  <div className="sectionA-image-box">
                    <img className="sectionA-image-t" src={h_02} alt="" />
                    <img
                      className="sectionA-top-right"
                      src={sale_off}
                      alt="Up to 50% Sale Logo"
                    ></img>
                    <div className="sectionA-image-cover"></div>
                  </div>
                </a>
                <div className="section-header-details">Curtains</div>

                <div className="sectionA-item-details">
                  Add a touch of luxury for your home with beautiful curtains
                  from our collection of quality fabrics and fashion forward
                  designs.
                </div>

                <div className="sectionA-linkgroup">
                  <a
                    className="sectionA-link"
                    href={ROUTES.CURTAIN_DAY}
                    rel="noopener noreferrer"
                  >
                    Day
                  </a>
                  {" / "}
                  <a
                    className="sectionA-link"
                    href={ROUTES.CURTAIN_NIGHT}
                    rel="noopener noreferrer"
                  >
                    Night
                  </a>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <br />
              <br />
              <div className="col-container-t">
                <a href={ROUTES.SHUTTER_TIMBER} rel="noopener noreferrer">
                  <div className="sectionA-image-box">
                    <img className="sectionA-image-t" src={h_03} alt="" />
                    <img
                      className="sectionA-top-right"
                      src={sale_off}
                      alt="Up to 50% Sale Logo"
                    ></img>
                    <div className="sectionA-image-cover"></div>
                  </div>
                </a>
                <div className="section-header-details">Shutters</div>

                <div className="sectionA-item-details">
                  Our collection of stunning shutters offers ranges and colours
                  to elevate any room and capture your unique style.
                </div>

                <div className="sectionA-linkgroup">
                  <a
                    className="sectionA-link"
                    href={ROUTES.SHUTTER_TIMBER}
                    rel="noopener noreferrer"
                  >
                    Timber
                  </a>
                  {" / "}

                  <a
                    className="sectionA-link"
                    href={ROUTES.SHUTTER_PVC}
                    rel="noopener noreferrer"
                  >
                    PVC
                  </a>
                  {" / "}

                  <a
                    className="sectionA-link"
                    href={ROUTES.SHUTTER_EXTERIOR}
                    rel="noopener noreferrer"
                  >
                    Exterior
                  </a>
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
  <div className="sectionA">
    <div className="sectionA-container">
      <div className="sectionA-title">
        Expertly measured &nbsp; &bull; &nbsp;Tailor-made &nbsp; &bull; &nbsp;
        Fitted to perfection
      </div>
      <div className="sectionA-subtitle">
        Curtains, shutters & blinds chosen by you. Measured, made & fitted by
        us.
      </div>

      <div className="sectionA-gallery-image">
        <Grid columns="3">
          <Grid.Row>
            <Grid.Column>
              <div className="col-container">
                <a href={ROUTES.BLINDS_ROLLER} rel="noopener noreferrer">
                  <div className="sectionA-image-box">
                    <img className="sectionA-image" src={h_01} alt="" />
                    <img
                      className="sectionA-top-right"
                      src={sale_off}
                      alt="Up to 50% Sale Logo"
                    ></img>
                    <div className="sectionA-image-cover"></div>
                  </div>
                </a>
                <div className="section-header-details">Blinds</div>

                <div className="sectionA-item-details">
                  Combining contemporary designs with great practical benefits,
                  our huge rage of blinds offers style solution for every home.
                </div>

                <div className="sectionA-linkgroup">
                  <a
                    className="sectionA-link"
                    href={ROUTES.BLINDS_ROLLER}
                    rel="noopener noreferrer"
                  >
                    Roller
                  </a>
                  {" / "}
                  <a
                    className="sectionA-link"
                    href={ROUTES.BLINDS_VENETIAN}
                    rel="noopener noreferrer"
                  >
                    Venetian
                  </a>
                  {" / "}
                  <a
                    className="sectionA-link"
                    href={ROUTES.BLINDS_VERTICAL}
                    rel="noopener noreferrer"
                  >
                    Vertical
                  </a>
                  {" / "}
                  <a
                    className="sectionA-link"
                    href={ROUTES.BLINDS_ZEBRA}
                    rel="noopener noreferrer"
                  >
                    Zebra
                  </a>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="col-container">
                <a href={ROUTES.CURTAIN_DAY} rel="noopener noreferrer">
                  <div className="sectionA-image-box">
                    <img className="sectionA-image" src={h_02} alt="" />
                    <img
                      className="sectionA-top-right"
                      src={sale_off}
                      alt="Up to 50% Sale Logo"
                    ></img>
                    <div className="sectionA-image-cover"></div>
                  </div>
                </a>
                <div className="section-header-details">Curtains</div>

                <div className="sectionA-item-details">
                  Add a touch of luxury for your home with beautiful curtains
                  from our collection of quality fabrics and fashion forward
                  designs.
                </div>

                <div className="sectionA-linkgroup">
                  <a
                    className="sectionA-link"
                    href={ROUTES.CURTAIN_DAY}
                    rel="noopener noreferrer"
                  >
                    Day
                  </a>
                  {" / "}
                  <a
                    className="sectionA-link"
                    href={ROUTES.CURTAIN_NIGHT}
                    rel="noopener noreferrer"
                  >
                    Night
                  </a>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="col-container">
                <a href={ROUTES.SHUTTER_TIMBER} rel="noopener noreferrer">
                  <div className="sectionA-image-box">
                    <img className="sectionA-image" src={h_03} alt="" />
                    <img
                      className="sectionA-top-right"
                      src={sale_off}
                      alt="Up to 50% Sale Logo"
                    ></img>
                    <div className="sectionA-image-cover"></div>
                  </div>
                </a>
                <div className="section-header-details">Shutters</div>

                <div className="sectionA-item-details">
                  Our collection of stunning shutters offers ranges and colours
                  to elevate any room and capture your unique style.
                </div>

                <div className="sectionA-linkgroup">
                  <a
                    className="sectionA-link"
                    href={ROUTES.SHUTTER_TIMBER}
                    rel="noopener noreferrer"
                  >
                    Timber
                  </a>
                  {" / "}

                  <a
                    className="sectionA-link"
                    href={ROUTES.SHUTTER_PVC}
                    rel="noopener noreferrer"
                  >
                    PVC
                  </a>
                  {" / "}

                  <a
                    className="sectionA-link"
                    href={ROUTES.SHUTTER_EXTERIOR}
                    rel="noopener noreferrer"
                  >
                    Exterior
                  </a>
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

const SectionA = () => {
  return <div>{renderContent()}</div>;
};

export default SectionA;
