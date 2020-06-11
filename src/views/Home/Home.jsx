import React from "react";
import Header from "../../components/Header/Header";
import {
  faHandHoldingUsd,
  faHandshake,
  faRunning,
  faGlassCheers,
  faGifts,
  faShippingFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Responsive, Grid } from "semantic-ui-react";

import "./Home.css";

import roller01 from "../../assets/images/home/p0101.png";
import roller02 from "../../assets/images/home/p0102.jpg";
import roller03 from "../../assets/images/home/p0103.png";
import roller04 from "../../assets/images/home/p0104.png";

import timber01 from "../../assets/images/home/p0201.jpg";
import timber02 from "../../assets/images/home/p0202.png";
import timber03 from "../../assets/images/home/p0203.png";
import timber04 from "../../assets/images/home/p0204.png";

import zebra01 from "../../assets/images/home/p0301.png";
import zebra02 from "../../assets/images/home/p0302.png";
import zebra03 from "../../assets/images/home/p0303.png";
import zebra04 from "../../assets/images/home/p0304.png";

import h_01 from "../../assets/images/home/h-01.png";
import h_02 from "../../assets/images/home/h-02.jpg";
import h_03 from "../../assets/images/home/h-03.png";

import { home } from "../../data/home";
import * as ROUTES from "../../constants/routes";
import OurProduct from "../../components/OurProduct/OurProduct";

