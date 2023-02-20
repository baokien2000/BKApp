import React, { Component, useState } from 'react';


const TodoItem = (props) => {
    let [TodoItemDone, setDone] = useState(props.value.done);

    let completeTask = () => {
        setDone(TodoItemDone = true)
        props.completeTask(props.value.id)
    }
    return (
        <div className='TodoItem'>
            <p className={TodoItemDone ? 'done' : ''}>{props.value.name}</p>
            <button
                className={TodoItemDone ? 'btn-undone' : 'btn btn-primary'}
                onClick={() => completeTask()}
            >Done
            </button>
            <button
                className="btn btn-danger"
                onClick={() => props.deleteTask(props.value.id)}
            >Cancel
            </button>
        </div>
    );
}
export default TodoItem;
