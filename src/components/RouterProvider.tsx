import { createBrowserRouter, RouterProvider as ReactRouterProvider } from "react-router-dom";
import Base from "../pages/Base";
import Topping from "../pages/Topping";
import Order from "../pages/Order";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
    {
        path: '/',
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
]);

export default function RouterProvider() {
    return <ReactRouterProvider router={router} />
}