import React from 'react';

import styles from './Empty.module.css'

const Empty = () => {
    return (
        <div className={styles.emptyTaskArea}>
            <img src="/src/assets/Clipboard.png" alt="Clipboard" />
            <div>

                <p><span>Você ainda não tem tarefas cadastradas</span></p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    );
}

export default Empty;
