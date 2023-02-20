
import { WiCloud, WiThermometer, WiStrongWind, WiHumidity, WiBarometer, WiTime9 } from "react-icons/wi";
import { TbSnowflake } from "react-icons/tb";
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import style from "./style/style"
import WeatherTab from "./WeatherTab";
import { useState } from "react";

const Tabstyle = style() // chứa các style của tab

export default function WeatherAPI(props) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const IsActiveTab = (index) => {
        return value === index ? Tabstyle.active : Tabstyle.tab;
    }
    const KtoC = (K) => {
        return Math.floor(K - 273.15);
    }


    if (!props.ErrorWeatherAPI && props.Data.length != 0) {
        return (
            <div className="WeatherData">
                <div className="WeatherTemp">

                    <p className="temp">{KtoC(props.Data.main.temp)}&deg;C</p>
                    < p className="CityName">{props.Data.name}</p>
                </div>
                <div className="WeatherInfo">
                    <div className="WeatherInfo-Title">
                        <p>MonDay</p>
                        <Tabs value={value} onChange={handleChange} style={Tabstyle.tabs} >
                            <Tab style={IsActiveTab(0)} icon={<WiCloud />} />
                            <Tab style={IsActiveTab(1)} icon={<WiThermometer />} />
                            <Tab style={IsActiveTab(2)} icon={<WiStrongWind />} />
                            <Tab style={IsActiveTab(3)} icon={<WiHumidity />} />
                            <Tab style={IsActiveTab(4)} icon={<TbSnowflake />} />
                            <Tab style={IsActiveTab(5)} icon={<WiBarometer />} />
                            <Tab style={IsActiveTab(6)} icon={<WiTime9 />} />
                        </Tabs>

                    </div>
                    <WeatherTab Data={props.Data} value={value} />
                </div >
            </div >

        )
    } else {
        // Call API Error
        return (
            <div className="WeatherDataError">
                <p>Not Found City <b>{props.InputAPI}</b></p>
            </div>
        )

    }

}