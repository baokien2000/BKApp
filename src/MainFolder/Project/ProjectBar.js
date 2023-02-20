import React, { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";

const ProjectBar = ({ CurrentProject, SetCurrentProject }) => {
    const [Active, SetActive] = useState("#1e9bff");
    const [SideBarActive, SetSideBarActive] = useState(true);

    const ActiveProject = {
        background: Active
    }
    const ColorList = ["#1e9bff", "#ff1867", "#6eff3e", "#ddff19"]
    const ProjectName = [
        ['WeatherApp', "able"],
        ['Shoes Store', "able"],
        ['MusicApp (Admin)', "able"],
        ['CaroApp', "able"],
        ['TodoApp', "able"],
        ['RealTimeClock', "able"],
        ['ColorfulGlowingLiquid', "able"],
        ['RealTimeChat', "disable"],

    ]
    const SideBarStyle = {
        TitleOpen: {
            transform: 'translateX(0%)', // new property - will move the element off the left hand side of the screen
            transition: 'transform 1s ease-in-out'
        },
        TitleClose: {
            transform: 'translateX(-100%)', // new property - will move the element off the left hand side of the screen
            transition: 'transform 1s ease-in-out',
        },
        ItemOpen: {
            transform: 'translateX(0%)', // new property - will move the element off the left hand side of the screen
            transition: 'transform 1s ease-in-out'
        },
        ItemClose: {
            transform: 'translateX(-100%)', // new property - will move the element off the left hand side of the screen
            transition: 'transform 1s ease-in-out',
        },
        ArrowOpen: {
            transform: ' translateX(40%) rotate(0turn)',// new property - will move the element off the left hand side of the screen
            transition: 'transform 1s ease-in-out',
        },
        ArrowClose: {
            transform: 'translateX(170%) rotate(0.5turn)',// new property - will move the element off the left hand side of the screen
            transition: 'transform 1s ease-in-out',
        },
    }


    const projectColor = (e) => {
        return "App-Button" + parseInt((e % 4) + 1) + " AbleProject"; // Active ClassName
    }
    const projectToggel = (project, index) => {
        if (project[1] == "able") {
            SetCurrentProject(project[0])
            SetActive(ColorList[(index % 4)])
            SetSideBarActive(false)
        }
        // if (index == 5) {
        // SetSideBarActive(false)
        // 
        // }
    }
    const IsSideBarActive = (e) => {
        switch (e) {
            case 'Title':
                return SideBarActive ? SideBarStyle.TitleOpen : SideBarStyle.TitleClose
            case 'Item':
                return SideBarActive ? SideBarStyle.ItemOpen : SideBarStyle.ItemClose
            case 'Arrow':
                return SideBarActive ? SideBarStyle.ArrowOpen : SideBarStyle.ArrowClose
        }
    }

    return (
        <div className="ProjectBar" >
            <div className="ProjectListTitle" style={IsSideBarActive('Title')}>
                <p > Project</p>
                <IoIosArrowBack
                    onClick={() => SetSideBarActive(!SideBarActive)}
                    style={IsSideBarActive('Arrow')}
                />
            </div>
            <div className="ProjectList" style={IsSideBarActive('Item')}>
                {ProjectName.map((project, index) => {
                    return (
                        <a
                            key={index}
                            // to={'./' + project[0]}
                            className={project[1] == "able" ? projectColor(index) : 'DisableProject'}
                            style={CurrentProject == project[0] ? ActiveProject : {}}
                            onClick={() => projectToggel(project, index)}
                        >
                            {/* .replace(/([A-Z])/g, ' $1').trim()  :  Tách các từ In hoa TodoApp => Todo App*/}
                            <span>{project[0].replace(/([A-Z])/g, ' $1').trim()}</span>
                            <i></i>
                        </a>
                    )
                })}
            </div>
        </div>
    );
};

export default ProjectBar;
