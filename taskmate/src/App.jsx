import "../src/css/index.css";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { Footer } from "./components/Footer";
import AddTask from "./components/AddTask";
import React, { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <Header />
      <main>
        <AddTask tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </main>
      <Footer />
    </div>
  );
}
