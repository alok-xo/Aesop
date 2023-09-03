import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/page2.css";
import img1 from "../styles/Images/yellow-1st.png";
import img2 from "../styles/Images/gray.png";
import img3 from "../styles/Images/gold.png";

function Arrow() {}
const page2 = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    outerWidth:300,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4 left">
          <h4>For the body</h4>
          <h1 className="mt-3">An expression of care</h1>
          <p className="mt-5">
            Aesop formulations offer the body deserving care, to cleanse,
            replenish, and nourish skin. Each product is a sensory pleasure to
            use with its own delightful aroma.
          </p>
          <p className="mt-5">See all Body Care <span className="bi bi-arrow-right"></span></p>
        </div>
        <div className="slider-container col-8">
          <Slider {...settings}>
            <div className="card">
              <img src={img1} alt="" />
              <div className="card-body">
                <h2>Nurture Bar Soap</h2>
                <p>Offers a mild yet effective cleanse</p>
              </div>
            </div>
            <div className="card">
              <img src={img2} alt="" />
              <div className="card-body">
                <h2>Polish Bar Soap</h2>
                <p>Throughly cleanes and exfoliates skin</p>
              </div>
            </div>
            <div className="card">
              <img src={img3} alt="" />
              <div className="card-body">
                <h2>Refresh Bar Soap</h2>
                <p>Offers a through and enlivening cleanse</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default page2;
