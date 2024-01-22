import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CineContextProvider } from "./context/CineContext";
import { ThemeContextProvider } from "./context/ThemeContext";
import CinePage from "./pages/CinePage";

function App() {
  return (
    <CineContextProvider>
      <ThemeContextProvider>
        <CinePage />
        <ToastContainer />
      </ThemeContextProvider>
    </CineContextProvider>
  );
}

export default App;
