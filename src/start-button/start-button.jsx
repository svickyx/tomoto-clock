import React from "react";

import "./start-button.css";

const StartButton = ({ action, countDownActive, setCountDownActive }) => {
  return (
    <div className="start-button-container">
      {!countDownActive ? (
        <button
          className="start-button"
          onClick={() => setCountDownActive(true)}
          style={{
            color:
              action === "short"
                ? "rgb(70, 142, 145)"
                : action === "long"
                ? "rgb(67, 126, 168)"
                : "",
          }}
        >
          START
        </button>
      ) : (
        <button
          className="start-button"
          onClick={() => setCountDownActive(false)}
          style={{
            color:
              action === "short"
                ? "rgb(70, 142, 145)"
                : action === "long"
                ? "rgb(67, 126, 168)"
                : "",
            position: "relative",
            boxShadow: "none",
            top: "6px",
          }}
        >
          STOP
        </button>
      )}
    </div>
  );
};

export default StartButton;
