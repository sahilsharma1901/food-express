import React from 'react';

import styles from './Header.module.css';

const Header = () => (
    <div className={styles.Header}>
        <header>
            <a href="/">FoodExpress</a>
            <button>Create an Account</button>
            <button>Login</button>
        </header>
    </div>
);

export default Header;
