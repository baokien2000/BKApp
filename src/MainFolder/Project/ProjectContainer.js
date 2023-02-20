import React from 'react';
import ColorfulGlowingLiquid from './ColorfulGlowingLiquid/ColorfulGlowingLiquid'
import RealTimeClock from './RealTimeClock/RealTimeClock'
import TodoApp from './TodoApp/TodoApp';
import CaroApp from './CaroApp/CaroApp';
import WeatherApp from './WeatherApp/WeatherApp';
import MusicApp from './MusicApp/MusicApp';
import ShoesStore from './LinkApp/ShoesStore';

const ProjectContainer = ({ CurrentProject }) => {
    switch (CurrentProject) {
        case "TodoApp":
            return <TodoApp />
        case "ColorfulGlowingLiquid":
            return <ColorfulGlowingLiquid />
        case "RealTimeClock":
            return <RealTimeClock />
        case "CaroApp":
            return <CaroApp />
        case "WeatherApp":
            return <WeatherApp />
        case "MusicApp (Admin)":
            return <MusicApp />
        case "Shoes Store":
            return <ShoesStore />
        default:
            return <TodoApp />
    }
};

export default ProjectContainer;