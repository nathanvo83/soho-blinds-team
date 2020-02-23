import React from "react";
import "./Tab.css";
import {
  faGrinHearts,
  faGrinStars,
  faGrinWink,
  faGrinSquint,
  faGrinBeam
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tab01 = props => {
  const { content } = props;
  const images = [
    faGrinHearts,
    faGrinStars,
    faGrinWink,
    faGrinSquint,
    faGrinBeam
  ];

  return (
    <div>
      {/* <div className="tab-col"> */}
      {content.titles.map((item, idx) => (
        <div className="tab-col" key={idx}>
          <div className="tab-icon">
            <FontAwesomeIcon icon={images[idx]}></FontAwesomeIcon>
          </div>
          <div className="tab-body">
            <div className="tab-title">{content.titles[idx]}</div>
            <div className="tab-content">{content.contents[idx]}</div>
          </div>
        </div>
      ))}

      {/* <div className="tab-icon">
          <FontAwesomeIcon icon={faGrinHearts}></FontAwesomeIcon>
        </div>
        <div className="tab-body">
          <div className="tab-title">{content.titles[0]}</div>
          <div className="tab-content">{content.contents[0]}</div>
        </div> */}
      {/* </div> */}
      {/* <div className="tab-col">
        <div className="tab-icon">
          <FontAwesomeIcon icon={faGrinStars}></FontAwesomeIcon>
        </div>
        <div className="tab-body">
          <div className="tab-title">{content.titles[1]}</div>
          <div className="tab-content">{content.contents[1]}</div>
        </div>
      </div>
      <div className="tab-col">
        <div className="tab-icon">
          <FontAwesomeIcon icon={faGrinWink}></FontAwesomeIcon>
        </div>
        <div className="tab-body">
          <div className="tab-title">{content.titles[2]}</div>
          <div className="tab-content">{content.contents[2]}</div>
        </div>
      </div>
      <div className="tab-col">
        <div className="tab-icon">
          <FontAwesomeIcon icon={faGrinSquint}></FontAwesomeIcon>
        </div>
        <div className="tab-body">
          <div className="tab-title">{content.titles[3]}</div>
          <div className="tab-content">{content.contents[3]}</div>
        </div>
      </div> */}

      {/* <div className="tab-title" key="0">
        {content.titles[0]}
      </div>
      <div key="1">{content.contents[0]}</div>

      <div className="tab-title" key="2">
        {content.titles[1]}
      </div>
      <div key="3">{content.contents[1]}</div>

      <div className="tab-title" key="4">
        {content.titles[2]}
      </div>
      <div key="5">{content.contents[2]}</div>

      <div className="tab-title" key="6">
        {content.titles[3]}
      </div>
      <div key="7">{content.contents[3]}</div> */}
    </div>
  );
};

export default Tab01;
