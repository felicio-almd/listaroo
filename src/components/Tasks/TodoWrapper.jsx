import './TaskCard.css';

import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import TodoForm from "./TodoForm";
import TaskCard from './TaskCard';
import EditTodoForm from './EditTodoForm';


function TodoWrapper() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [newTitle, setNewTitle] = useState("");

    const addTask = () => {
        setTasks([...tasks, { id: uuidv4(), title: newTitle, description: newTask, completed: false, isEditing: false }]);
        setNewTitle("");
        setNewTask("");
    };    
    
    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const editTask = (id) => {
        setTasks(tasks.map(task => task.id === id ? {...task, isEditing: !task.isEditing} : task))
    }

    const editTodo = (id, task) => {
        setTasks(tasks.map(task => task.id === id ? {...task, isEditing: !task.isEditing} : task))
    }

    return (
        <>
            {tasks.map((task) => (
                tasks.isEditing ? (
                    <EditTodoForm editTask={editTodo} key={task.id}
                    id={task.id} 
                    title={task.title} 
                    description={task.description}/>
                ) : (
                <TaskCard 
                    key={task.id}
                    id={task.id} 
                    title={task.title} 
                    description={task.description}
                    deleteTask={deleteTask}
                    editTask={editTask}
                />
                )
            ))}
            <TodoForm addTask={addTask} newTitle={newTitle} setNewTitle={setNewTitle} newTask={newTask} setNewTask={setNewTask}/>
        </>
    );
}

export default TodoWrapper;
