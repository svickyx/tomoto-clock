import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./task-pop-up.css";

const TaskPopUp = () => {
  return (
    <div className="task-pop-up">
      <div className="task-pop-up-options">
        <FontAwesomeIcon className="task-pop-up-icon" icon="trash-alt" />
        <p>Clear finished tasks</p>
      </div>
      <div className="task-pop-up-options">
        <FontAwesomeIcon className="task-pop-up-icon" icon="check" />
        <p>Clear act pomodoros</p>
      </div>
      <div className="task-pop-up-options">
        <FontAwesomeIcon className="task-pop-up-icon" icon="save" />
        <p>Save as template</p>
      </div>
      <div className="task-pop-up-options">
        <FontAwesomeIcon className="task-pop-up-icon" icon="plus" />
        <p>Add from templates</p>
      </div>
    </div>
  );
};

export default TaskPopUp;
