//Import UI component
import Navigation from './UI/Navigation';

function Header() {
    const items = [
        {
            description: "About Me",
            url: "/about"
        },
        {
            description: "Portfolio",
            url: "/portfolio"
        },
        {
            description: "Contact",
            url: "/contact"
        },
        {
            description: "Resume",
            url: "/resume"
        },
    ]

    return (
        <nav className="flex justify-between items-center bg-blue-700/90 h-32 px-8">
            <h1 className="text-white text-4xl font-bold w-3/12 text-center font-mono">Jean Piere</h1>
            <div className="w-9/12 flex items-center justify-around font-bold">
                {items.map((item) => (
                    <Navigation name={item.description} to={item.url} />
                ))}
            </div>
            
        </nav>
    );
}

export default Header;