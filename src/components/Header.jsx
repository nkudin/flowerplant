import { Link } from "react-router-dom";
import './Header.css'

export default function Header() {

    return (
        <header className="header">
            <nav className="nav">
                <Link to="/" className="link">
                    Home
                </Link>
                <Link to="/create" className="link">
                    Create a Guide
                </Link>
                <Link to="/guides" className="link">
                    Guides
                </Link>
                <Link to="/about" className="link">
                    About
                </Link>
            </nav>
        </header>
    )
}