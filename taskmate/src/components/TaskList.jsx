import { useState } from "react";
import { TaskCard } from "./Taskcard";
import { BoxCard } from "./BoxCard";
import "../css/TaskList.css";

export const TaskList = ({ tasks, setTasks }) => {
  const [show, setShow] = useState(true);

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <section className="tasklist">
      <ul>
        <div className="show-button">
          <h1>Task List</h1>
          <button onClick={() => setShow(!show)} className="show">
            Show
          </button>
        </div>
        {show &&
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
          ))}
      </ul>

      <BoxCard result={"success"}>
        <p className="title">Lorem ipsum dolor sit amet.</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          deleniti, ullam soluta quae in accusamus, iste voluptatibus veniam
          est, eaque hic itaque? Assumenda ut velit quis aliquam cum nesciunt
          vero?
        </p>
      </BoxCard>

      <BoxCard result={"warning"}>
        <p className="title">Lorem ipsum dolor sit amet.</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          deleniti, ullam soluta quae in accusamus, iste voluptatibus veniam
          est, eaque hic itaque? Assumenda ut velit quis aliquam cum nesciunt
          vero?
        </p>
      </BoxCard>

      <BoxCard result={"alert"}>
        <p className="title">Lorem ipsum dolor sit amet.</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          deleniti, ullam soluta quae in accusamus, iste voluptatibus veniam
          est, eaque hic itaque? Assumenda ut velit quis aliquam cum nesciunt
          vero?
        </p>
      </BoxCard>
    </section>
  );
};
