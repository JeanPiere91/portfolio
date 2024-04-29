function Anchor( {url, img, text}) {
    return (
        <a className="px-3 opacity-60 hover:opacity-100" href={url} target="_blank"><img src={img} alt={text} /></a>
    );
}

export default Anchor;