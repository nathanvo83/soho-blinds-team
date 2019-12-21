import React from "react";
import Footer from "../components/footer/Footer";
import SohoNavbar from "../components/navbar/SohoNavbar";
import Main from "./Main";
import Maintenance from "./maintenance/Maintenance";
import { goLive } from "../config/config";

const renderMaintenance = () => {
  return <Maintenance></Maintenance>;
};
const renderGoLive = () => {
  return (
    <React.Fragment>
      <SohoNavbar location="home"></SohoNavbar>
      <Main></Main>

      <Footer></Footer>
    </React.Fragment>
  );
};

const App = () => {
  return <div>{goLive ? renderGoLive() : renderMaintenance()}</div>;
};

export default App;
