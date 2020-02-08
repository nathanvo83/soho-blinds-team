import React from "react";
import { Responsive } from "semantic-ui-react";
import { Container, Row, Col } from "shards-react";
import Com01 from "./Com01";
import Com02 from "./Com02";
import Com03 from "./Com03";

const TestPage01 = () => {
  return (
    <div>
      <Container fluid>
        <Responsive>
          <Row>
            <Col xs={6}>
              <Com01></Com01>
            </Col>
            <Col xs={6}>
              <Com02
                title="Title"
                tab01="over view"
                tab02="description"
                content01={["01", "02", "03", "04"]}
                content02={["01", "02", "03", "04"]}
              ></Com02>
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs={12}>
              <Com03
                images={[
                  "https://via.placeholder.com/800x800/20232a/808080?Text=01",
                  "https://via.placeholder.com/800x800/20232a/808080?Text=02",
                  "https://via.placeholder.com/800x800/20232a/808080?Text=03",
                  "https://via.placeholder.com/800x800/20232a/808080?Text=04",
                  "https://via.placeholder.com/800x800/20232a/808080?Text=05",
                  "https://via.placeholder.com/800x800/20232a/808080?Text=01",
                  "https://via.placeholder.com/800x800/20232a/808080?Text=02",
                  "https://via.placeholder.com/800x800/20232a/808080?Text=03",
                  "https://via.placeholder.com/800x800/20232a/808080?Text=04",
                  "https://via.placeholder.com/800x800/20232a/808080?Text=05"
                ]}
              ></Com03>
            </Col>
          </Row>
        </Responsive>
      </Container>
    </div>
  );
};

export default TestPage01;
