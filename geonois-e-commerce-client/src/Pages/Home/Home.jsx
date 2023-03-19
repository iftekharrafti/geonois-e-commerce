import React from 'react';
import Banner from './Banner/Banner';
import Brands from './Brands/Brands';
import Categories from './Categories/Categories';
import PopularProducts from './PopularProducts/PopularProducts';
import Quality from './Quality/Quality';

const Home = () => {
    return (
        <div className='background_color'>
            <Banner />
            <Categories />
            <PopularProducts />
            <Quality />
            <Brands />
        </div>
    );
};

export default Home;