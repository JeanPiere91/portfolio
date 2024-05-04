import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Navigation() {
    const currentPage = useLocation().pathname;
    let navigate = useNavigate();
    
    useEffect(() => {
        if (currentPage === '/'){
           return navigate("/about");
        }
     },[]);
    
    return (
        <ul className="w-9/12 flex items-center justify-around font-bold">
            <li >
                <Link
                    to="/about"
                    // This is a conditional (ternary) operator that checks to see if the current page is "about"
                    className={currentPage === '/about' ? 'text-blue-950 text-2xl font-mono' : 'text-white text-2xl font-mono'}
                    >
                    About Me
                </Link>
            </li>
            <li>
                <Link
                    to="/portfolio"
                    // This is a conditional (ternary) operator that checks to see if the current page is "portfolio"
                    className={currentPage === '/portfolio' ? 'text-blue-950 text-2xl font-mono' : 'text-white text-2xl font-mono'}
                    >
                    Portfolio
                </Link>
            </li>  
            <li>
                <Link
                    to="/contact"
                    // This is a conditional (ternary) operator that checks to see if the current page is "contact"
                    className={currentPage === '/contact' ? 'text-blue-950 text-2xl font-mono' : 'text-white text-2xl font-mono'}
                    >
                    Contact
                </Link>
            </li>  
            <li>
                <Link
                    to="/resume"
                    // This is a conditional (ternary) operator that checks to see if the current page is "resume"
                    className={currentPage === '/resume' ? 'text-blue-950 text-2xl font-mono' : 'text-white text-2xl font-mono'}
                    >
                    Resume
                </Link>
            </li>  
        </ul>
    );
}

export default Navigation;