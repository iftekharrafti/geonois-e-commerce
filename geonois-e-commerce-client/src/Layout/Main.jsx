import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import CategoryNavbar from '../Shared/Navbar/CategoryNavbar';
import TopNavbar from '../Shared/Navbar/TopNavbar';

const Main = () => {
    return (
        <div>
            <TopNavbar />
            <CategoryNavbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;