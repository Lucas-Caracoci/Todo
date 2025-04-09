import { Check, Trash } from 'phosphor-react';
import React from 'react';

import styles from './Item.module.css'

const Item = ({task, deleteTask, checkTask}) => {
    return (
        <div className={`${styles.task} ${task.isChecked ? styles.checked : styles.none}`} >

            <div>
                <button onClick={() => checkTask(task.id)} className={styles.checkButton}> <Check size={20} /> </button>
                <p className={styles.content}>{task.content}</p>
            </div>
            <button className={styles.deleteButton}><Trash size={24}  onClick={() => deleteTask(task.id)}/></button>
        </div>
    );
}

export default Item;
