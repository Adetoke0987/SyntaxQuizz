import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Help from "./pages/Help";
import LoginComponent from "./components/loginComponents/LoginComponent";
import Questions from "./pages/quiz/Questions";
import UserProfile from "./pages/dashboard/userprofile/Userprofile";
import Dashboard from "./pages/dashboard/Dashboard";
import Settings from "./pages/dashboard/settings/Settings";
import Sets from "./pages/dashboard/settings/Sets";
import Records from "./pages/dashboard/records/Records";
import NotificationSetting from "./pages/dashboard/settings/NotificationSettings";
import QuizSetting from "./pages/dashboard/settings/QuizSetting";
import Quiz from "./pages/quiz/Quiz";
import RegistrationComponent from "./components/loginComponents/RegistrationComponent";
import Congratulation from "./pages/quiz/Congratulation";
import AccountingApi from "./pages/quiz/allCategories/entryLevel/acct/AccountingApi";
import BusAdminApi from "./pages/quiz/allCategories/entryLevel/bizAdmin/BusAdminApi";
import HumanRApi from "./pages/quiz/allCategories/entryLevel/hr/HumanRApi";
import IctApi from "./pages/quiz/allCategories/entryLevel/ict/IctApi";
import LogicApi from "./pages/quiz/allCategories/entryLevel/logic/LogicApi";
import MarketApi from "./pages/quiz/allCategories/entryLevel/mrkt/MarketApi";
import ProjectApi from "./pages/quiz/allCategories/entryLevel/project/ProjectApi";
import AccountApiPL from "./pages/quiz/allCategories/professional/acct/AccountApiPL";
import BusAdminApiPL from "./pages/quiz/allCategories/professional/bizAdmin/BusAdminApiPL";
import HumanRApiPF from "./pages/quiz/allCategories/professional/hr/HumanRApiPF";
import IctApiPF from "./pages/quiz/allCategories/professional/ict/IctApiPF";
import LogicApiPF from "./pages/quiz/allCategories/professional/logic/LogicApiPF";
import MarketApiPF from "./pages/quiz/allCategories/professional/mrkt/MarketApiPF";
import ProjectApiPF from "./pages/quiz/allCategories/professional/project/ProjectApiPF";


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
                path: "/questions",
                element: <Questions/>
            },

            {
                path:"/dashboard/quiz/accountingET",
                element: <AccountingApi/>
            },
            {
                path:"/dashboard/quiz/busAdminET",
                element : <BusAdminApi/>
            },
            {
                path:"/dashboard/quiz/hrET",
                element:<HumanRApi/>
            },
            {
                path:"/dashboard/quiz/ictET",
                element:<IctApi/>
            },
            {
                path:"/dashboard/quiz/logicET",
                element:<LogicApi/>
            },
            {
                path:"/dashboard/quiz/marktET",
                element:<MarketApi/>
            },
            {
                path:"/dashboard/quiz/projectET",
                element:<ProjectApi/>
            },
            {
                path:"/dashboard/quiz/accountingPF",
                element:<AccountApiPL/>
            },
            {
                path:"/dashboard/quiz/busAdminPF",
                element:<BusAdminApiPL/>
            },
            {
                path:"/dashboard/quiz/hrPF",
                element:<HumanRApiPF/>
            },
            {
                path:"/dashboard/quiz/ictPF",
                element:<IctApiPF/>
            },
            {
                path:"/dashboard/quiz/logicPF",
                element:<LogicApiPF/>
            },
            {
                path:"/dashboard/quiz/marktPF",
                element:<MarketApiPF/>
            },
            {
                path:"/dashboard/quiz/projectPF",
                element:<ProjectApiPF/>
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
                        element: <Sets/>,
                        children:[
                            {
                                index: true,
                                element: <Settings/>
                            },
                            {
                                path: '/dashboard/settings/notification',
                                element: <NotificationSetting/>
                            },
                            {
                                path: '/dashboard/settings/quizset',
                                element: <QuizSetting/>
                            }
                        ]
                    },
                    {
                        path: '/dashboard/quiz',
                        element : <Quiz/>,
                    },
                    {
                        path: '/dashboard/records',
                        element: <Records/>
                    },
                    {
                        path: "/dashboard/congratulation",
                        element: <Congratulation/>
                    }
                ]
            }

        ]
    }
])

export default router