import "./App.scss";
import { useEffect, useState } from "react";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  // Funzione che cambia il tema chiaro/scuro in base a quello impostato dal dispositivo
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark")
    setIsDarkMode(darkModeQuery.matches)

    const handleThemeChange = (event) => {
      setIsDarkMode(event.matches)
    }

    darkModeQuery.addEventListener("change", handleThemeChange)
    return () => {
      darkModeQuery.removeEventListener("change", handleThemeChange)
    }
  }, [])

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
