import { Link } from 'react-router-dom';

function Navigation({ name, to }) {
    return (
        <Link to={to} className="text-white text-xl font-mono">
            {name}
        </Link>
    );
}

export default Navigation;