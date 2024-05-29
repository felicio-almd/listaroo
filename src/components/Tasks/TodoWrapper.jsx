import "./TodoWrapper.css";
import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

const getLocalStorage = () => {
  let todos = localStorage.getItem('todos')
  if (todos) {
    return (todos = JSON.parse(localStorage.getItem('todos')))
  } else {
    return []
  }
}

export default function TodoWrapper() {
  const [todos, setTodos] = useState(getLocalStorage());

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodo = { ...todo, color: generateRandomColor() };
    const newTodos = [newTodo, ...todos];
    setTodos(newTodos);
  };

  function generateRandomColor(currentColor) {
    const rootStyles = getComputedStyle(document.documentElement);
    const colors = [
      rootStyles.getPropertyValue('--card-blue').trim(),
      rootStyles.getPropertyValue('--card-green').trim(),
      rootStyles.getPropertyValue('--card-yellow').trim(),
      rootStyles.getPropertyValue('--card-pink').trim()
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return currentColor || randomColor;
  }

  function invertOrder() {
    return [...todos].reverse();
  }

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos(prev => prev.map(task => (task.id === todoId ? { ...newValue, color: task.color } : task)));
  }

  const removeTodo = id => {
    const removeTask = [...todos].filter(todo => todo.id !== id);
    setTodos(removeTask);
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="task__wrapper">
      <Todo todos={invertOrder()} removeTodo={removeTodo} updateTodo={updateTodo} />
      <TodoForm onSubmit={addTodo} />
    </div>
  );
}
