import React from "react";
import Task from "./Task";

function Tasks(props) {
  return (
    <div className="tasks-container">
      {props.task.map((item) => {
        return (
          <Task
            task={item.title}
            key={item.id}
            id={item.id}
            remove={props.remove}
            status={props.status}
          />
        );
      })}
    </div>
  );
}

export default Tasks;
