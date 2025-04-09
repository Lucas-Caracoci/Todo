import React, { useState } from 'react';
import styles from './TaskArea.module.css';
import { PlusCircle } from 'phosphor-react'

import { v4 } from 'uuid'

import Item from './Item';
import Empty from './Empty';

const TaskArea = () => {

    const [newTask, setNewTask] = useState('');

    const [tasks, setTasks] = useState([]);

    function handleCreateNewTask(e) {
        e.preventDefault();

        if (newTask.trim() === '') {
            return;
        }
        const task = {
            id: v4(),
            content: newTask,
            isChecked: false
        }

        setTasks([...tasks, task]);
        setNewTask('');
        inputRef.current.focus();
    }


    function handleDeleteTask(id) {
        const tasksWithoutDeletedOne = tasks.filter(task => {
            return task.id !== id
        })
        setTasks(tasksWithoutDeletedOne)
    }

    function handleCheckTask(id) {
        const updateCheckedTask = tasks.map((task) => {
            if (task.id === id) {
                return {
                    ...task,
                    isChecked: !task.isChecked
                }
            }
            return task;
        })
        setTasks(updateCheckedTask)
    }


    const isTaskEmpty = newTask === '' ? true : false;


    const completedTasks = tasks.filter(task => task.isChecked === true).length;



    return (
        <>
            <form onSubmit={handleCreateNewTask} className={styles.taskBarContainer}>
                <input type="text" placeholder='Adicione uma nova tarefa' value={newTask} onChange={(e) => setNewTask(e.target.value)} className={styles.taskBar} />
                <button type='submit' disabled={isTaskEmpty}> Criar  <PlusCircle /></button>
            </form>
            <div className={styles.taskArea}>
                <header className={styles.taskAreaHeader}>
                    <div>
                        <p>Tarefas Criadas</p> <span>{tasks.length}</span>
                    </div>
                    <div>
                        <p className={styles.completed}>Concluidas</p> <span>{completedTasks} de {tasks.length}</span>
                    </div>
                </header>
                <div>

                    {
                        tasks.length > 0 ? (
                            tasks.map((task) => (
                                <Item task={task} key={task.id} deleteTask={handleDeleteTask} checkTask={handleCheckTask} />
                            ))

                        ) : (
                            <Empty />
                        )
                    }
                </div>


            </div>
        </>

    );
}

export default TaskArea;
