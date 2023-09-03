import React from "react";
import "../styles/page7.css";
import xoxo from "../styles/Images/serial.png";

const page7 = () => {
  return (
    <div id="xo" className="third-page">
      <div className="textpart">
        <h1 className="mt-5">Store locator</h1>
        <p className="mt-5">
          Our consultants are available to host you in-store and provide
              tailored guidance on gift purchases.
        </p>
        <div className="img-container">
          <img src={xoxo} alt="" />
        </div>
        <div className="btnpart">
          <button>
            <span className="txt">Find a nearby store</span>
            <span className="icon bi bi-arrow-right"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default page7;
