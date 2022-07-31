import React from "react";
import Header from "../../components/Header/Header";
import BGuide05 from "./BGuide05";
import BGuide06 from "./BGuide06";
import BGuide07 from "./BGuide07";
import BGuide08 from "./BGuide08";
import Curtain from "./Curtain";

const BGuideCurtains = () => {
  return (
    <React.Fragment>
      <Header showQuote={false} showSale={false} showSlogan={false}></Header>
      <BGuide05></BGuide05>
      <BGuide06></BGuide06>
      <BGuide07></BGuide07>
      <BGuide08></BGuide08>
      <Curtain></Curtain>
    </React.Fragment>
  );
};

export default BGuideCurtains;
