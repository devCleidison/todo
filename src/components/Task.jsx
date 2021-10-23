import React from "react";

function Task(props) {
  const task = props.task;

  const handleClickFinished = () => {
    props.status(props.id);
  };

  const handleClickRemove = () => {
    props.remove(props.id);
  };

  return (
    <div className="task-container">
      <div className="finished"></div>
      <div className="task-title" onClick={handleClickFinished}>
        {task}
      </div>
      <button className="btn-remove" onClick={handleClickRemove}>
        <i className="ri-close-line"></i>
      </button>
    </div>
  );
}

export default Task;