const Home = () => {
  const renderPhone = () => (
    <div>
      {/* section A */}
      <div className="sectionA">
        {/* <div className="sectionA-title">OUR WORKS</div> */}
        <div className="sectionA-subtitle">OUR PROMOTIONS</div>
        <Grid columns="1" style={{ margin: 0 }}>
          <Grid.Row>
            <Grid.Column>
              <div className="sectionA-container">
                <a href={ROUTES.BLINDS_ROLLER} rel="noopener noreferrer">
                  <img className="sectionA-image-m" src={h_01} alt="" />
                </a>
                <div className="sectionA-top-left">blinds</div>
                <div className="sectionA-top-right">
                  <div className="sectionA-promo-normal">up to</div>
                  <div className="sectionA-promo-high">50% off</div>
                  <div className="sectionA-promo-normal">on selected</div>
                </div>
              </div>

              <div className="sectionA-details">
                <a
                  className="sectionA-item"
                  href={ROUTES.BLINDS_ROLLER}
                  rel="noopener noreferrer"
                >
                  Roller
                </a>
                {" / "}
                <a
                  className="sectionA-item"
                  href={ROUTES.BLINDS_VENETIAN}
                  rel="noopener noreferrer"
                >
                  Venetian
                </a>
                {" / "}
                <a
                  className="sectionA-item"
                  href={ROUTES.BLINDS_VERTICAL}
                  rel="noopener noreferrer"
                >
                  Vertical
                </a>
                {" / "}
                <a
                  className="sectionA-item"
                  href={ROUTES.BLINDS_ZEBRA}
                  rel="noopener noreferrer"
                >
                  Zebra
                </a>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="sectionA-container">
                <a href={ROUTES.CURTAIN_DAY} rel="noopener noreferrer">
                  <img className="sectionA-image-m" src={h_02} alt="" />
                </a>
                <div className="sectionA-top-left">curtains</div>
                <div className="sectionA-top-right">
                  <div className="sectionA-promo-normal">up to</div>
                  <div className="sectionA-promo-high">50% off</div>
                  <div className="sectionA-promo-normal">on selected</div>
                </div>
              </div>

              <div className="sectionA-details">
                <a
                  className="sectionA-item"
                  href={ROUTES.CURTAIN_DAY}
                  rel="noopener noreferrer"
                >
                  Day
                </a>
                {" / "}
                <a
                  className="sectionA-item"
                  href={ROUTES.CURTAIN_NIGHT}
                  rel="noopener noreferrer"
                >
                  Night
                </a>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="sectionA-container">
                <a href={ROUTES.SHUTTER_TIMBER} rel="noopener noreferrer">
                  <img className="sectionA-image-m" src={h_03} alt="" />
                </a>
                <div className="sectionA-top-left">shutters</div>
                <div className="sectionA-top-right">
                  <div className="sectionA-promo-normal">up to</div>
                  <div className="sectionA-promo-high">50% off</div>
                  <div className="sectionA-promo-normal">on selected</div>
                </div>
              </div>

              <div className="sectionA-details">
                <a
                  className="sectionA-item"
                  href={ROUTES.SHUTTER_TIMBER}
                  rel="noopener noreferrer"
                >
                  Timber
                </a>
                {" / "}

                <a
                  className="sectionA-item"
                  href={ROUTES.SHUTTER_PVC}
                  rel="noopener noreferrer"
                >
                  PVC
                </a>
                {" / "}

                <a
                  className="sectionA-item"
                  href={ROUTES.SHUTTER_EXTERIOR}
                  rel="noopener noreferrer"
                >
                  Exterior
                </a>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>

      <OurProduct></OurProduct>

      {/* section 01 */}
      <Grid columns="1" style={{ margin: 0 }}>
        <Grid.Row className="section01-outbound">
          <Grid.Column>
            <div className="section-center">
              <div className="section01-m">
                <img className="section01-image01-m" src={roller01} alt="" />
                <img className="section01-image02-m" src={roller02} alt="" />
                <img className="section01-image03-m" src={roller03} alt="" />
                <img className="section01-image04-m" src={roller04} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="h-section-title">{home.section01.title}</div>
            <div className="h-section-subtitle">
              {home.section01.content.map((item, idx) => (
                <div className="h-section-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      {/* section 02 */}
      <Grid columns="1" style={{ margin: 0 }}>
        <Grid.Row className="section02-outbound">
          <Grid.Column>
            <div className="section-center">
              <div className="section02-m">
                <img className="section02-image01-m" src={timber01} alt="" />
                <img className="section02-image02-m" src={timber02} alt="" />
                <img className="section02-image03-m" src={timber03} alt="" />
                <img className="section02-image04-m" src={timber04} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="h-section-title">{home.section02.title}</div>
            <div className="h-section-subtitle">
              {home.section02.content.map((item, idx) => (
                <div className="h-section-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      {/* section 03 */}
      <Grid columns="1" style={{ margin: 0 }}>
        <Grid.Row className="section01-outbound">
          <Grid.Column>
            <div className="section-center">
              <div className="section01-m">
                <img className="section01-image01-m" src={zebra01} alt="" />
                <img className="section01-image02-m" src={zebra02} alt="" />
                <img className="section01-image03-m" src={zebra03} alt="" />
                <img className="section01-image04-m" src={zebra04} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="h-section-title">{home.section03.title}</div>
            <div className="h-section-subtitle">
              {home.section03.content.map((item, idx) => (
                <div className="h-section-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      {/* section 04 */}
      <div className="section-04">
        <Grid columns="1" style={{ margin: 0 }}>
          <div className="s04-header">About us</div>
          <Grid.Row>
            <Grid.Column>
              <div className="s04-col">
                <div className="s04-icon">
                  <FontAwesomeIcon icon={faGlassCheers}></FontAwesomeIcon>
                </div>
                <div className="s04-body">
                  <div className="s04-title">
                    {home.section04.aboutUs_01.title}
                  </div>
                  <div className="s04-subtitle">
                    {home.section04.aboutUs_01.content}
                  </div>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="s04-col">
                <div className="s04-icon">
                  <FontAwesomeIcon icon={faGifts}></FontAwesomeIcon>
                </div>
                <div className="s04-body">
                  <div className="s04-title">
                    {home.section04.aboutUs_02.title}
                  </div>
                  <div className="s04-subtitle">
                    {home.section04.aboutUs_02.content}
                  </div>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="s04-col">
                <div className="s04-icon">
                  <FontAwesomeIcon icon={faHandshake}></FontAwesomeIcon>
                </div>
                <div className="s04-body">
                  <div className="s04-title">
                    {home.section04.aboutUs_03.title}
                  </div>
                  <div className="s04-subtitle">
                    {home.section04.aboutUs_03.content}
                  </div>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="s04-col">
                <div className="s04-icon">
                  <FontAwesomeIcon icon={faRunning}></FontAwesomeIcon>
                </div>
                <div className="s04-body">
                  <div className="s04-title">
                    {home.section04.aboutUs_04.title}
                  </div>
                  <div className="s04-subtitle">
                    {home.section04.aboutUs_04.content}
                  </div>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="s04-col">
                <div className="s04-icon">
                  <FontAwesomeIcon icon={faShippingFast}></FontAwesomeIcon>
                </div>
                <div className="s04-body">
                  <div className="s04-title">
                    {home.section04.aboutUs_05.title}
                  </div>
                  <div className="s04-subtitle">
                    {home.section04.aboutUs_05.content}
                  </div>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="s04-col">
                <div className="s04-icon">
                  <FontAwesomeIcon icon={faHandHoldingUsd}></FontAwesomeIcon>
                </div>
                <div className="s04-body">
                  <div className="s04-title">
                    {home.section04.aboutUs_06.title}
                  </div>
                  <div className="s04-subtitle">
                    {home.section04.aboutUs_06.content}
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
    <div>
      {/* section A */}
      <div className="sectionA">
        {/* <div className="sectionA-title">OUR WORKS</div> */}
        <div className="sectionA-subtitle">OUR PROMOTIONS</div>
        <Grid columns="1" style={{ margin: 0 }}>
          <Grid.Row>
            <Grid.Column>
              <div className="sectionA-container">
                <a href={ROUTES.BLINDS_ROLLER} rel="noopener noreferrer">
                  <img className="sectionA-image-t" src={h_01} alt="" />
                </a>
                <div className="sectionA-top-left">blinds</div>
                <div className="sectionA-top-right">
                  <div className="sectionA-promo-normal">up to</div>
                  <div className="sectionA-promo-high">50% off</div>
                  <div className="sectionA-promo-normal">on selected</div>
                </div>
              </div>

              <div className="sectionA-details">
                <a
                  className="sectionA-item"
                  href={ROUTES.BLINDS_ROLLER}
                  rel="noopener noreferrer"
                >
                  Roller
                </a>
                {" / "}
                <a
                  className="sectionA-item"
                  href={ROUTES.BLINDS_VENETIAN}
                  rel="noopener noreferrer"
                >
                  Venetian
                </a>
                {" / "}
                <a
                  className="sectionA-item"
                  href={ROUTES.BLINDS_VERTICAL}
                  rel="noopener noreferrer"
                >
                  Vertical
                </a>
                {" / "}
                <a
                  className="sectionA-item"
                  href={ROUTES.BLINDS_ZEBRA}
                  rel="noopener noreferrer"
                >
                  Zebra
                </a>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="sectionA-container">
                <a href={ROUTES.CURTAIN_DAY} rel="noopener noreferrer">
                  <img className="sectionA-image-t" src={h_02} alt="" />
                </a>
                <div className="sectionA-top-left">curtains</div>
                <div className="sectionA-top-right">
                  <div className="sectionA-promo-normal">up to</div>
                  <div className="sectionA-promo-high">50% off</div>
                  <div className="sectionA-promo-normal">on selected</div>
                </div>
              </div>

              <div className="sectionA-details">
                <a
                  className="sectionA-item"
                  href={ROUTES.CURTAIN_DAY}
                  rel="noopener noreferrer"
                >
                  Day
                </a>
                {" / "}
                <a
                  className="sectionA-item"
                  href={ROUTES.CURTAIN_NIGHT}
                  rel="noopener noreferrer"
                >
                  Night
                </a>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="sectionA-container">
                <a href={ROUTES.SHUTTER_TIMBER} rel="noopener noreferrer">
                  <img className="sectionA-image-t" src={h_03} alt="" />
                </a>
                <div className="sectionA-top-left">shutters</div>
                <div className="sectionA-top-right">
                  <div className="sectionA-promo-normal">up to</div>
                  <div className="sectionA-promo-high">50% off</div>
                  <div className="sectionA-promo-normal">on selected</div>
                </div>
              </div>

              <div className="sectionA-details">
                <a
                  className="sectionA-item"
                  href={ROUTES.SHUTTER_TIMBER}
                  rel="noopener noreferrer"
                >
                  Timber
                </a>
                {" / "}

                <a
                  className="sectionA-item"
                  href={ROUTES.SHUTTER_PVC}
                  rel="noopener noreferrer"
                >
                  PVC
                </a>
                {" / "}

                <a
                  className="sectionA-item"
                  href={ROUTES.SHUTTER_EXTERIOR}
                  rel="noopener noreferrer"
                >
                  Exterior
                </a>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>

      <OurProduct></OurProduct>

      {/* section 01 */}
      <Grid columns="1" style={{ margin: 0 }}>
        <Grid.Row className="section01-outbound">
          <Grid.Column>
            <div className="section-center">
              <div className="section01-m">
                <img className="section01-image01-m" src={roller01} alt="" />
                <img className="section01-image02-m" src={roller02} alt="" />
                <img className="section01-image03-m" src={roller03} alt="" />
                <img className="section01-image04-m" src={roller04} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="h-section-title">{home.section01.title}</div>
            <div className="h-section-subtitle">
              {home.section01.content.map((item, idx) => (
                <div className="h-section-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      {/* section 02 */}
      <Grid columns="1" style={{ margin: 0 }}>
        <Grid.Row className="section02-outbound">
          <Grid.Column>
            <div className="section-center">
              <div className="section02-m">
                <img className="section02-image01-m" src={timber01} alt="" />
                <img className="section02-image02-m" src={timber02} alt="" />
                <img className="section02-image03-m" src={timber03} alt="" />
                <img className="section02-image04-m" src={timber04} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="h-section-title">{home.section02.title}</div>
            <div className="h-section-subtitle">
              {home.section02.content.map((item, idx) => (
                <div className="h-section-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      {/* section 03 */}
      <Grid columns="1" style={{ margin: 0 }}>
        <Grid.Row className="section01-outbound">
          <Grid.Column>
            <div className="section-center">
              <div className="section01-m">
                <img className="section01-image01-m" src={zebra01} alt="" />
                <img className="section01-image02-m" src={zebra02} alt="" />
                <img className="section01-image03-m" src={zebra03} alt="" />
                <img className="section01-image04-m" src={zebra04} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="h-section-title">{home.section03.title}</div>
            <div className="h-section-subtitle">
              {home.section03.content.map((item, idx) => (
                <div className="h-section-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      {/* section 04 */}
      <div className="section-04">
        <Grid columns="2" style={{ margin: 0 }}>
          <div className="s04-header">About us</div>
          <Grid.Row>
            <Grid.Column>
              <div className="s04-col">
                <div className="s04-icon">
                  <FontAwesomeIcon icon={faGlassCheers}></FontAwesomeIcon>
                </div>
                <div className="s04-body">
                  <div className="s04-title">
                    {home.section04.aboutUs_01.title}
                  </div>
                  <div className="s04-subtitle">
                    {home.section04.aboutUs_01.content}
                  </div>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="s04-col">
                <div className="s04-icon">
                  <FontAwesomeIcon icon={faGifts}></FontAwesomeIcon>
                </div>
                <div className="s04-body">
                  <div className="s04-title">
                    {home.section04.aboutUs_02.title}
                  </div>
                  <div className="s04-subtitle">
                    {home.section04.aboutUs_02.content}
                  </div>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="s04-col">
                <div className="s04-icon">
                  <FontAwesomeIcon icon={faHandshake}></FontAwesomeIcon>
                </div>
                <div className="s04-body">
                  <div className="s04-title">
                    {home.section04.aboutUs_03.title}
                  </div>
                  <div className="s04-subtitle">
                    {home.section04.aboutUs_03.content}
                  </div>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="s04-col">
                <div className="s04-icon">
                  <FontAwesomeIcon icon={faRunning}></FontAwesomeIcon>
                </div>
                <div className="s04-body">
                  <div className="s04-title">
                    {home.section04.aboutUs_04.title}
                  </div>
                  <div className="s04-subtitle">
                    {home.section04.aboutUs_04.content}
                  </div>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="s04-col">
                <div className="s04-icon">
                  <FontAwesomeIcon icon={faShippingFast}></FontAwesomeIcon>
                </div>
                <div className="s04-body">
                  <div className="s04-title">
                    {home.section04.aboutUs_05.title}
                  </div>
                  <div className="s04-subtitle">
                    {home.section04.aboutUs_05.content}
                  </div>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="s04-col">
                <div className="s04-icon">
                  <FontAwesomeIcon icon={faHandHoldingUsd}></FontAwesomeIcon>
                </div>
                <div className="s04-body">
                  <div className="s04-title">
                    {home.section04.aboutUs_06.title}
                  </div>
                  <div className="s04-subtitle">
                    {home.section04.aboutUs_06.content}
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
    <div>
      {/* section A */}
      <div className="sectionA">
        {/* <div className="sectionA-slogan">
            Whether it's elegant draperies, roller blinds, or shutters you
            require, we will work with you to ensure that your window
            furnishings not only complete your architectural vision but
            possesses the enduring performance to withstand time.
          </div>

          <br /> */}
        {/* <div className="sectionA-title">OUR WORKS</div> */}
        <div className="sectionA-subtitle">OUR PROMOTIONS</div>
        <Grid columns="3" style={{ margin: 0 }}>
          <Grid.Row>
            <Grid.Column>
              <div className="sectionA-container">
                <a href={ROUTES.BLINDS_ROLLER} rel="noopener noreferrer">
                  <img className="sectionA-image" src={h_01} alt="" />
                </a>

                <div className="sectionA-top-left">blinds</div>
                <div className="sectionA-top-right">
                  <div className="sectionA-promo-normal">up to</div>
                  <div className="sectionA-promo-high">50% off</div>
                  <div className="sectionA-promo-normal">on selected</div>
                </div>
              </div>

              <div className="sectionA-details">
                <a
                  className="sectionA-item"
                  href={ROUTES.BLINDS_ROLLER}
                  rel="noopener noreferrer"
                >
                  Roller
                </a>
                {" / "}
                <a
                  className="sectionA-item"
                  href={ROUTES.BLINDS_VENETIAN}
                  rel="noopener noreferrer"
                >
                  Venetian
                </a>
                {" / "}
                <a
                  className="sectionA-item"
                  href={ROUTES.BLINDS_VERTICAL}
                  rel="noopener noreferrer"
                >
                  Vertical
                </a>
                {" / "}
                <a
                  className="sectionA-item"
                  href={ROUTES.BLINDS_ZEBRA}
                  rel="noopener noreferrer"
                >
                  Zebra
                </a>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="sectionA-container">
                <a href={ROUTES.CURTAIN_DAY} rel="noopener noreferrer">
                  <img className="sectionA-image" src={h_02} alt="" />
                </a>

                <div className="sectionA-top-left">curtains</div>
                <div className="sectionA-top-right">
                  <div className="sectionA-promo-normal">up to</div>
                  <div className="sectionA-promo-high">50% off</div>
                  <div className="sectionA-promo-normal">on selected</div>
                </div>
              </div>

              <div className="sectionA-details">
                <a
                  className="sectionA-item"
                  href={ROUTES.CURTAIN_DAY}
                  rel="noopener noreferrer"
                >
                  Day
                </a>
                {" / "}
                <a
                  className="sectionA-item"
                  href={ROUTES.CURTAIN_NIGHT}
                  rel="noopener noreferrer"
                >
                  Night
                </a>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="sectionA-container">
                <a href={ROUTES.SHUTTER_TIMBER} rel="noopener noreferrer">
                  <img className="sectionA-image" src={h_03} alt="" />
                </a>

                <div className="sectionA-top-left">shutters</div>
                <div className="sectionA-top-right">
                  <div className="sectionA-promo-normal">up to</div>
                  <div className="sectionA-promo-high">50% off</div>
                  <div className="sectionA-promo-normal">on selected</div>
                </div>
              </div>

              <div className="sectionA-details">
                <a
                  className="sectionA-item"
                  href={ROUTES.SHUTTER_TIMBER}
                  rel="noopener noreferrer"
                >
                  Timber
                </a>
                {" / "}

                <a
                  className="sectionA-item"
                  href={ROUTES.SHUTTER_PVC}
                  rel="noopener noreferrer"
                >
                  PVC
                </a>
                {" / "}

                <a
                  className="sectionA-item"
                  href={ROUTES.SHUTTER_EXTERIOR}
                  rel="noopener noreferrer"
                >
                  Exterior
                </a>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>

      <OurProduct></OurProduct>
      {/* section 01 */}
      <Grid columns="2" style={{ margin: 0 }}>
        <Grid.Row className="section01-outbound">
          <Grid.Column>
            <div className="section-center">
              <div className="section01">
                <img className="section01-image01" src={roller01} alt="" />
                <img className="section01-image02" src={roller02} alt="" />
                <img className="section01-image03" src={roller03} alt="" />
                <img className="section01-image04" src={roller04} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="h-section-title">{home.section01.title}</div>
            <div className="h-section-subtitle">
              {home.section01.content.map((item, idx) => (
                <div className="h-section-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      {/* section 02 */}
      <Grid columns="2" style={{ margin: 0 }}>
        <Grid.Row className="section02-outbound">
          <Grid.Column>
            <div className="h-section-title">{home.section02.title}</div>
            <div className="h-section-subtitle">
              {home.section02.content.map((item, idx) => (
                <div className="h-section-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="section-center">
              <div className="section02">
                <img className="section02-image01" src={timber01} alt="" />
                <img className="section02-image02" src={timber02} alt="" />
                <img className="section02-image03" src={timber03} alt="" />
                <img className="section02-image04" src={timber04} alt="" />
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      {/* section 03 */}
      <Grid columns="2" style={{ margin: 0 }}>
        <Grid.Row className="section01-outbound">
          <Grid.Column>
            <div className="section-center">
              <div className="section01">
                <img className="section01-image01" src={zebra01} alt="" />
                <img className="section01-image02" src={zebra02} alt="" />
                <img className="section01-image03" src={zebra03} alt="" />
                <img className="section01-image04" src={zebra04} alt="" />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="h-section-title">{home.section03.title}</div>
            <div className="h-section-subtitle">
              {home.section03.content.map((item, idx) => (
                <div className="h-section-subtitle-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      {/* section 04 */}
      <div className="section-04">
        <Grid columns="3" style={{ margin: 0 }}>
          <div className="s04-header">About us</div>
          <Grid.Row>
            <Grid.Column>
              <div className="s04-col">
                <div className="s04-icon">
                  <FontAwesomeIcon icon={faGlassCheers}></FontAwesomeIcon>
                </div>
                <div className="s04-body">
                  <div className="s04-title">
                    {home.section04.aboutUs_01.title}
                  </div>
                  <div className="s04-subtitle">
                    {home.section04.aboutUs_01.content}
                  </div>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="s04-col">
                <div className="s04-icon">
                  <FontAwesomeIcon icon={faGifts}></FontAwesomeIcon>
                </div>
                <div className="s04-body">
                  <div className="s04-title">
                    {home.section04.aboutUs_02.title}
                  </div>
                  <div className="s04-subtitle">
                    {home.section04.aboutUs_02.content}
                  </div>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="s04-col">
                <div className="s04-icon">
                  <FontAwesomeIcon icon={faHandshake}></FontAwesomeIcon>
                </div>
                <div className="s04-body">
                  <div className="s04-title">
                    {home.section04.aboutUs_03.title}
                  </div>
                  <div className="s04-subtitle">
                    {home.section04.aboutUs_03.content}
                  </div>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="s04-col">
                <div className="s04-icon">
                  <FontAwesomeIcon icon={faRunning}></FontAwesomeIcon>
                </div>
                <div className="s04-body">
                  <div className="s04-title">
                    {home.section04.aboutUs_04.title}
                  </div>
                  <div className="s04-subtitle">
                    {home.section04.aboutUs_04.content}
                  </div>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="s04-col">
                <div className="s04-icon">
                  <FontAwesomeIcon icon={faShippingFast}></FontAwesomeIcon>
                </div>
                <div className="s04-body">
                  <div className="s04-title">
                    {home.section04.aboutUs_05.title}
                  </div>
                  <div className="s04-subtitle">
                    {home.section04.aboutUs_05.content}
                  </div>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="s04-col">
                <div className="s04-icon">
                  <FontAwesomeIcon icon={faHandHoldingUsd}></FontAwesomeIcon>
                </div>
                <div className="s04-body">
                  <div className="s04-title">
                    {home.section04.aboutUs_06.title}
                  </div>
                  <div className="s04-subtitle">
                    {home.section04.aboutUs_06.content}
                  </div>
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <Header showQuote={true} showSale={false} showSlogan={false}></Header>

      {/* phone */}
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        {renderPhone()}
      </Responsive>

      {/* tablet */}
      <Responsive
        minWidth={Responsive.onlyTablet.minWidth}
        maxWidth={Responsive.onlyTablet.maxWidth}
      >
        {renderTablet()}
      </Responsive>

      {/* desktop */}
      <Responsive minWidth={Responsive.onlyComputer.minWidth}>
        {renderDesktop()}
      </Responsive>
    </React.Fragment>
  );
};

export default Home;
