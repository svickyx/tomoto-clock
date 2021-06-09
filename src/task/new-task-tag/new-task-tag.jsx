import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./new-task-tag.css";

const NewTaskTags = ({ title, completed, schedule, handleDelete }) => {
  return (
    <div className="new-task-tag">
      <FontAwesomeIcon className="check-circle" icon="check-circle" />
      <h4 className="new-task-title">{title}</h4>
      <h4 className="new-task-number">
        {completed}/{schedule}
      </h4>
      <FontAwesomeIcon
        icon="trash-alt"
        className="trash-icon"
        onClick={() => handleDelete(title)}
      />
    </div>
  );
};

export default NewTaskTags;
