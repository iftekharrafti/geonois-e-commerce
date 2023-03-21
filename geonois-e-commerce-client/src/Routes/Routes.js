import { createBrowserRouter } from "react-router-dom";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import Main from "../Layout/Main";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";

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
                path: '/productDetails/:productId',
                element: <ProductDetails />
            },
        ]
    }
])

export default router;