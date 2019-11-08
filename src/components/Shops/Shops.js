import React from 'react';
import Header from '../HomePage/Header/Header';
import Footer from '../HomePage/Footer/Footer';

import styles from './Shops.module.css';

const Shops = () => {
    return (
        <div>
            <Header />
            <div className={styles.Shoplist}>
                hello, shops will go here.
            </div>
            <Footer />
        </div>
    );
}

export default Shops;