import React from "react";
import Header from "../../components/Header/Header";
import BGuide09 from "./BGuide09";
import BGuide10 from "./BGuide10";
import BGuide11 from "./BGuide11";
import BGuide12 from "./BGuide12";
import BGuide13 from "./BGuide13";

const BGuideShutters = () => {
  return (
    <React.Fragment>
      <Header showQuote={false} showSale={false} showSlogan={false}></Header>
      <BGuide09></BGuide09>
      <BGuide10></BGuide10>
      <BGuide11></BGuide11>
      <BGuide12></BGuide12>
      <BGuide13></BGuide13>
    </React.Fragment>
  );
};

export default BGuideShutters;
