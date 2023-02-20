import React, { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import Underline from "../../Image/Underline.png"
import ProgressBar from 'react-bootstrap/ProgressBar';

const Skill = ({ forwardedRef }) => {
    const { Language, myData } = useContext(AppContext);

    const SkillName = [
        ['HTML', 85], ['CSS/SCSS', 82],
        ['JavaScript', 75], ['ReactJS', 70],
        ['Jquery', 65], ['PHP', 60],
        ['SQL', 60], ['GitHub', 65],
        ['Java', 65], ['English', 70],
    ]
    return (
        <div className='Page_Skill' id="SkillID" ref={forwardedRef}>
            <div className="Header">
                <h1>{myData["BK"][Language]["Skill"]}</h1>
                <img src={Underline} />
            </div>
            <div className='Container'>
                {SkillName.map((skill, index) => {
                    return <div className='ProgressSkill' key={index}>
                        <p className='ProgressSkill_Title'>{skill[0]}</p>
                        <p className='ProgressSkill_Percent'>{skill[1]}%</p>
                        <ProgressBar now={skill[1]} />
                    </div>
                })}

            </div>
        </div>
    );
}

export default Skill;
