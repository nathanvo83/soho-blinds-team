import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { menuTypes } from "../../constants/menuTypes";
import { actionTypes } from "../../constants/actionTypes";
import Header from "./Header";
import "./Styles01.css";
import {
  Container,
  Row,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
  Button
} from "shards-react";

import img01 from "./images/nzwswe-1.jpe";
import img02 from "./images/blinds.jpeg";

const Curtain = props => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState("sm");
  const [src, setSrc] = useState("");

  const { selectMenu } = props;

  useEffect(() => {
    selectMenu(menuTypes.PRODUCT);
    return () => {
      // clear
    };
  }, [selectMenu]);

  const show = (size, src) => {
    setSrc(src);
    setOpen(true);
    setSize(size);

    console.log("show");
  };

  const close = () => {
    setOpen(false);
    console.log("close");
  };

  return (
    <React.Fragment>
      <Header></Header>
      <br />
      <br />
      <br />

      <Modal
        size={size}
        centered
        className="modal-item"
        open={open}
        toggle={close}
      >
        <ModalHeader>Header</ModalHeader>
        <ModalBody onClick={close}>
          <img className="modal-image" src={src} alt=""></img>
        </ModalBody>
      </Modal>

      <Container>
        <h2>SOHO CURTAIN COLLECTION</h2>
        <Row>
          <Col className="s-col" sm="3">
            <div class="hovereffect s-section">
              <img class="img-responsive img-size" src={img01} alt="" />
              <div class="overlay">
                <h2>Hover effect 5</h2>
                <Button squared theme="dark" onClick={() => show("lg", img01)}>
                  View
                </Button>
              </div>
            </div>
          </Col>
          <Col className="s-col" sm="3">
            <div class="hovereffect s-section">
              <img class="img-responsive img-size" src={img02} alt="" />
              <div class="overlay">
                <h2>Hover effect 5</h2>
                <Button squared theme="dark" onClick={() => show("lg", img02)}>
                  View
                </Button>
              </div>
            </div>
          </Col>
          <Col className="s-col" sm="3">
            <div class="hovereffect s-section">
              <img class="img-responsive img-size" src={img01} alt="" />
              <div class="overlay">
                <h2>Hover effect 5</h2>
                <Button squared theme="dark" onClick={() => show("lg", img01)}>
                  View
                </Button>
              </div>
            </div>
          </Col>
          <Col className="s-col" sm="3">
            <div class="hovereffect s-section">
              <img class="img-responsive img-size" src={img02} alt="" />
              <div class="overlay">
                <h2>Hover effect 5</h2>
                <Button squared theme="dark" onClick={() => show("lg", img02)}>
                  View
                </Button>
              </div>
            </div>
          </Col>
          <Col className="s-col" sm="3">
            <div class="hovereffect s-section">
              <img class="img-responsive img-size" src={img01} alt="" />
              <div class="overlay">
                <h2>Hover effect 5</h2>
                <Button squared theme="dark" onClick={() => show("lg", img01)}>
                  View
                </Button>
              </div>
            </div>
          </Col>
          <Col className="s-col" sm="3">
            <div class="hovereffect s-section">
              <img class="img-responsive img-size" src={img02} alt="" />
              <div class="overlay">
                <h2>Hover effect 5</h2>
                <Button squared theme="dark" onClick={() => show("lg", img02)}>
                  View
                </Button>
              </div>
            </div>
          </Col>
          <Col className="s-col" sm="3">
            <div class="hovereffect s-section">
              <img class="img-responsive img-size" src={img01} alt="" />
              <div class="overlay">
                <h2>Hover effect 5</h2>
                <Button squared theme="dark" onClick={() => show("lg", img01)}>
                  View
                </Button>
              </div>
            </div>
          </Col>
          <Col className="s-col" sm="3">
            <div class="hovereffect s-section">
              <img class="img-responsive img-size" src={img02} alt="" />
              <div class="overlay">
                <h2>Hover effect 5</h2>
                <Button squared theme="dark" onClick={() => show("lg", img02)}>
                  View
                </Button>
              </div>
            </div>
          </Col>
          <Col className="s-col" sm="3">
            <div class="hovereffect s-section">
              <img class="img-responsive img-size" src={img01} alt="" />
              <div class="overlay">
                <h2>Hover effect 5</h2>
                <Button squared theme="dark" onClick={() => show("lg", img01)}>
                  View
                </Button>
              </div>
            </div>
          </Col>
          <Col className="s-col" sm="3">
            <div class="hovereffect s-section">
              <img class="img-responsive img-size" src={img02} alt="" />
              <div class="overlay">
                <h2>Hover effect 5</h2>
                <Button squared theme="dark" onClick={() => show("lg", img02)}>
                  View
                </Button>
              </div>
            </div>
          </Col>
          <Col className="s-col" sm="3">
            <div class="hovereffect s-section">
              <img class="img-responsive img-size" src={img01} alt="" />
              <div class="overlay">
                <h2>Hover effect 5</h2>
                <Button squared theme="dark" onClick={() => show("lg", img01)}>
                  View
                </Button>
              </div>
            </div>
          </Col>
          <Col className="s-col" sm="3">
            <div class="hovereffect s-section">
              <img class="img-responsive img-size" src={img02} alt="" />
              <div class="overlay">
                <h2>Hover effect 5</h2>
                <Button squared theme="dark" onClick={() => show("lg", img02)}>
                  View
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
    </React.Fragment>
  );
};
const mapDispatchToProps = dispatch => ({
  selectMenu: menu =>
    dispatch({
      type: actionTypes.CHANGE_MENU,
      value: menu
    })
});

export default connect(null, mapDispatchToProps)(Curtain);
