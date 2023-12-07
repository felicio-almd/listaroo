import './TaskCard.css'
import { Icon } from '@iconify/react';


function TaskCard({ title, description, toggleComplete }) {
    return (
        <>
            <div className='task__card'>            
                <p className="task__card__title">{title}</p>
                <p className='task__card__description'>{description}</p>

                <div>
                    <button><Icon icon="material-symbols:delete" width="24" height="24" /></button>
                    <button><Icon icon="material-symbols:edit" width="24" height="24" /></button>
                </div>
            </div>
        </>
    );
}

export default TaskCard;
