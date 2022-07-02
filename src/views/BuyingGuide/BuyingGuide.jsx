import React from "react";
import Header from "../../components/Header/Header";
import BGuide01 from "./BGuide01";
import BGuide02 from "./BGuide02";
import BGuide03 from "./BGuide03";
import BGuide04 from "./BGuide04";
import Section03 from "../ShowRoom/Section03";

const BuyingGuide = () => {
  return (
    <React.Fragment>
      <Header showQuote={false} showSale={false} showSlogan={false}></Header>
      <BGuide01></BGuide01>
      <BGuide02></BGuide02>
      <BGuide03></BGuide03>
      <BGuide04></BGuide04>
      <Section03></Section03>
    </React.Fragment>
  );
};

export default BuyingGuide;
