import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import NavExample from "../components/navbar/NavExample";
import { Container, Row, Col, Button } from "shards-react";
import Main from "./Main";
import Maintenance from "./maintenance/Maintenance";

import { goLive } from "../config/config";

const renderMaintenance = () => {
  return <Maintenance></Maintenance>;
};
const renderGoLive = () => {
  return (
    <React.Fragment>
      <NavExample location="home"></NavExample>

      <Container fluid className="m-0 p-0">
        <Row className="m-0 p-0">
          <Col className="col-sm-3 d-none d-lg-block">
            <Button block theme="warning">
              {" "}
              Promotion Sale 50%{" "}
            </Button>
          </Col>
          <Col className="col-sm-9 m-0 p-0">
            <React.Fragment>
              {/* <Header></Header> */}
              <Main></Main>
            </React.Fragment>
          </Col>
        </Row>
      </Container>
      <br></br>

      <Footer></Footer>
    </React.Fragment>
  );
};

const App = () => {
  return (
    // {goLive? renderGoLive : renderMaintenance}
    <div>{goLive ? renderGoLive() : renderMaintenance()}</div>
  );
};

export default App;
