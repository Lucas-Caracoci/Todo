import rocket from '../assets/rocket.png'

import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={rocket} alt="logo foguete" />

            <p className={styles.title}> <span >to</span>do</p>
        </header>
    );
}

export default Header;
