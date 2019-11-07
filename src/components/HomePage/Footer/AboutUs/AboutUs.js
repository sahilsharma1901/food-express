import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs = () => {
    return(
        <div className={styles.Parent}>
            <h1 className={styles.About}>About Us</h1>
            <h2 className={styles.Title}>Our Mission</h2>
            <p className={styles.Mission}>To deliver best quality food at your doorstep.</p>
            <h2 className={styles.Title}>Our Team</h2>
            <p className={styles.Team}>Manish Attri<br /> 
               thoda sa description
            </p>
            <p className={styles.Team}>Sahil Sharma<br /> 
               thoda sa description</p>
        </div>
    );
}

export default AboutUs;

