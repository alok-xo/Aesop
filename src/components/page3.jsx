import React from "react";
import "../styles/page3.css";

const page3 = () => {
  return (
    <div className="third-page">
      <div className="textpart">
        <h4>The Authenaeum</h4>
        <h1 className="mt-5">The Warm-up</h1>
        <p className="mt-5">
          In The Athenaeum, our digital reading room: a guide to ensuring a
          healthy complexion through the warmer months.
        </p>
        <div className="img-container">
          <img
            src="https://www.aesop.com/u1nb1km7t5q7/3GSzEbfK3uJnoXUkae2D9G/37d1916a82b754c70870cab8f85f34b0/Aesop_Article_Summer_Skin_Care_2020_Mid_1_Desktop_2560x1440px.jpg"
            alt=""
          />
        </div>
        <div className="btnpart">
          <button >
            <span className="txt">Read more</span>
            <span className="icon bi bi-arrow-right"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default page3;
