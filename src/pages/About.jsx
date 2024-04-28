import {Label, Image, Paragraph } from '../components/UI';
import data from '../utils/data.json'

function About() {
    
    return (
        <div className="w-[90%] mx-auto">
            <Label name="About me"/>
            <Image />
            <Paragraph description={data.information[0].description}/>
            <Paragraph description={data.information[1].description}/>
        </div>
    );
}

export default About;