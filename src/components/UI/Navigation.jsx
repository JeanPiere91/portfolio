import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <ul>
            <li>
                <Link to="/">Jean Piere</Link>
            </li>
            <li>
                <Link to="/about">About Me</Link>
            </li>
            <li>
                <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/resume">Resume</Link>
            </li>
        </ul>
    );
}

export default Navigation;