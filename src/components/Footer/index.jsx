import { Link } from "react-router-dom"
import "./Footer.css"
import { Icon } from "@iconify/react"

function Footer () {
    return (
        <>
        <footer className="footer">
            <Link to="https://github.com/felicio-almd"
            target="_blank"
            className="footer__git">
                <Icon icon="mdi:github" width="32" height="32"/>
                <p>github</p>
            </Link>
            
            <Link to="https://www.instagram.com/felicio.almd/"
            className="footer__copy">
                ©2023 felicio.almd
            </Link>
            </footer>
        </>
    )
}

export default Footer