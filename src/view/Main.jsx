import React from "react";
import Home from "./home/Home";
import Product from "./product/Product";
import Blinds from "./product/Blinds";
import Curtain from "./product/Curtain";
import Shutter from "./product/Shutter";
import QuoteMyJob from "./quote-my-job/QuoteMyJob";
import ContactUs from "./contact-us/ContactUs";
import Page404 from "./page-404/Page404";
import { Route, Switch, Redirect } from "react-router-dom";

function Main() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/product" exact component={Product} />
      <Route path="/product/blinds" exact component={Blinds} />
      <Route path="/product/curtain" exact component={Curtain} />
      <Route path="/product/shutter" exact component={Shutter} />
      <Route path="/quote-my-job" exact component={QuoteMyJob} />
      <Route path="/contact-us" exact component={ContactUs} />
      <Route component={Page404} />

      {/* <Redirect to="/" /> */}
    </Switch>
  );
}

export default Main;
