import { Link } from "react-router-dom"

import "./Header.css"


function Header ({children}) {
    
    return (
        <header className="header">
            <Link className="header__title">Listaroo</Link>           
            {children}
        </header>
    )
}

export default Header 