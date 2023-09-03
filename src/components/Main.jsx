import React from "react";
import "../styles/Main.css";

const Main = () => {
  return (
    <div>
      <main>
        <div className="text-white bgdiv d-flex">
          <div className="text">
            <h1>
              Aēsop <span className="mark position-absolute mt-5">&reg;</span>
            </h1>
          </div>
          <div className="side mt-4">
            <h5>Bar Soaps</h5>
            <h1 className="w-75 mt-4">A body care classic, reimagined </h1>
            <h4 className="breath">
              Breathing new life into the humble bar soap are Nurture, Polish
              and Refresh—three additions to the range, each imparting a unique
              constellation of benefits.
            </h4>
            <button className="mt-5">
              Discover Bar Soaps{" "}
              <span className="btnicon bi bi-arrow-right"></span>
            </button>
          </div>
          <div className="msg"><button className="bi bi-chat-right"></button></div>
        </div>
      </main>
    </div>
  );
};

export default Main;
