import { useState, useRef } from "react";
import "../css/AddTask.css";

export default function AddTask({ tasks, setTasks }) {
  // const [taskValue, setTaskValue] = useState("");
  const [progress, setProgress] = useState(false);
  const taskRef = useRef();

  // const handleInput = (e) => {
  //   // setTaskValue(e.target.value);
  //   console.log(taskRef.current.value);
  // };

  const handleReset = () => {
    // setTaskValue("");
    taskRef.current.value = "";
    setProgress(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 10000),
      name: taskRef.current.value,
      completed: Boolean(progress),
    };
    setTasks([...tasks, task]);
    handleReset();
  };

  return (
    <section className="addtask">
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="task">Task Name</label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Task Name"
          autoComplete="off"
          ref={taskRef}
        />
        <select onChange={(e) => setProgress(e.target.value)} value={progress}>
          <option value={false}>Pending</option>
          <option value={true}>Completed</option>
        </select>
        <button type="submit">Add</button>
        <span onClick={handleReset}>Reset</span>
      </form>
      {/* <p>{taskValue}</p> */}
    </section>
  );
}
