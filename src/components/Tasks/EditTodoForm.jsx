import './TaskCard.css';
import { Icon } from '@iconify/react';


function EditTodoForm({ editTask, newTitle, setNewTitle, newTask, setNewTask, id, title, description}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        editTask(title, description, id);
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="task__form">
                <input
                    type="text"
                    className="task__title"
                    placeholder="Atualizar Titulo..."
                    value={title}
                    onChange={(e) => setNewTitle(e.target.value)}
                    required
                />
                <textarea
                    type="text"
                    className="task__description"
                    placeholder="Atualizar Descrição..."
                    value={description}
                    onChange={(e) => setNewTask(e.target.value)}
                    required
                ></textarea>
                <button type="submit" className="task__button__add">
                    <Icon icon="material-symbols:add-box" width="32" height="32" />
                </button>
            </form>
        </>
    );
}

export default EditTodoForm;
