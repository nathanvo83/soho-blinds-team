import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import Home from "./view/home/Home";
import Product from "./view/product/Product";
import QuoteMyJob from "./view/quote-my-job/QuoteMyJob";
import ContactUs from "./view/contact-us/ContactUs";

import App from "./view/App";

// import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    {/* <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/product" exact component={Product} />
      <Route path="/quote-my-job" exact component={QuoteMyJob} />
      <Route path="/contact-us" exact component={ContactUs} />
      <Redirect to="/" />
    </Switch> */}
    <App></App>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
