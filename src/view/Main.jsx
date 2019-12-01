import React from "react";
import Home from "./home/Home";
import Product from "./product/Product";
import QuoteMyJob from "./quote-my-job/QuoteMyJob";
import ContactUs from "./contact-us/ContactUs";
import { Route, Switch, Redirect } from "react-router-dom";

function Main() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/product" exact component={Product} />
      <Route path="/quote-my-job" exact component={QuoteMyJob} />
      <Route path="/contact-us" exact component={ContactUs} />
      <Redirect to="/" />
    </Switch>
  );
}

export default Main;
