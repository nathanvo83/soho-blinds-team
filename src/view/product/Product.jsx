import React from "react";
// import Footer from "../../components/footer/Footer";
// import Header from "../../components/header/Header";
// import NavExample from "../../components/navbar/NavExample";
import Header from "./Header";
import logo from "./images/nzwswe-1.jpe";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  Button
} from "shards-react";

function Product() {
  return (
    // <div>Product page</div>
    <React.Fragment>
      {/* <NavExample location="product"></NavExample> */}
      <Header></Header>

      <Container className="m-0 p-0">
        <Row className="m-0 p-0">
          <Col>
            <Card>
              <CardImg top src={logo} />
              <CardBody>
                <p>Blinds</p>
                <Button theme="light">Read more &rarr;</Button>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg top src={logo} />
              <CardBody>
                <p>Curtains</p>
                <Button theme="light">Read more &rarr;</Button>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg top src={logo} />
              <CardBody>
                <p>Shutters</p>
                <Button theme="light">Read more &rarr;</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* <div>Product page</div> */}
      {/* <Footer></Footer> */}
    </React.Fragment>
  );
}

export default Product;
