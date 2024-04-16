import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout"
import Layout from "./layouts/Layout";
import Login from "./views/Login";
import SignUp from "./views/SignUp"

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
    }
])

export default router