import './TaskCard.css'
import { Icon } from '@iconify/react';
import { useState } from "react";

function TaskCard () {
    // const [tasks, setTasks] = useState([]);
    // const [newTask, setNewTask] = useState({ title: "title", description: "description" });

    // function addTask () { //TESTE DE ADIÇÃO DE NOVA TASK 
    //     const updatedTasks = [...tasks, newTask]; // Crie uma nova matriz com a tarefa adicionada
    //     setTasks(updatedTasks); // Atualize o estado com a nova matriz
    //     setNewTask({ title: "", description: "" }); // Limpe os campos de entrada
    //     console.log(updatedTasks);
    // }


    return (
        <>
            {/* <article className="task-card">
                <h2 className="task-card__title">Title</h2>
                <form className="task-card__form"> 
                    <textarea className="task-card__text" id="task-description" name="task-description" rows="4" cols="50"></textarea>
                    <input type="submit" value="Salvar Tarefa" /> 
                </form>

                <button className="task-card__save"><Icon className="task-card__save__button" icon="material-symbols:save" width="32" height="32"/></button>
            </article>
            <button className="add-task" onClick={addTask}>
                <Icon icon="material-symbols:add-box" width="32" height="32"/>
            </button>      */}

                <form action="" className='task__form'>
                    <input type="text" className='task__title' placeholder='Titulo...' />
                    <input type="text" className='task__description' placeholder='Descrição...' />
                    <label htmlFor="end" className='task__date__label'> <span className='task__date__label'>Ate: </span><input type="date" className='task__time'/></label>
                    <button type='submit' className='task__button__add'>
                        <Icon icon="material-symbols:add-box" width="32" height="32"/>    
                    </button>                
                </form>  
                <form action="" className='task__form'>
                    <input type="text" className='task__title' placeholder='Titulo...' />
                    <input type="text" className='task__description' placeholder='Descrição...' />
                    <label htmlFor="end" className='task__date__label'> <span className='task__date__label'>Ate: </span><input type="date" className='task__time'/></label>
                    <button type='submit' className='task__button__add'>
                        <Icon icon="material-symbols:add-box" width="32" height="32"/>    
                    </button>                
                </form> 
                <form action="" className='task__form'>
                    <input type="text" className='task__title' placeholder='Titulo...' />
                    <input type="text" className='task__description' placeholder='Descrição...' />
                    <label htmlFor="end" className='task__date__label'> <span className='task__date__label'>Até: </span><input type="date" className='task__time'/></label>
                    <button type='submit' className='task__button__add'>
                        <Icon icon="material-symbols:add-box" width="32" height="32"/>    
                    </button>                
                </form>  
                <form action="" className='task__form'>
                    <input type="text" className='task__title' placeholder='Titulo...' />
                    <input type="text" className='task__description' placeholder='Descrição...' />
                    <label htmlFor="end" className='task__date__label'> <span className='task__date__label'>Ate: </span><input type="date" className='task__time'/></label>
                    <button type='submit' className='task__button__add'>
                        <Icon icon="material-symbols:add-box" width="32" height="32"/>    
                    </button>                
                </form>  
        </>
    )
}

export default TaskCard