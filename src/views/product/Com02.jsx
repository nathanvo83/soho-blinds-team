import React, { useState } from "react";
import { Menu, Segment } from "semantic-ui-react";
import "./Com02.css";
import Tab01 from "./Tab01";
import Tab02 from "./Tab02";

const Com02 = props => {
  const { title, tab01, tab02, content01, content02 } = props;

  const [activeItem, setActiveItem] = useState(tab01);

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  return (
    <div>
      <div className="com02-title">{title}</div>
      <Menu pointing secondary>
        <Menu.Item
          className="com02-item"
          name={tab01}
          active={activeItem === tab01}
          onClick={handleItemClick}
        />
        <Menu.Item
          className="com02-item"
          name={tab02}
          active={activeItem === tab02}
          onClick={handleItemClick}
        />
      </Menu>
      <div>
        {activeItem === tab01 ? (
          <Tab01 content={content01}></Tab01>
        ) : (
          <Tab02 content={content02}></Tab02>
        )}
      </div>
    </div>
  );
};

export default Com02;
