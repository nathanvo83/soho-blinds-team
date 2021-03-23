import React from "react";
import "./Com04.css";

const Com04 = (props) => {
  const { summary } = props;
  return (
    <div className="com04-content">
      <div className="com04-header">{summary.header}</div>
      {summary.subItems.map((item) => (
        <div>
          <div className="com04-item-title">{item.title}</div>
          <div className="com04-item-details">{item.details}</div>
        </div>
      ))}
    </div>
  );
};

export default Com04;
