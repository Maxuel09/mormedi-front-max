import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Login from "../components/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children:[
            {
                path: "/",
                element: <Root />
            },

            {
                path: "/login",
                element: <Login />
            }
        ]
    }
])