function AnchorCard( {url, img, text, name}) {
    return (
        <div className='w-[70%] mx-auto m-4 flex items-center text-bold'>
            <a className='text-blue-950 font-semibold font- opacity-70 hover:opacity-100 text-4xl' href={url} target="_blank">{name}</a> 
            <a className="px-3 opacity-70 fill-blue-950 " href={url} target="_blank"><img src={img} alt={text} /></a>
        </div>
        
    );
}

export default AnchorCard;