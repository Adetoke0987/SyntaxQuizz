import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Help from "./pages/Help";
import LoginComponent from "./components/loginComponents/LoginComponent";
import Questions from "./pages/quiz/Questions";
import Connect from "./pages/Connect";
import Pricing from "./pages/Pricing";
import Signup from "./pages/Signup";
import UserProfile from "./pages/dashboard/userprofile/Userprofile";
import Dashboard from "./pages/dashboard/Dashboard";
import Settings from "./pages/dashboard/settings/Settings";
import Instruction from "./pages/quiz/Instruction";
import Congratulation from "./pages/quiz/Congratulation";


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
                element: <Signup />
            },
            {
                path: "*",
                element: "Page not found"
            }, 
            
            {
                path: "/question",
                element: <Questions/>
            },

            {
                path: "/instrction",
                element:<Instruction/>
            },

            {
                path:"/congratulation",
                element:<Congratulation/>
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
                    }
                ]
            }

        ]
    }
])

export default router