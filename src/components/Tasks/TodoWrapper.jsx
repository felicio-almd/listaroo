import './TaskCard.css';

import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import TodoForm from "./TodoForm";
import TaskCard from './TaskCard';


function TodoWrapper() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [newTitle, setNewTitle] = useState("");

    const addTask = () => {
        setTasks([...tasks, { id: uuidv4(), title: newTitle, description: newTask, completed: false, isEditing: false }]);
        setNewTitle("");
        setNewTask("");
    };

    return (
        <>
            {tasks.map((task) => (
                <TaskCard key={task.id} title={task.title} description={task.description}/>
            ))}
            <TodoForm addTask={addTask} newTitle={newTitle} setNewTitle={setNewTitle} newTask={newTask} setNewTask={setNewTask} />
        </>
    );
}

export default TodoWrapper;
