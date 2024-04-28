//Import UI component
import Navigation from './UI/Navigation';

function Header() {
    const items = [
        {
            id: 1,
            description: "About Me",
            url: "/about"
        },
        {
            id: 2,
            description: "Portfolio",
            url: "/portfolio"
        },
        {
            id: 3,
            description: "Contact",
            url: "/contact"
        },
        {
            id: 4,
            description: "Resume",
            url: "/resume"
        },
    ]

    return (
        <nav className="flex justify-between items-center bg-blue-700/90 h-32 px-8">
            <h1 className="text-white text-4xl font-bold w-3/12 text-center font-mono">Jean Piere</h1>
            <ul className="w-9/12 flex items-center justify-around font-bold">
                {items.map((item) => (
                    <Navigation key={item.id} name={item.description} url={item.url} />
                ))}
            </ul>
            
        </nav>
    );
}

export default Header;