import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./add-task-panel.css";

const AddTaskPanel = ({ setAddTaskPanel }) => {
  return (
    <div className="add-task-panel" onClick={() => setAddTaskPanel(false)}>
      <FontAwesomeIcon icon="plus-circle" />
      <h4>Add Task</h4>
    </div>
  );
};

export default AddTaskPanel;
