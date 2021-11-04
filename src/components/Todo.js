import React, { useState } from 'react';
import './css/Todo.css';


const Todo = ({ toggleTodo, task, completed, id, removeTodo, updateTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editTask, setEditTask] = useState(task)
    const handleUpdate = (e) => {
        e.preventDefault();
        updateTodo(id, editTask)
        setIsEditing(false)
    }
    return (
        <>
            <div className={completed ? 'Todo completed' : "Todo"}>
                {isEditing ? (
                    <div className="form">
                        <form className="Todo-edit-form" onSubmit={handleUpdate}>
                            <input
                                type="text"
                                name="task"
                                value={editTask}
                                onChange={(e) => setEditTask(e.target.value)}
                            />
                            <button>Save</button>
                        </form>
                    </div>

                ) : (
                    <div className="task-text">
                        <li className="Todo-task" onClick={toggleTodo}>{task}</li>
                    </div >
                )}
                <div className="Todo-buttons">
                    <button onClick={() => setIsEditing(true)}>
                        <i className="fas fa-pen" />
                    </button>
                    <button onClick={removeTodo}>
                        <i className="fas fa-trash" />
                    </button>
                </div>

            </div >
        </>
    );
};

export default Todo;