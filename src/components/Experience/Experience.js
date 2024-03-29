import React,{useContext} from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Experience.css';

import { experienceData } from '../../data/experienceData'
import { experienceImage } from '../../data/experienceData'
import ExperienceCard from './ExperienceCard';

function Experience() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="experience" id="experience" style={{backgroundColor: theme.secondary}}> 
             <div className="experience-body">
                 <div className="experience-image">
                     <img src={experienceImage.image} alt="" />
                 </div>
                 <div className="experience-description">
                    <h1 style={{color:theme.primary}}>Work Experience</h1>
                    {experienceData.map(exp =>(
                        <ExperienceCard 
                            key={exp.id}
                            id={exp.id}
                            jobtitle={exp.jobtitle}
                            company={exp.company}
                            startYear={exp.startYear}
                            endYear={exp.endYear}
                            icon={exp.icon}
                            desc={exp.desc}
                            link={exp.link}/>
                    ))}
                 </div>
             </div>
        </div>
    )
}

export default Experience
