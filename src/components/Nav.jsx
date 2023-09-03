import React from "react";
import "../styles/Nav.css";

const Nav = () => {
  return (
    <div>
      <div className="firstn">
        <p className="mt-3">
          Trained Aesop consultations are available to provide bespoke skin care
          advise.
          <span className="ms-4">
            <b>Book a video consultation</b>
          </span>
        </p>
      </div>
      <div className="secondn d-flex justify-content-center bg-black text-white">
        <p className="mt-3">
          Click and Collect is now available at Hong Kong stores. Enjoy
          complimentary shipping on orders over HK$400{" "}
          <span className="bi bi-plus-lg ms-4"></span>
        </p>
      </div>
      <div className="list">
        <div className="leftlist">
          <span>Skin Care</span>
          <span>Body & Hand</span>
          <span>Hair</span>
          <span>Fragrance</span>
          <span>Home</span>
          <span>Kits & Travel</span>
          <span>Gifts</span>
          <span>Read</span>
          <span>Stores</span>
          <span>Facial Appointments</span>
          <span className="bi bi-search"></span>
        </div>
        <div className="rightlist">
          <span>Log in</span>
          <span>Cabinet</span>
          <span>Cart</span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
