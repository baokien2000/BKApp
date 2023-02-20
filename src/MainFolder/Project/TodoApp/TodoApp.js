import React, { useEffect, useState } from 'react';
import TodoItem from './TodoItem'
const TodoApp = () => {

    let [TasksList, setTasks] = useState([]);
    let [TaskName, setTaskName] = useState('');

    const OnInputChange = (e) => {
        setTaskName(TaskName = e)
    }

    let addTodo = () => {
        if (TaskName === '') {
            return;
        }
        let id = TasksList.length;
        let name = TaskName;

        setTaskName(TaskName = '')
        TasksList.unshift({ id, name, done: false })
        // setTasks(TasksList = tast1)
        localStorage.setItem("TodoList", JSON.stringify(TasksList));

    }

    const deleteTask = (id) => {

        let Task = TasksList.filter((task) => task.id !== id);

        setTasks(TasksList = Task);

        localStorage.setItem("TodoList", JSON.stringify(Task));
    }

    const completeTask = (id) => {

        let Task = TasksList;
        console.log("Task", Task)
        console.log("TasksList", TasksList)
        Task.forEach((tasks) => {
            if (tasks.id === id) {
                tasks.done = true;
            }
        })
        setTasks(TasksList = Task);
        localStorage.setItem("TodoList", JSON.stringify(TasksList));
    }

    useEffect(() => {
        let Task = localStorage.getItem("TodoList");
        Task = JSON.parse(Task)
        if (Task != null) {
            setTasks(TasksList = Task);
        }
    }, [])
    return (
        <div className="Todo" >
            <p>Todo App</p>
            <div className='TitleTodo'>
                <div className="input-group">

                    <input
                        type="search"
                        className="form-control rounded"
                        placeholder="Add a todo"
                        aria-label="Search"
                        aria-describedby="search-addon"
                        onChange={(e) => OnInputChange(e.target.value)}
                        value={TaskName}
                    />
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => addTodo()}
                    >
                        Add todo
                    </button>
                </div>
                <div className='TodoList'>
                    {TasksList.map((e) => {
                        return (
                            <TodoItem
                                key={e.id}
                                value={e}
                                deleteTask={deleteTask}
                                completeTask={completeTask}
                            />
                        )
                    })}

                </div>

            </div>
        </div>
    );
}
export default TodoApp;
