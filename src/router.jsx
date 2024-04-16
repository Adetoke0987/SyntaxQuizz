import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Help from "./pages/Help";
import LoginComponent from "./components/loginComponents/LoginComponent";
import Connect from "./pages/Connect";
import Pricing from "./pages/Pricing";
import Signup from "./pages/Signup";
import Dashboard from "./pages/dashboard/Dashboard";


const router = createBrowserRouter ([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: "true",
                element: <Home />
            },
            {
                path: "/connect",
                element: <Connect />
            },
            {
                path: "/pricing",
                element: <Pricing/>
            },
            {
                path: "/help",
                element: <Help/>
            },
            {
                path: "/login",
                element: <LoginComponent/>
            },
            {
                path: "/signup",
                element: <Signup />
            },
            {
                path: "*",
                element: "Page not found"
            }, 
            {
                path: "/dashboard",
                element: <Dashboard/>
            }

        ]
    }
])

export default router