import React from "react";
import { Route, Switch } from "react-router-dom";
import * as ROUTES from "../constants/routes";

import { rollerBlinds } from "../data/roller-blinds";
import { zebraBlinds } from "../data/zebra-blinds";
import { verticalBlinds } from "../data/vertical-blinds";
import { venetianBlinds } from "../data/venetian-blinds";

import { dayCurtains } from "../data/day-curtain";
import { nightCurtains } from "../data/night-curtain";

import { pvcShutter } from "../data/pvc-shutter";
import { timberShutter } from "../data/timber-shutter";

import roller01 from "../assets/images/blinds/roller/roller01.png";
import roller02 from "../assets/images/blinds/roller/roller02.jpg";
import roller03 from "../assets/images/blinds/roller/roller03.png";
import roller04 from "../assets/images/blinds/roller/roller04.png";
import roller05 from "../assets/images/blinds/roller/roller05.jpeg";
import roller06 from "../assets/images/blinds/roller/roller06.png";
import roller07 from "../assets/images/blinds/roller/roller07.png";
import roller08 from "../assets/images/blinds/roller/roller08.png";
import roller09 from "../assets/images/blinds/roller/roller09.jpg";
import roller10 from "../assets/images/blinds/roller/roller10.jpeg";

import venetian01 from "../assets/images/blinds/venetian/venetian01.png";
import venetian02 from "../assets/images/blinds/venetian/venetian02.png";
import venetian03 from "../assets/images/blinds/venetian/venetian03.png";
import venetian04 from "../assets/images/blinds/venetian/venetian04.png";
import venetian05 from "../assets/images/blinds/venetian/venetian05.png";
import venetian06 from "../assets/images/blinds/venetian/venetian06.png";
import venetian07 from "../assets/images/blinds/venetian/venetian07.png";
import venetian08 from "../assets/images/blinds/venetian/venetian08.png";
import venetian09 from "../assets/images/blinds/venetian/venetian09.png";
import venetian10 from "../assets/images/blinds/venetian/venetian10.png";
import venetian11 from "../assets/images/blinds/venetian/venetian11.png";
import venetian12 from "../assets/images/blinds/venetian/venetian12.png";

import zebra01 from "../assets/images/blinds/zebra/zebra01.png";
import zebra02 from "../assets/images/blinds/zebra/zebra02.png";
import zebra03 from "../assets/images/blinds/zebra/zebra03.png";
import zebra04 from "../assets/images/blinds/zebra/zebra04.png";
import zebra05 from "../assets/images/blinds/zebra/zebra05.png";
import zebra06 from "../assets/images/blinds/zebra/zebra06.png";
import zebra07 from "../assets/images/blinds/zebra/zebra07.png";

import vertical01 from "../assets/images/blinds/vetical/vertical01.jpeg";
import vertical02 from "../assets/images/blinds/vetical/vertical02.png";
import vertical03 from "../assets/images/blinds/vetical/vertical03.jpg";
import vertical04 from "../assets/images/blinds/vetical/vertical04.jpeg";

// curtain
import night01 from "../assets/images/curtain/night/night01.jpeg";
import night02 from "../assets/images/curtain/night/night02.jpeg";
import night03 from "../assets/images/curtain/night/night03.jpeg";
import night04 from "../assets/images/curtain/night/night04.jpg";
import night05 from "../assets/images/curtain/night/night05.jpeg";
import night06 from "../assets/images/curtain/night/night06.jpg";
import night07 from "../assets/images/curtain/night/night07.jpg";
import night08 from "../assets/images/curtain/night/night08.jpg";
import night09 from "../assets/images/curtain/night/night09.jpg";
import night10 from "../assets/images/curtain/night/night10.jpg";

import day01 from "../assets/images/curtain/day/day01.jpeg";
// import day02 from "../assets/images/curtain/day/day02.jpg";
import day03 from "../assets/images/curtain/day/day03.jpg";
import day04 from "../assets/images/curtain/day/day04.jpg";
import day05 from "../assets/images/curtain/day/day05.jpg";
import day06 from "../assets/images/curtain/day/day06.jpg";
import day07 from "../assets/images/curtain/day/day07.jpg";
import day08 from "../assets/images/curtain/day/day08.jpg";
import day09 from "../assets/images/curtain/day/day09.jpg";
import day10 from "../assets/images/curtain/day/day10.jpg";
import day11 from "../assets/images/curtain/day/day11.jpg";
import day12 from "../assets/images/curtain/day/day12.jpg";
import day13 from "../assets/images/curtain/day/day13.jpg";

// shutter
import alycore01 from "../assets/images/shutter/pvc/alycore01.png";
import alycore02 from "../assets/images/shutter/pvc/alycore02.jpeg";
import alycore03 from "../assets/images/shutter/pvc/alycore03.png";
import alycore04 from "../assets/images/shutter/pvc/alycore04.png";
import alycore05 from "../assets/images/shutter/pvc/alycore05.png";

import timber01 from "../assets/images/shutter/timber/timber01.jpg";
import timber02 from "../assets/images/shutter/timber/timber02.png";
import timber03 from "../assets/images/shutter/timber/timber03.jpg";
import timber04 from "../assets/images/shutter/timber/timber04.png";
import timber05 from "../assets/images/shutter/timber/timber05.png";

