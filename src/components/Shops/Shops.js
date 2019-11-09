import React from 'react';
import Header from '../HomePage/Header/Header';
import Footer from '../HomePage/Footer/Footer';
import ShopCard from './ShopCard/ShopCard';
import styles from './Shops.module.css';
import data from './ShopList.json';

const handleClick = () => (
    <div></div>
);

const ShopsGoesHere = () => (
    data.map((shop) =>
        <ShopCard
            name={shop.name}
            about={shop.about}
            image={shop.url}
            rating={shop.rating}
            address={shop.address}
            onClick={handleClick} />
    )
);

const Shops = () => {
    return (
        <div>
            <Header />
            <div className={styles.Shoplist}>
                <ShopsGoesHere />
            </div>
            <Footer />
        </div>
    );
}

export default Shops;