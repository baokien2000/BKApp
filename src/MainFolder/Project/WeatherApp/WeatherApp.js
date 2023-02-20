import axios from "axios";
import { useEffect, useState, useTransition } from "react";
import WeatherAPI from "./WeatherAPI";
import WeatherSearch from "./WeatherSearch";
import WeatherAndTime from "./WeatherAndTime";
import WeatherBackground from "./WeatherBackground"

export default function WeatherApp() {
    const [ErrorWeatherAPI, setErrorWeatherAPI] = useState(false); // state chứa boolen call api error
    const [Data, setData] = useState([]); // state chứa data
    const [InputAPI, setInputAPI] = useState("Ho Chi Minh"); // state chứa thông tin thành phố tìm kiếm

    // App có vài nút dùng để kiểm tra nhanh giao diện của app khi trong các thời gian và thời tiết khác nhau
    const [CustomWeather, setCustomWeather] = useState('Current'); // state chứa thông tin thời tiết hiện tại hoặc custom
    const [CustomTime, setCustomTime] = useState(25); // state chứa thông tin time hiện tại hoặc custom

    const APIKEY = '8c84f12737b3e3d809711ccf050a0fc1'

    useEffect(() => {
        let InputValue = InputAPI.toLowerCase()

        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${InputValue}&appid=${APIKEY}`)
            .then(response => {
                if (!response.data.error) {
                    setData(response.data)
                    setErrorWeatherAPI(false)
                } else {
                    setErrorWeatherAPI(true)
                }
            })
            .catch((error) => {
                setErrorWeatherAPI(true)
            });
    }, [InputAPI])

    // Background của app 
    const AppBackground = WeatherBackground(Data, CustomWeather, CustomTime)
    return (
        <div className="WeatherApp" >
            <div className="WeatherApp-container" style={AppBackground}>
                <WeatherSearch setInputAPI={setInputAPI} /> {/* Thanh search */}
                <WeatherAPI Data={Data} ErrorWeatherAPI={ErrorWeatherAPI} InputAPI={InputAPI} /> {/* weather data */}
            </div>

            {/* Vùng chọn data CustomWeather và CustomTime */}
            <WeatherAndTime
                CustomWeather={CustomWeather}
                setCustomWeather={setCustomWeather}
                CustomTime={CustomTime}
                setCustomTime={setCustomTime}
            />
        </div>
    )
}