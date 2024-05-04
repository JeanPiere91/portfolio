function H2( {text, link}) {
    return (
        link ? (<h2 className="px-8 py-1 text-blue-900 indent-8 text-justify font-normal text-lg tracking-wider">{text}<a href={link} className="font-medium tracking-widest hover:underline" target="_blank">resume</a></h2>) :
        (<h2 className="px-8 py-1 text-blue-900 indent-8 text-justify font-normal text-lg tracking-wider">{text}</h2>)
    );
}

export default H2;