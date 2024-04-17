import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Help from "./pages/Help";
import LoginComponent from "./components/loginComponents/LoginComponent";
import Questions from "./pages/quiz/Questions";
import  Connect from "./pages/Connect";
import Pricing from "./pages/Pricing";
import Signup from "./pages/Signup";
import UserProfile from "./pages/dashboard/userprofile/Userprofile";
import Dashboard from "./pages/dashboard/Dashboard";
import Settings from "./pages/dashboard/settings/Settings";
import Quiz from "./pages/quiz/Quiz";
import RegistrationComponent from "./components/loginComponents/RegistrationComponent";


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
                element: <Connect/>
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
                element: <RegistrationComponent />
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
                    }, 
                    {
                        path: '/dashboard/settings',
                        element: <Settings/>
                    },
                    {
                        path: './dashboard/quiz',
                        element : <Quiz/>
                    }
                ]
            }

        ]
    }
])

export default router