export default function WeatherTab(props) {

    if (props.Data != undefined) {

        // dùng để hiển thị tabs dựa trên giá trị value
        const TabPanel = (props) => {
            const { children, value, index } = props;
            return (
                <div>
                    {value === index && (
                        <div>{children}</div>
                    )}
                </div>
            );
        }

        // chuyển độ K sang độ C
        const KtoC = (K) => {
            return Math.floor(K - 273.15);
        }

        // Chứa thông tin các tab (Class,Text,Value)
        const WeatherTabList = [[
            {
                "TabClass": "weatherMain",
                "TabText": "Weather",
                "TabValue": props.Data.weather[0].main,
            },
            {
                "TabClass": "weatherDescription",
                "TabText": "Weather Description",
                "TabValue": props.Data.weather[0].description,
            },
            {
                "TabClass": "clouds",
                "TabText": "Cloudiness",
                "TabValue": props.Data.clouds.all + ' %',
            },
            {
                "TabClass": "visibility",
                "TabText": "Visibility",
                "TabValue": props.Data.visibility + ' m',
            }
        ], [
            {
                "TabClass": "feels_like",
                "TabText": "Feels like",
                "TabValue": KtoC(props.Data.main.feels_like) + ' \u2103',
            },
            {
                "TabClass": "temp_min",
                "TabText": "Temp min",
                "TabValue": KtoC(props.Data.main.temp_min) + ' \u2103',
            },
            {
                "TabClass": "temp_max",
                "TabText": "Temp max",
                "TabValue": KtoC(props.Data.main.temp_max) + ' \u2103',
            }
        ], [
            {
                "TabClass": "windSpeed",
                "TabText": "Wind speed",
                "TabValue": props.Data.wind.speed + ' m/s',
            },
            {
                "TabClass": "windDeg",
                "TabText": "Wind direction",
                "TabValue": props.Data.wind.deg + ' degrees',
            },
            {
                "TabClass": "windGust",
                "TabText": "Wind gust",
                "TabValue": (props.Data.wind.gust ? props.Data.wind.gust + ' m/s' : ""),
            }
        ], [
            {
                "TabClass": "humidity",
                "TabText": "Humidity",
                "TabValue": props.Data.main.humidity + ' %',
            },
            {
                "TabClass": "RainOne",
                "TabText": "Rain volume 1h past",
                "TabValue": (props.Data.rain
                    ? (props.Data.rain["1h"] != undefined
                        ? props.Data.rain["1h"] + ' mm'
                        : "")
                    : ""),
            },
            {
                "TabClass": "RainThree",
                "TabText": "Rain volume 3h past",
                "TabValue": (props.Data.rain
                    ? (props.Data.rain["3h"] != undefined
                        ? props.Data.rain["3h"] + ' mm'
                        : "")
                    : ""),
            }
        ], [
            {
                "TabClass": "SnowOne",
                "TabText": "Snow volume 1h past",
                "TabValue": (props.Data.snow
                    ? (props.Data.snow["1h"] != undefined
                        ? props.Data.snow["1h"] + ' mm'
                        : "")
                    : ""),
            },
            {
                "TabClass": "SnowThree",
                "TabText": "Snow volume 3h past",
                "TabValue": (props.Data.snow
                    ? (props.Data.snow["3h"] != undefined
                        ? props.Data.snow["3h"] + ' mm'
                        : "")
                    : ""),
            }
        ], [
            {
                "TabClass": "pressure",
                "TabText": "Pressure",
                "TabValue": (props.Data.main.pressure ? props.Data.main.pressure + ' hPa' : ""),
            },
            {
                "TabClass": "sea_leve",
                "TabText": "Air pressure (sea)",
                "TabValue": (props.Data.main.sea_level ? props.Data.main.sea_level + ' hPa' : ""),
            },
            {
                "TabClass": "grnd_level",
                "TabText": "Air pressure (ground)",
                "TabValue": (props.Data.main.sea_level ? props.Data.main.grnd_level + ' hPa' : ""),
            }
        ], [
            {
                "TabClass": "props.DataTime",
                "TabText": "Data calculation Time",
                "TabValue": (new Date((props.Data.dt) * 1000)).toLocaleTimeString(),
            },
            {
                "TabClass": "sunrise",
                "TabText": "Sunrise",
                "TabValue": (new Date((props.Data.sys.sunrise) * 1000)).toLocaleTimeString(),
            },
            {
                "TabClass": "sunset",
                "TabText": "Sunset",
                "TabValue": (new Date((props.Data.sys.sunset) * 1000)).toLocaleTimeString(),
            }
        ]]

        const TabList = []
        for (let i = 0; i < 7; i++) {
            TabList.push(
                <TabPanel value={props.value} index={i} key={i}>
                    {WeatherTabList[i].map((item, index) => (
                        item.TabValue ?
                            < div className={item.TabClass} key={index} >
                                <b>{item.TabText}</b>
                                <span>: {item.TabValue}</span>
                            </div>
                            : ''
                    ))}
                </TabPanel>
            )
        }
        return (
            <div className="WeatherInfo-Data">
                {TabList}
            </div>
        );
    }




}