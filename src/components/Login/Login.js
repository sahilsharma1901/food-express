import React from 'react';
import styles from './Login.module.css';

const Login = () => (
    <div className={styles.Login}>
        <h3>Login</h3>
        <form>
            <input type="text" placeholder="Your E-mail" name="email"/>
            <input type="password" placeholder="password" name="password"/>
            <button type="submit">Login</button>
        </form>
    </div>
);

export default Login;