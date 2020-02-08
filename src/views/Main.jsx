import React from "react";
import Home from "./home/Home";
import Product from "./product/Product";
// import Blinds from "./product/Blinds";
// import Curtain from "./product/Curtain";
// import Shutter from "./product/Shutter";
import QuoteMyJob from "./quote-my-job/QuoteMyJob";
import ContactUs from "./contact-us/ContactUs";
import Page404 from "./page-404/Page404";
import { Route, Switch } from "react-router-dom";

import { rollerBlinds } from "../data/roller-blinds";

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

import alycore01 from "../assets/images/shutter/alycore-plus-PVC/alycore01.png";
import alycore02 from "../assets/images/shutter/alycore-plus-PVC/alycore02.jpeg";
import alycore03 from "../assets/images/shutter/alycore-plus-PVC/alycore03.png";
import alycore04 from "../assets/images/shutter/alycore-plus-PVC/alycore04.png";
import alycore05 from "../assets/images/shutter/alycore-plus-PVC/alycore05.png";
import alycore06 from "../assets/images/shutter/alycore-plus-PVC/alycore06.png";
import alycore07 from "../assets/images/shutter/alycore-plus-PVC/alycore07.png";

function Main() {
  const renderProductBlindsRoller = () => (
    <Product
      title="Roller Blinds"
      tab01="OVERVIEW"
      tab02="DESCRIPTION"
      content01={rollerBlinds.overview}
      content02={rollerBlinds.description}
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
        roller10
      ]}
    ></Product>
  );
  const renderProductBlindsVenetian = () => (
    <Product
      title="Venetian Blinds"
      tab01="OVERVIEW"
      tab02="DESCRIPTION"
      content01={rollerBlinds.overview}
      content02={rollerBlinds.description}
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
        venetian12
      ]}
    ></Product>
  );
  const renderProductBlindsVertical = () => (
    <Product
      title="Vertical Blinds"
      tab01="OVERVIEW"
      tab02="DESCRIPTION"
      content01={rollerBlinds.overview}
      content02={rollerBlinds.description}
      images={[vertical01, vertical02, vertical03]}
    ></Product>
  );
  const renderProductBlindsZebra = () => (
    <Product
      title="Zebra Blinds"
      tab01="OVERVIEW"
      tab02="DESCRIPTION"
      content01={rollerBlinds.overview}
      content02={rollerBlinds.description}
      images={[zebra01, zebra02, zebra03, zebra04, zebra05, zebra06, zebra07]}
    ></Product>
  );
  // -----shutter-----
  const renderProductShutterAlycorePlusPVC = () => (
    <Product
      title="Alycore Plus PVC Shutter"
      tab01="OVERVIEW"
      tab02="DESCRIPTION"
      content01={rollerBlinds.overview}
      content02={rollerBlinds.description}
      images={[
        alycore01,
        alycore02,
        alycore03,
        alycore04,
        alycore05,
        alycore06,
        alycore07
      ]}
    ></Product>
  );

  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route
        path="/product/blinds/roller"
        component={renderProductBlindsRoller}
      />
      <Route
        path="/product/blinds/venetian"
        component={renderProductBlindsVenetian}
      />
      <Route
        path="/product/blinds/vertical"
        component={renderProductBlindsVertical}
      />
      <Route
        path="/product/blinds/zebra"
        component={renderProductBlindsZebra}
      />
      <Route
        path="/product/shutter/alycore-plus-PVC"
        component={renderProductShutterAlycorePlusPVC}
      />
      {/* <Route path="/product/blinds" exact component={Blinds} />
      <Route path="/product/curtain" exact component={Curtain} />
      <Route path="/product/shutter" exact component={Shutter} /> */}
      <Route path="/quote-my-job" component={QuoteMyJob} />
      <Route path="/contact-us" component={ContactUs} />
      <Route component={Page404} />

      {/* <Redirect to="/" /> */}
    </Switch>
  );
}

export default Main;
