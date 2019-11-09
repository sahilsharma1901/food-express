import React from 'react';

import styles from './ShopCard.module.css';

const ShopCard = (props) => {
    return (
        <div className={styles.Shopcard}>
            <img alt="Shop" src={props.image} className={styles.Image}></img>
            <div className={styles.MainContent}>
                <div className={styles.Name}>{props.name}</div>
                <div className={styles.About}>{props.about}</div>
                <div className={styles.Address}>{props.address}</div>
            </div>
            <div className={styles.Rating}>{props.rating}/5</div>
        </div>
    );
}

export default ShopCard;