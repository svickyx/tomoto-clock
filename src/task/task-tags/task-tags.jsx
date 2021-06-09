import React from "react";
import NewTaskTags from "../new-task-tag/new-task-tag";

import "./task-tags.css";

const TaskTags = ({ tagList, handleDelete }) => {
  return (
    <div className="task-tags">
      {tagList.map(({ title, completed, schedule }) => {
        return (
          <NewTaskTags
            key={title + 1}
            title={title}
            completed={completed}
            schedule={schedule}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
};

export default TaskTags;
