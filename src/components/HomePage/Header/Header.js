import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => (
    <div className={styles.Header}>
        <header>
            <NavLink className={styles.Logo} to="/">FoodExpress</NavLink>
            <nav className={styles.DesktopOnly}>
                <NavLink to="/signup" className={styles.Signup}>Create an Account</NavLink>
                <NavLink to="/login" className={styles.Login}>Login</NavLink>
            </nav>
        </header>
    </div>
);

export default Header;
