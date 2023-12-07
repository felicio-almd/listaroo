import './TaskCard.css'
import { Icon } from '@iconify/react';
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

uuidv4();

function TaskCard () {
    const [tasks, setTasks] = useState([]);

    const Tasks = () => {
        const [newTask, setNewTask] = useState({ title: '', description: '' });

        const handleSubmit = (e) => {
            e.preventDefault();
            addTask(newTask);
            setNewTask({ title: '', description: '' }); // Limpar os campos do novo formulário
        };

        const addTask = (task) => {
            setTasks((prevTasks) => [...prevTasks, { ...task, id: uuidv4(), completed: false, isEditing: false }]);
        };

        return (
            <>
            <form onSubmit={handleSubmit} className="task__form">
                <input
                    type="text"
                    className="task__title"
                    placeholder="Titulo..."
                    value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                    required
                />
                <textarea
                    type="text"
                    className="task__description"
                    placeholder="Descrição..."
                    value={newTask.description}
                    onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                    required
                ></textarea>
                <button type="submit" className="task__button__add">
                    <Icon icon="material-symbols:add-box" width="32" height="32" />
                </button>
            </form>
        
            </>
        );
        
    };

    return (
        <>
            
            {tasks.map((task) => (
                
                    <form key={task.id} className='task__form'>
                    <input type='text' className='task__title' placeholder='Titulo...' value={task.title} readOnly />
                    <textarea type='text' className='task__description' placeholder='Descrição...' value={task.description} readOnly></textarea>
                    {/* <button type="submit" className="task__button__add">
                        <Icon icon="material-symbols:add-box" width="32" height="32" />
                    </button> */}
                    </form>

                
            ))}
            <Tasks />
        </>
    );
}

export default TaskCard;
