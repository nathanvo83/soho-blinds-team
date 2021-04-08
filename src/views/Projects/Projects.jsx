import React from "react";
import Promotion from "../../components/Promotion/Promotion";
import OurProject from "../../components/OurProject/OurProject";
import Comments from "../../components/Comments/Comments";
import CustomerFeedback from "../../components/CustomerFeedback/CustomerFeedback";

const Projects = () => {
  return (
    <React.Fragment>
        <Promotion></Promotion>
        <OurProject></OurProject>
        <CustomerFeedback></CustomerFeedback>
        <Comments></Comments>
    </React.Fragment>
  );
};

export default Projects;
