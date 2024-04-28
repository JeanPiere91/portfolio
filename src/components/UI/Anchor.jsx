function Anchor( {url, img, text}) {
    return (
        <a className="px-3" href={url} target="_blank"><img src={img} alt={text} /></a>
    );
}

export default Anchor;