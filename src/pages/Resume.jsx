import {Label, UnorderedList, H2 } from '../components/UI';
import Pdf from '../assets/resume.pdf'
function Resume() {
    const skillsFrontEnd = [
        {
            "id": 1,
            "description": "HTML",
        },
        {
            "id": 2,
            "description": "CSS",
        },
        {
            "id": 3,
            "description": "JavaScript",
        },
        {
            "id": 4,
            "description": "JQuery",
        },
        {
            "id": 5,
            "description": "Resposive Design",
        },
        {
            "id": 6,
            "description": "React",
        },
        {
            "id": 7,
            "description": "Bootstrap",
        }
    ]

    const skillsBackEnd = [
        {
            "id": 1,
            "description": "APIs",
        },
        {
            "id": 2,
            "description": "Node",
        },
        {
            "id": 3,
            "description": "Express",
        },
        {
            "id": 4,
            "description": "MySQL, Sequelize",
        },
        {
            "id": 5,
            "description": "MongoDb, Mongoose",
        },
        {
            "id": 6,
            "description": "REST",
        },
        {
            "id": 7,
            "description": "GraphQL",
        }
    ]

    return (
        <div className="w-[90%] mx-auto">
            <Label name="Resume"/>
            {/* <h2>Download my <a href="https:www.google.com" target='_blank'>resume</a></h2> */}
            <H2 text="Download my " link={Pdf} />
            <H2 text="Front-end Proficiencies" />
            <UnorderedList list={skillsFrontEnd}/>
            <H2 text="Back-end Proficiencies" />
            <UnorderedList list={skillsFrontEnd}/>
        </div>
    );
}

export default Resume;