import React from 'react';
import {NavLink} from 'react-router-dom';

import styles from './Footer.module.css';

const Footer = () => (
    <div className={styles.Footer}>
        <footer>
            <ul>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
                <li><NavLink to="/policy">Privacy Policy</NavLink></li>
            </ul>
            <div>
                &copy; Copyright 2019
            </div>
        </footer>
    </div>
);

export default Footer;