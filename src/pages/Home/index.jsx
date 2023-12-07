import "./Home.css"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Toggle } from "../../components/Toggle"
import { createContext, useEffect, useState } from "react"
import TaskCard from "../../components/TaskCard"


export const ThemeContext = createContext(null);

function Home () {
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
            <div id={theme} className="body"> 
            <Header>
                <Toggle
                    toggled={theme === 'dark'} // Atualizado para verificar o tema atual

                    toggleTheme={toggleTheme}
                />   
            </Header> 
            <section className='container' >
                <TaskCard />
            </section>           
            <Footer /> 
            </div>
        </ThemeContext.Provider>
    )
}

export default Home