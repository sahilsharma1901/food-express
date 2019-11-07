import React from 'react';
import styles from "./ContactUs.module.css";

const ContactUs = () => {
    return(
        <div className={styles.Parent}>
            <h1 className={styles.Info}>Contact Information</h1>
            <div className={styles.Persons}>
                <div className={styles.Person}>
                    <h2 className={styles.Name}>Manish Attri</h2>
                    <p className={styles.Number}>Mobile No.</p>
                </div>
                <div className={styles.Person}>
                    <h2 className={styles.Name}>Sahil Sharma</h2>
                    <p className={styles.Number}>Mobile No.</p>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;