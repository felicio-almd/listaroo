import React, { useState } from 'react';
import "./TaskCard.css";
import { Icon } from "@iconify/react";

function EditTodoForm({
  id,
  editTask
}) {
  const [newTitle, setNewTitle] = useState(""); // Estado para o novo título da tarefa
  const [newTask, setNewTask] = useState("");   // Estado para a nova descrição da tarefa

  const handleSubmit = (e) => {
    e.preventDefault();
    // Chama a função editTask para alternar para TaskCard
    editTask(id, newTitle, newTask); // Passa o novo título e descrição para a função editTask
  };

  return (
    <form onSubmit={handleSubmit} className="task__form">
      <input
        type="text"
        className="task__title"
        placeholder="Atualizar"
        value={newTitle} // Define o valor do input como o estado newTitle
        onChange={(e) => setNewTitle(e.target.value)}
        required
      />
      <textarea
        type="text"
        className="task__description"
        placeholder="Atualizar Descrição..."
        value={newTask} // Define o valor do textarea como o estado newTask
        onChange={(e) => setNewTask(e.target.value)}
        required
      ></textarea>
      <button type="submit" className="task__button__add">
        <Icon icon="material-symbols:add-box" width="32" height="32" />
      </button>
    </form>
  );
}

export default EditTodoForm;
