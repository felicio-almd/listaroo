import "./TaskCard.css";
import { Icon } from "@iconify/react";

function TodoForm({ addTask, newTitle, setNewTitle, newTask, setNewTask }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask();
  };

  return (
    <form onSubmit={handleSubmit} className="task__form">
      <input
        type="text"
        className="task__title"
        placeholder="Titulo..."
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        required
      />
      <textarea
        type="text"
        className="task__description"
        placeholder="Descrição..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        required
      ></textarea>
      <button type="submit" className="task__button__add">
        <Icon icon="material-symbols:add-box" width="32" height="32" />
      </button>
    </form>
  );
}

export default TodoForm;
