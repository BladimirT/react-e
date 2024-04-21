import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout"
import Layout from "./layouts/Layout";
import Login from "./views/Login";
import SignUp from "./views/SignUp"
import StoreLayout from "./layouts/StoreLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: '/auth/login',
                element: <Login />
            },
            {
                path: '/auth/sign-up',
                element: <SignUp />
            }
        ]
    },
    {
        path: '/store',
        element: <Layout />,
        children: [
            {
                path: '/store',
                element: <StoreLayout />
            }
        ]
    }
])

export default router