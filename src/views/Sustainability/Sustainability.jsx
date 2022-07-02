import React from "react";
import Header from "../../components/Header/Header";
import Section01 from "./Section01";

const BuyingGuide = () => {
  return (
    <React.Fragment>
      <Header showQuote={false} showSale={false} showSlogan={false}></Header>
      <Section01></Section01>
    </React.Fragment>
  );
};

export default BuyingGuide;
