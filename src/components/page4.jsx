import React from "react";
import "../styles/page4.css";
import First from "../styles/Images/first.png";
import Second from "../styles/Images/second.png";

const page4 = () => {
  return (
    <div className="full">
      <div className="p4">
        <h4>For the skin</h4>
        <h1 className="mt-5">Attention for all types</h1>
        <p className="mt-5">
          The well-being of your skin is the product of hydration, nourishment,
          and protection through discerning rituals. Explore requisite skin care
          for all skin types.
        </p>
        <p className="mt-5">
          See all Skin Care <span className="bi bi-arrow-right"></span>
        </p>
      </div>
      <div className="img-containr ms-5">
        <div className="me-5">
          <img src={First} alt="" height="400" />
          <div className="txtar">
            <h5>Lucent Facial Concentrate</h5>
            <p>A Vitamin C-rich layering serum</p>
          </div>
        </div>
        <div className="ms5">
          <img src={Second} alt="" height="400" />
          <div className="txtar">
            <h5>Lucent Facial Concentrate</h5>
            <p>A Vitamin C-rich layering serum</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page4;
