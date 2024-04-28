import { Link } from 'react-router-dom';

function Navigation( { name, url}) {
    return (
        <Link className="text-white text-xl font-mono" to={url}>
            {name}
        </Link>
    );
}

export default Navigation;