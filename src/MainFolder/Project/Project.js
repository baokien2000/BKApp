import React, { useContext, useState } from 'react';
import { AppContext } from '../../Context/AppContext';
import ProjectBar from './ProjectBar';
import ProjectContainer from './ProjectContainer';
import Underline from "../../Image/Underline.png"

const Project = ({ forwardedRef }) => {
    const [CurrentProject, SetCurrentProject] = useState('WeatherApp');
    const { Language, myData } = useContext(AppContext);

    return (
        <div className="Project" id='ProjectID' ref={forwardedRef}>
            <div className='Header'>
                <h1>{myData["BK"][Language]["Project"].toUpperCase()}</h1>
                <img src={Underline} />
            </div>
            <div className='Container'>
                <ProjectBar CurrentProject={CurrentProject} SetCurrentProject={SetCurrentProject} />
                <ProjectContainer CurrentProject={CurrentProject} />
            </div>
        </div >
    );
}

export default Project;
