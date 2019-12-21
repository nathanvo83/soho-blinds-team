import React, { useEffect } from "react";
import { connect } from "react-redux";
import { menuTypes } from "../../constants/menuTypes";
import { actionTypes } from "../../constants/actionTypes";

import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import NavExample from "../../components/navbar/SohoNavbar";

const QuoteMyJob = props => {
  const { selectMenu } = props;

  useEffect(() => {
    selectMenu(menuTypes.QUOTE);
    return () => {
      // clear
    };
  }, [selectMenu]);

  return (
    <div>Quote my job page</div>
    // <React.Fragment>
    //   <NavExample location="quote-my-job"></NavExample>
    //   <Header></Header>
    //   <div>Quote my job page</div>
    //   <Footer></Footer>
    // </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  selectMenu: menu =>
    dispatch({
      type: actionTypes.CHANGE_MENU,
      value: menu
    })
});

export default connect(null, mapDispatchToProps)(QuoteMyJob);
