import { RouterProvider } from "react-router-dom"
import router from "./router"
import UserContext from "./components/loginComponents/UserContext"

function App() {


  return (
    <>
    <UserContext>
       <RouterProvider router={router}/>
    </UserContext>
    
      
    </>
  )
}

export default App
