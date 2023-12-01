import "./Home.css"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import TaskCard from "../../components/TaskCard"
import { Toggle } from "../../components/Toggle"
import { createContext, useState } from "react"


export const ThemeContext = createContext(null);

function Home () {
    const[theme, setTheme] = useState("light");
    

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"))
    } 
    
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