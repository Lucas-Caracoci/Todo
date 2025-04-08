import React, { useState } from 'react';
import styles from './TaskArea.module.css';
import { Trash } from 'phosphor-react'

const TaskArea = () => {

    const [tasks, setTasks] = useState(
        [
            {
                id: 1,
                content: 'estudaraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                isChecked: false
            },
            {
                id: 2,
                content: 'estudaraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                isChecked: false
            }
        ]);
    return (
        <div className={styles.taskArea}>
            <header className={styles.taskAreaHeader}>
                <div>
                    <p>Tarefas Criadas</p> <span>{tasks.length}</span>
                </div>
                <div>
                    <p className={styles.completed}>Concluidas</p> <span>{tasks.length}</span>
                </div>
            </header>
            <div>

                {
                    tasks.length > 0 ? (
                        tasks.map((task) => (
                            <div className={styles.task} key={task.id}>
                                <div>
                                    <input type="checkbox" name="" id="" className={styles.checkBox}/>
                                    <p className={styles.content}>{task.content}</p>
                                </div>
                                <button><Trash size={24} /></button>
                            </div>
                        ))

                    ) : (<div className={styles.emptyTaskArea}>
                        <img src="/src/assets/Clipboard.png" alt="Clipboard" />
                        <div>

                            <p><span>Você ainda não tem tarefas cadastradas</span></p>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </div>
                    </div>

                    )
                }
            </div>


        </div>
    );
}

export default TaskArea;
