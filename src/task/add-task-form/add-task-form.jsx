import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./add-task-form.css";

const AddTaskForm = ({ setAddTaskPanel, handleAddTask }) => {
  const inputRef = useRef(null);
  const scheduleRef = useRef(null);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const task = {
      title: inputRef.current.value,
      completed: 0,
      schedule: scheduleRef.current.value,
    };
    handleAddTask(task);
    e.target.reset();
  };
  return (
    <form className="add-task-form-container" onSubmit={handleOnSubmit}>
      <div className="add-task-form">
        <input
          className="add-task-form-input"
          type="text"
          placeholder="what are you working on?"
          ref={inputRef}
        />
        <h4>Est Pomodoros</h4>
        <div className="add-task-form-option-buttons">
          <input type="number" ref={scheduleRef} />
        </div>
        <div className="add-note-add-project-panel">
          <button>+Add Note</button>
          <button>+Add Project</button>
          <FontAwesomeIcon icon="lock" />
        </div>
      </div>
      <div className="cancel-save-container">
        <button
          type="button"
          className="cancel-btn"
          onClick={() => setAddTaskPanel(true)}
        >
          Cancel
        </button>
        <button type="submit" className="save-btn">
          Save
        </button>
      </div>
    </form>
  );
};

export default AddTaskForm;
