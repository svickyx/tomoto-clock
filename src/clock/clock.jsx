import React from "react";

import "./clock.css";

const Clock = ({ formatTime }) => {
  return <div className="timer">{formatTime()}</div>;
};

export default Clock;
