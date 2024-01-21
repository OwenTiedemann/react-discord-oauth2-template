import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "../components/Login";
import { Home } from "../components/Home";

const routes = createBrowserRouter([
    {
        path: '/',
        Component: Home
    },
    {
        path: '/login',
        Component: Login,
    }
])

export const AppRouter = () => {
    return (
        <RouterProvider router={routes}/>
    )
}