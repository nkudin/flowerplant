import { Link } from "react-router-dom";

export default function Header() {

    return (
        <header>
            <nav>
                <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/create">Create a Guide</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/guides">Guides</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/about">About</Link>
            </nav>
        </header>
    )
}