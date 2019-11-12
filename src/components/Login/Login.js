import React from 'react';
import styles from './Login.module.css';

const Login = (props) => (
    <div className={styles.Login}>
        <form>
            <h3>Login</h3>
            <input type="text" placeholder="E-mail" name="email"/>
            <input type="password" placeholder="Password" name="password"/>
            <button type="Submit">Login</button>
            <hr/>
            <p>OR</p>
            <button id={styles.New} onClick={props.signup}>Create new Account</button>
        </form>
    </div>
);

export default Login;