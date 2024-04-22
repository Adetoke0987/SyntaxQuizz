import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ColorModeProvider } from './context/ColorModeContext';
import UserContext from "./components/loginComponents/UserContext";

function App() {
  return (
    <>
      <ColorModeProvider>
        <UserContext>
          <RouterProvider router={router} />
        </UserContext>
      </ColorModeProvider>
    </>
  );
}

export default App;
