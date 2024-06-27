import React, { useEffect } from "react";
import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import ShowTask from "./components/ShowTask";
import Footer from "./components/Footer";

export default function App() {
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("tasklist")) || []
  );
  const [task, setTask] = useState({});

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(taskList))
  }, [taskList])

  return (
    <div>
      <Header />
      <main>
        <AddTask
          taskList={taskList}
          setTaskList={setTaskList}
          task={task}
          setTask={setTask}
        />
        <ShowTask
          taskList={taskList}
          setTaskList={setTaskList}
          task={task}
          setTask={setTask}
        />
      </main>
      <Footer />
    </div>
  );
}
