import { useEffect, useState } from "react";
import uuid from 'react-uuid'

import "./App.css";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import InputTask from "./components/InputTask";


function App() {
  const [task, setTask] = useState([]);

  const habdleKeyUp = (e) => {
    if(e.code === 'Enter'){
      handleCreateTask()
    }
  }

  const createNewTask = (taskValue) => {
    return {
      title: taskValue,
      id: uuid(),
      finished: false,
    };
  };

  const handleCreateTask = () => {
    let taskValue = document.querySelector(".text-input").value;

    if (taskValue !== "") {
      const newTask = createNewTask(taskValue);
      setTask(() => [...task, newTask]);
    }
    document.querySelector(".text-input").value = "";
  };

  const handleRemoveTask = (taskIndex) => {
    let listTasks = [];
    task.map(item =>
      taskIndex !== item.id ? listTasks.push(item) : null
    );
    setTask(() => listTasks);
  };

  const handleClickFinished = (taskIndex) => {
    const finished = document.querySelectorAll(".finished");
    const myTask = document.querySelectorAll(".task-title");

    task.map((item, index) => {
      if(taskIndex === item.id){
        finished[index].classList.toggle("on");
        myTask[index].classList.toggle("on");
        task[index].finished = !task[index].finished;
      }
      return true
    })
  };

  useEffect(() => {
    document.querySelector(".tasks-container");
  });

  return (
    <div className="App">
      <Header name="My To Do" />
      <InputTask get={handleCreateTask} onKeyPress={habdleKeyUp}/>
      {task !== "" ? (
        <Tasks
          task={task}
          remove={handleRemoveTask}
          status={handleClickFinished}
        />
      ) : null}
    </div>
  );
}

export default App;
