import React from "react";
import { Grid } from "semantic-ui-react";
import "./Com05.css";
// import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import {
  faCheckCircle,
  faQuestionCircle,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Com05 = (props) => {
  const { about } = props;
  return (
    <div className="com05-content">
      <div>{about.header}</div>
      <Grid columns="2" style={{ margin: 0 }}>
        <Grid.Row>
          <Grid.Column>
            <div>{about.col01.title}</div>
            {about.col01.items.map((item) => (
              <div>
                <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon> {item}
              </div>
            ))}
          </Grid.Column>
          <Grid.Column>
            <div>{about.col02.title}</div>
            {about.col02.items.map((item) => (
              <div>
                <FontAwesomeIcon icon={faQuestionCircle}></FontAwesomeIcon>{" "}
                {item}
              </div>
            ))}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Com05;
