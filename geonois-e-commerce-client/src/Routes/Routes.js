import { createBrowserRouter } from "react-router-dom";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import Main from "../Layout/Main";
import Contact from "../Pages/Contact/Contact";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import Shop from "../Pages/Dashboard/Shop/Shop";
import FashionItem from "../Pages/FashionItem/FashionItem";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Sports from "../Pages/Sports/Sports";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/products',
                element: <Products />
            },
            {
                path: '/mens/cloth',
                element: <FashionItem />
            },
            {
                path: '/mens/shoes',
                element: <FashionItem />
            },
            {
                path: '/mens/bags',
                element: <FashionItem />
            },
            {
                path: '/watch/mens',
                element: <FashionItem />
            },
            {
                path: '/watch/womens',
                element: <FashionItem />
            },
            {
                path: '/electronics/smartphone',
                element: <FashionItem />
            },
            {
                path: '/electronics/laptop',
                element: <FashionItem />
            },
            {
                path: '/electronics/camera',
                element: <FashionItem />
            },
            {
                path: '/sports',
                element: <Sports />
            },
            {
                path: '/productDetails/:productId',
                element: <ProductDetails />
            },
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard',
                element: <Shop />
            }
        ] 
    }
])

export default router;