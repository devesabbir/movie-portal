import MainLayout from "./components/CinemaPortal/MainLayout/MainLayout";
import Navbar from "./components/Navbar/Navbar";
import { CineContextProvider } from "./context/CineContext";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <CineContextProvider>
      <Navbar />
      <MainLayout />
      <Footer />
    </CineContextProvider>
  );
}

export default App;
