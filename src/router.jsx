import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Help from "./pages/Help";
import Regristraton from "./components/loginComponents/RegistrationComponent";
import Questions from "./pages/quiz/Questions";
import Api from './pages/Api'
import Pricing from "./pages/Pricing";
import LoginComponent from "./components/loginComponents/LoginComponent";
import UserProfile from "./pages/dashboard/userprofile/Userprofile";
import Dashboard from "./pages/dashboard/Dashboard";
import Api from "./pages/Api";


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
                path: "/api",
                element: <Api/>
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
                element: <Regristraton />
            },
            {
                path: "*",
                element: "Page not found"
            }, 
            
            {
                path: "/quiz",
                element: <Questions/>
            },
            {
                path: "/dashboard",
                element: <Dashboard/>,
                children: [
                    {
                        path: '/dashboard/user',
                        element: <UserProfile/>
                    }
                ]
            }

        ]
    }
])

export default router