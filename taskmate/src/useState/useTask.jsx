import { useState } from "react";

export default function useTask() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Full Workout Exercise", completed: true },
    { id: 2, name: "Do Something with Project Circle", completed: false },
    { id: 3, name: "Set up Computer", completed: true },
  ]);

  const [show, setShow] = useState(true);

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="List">
      <h1>Task List</h1>
      <ul>
        <button onClick={() => setShow(!show)}>Show</button>
        {show &&
          tasks.map((task) => (
            <li
              key={task.id}
              className={task.completed ? "completed" : "incompleted"}
            >
              <span>
                {task.id} - {task.name}
              </span>
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
}
