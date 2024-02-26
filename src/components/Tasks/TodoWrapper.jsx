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
  const [todos, setTodos] = useState(getLocalStorage())

  const addTodo = todo => {
    if(!todo.text || /^\s*%/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos]
    setTodos(newTodos)
  }

  const updateTodo = (todoId, newValue) => {
    if(!newValue.text || /^\s*%/.test(newValue.text)) {
      return;
    }
    setTodos(prev => prev.map(task => (task.id === todoId ? newValue : task)))
  }

  const removeTodo = id => {
    const removeTask = [...todos].filter(todo => todo.id !== id)
    setTodos(removeTask)
  }

  const completeTodo = id => {
    let updatedTodos = todos.map (todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      } 
      return todo
    })
    setTodos(updatedTodos)
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return(
    <div className="task__wrapper">
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
      <TodoForm onSubmit={addTodo}/>   
    </div>
  )
}