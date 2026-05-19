import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Erro404 } from "./pages/Erro404";
import Login from "./pages/Login";
import Home from "./pages/Home";
const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Erro404 />,
        children: [
            {
                path: '/',
                element: <Login />
            },
            {
                path: '/home',
                element: <Home />
            }
        ]
    }
])

export function Router() {
    return (
        <RouterProvider router={router} />
    )
}