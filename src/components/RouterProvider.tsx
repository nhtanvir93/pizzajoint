import { createBrowserRouter, Outlet, RouterProvider as ReactRouterProvider, useLocation } from "react-router-dom";
import Base from "../pages/Base";
import Topping from "../pages/Topping";
import Order from "../pages/Order";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import { AnimatePresence, motion } from "framer-motion";

function Layout() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <motion.div 
                key={location.pathname}
                initial={{ x: '100vw' }}
                animate={{ x: 0 }}
                exit={{ x: '-100vw' }}
                transition={{ duration: 0.3 }}
                style={{position: "absolute"}}
            >
                <Outlet />
            </motion.div>
        </AnimatePresence>
    )
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/base',
                element: <Base />,
            },
            {
                path: '/toppings',
                element: <Topping />,
            },
            {
                path: '/order',
                element: <Order />,
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
]);

export default function RouterProvider() {
    return <ReactRouterProvider router={router} />
}