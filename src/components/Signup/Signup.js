import React from 'react';
import styles from './Signup.module.css';

const Signup = () => (
    <div className={styles.Signup}>
        <form>
            <h3>Create an Account</h3>
            <input className={styles.Names} type="text" placeholder="First Name" name="text"/>
            <input className={styles.Names} type="text" placeholder="Last Name" name="text"/>
            <input type="text" placeholder="E-mail" name="email"/>
            <input type="password" placeholder="Password" name="password"/>
            <button type="Submit">Signup</button>
        </form>
    </div>
);

export default Signup;