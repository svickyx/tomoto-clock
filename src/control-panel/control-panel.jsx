import React from "react";

import "./control-panel.css";

const ControlPanel = ({
  action,
  setAction,
  countDownActive,
  switchToPomodoro,
  switchToShort,
  switchToLong,
}) => {
  return (
    <div className="control-panel">
      <span
        className={`${action === "pomodoro" ? "toggle-bg-color" : ""}`}
        onClick={() => {
          countDownActive ? switchToPomodoro() : setAction("pomodoro");
        }}
      >
        Pomodoro
      </span>
      <span
        className={`${action === "short" ? "toggle-bg-color" : ""}`}
        onClick={() => {
          countDownActive ? switchToShort() : setAction("short");
        }}
      >
        Short Break
      </span>
      <span
        className={`${action === "long" ? "toggle-bg-color" : ""}`}
        onClick={() => {
          countDownActive ? switchToLong() : setAction("long");
        }}
      >
        Long Break
      </span>
    </div>
  );
};

export default ControlPanel;
