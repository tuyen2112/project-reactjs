import React, { useState } from 'react';
import './TodoApp.css';

const TodoApp = () => {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Learn JavaScript', completed: true },
        { id: 2, text: 'Learn React', completed: true },
        { id: 3, text: 'Build a React App', completed: true },
        { id: 4, text: 'Learn Next.js', completed: false },
        { id: 5, text: 'Learn Nuxt.js', completed: false },
        { id: 6, text: 'Learn Flutter', completed: false },
        { id: 7, text: 'Learn React Native', completed: false },
    ]);
    const [filter, setFilter] = useState('all');
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim()) {
            setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
            setNewTask('');
        }
    };

    const toggleTaskCompletion = (id) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    };

    const filteredTasks = tasks.filter(task => {
        if (filter === 'active') return !task.completed;
        if (filter === 'completed') return task.completed;
        return true;
    });

    const remainingTasks = tasks.filter(task => !task.completed).length;

    return (
        <div className="todo-app">
            <h1>THINGS TO DO</h1>
            <div className="new-task">
                <input
                    type="text"
                    placeholder="Add New"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addTask()}
                />
                <button onClick={addTask}>+</button>
            </div>
            <ul className="task-list">
                {filteredTasks.map(task => (
                    <li key={task.id} className={task.completed ? 'completed' : ''}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTaskCompletion(task.id)}
                        />
                        {task.text}
                    </li>
                ))}
            </ul>
            <div className="footer">
                <span>{remainingTasks} items left</span>
                <div className="filters">
                    <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
                    <button onClick={() => setFilter('active')} className={filter === 'active' ? 'active' : ''}>Active</button>
                    <button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'active' : ''}>Completed</button>
                </div>
            </div>
        </div>
    );
};

export default TodoApp;