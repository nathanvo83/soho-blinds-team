import React from "react";
import Header from "../../components/Header/Header";

// import "./Home.css";

import OurProduct from "../../components/OurProduct/OurProduct";
import SectionA from "./SectionA";
import Section01 from "./Section01";
import Section02 from "./Section02";
import Section03 from "./Section03";
import Section04 from "./Section04";
import CustomerFeedback from "../../components/CustomerFeedback/CustomerFeedback";

const Home = () => {
  return (
    <React.Fragment>
      <Header showQuote={true} showSale={false} showSlogan={false}></Header>
      <SectionA></SectionA>
      <OurProduct></OurProduct>

      <CustomerFeedback></CustomerFeedback>

      <Section01></Section01>

      <Section02></Section02>

      <Section03></Section03>

      <Section04></Section04>
    </React.Fragment>
  );
};

export default Home;
