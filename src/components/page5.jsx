import React from "react";
import "../styles/page5.css";
import momo from "../styles/Images/momo.png";

const page5 = () => {
  return (
    <div className="kuchv">
      <div className="l-imag">
        <img src={momo} alt="" />
      </div>
      <div className="fort">
        <div className="dedokuchv">
          <h1>Post-Poo Drops has returned</h1>
          <p className="mt-5">
            Here to make the malodorous melodious once again. Dispense this
            favoured formulation into the toilet bowl after flushing to
            effectively mask disagreeable odours.
          </p>
          <button className="mt-4">
            <span className="abel">Discover Post-Poo Drops</span> <span className="bi bi-arrow-right laroi"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default page5;
