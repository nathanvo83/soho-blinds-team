import React from "react";
import "./Sale.css";

const Sale = () => {
  return (
    <div className="sale-bg">
      {/* <div>Summer sale</div> */}
      <div className="sale-season">summer</div>
      <div className="sale-details">
        <div className="sale-normal">up to</div>
        <div className="sale-high">50% OFF</div>
        <div className="sale-normal">on selected</div>
      </div>
    </div>
  );
};

export default Sale;
