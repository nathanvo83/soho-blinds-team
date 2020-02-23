import React from "react";
import "./Sale.css";
import { bestPrice } from "../../assets/images/slogan/best-price.png";

const Sale = () => {
  return (
    <div>
      <img src={bestPrice} alt="First slide" />
    </div>
    // <div className="sale-bg">

    //   <div>Summer sale</div>
    //   <div className="sale-season">summer</div>
    //   <div className="sale-details">
    //     <div className="sale-normal">up to</div>
    //     <div className="sale-high">50% OFF</div>
    //     <div className="sale-normal">on selected</div>
    //   </div>
    // </div>
  );
};

export default Sale;
