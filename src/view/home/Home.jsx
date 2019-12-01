import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import NavExample from "../../components/navbar/NavExample";
import { Container, Row, Col, Button } from "shards-react";

function Home() {
  return (
    <div>Home page</div>
    // <React.Fragment>
    //   <NavExample location="home"></NavExample>
    //   <br></br>
    //   <Container fluid>
    //     <Row>
    //       <Col className="col-sm-3 d-none d-lg-block">
    //         <Button block theme="warning">
    //           {" "}
    //           Promotion Sale 50%{" "}
    //         </Button>
    //       </Col>
    //       <Col className="col-sm-9">
    //         <React.Fragment>
    //           <Header></Header>
    //           <div>Home page</div>
    //         </React.Fragment>
    //       </Col>
    //     </Row>
    //   </Container>
    //   <br></br>

    //   <Footer></Footer>
    // </React.Fragment>
  );
}

export default Home;
