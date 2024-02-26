import "./Home.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Toggle } from "../../components/Toggle/Toggle";
import { createContext, useEffect, useState } from "react";
import TodoWrapper from "../../components/Tasks/TodoWrapper";

export const ThemeContext = createContext(null);

function Home() {
  const storedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(storedTheme);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme} className="home__body">
        <Header>
          <Toggle
            toggled={theme === "dark"} // Atualizado para verificar o tema atual
            toggleTheme={toggleTheme}
          />
        </Header>      
        <TodoWrapper />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default Home;
