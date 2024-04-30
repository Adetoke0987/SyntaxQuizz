<<<<<<< HEAD
import { RouterProvider } from "react-router-dom";
import router from "./router";
// import { ColorModeProvider } from './context/ColorModeContext';
import UserContext from "./components/loginComponents/UserContext";
import './App.css'

function App() {
  return (
    <>
      {/* <ColorModeProvider> */}
        <UserContext>
          <RouterProvider router={router} />
        </UserContext>
      {/* </ColorModeProvider> */}
    </>
  );
}

export default App;
=======
import { RouterProvider } from "react-router-dom";
import router from "./router";
// import { ColorModeProvider } from './context/ColorModeContext';
import UserContext from "./components/loginComponents/UserContext";
import './App.css'

function App() {
  return (
    <>
      {/* <ColorModeProvider> */}
        <UserContext>
          <RouterProvider router={router} />
        </UserContext>
      {/* </ColorModeProvider> */}
    </>
  );
}

export default App;
>>>>>>> parent of f341fdb (update)
