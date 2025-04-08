import { Check, Trash } from 'phosphor-react';
import React from 'react';

import styles from './Item.module.css'

const Item = ({task}) => {
    return (
        <div className={styles.task} >

            <div>
                <button className={styles.checkButton}> <Check size={20} /> </button>
                <p className={styles.content}>{task.content}</p>
            </div>
            <button className={styles.deleteButton}><Trash size={24} /></button>
        </div>
    );
}

export default Item;
