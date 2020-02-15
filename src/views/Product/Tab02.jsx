import React from "react";
import "./Tab.css";

const Tab02 = props => {
  const { content } = props;
  return (
    <div>
      <div className="tab-title" key="0">
        {content.titles[0]}
      </div>
      <div key="1" className="tab-content">
        {content.contents[0]}
      </div>

      <div className="tab-title" key="2">
        {content.titles[1]}
      </div>
      <div key="3" className="tab-content">
        {content.contents[1]}
      </div>

      <div className="tab-title" key="4">
        {content.titles[2]}
      </div>
      <div key="5" className="tab-content">
        {content.contents[2]}
      </div>

      <div className="tab-title" key="6">
        {content.titles[3]}
      </div>
      <div key="7" className="tab-content">
        {content.contents[3]}
      </div>
    </div>
    // <div>
    //   {content.map((item, idx) => (
    //     <div key={idx}>{item}</div>
    //   ))}
    // </div>
  );
};

export default Tab02;
