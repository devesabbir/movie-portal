import MainLayout from "../components/CinemaPortal/MainLayout/MainLayout";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { useTheme } from "../context/ThemeContext";

export default function CinePage() {
  const { darkMode } = useTheme();
  return (
    <div className={darkMode ? "dark" : ""}>
      <Navbar />
      <MainLayout />
      <Footer />
    </div>
  );
}