import Home from "./Home/Home";
import Product from "./Product/Product";
import BuyingGuide from "./BuyingGuide/BuyingGuide";
import ContactUs from "./ContactUs/ContactUs";
import ShowRoom from "./ShowRoom/ShowRoom";
import Projects from "./Projects/Projects";

const Main = () => {
  // -----blinds-----
  const renderProductBlindsRoller = () => (
    <Product
      title="Roller Blinds"
      tab01="OVERVIEW"
      tab02="DESCRIPTION"
      content01={rollerBlinds.overview}
      content02={rollerBlinds.description}
      summary={rollerBlinds.summary}
      about={rollerBlinds.about}
      images={[
        roller01,
        roller02,
        roller03,
        roller04,
        roller05,
        roller06,
        roller07,
        roller08,
        roller09,
        roller10,
      ]}
    ></Product>
  );
  const renderProductBlindsVenetian = () => (
    <Product
      title="Venetian Blinds"
      tab01="OVERVIEW"
      tab02="DESCRIPTION"
      content01={venetianBlinds.overview}
      content02={venetianBlinds.description}
      images={[
        venetian01,
        venetian02,
        venetian03,
        venetian04,
        venetian05,
        venetian06,
        venetian07,
        venetian08,
        venetian09,
        venetian10,
        venetian11,
        venetian12,
      ]}
    ></Product>
  ); //update
  const renderProductBlindsVertical = () => (
    <Product
      title="Vertical Blinds"
      tab01="OVERVIEW"
      tab02="DESCRIPTION"
      content01={verticalBlinds.overview}
      content02={verticalBlinds.description}
      images={[vertical01, vertical02, vertical03, vertical04]}
    ></Product>
  );
  const renderProductBlindsZebra = () => (
    <Product
      title="Zebra Blinds"
      tab01="OVERVIEW"
      tab02="DESCRIPTION"
      content01={zebraBlinds.overview}
      content02={zebraBlinds.description}
      images={[zebra01, zebra02, zebra03, zebra04, zebra05, zebra06, zebra07]}
    ></Product>
  );
  // -----curtain-----
  const renderProductCurtainNight = () => (
    <Product
      title="Night Curtains"
      tab01="OVERVIEW"
      tab02="DESCRIPTION"
      content01={nightCurtains.overview}
      content02={nightCurtains.description}
      images={[
        night03,
        night04,
        night05,
        night06,
        night07,
        night08,
        night09,
        night10,
        night01,
        night02,
      ]}
    ></Product>
  );
  const renderProductCurtainDay = () => (
    <Product
      title="Day Curtains"
      tab01="OVERVIEW"
      tab02="DESCRIPTION"
      content01={dayCurtains.overview}
      content02={dayCurtains.description}
      images={[
        day01,
        // day02,
        day03,
        day05,
        day04,
        day06,
        day07,
        day08,
        day09,
        day10,
        day11,
        day12,
        day13,
      ]}
    ></Product>
  );
  // -----shutter-----
  const renderProductShutterPVC = () => (
    <Product
      title="Alycore Plus PVC Shutter"
      tab01="OVERVIEW"
      tab02="DESCRIPTION"
      content01={pvcShutter.overview}
      content02={pvcShutter.description}
      images={[alycore01, alycore02, alycore03, alycore04, alycore05]}
    ></Product>
  );

  const renderProductShutterTimber = () => (
    <Product
      title="Timber Shutter"
      tab01="OVERVIEW"
      tab02="DESCRIPTION"
      content01={timberShutter.overview}
      content02={timberShutter.description}
      images={[timber01, timber02, timber03, timber04, timber05]}
    ></Product>
  );

  return (
    <Switch>
      <Route path={ROUTES.HOME} exact component={Home} />
      <Route
        path={ROUTES.BLINDS_ROLLER}
        component={renderProductBlindsRoller}
      />
      <Route
        path={ROUTES.BLINDS_VENETIAN}
        component={renderProductBlindsVenetian}
      />
      <Route
        path={ROUTES.BLINDS_VERTICAL}
        component={renderProductBlindsVertical}
      />
      <Route path={ROUTES.BLINDS_ZEBRA} component={renderProductBlindsZebra} />

      {/* curtain */}
      <Route
        path={ROUTES.CURTAIN_NIGHT}
        component={renderProductCurtainNight}
      />

      <Route path={ROUTES.CURTAIN_DAY} component={renderProductCurtainDay} />

      {/* shutter */}
      <Route path={ROUTES.SHUTTER_PVC} component={renderProductShutterPVC} />
      <Route
        path={ROUTES.SHUTTER_TIMBER}
        component={renderProductShutterTimber}
      />

      {/*  */}
      <Route path={ROUTES.BUYINGGUIDE} component={BuyingGuide} />
      <Route path={ROUTES.SHOWROOM} component={ShowRoom} />
      <Route path={ROUTES.CONTACTUS} component={ContactUs} />
      <Route path={ROUTES.PROJECTS} component={Projects} />
      {/* <Route path="/product/blinds" exact component={Blinds} />
      <Route path="/product/curtain" exact component={Curtain} />
      <Route path="/product/shutter" exact component={Shutter} /> */}
      {/* <Route path="/quote-my-job" component={QuoteMyJob} /> */}
      {/* <Route path={ROUTES.CONTACTUS} component={ContactUs} />
      <Route component={Page404} /> */}

      {/* <Redirect to="/" /> */}
    </Switch>
  );
};

export default Main;
