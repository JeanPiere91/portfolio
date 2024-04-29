import {Label, Card } from '../components/UI';
import project0 from '../assets/project-0.jpg';
import project1 from '../assets/project-1.jpg';
import project2 from '../assets/project-2.jpg';
import project3 from '../assets/project-3.jpg';
import project4 from '../assets/project-4.jpg';
import project5 from '../assets/project-5.jpg';

function Portfolio() {
    
    return (
        <div className="w-[90%] mx-auto">
            <Label name="Portfolio"/>
            <div className='mt-4 w-[90%] mx-auto grid grid-cols-2 gap-8'>
                <Card path={project0} url="https://github.com/JeanPiere91/portfolio" name="Portfolio" stack="MERN Stack"/>
                <Card path={project1} url="https://github.com/JeanPiere91/text-editor" name="Text Editor" stack="Progressive Web Application"/>
                <Card path={project2} url="https://github.com/JeanPiere91/social-media-backend" name="Social Media" stack="Express, MongoDB, JavaScript, NodeJs, WebPack"/>
                <Card path={project3} url="https://github.com/JeanPiere91/tech-blog" name="TECH Blog" stack="JavaScript, HandleBars, CSS"/>
                <Card path={project4} url="https://github.com/JeanPiere91/ecommerce-backend" name="Ecommerce" stack="Express, MySQl, Sequelize"/>
                <Card path={project5} url="https://github.com/JeanPiere91/employee-tracker" name="Employee Tracker" stack="NodeJs, Inquirer, MySQL"/>
            </div>
            
        </div>
    );
}

export default Portfolio;