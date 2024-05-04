import AnchorCard from './AnchorCard'
import github from '../../assets/github.png'

function Card( {url, path, name, stack}) {
    return (
        <div className="h-64 shadow-2xl relative group">
            <div className="w-full h-full absolute inset-0 z-10 group-hover:z-30 border-[6px] border-blue-950 text-white transition duration-1000">
                <AnchorCard url={url} img={github} text="GitHub" name={name} />
                <h1 className='w-[70%] mx-auto text-lg font-bold tracking-wider font-mono text-blue-950'>{stack}</h1> 
            </div>
            <img src={path} className="rounded-md w-full h-full object-cover relative z-20 group-hover:opacity-50  transition duration-400"></img>
        </div>
    );
}

export default Card;