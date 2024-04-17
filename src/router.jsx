import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Help from "./pages/Help";
import LoginComponent from "./components/loginComponents/LoginComponent";
import Questions from "./pages/quiz/Questions";
import  Connect from "./pages/Connect";
import Pricing from "./pages/Pricing";
import UserProfile from "./pages/dashboard/userprofile/Userprofile";
import Dashboard from "./pages/dashboard/Dashboard";
import Settings from "./pages/dashboard/settings/Settings";
import Quiz from "./pages/quiz/Quiz";
<<<<<<< Updated upstream
import RegistrationComponent from "./components/loginComponents/RegistrationComponent";
=======
import Cartoon from "./pages/quiz/allCategories/Cartoon";
import Geography from "./pages/quiz/allCategories/Geography"
import Music from "./pages/quiz/allCategories/Music"
import Sport from "./pages/quiz/allCategories/Sport"
import Science from "./pages/quiz/allCategories/Science"
>>>>>>> Stashed changes


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
                        index: true,
                        element: <UserProfile/>
                    }, 
                    {
                        path: '/dashboard/settings',
                        element: <Settings/>
                    },
                    {
<<<<<<< Updated upstream
                        path: '/dashboard/quiz',
                        element : <Quiz/>
=======
                        path: './dashboard/quiz',
                        element : <Quiz/>,
                        children:[
                            {
                                path:'/dashboard/quiz/cartoon',
                                element:<Cartoon/>
                            },

                            {
                                path:'/dashboard/quiz/geography',
                                element:<Geography/>
                            },

                            {
                                path:'/dashboard/quiz/music',
                                element:<Music/>
                            },
                            {
                                path:'/dashboard/quiz/science',
                                element:<Science/>
                            },
                            {
                                path:'/dashboard/quiz/sport',
                                element:<Sport/>
                            },

                        ]
>>>>>>> Stashed changes
                    }
                ]
            }

        ]
    }
])

export default router