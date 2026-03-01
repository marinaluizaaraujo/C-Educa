import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Erro404 } from "./pages/Erro404";
import { Home } from "./pages/Home";
const router = createBrowserRouter([
    {
        path:"/",
        errorElement: <Erro404/>,
        children:[
            {
                path: '/',
                element: <Home/>
            }
        ]
    }
    ])

export function Router(){
    return(
        <RouterProvider router={router}/>
    )
}