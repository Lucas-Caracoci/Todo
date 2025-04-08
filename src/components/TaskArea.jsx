import React, { useState } from 'react';
import styles from './TaskArea.module.css';

import Item from './Item';
import Empty from './Empty';

const TaskArea = ({tasks, setTasks}) => {

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
                            <Item task={task} key={task.id} />
                        ))

                    ) : (
                        <Empty/>
                    )
                }
            </div>


        </div>
    );
}

export default TaskArea;
