import React from "react";
import Promotion from "../../components/Promotion/Promotion";
import OurProduct from "../../components/OurProduct/OurProduct";
import Comments from "../../components/Comments/Comments";
import CustomerFeedback from "../../components/CustomerFeedback/CustomerFeedback";

const Projects = () => {
  return (
    <React.Fragment>
        <Promotion></Promotion>
        <OurProduct></OurProduct>
        <CustomerFeedback></CustomerFeedback>
        <Comments></Comments>
    </React.Fragment>
  );
};

export default Projects;
