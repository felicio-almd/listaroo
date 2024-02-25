import './TaskCard.css'
import { Icon } from '@iconify/react';


function TaskCard({ id, title, description, deleteTask, editTask }) {

    const handleDelete = () => {
        deleteTask(id);
    };

    const handleEdit = () => {
        editTask(id);
    }
    
    return (       
        <div className='task__card'>            
            <p className="task__card__title">{title}</p>
            <p className='task__card__description'>{description}</p>
            <div>
                <button onClick={handleDelete} className='delete'><Icon  icon="material-symbols:delete" width="24" height="24" /></button>
                <button onClick={handleEdit} className='edit'><Icon icon="material-symbols:edit" width="24" height="24" /></button>
            </div>
        </div> 
    );
}

export default TaskCard;
