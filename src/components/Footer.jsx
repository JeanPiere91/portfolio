import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import stackoverflow from '../assets/stackoverflow.png';
import Anchor from './UI/Anchor';

function Footer() {
    return (
        <div className="h-10 mt-12 mb-4 px-8 flex justify-center items-center">
            <Anchor url="https://github.com/JeanPiere91" img={github} text="GitHub" />
            <Anchor url="https://www.linkedin.com/in/jean-piere-bellota-mendoza-38b297b4/" img={linkedin} text="LinkedIn" />
            <Anchor url="https://stackoverflow.com/" img={stackoverflow} text="Stack Overflow" />
        </div>
    );
}

export default Footer;