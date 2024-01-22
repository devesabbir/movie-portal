import { CineContextProvider } from "./context/CineContext";
import { ThemeContextProvider } from "./context/ThemeContext";
import CinePage from "./pages/CinePage";

function App() {
  return (
    <CineContextProvider>
      <ThemeContextProvider>
        <CinePage />
      </ThemeContextProvider>
    </CineContextProvider>
  );
}

export default App;
