import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import BestOffer from './BestOffer/BestOffer';
import Brands from './Brands/Brands';
import Categories from './Categories/Categories';
import PopularProducts from './PopularProducts/PopularProducts';
import Quality from './Quality/Quality';
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../../features/products/productsSlice';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(fetchProducts())
    }, [dispatch])
    
    return (
        <div className='background_color'>
            <Banner />
            <Categories />
            <BestOffer />
            <PopularProducts />
            <Quality />
            <Brands />
        </div>
    );
};

export default Home;