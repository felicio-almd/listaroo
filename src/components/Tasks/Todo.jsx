import './Todo.css';
import { Icon } from '@iconify/react';
import TodoForm from './TodoForm';
import { useState } from 'react';

function Todo({ todos, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    return todos.map(todo => (
        <div key={todo.id} className='task__card' style={{ backgroundColor: todo.color }}>
            {edit.id === todo.id ? (
                <TodoForm edit={edit} onSubmit={submitUpdate} />
            ) : (
                <div className='task__card__main' style={{ backgroundColor: todo.color }}>
                    <div className='task__card__title' style={{ backgroundColor: todo.color }}>
                        {todo.text}
                    </div>
                    <div className='task__card__actions' style={{ backgroundColor: todo.color }}>
                        <button onClick={() => removeTodo(todo.id)} className='delete'>
                            <Icon icon="material-symbols:check" width="24" />
                        </button>
                        <button onClick={() => setEdit({ id: todo.id, value: todo.text })} className='edit'>
                            <Icon icon="material-symbols:edit-outline" width="24" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    ));
}

export default Todo;
