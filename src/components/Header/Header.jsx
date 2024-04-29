import { Link } from "react-router-dom"

import "./Header.css"


function Header ({children}) {
    const storedUsername = localStorage.getItem("username");
    
    return (
        <header className="header">
            <Link to='/' className="header__title">Listaroo</Link>
            <div className="header__user">{storedUsername}</div>           
            {children}
        </header>
    )
}

export default Header 