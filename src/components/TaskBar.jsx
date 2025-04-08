import React from 'react';
import styles from './TaskBar.module.css';
import {PlusCircle} from 'phosphor-react'

const TaskBar = () => {
    return (
        <form  className={styles.taskBarContainer}>
            <input type="text" placeholder='Adicione uma nova tarefa' className={styles.taskBar}/>
            <button>Criar  <PlusCircle/></button>   
        </form>
    );
}

export default TaskBar;
