import React from "react";
import "../styles/page6.css";
import First from "../styles/Images/yev1.png";
import Second from "../styles/Images/yev2.png";

const page6 = () => {
  return (
    <div id="enhyphen" className="full">
      <div className="p4">
        <h4>For the home</h4>
        <h1 className="mt-5">Domestic pleasures</h1>
        <p className="mt-5">
        Our range of aromatic formulations for the home are practical and pleasing in equal measure.
        </p>
        <p className="mt-5">
        See all Home <span className="bi bi-arrow-right"></span>
        </p>
      </div>
      <div className="img-containr ms-5">
        <div className="me-5">
          <img src={First} alt="" height="400" />
          <div className="txtar">
            <h5>Post-Poo Drops</h5>
            <p>A botanical bathroom deodoriser</p>
          </div>
        </div>
        <div className="ms5">
          <img src={Second} alt="" height="400" />
          <div className="txtar">
            <h5>Aganice Aromatique Candle</h5>
            <p>Cardamom, Mimosa, Tobacco</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default page6;
