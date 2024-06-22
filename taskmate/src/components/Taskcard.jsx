import "../css/TaskCard.css"

export const TaskCard = ({ task, handleDelete }) => {
  return (
    <li key={task.id} className={task.completed ? "completed" : "incompleted"}>
      <span>
        {task.id} - {task.name}
      </span>
      <button onClick={() => handleDelete(task.id)} className="delete">
        Delete
      </button>
    </li>
  );
};
