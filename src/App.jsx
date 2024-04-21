import { RouterProvider } from "react-router-dom";
import router from "./router";
import {ThemeProvider} from './context/ThemeContext'
import UserContext from "./components/loginComponents/UserContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <UserContext>
          <RouterProvider router={router} />
        </UserContext>
      </ThemeProvider>
    </>
  );
}

export default App;
