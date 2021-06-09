import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TaskPopUp from "./task-pop-up/task-pop-up";
import AddTaskPanel from "./add-task-panel/add-task-panel";
import AddTaskForm from "./add-task-form/add-task-form";
import TaskTags from "./task-tags/task-tags";

import "./task.css";

const Task = ({
  showTaskPopup,
  toggleTaskPopup,
  addTaskPanel,
  setAddTaskPanel,
}) => {
  const [tagList, setTagList] = useState([]);

  const handleAddTask = (task) => {
    const updatedtagList = [...tagList];
    updatedtagList.push(task);

    setTagList(updatedtagList);
  };

  const handleDelete = (title) => {
    let afterDelete = tagList.filter((tag) => {
      return tag.title !== title;
    });
    setTagList(afterDelete);
  };

  return (
    <div className="task-container">
      <div className="task-header-container">
        <h3 className="task-header">Tasks</h3>
        <FontAwesomeIcon
          className="task-icon"
          icon="ellipsis-v"
          onClick={() => toggleTaskPopup()}
        />
        {showTaskPopup ? <TaskPopUp /> : null}
      </div>
      <TaskTags tagList={tagList} handleDelete={handleDelete} />
      {addTaskPanel ? (
        <AddTaskPanel setAddTaskPanel={setAddTaskPanel} />
      ) : (
        <AddTaskForm
          handleAddTask={handleAddTask}
          setAddTaskPanel={setAddTaskPanel}
        />
      )}
    </div>
  );
};

export default Task;
