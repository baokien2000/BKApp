import Button from 'react-bootstrap/Button';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import mark from './style/mark';
import { debounce } from "lodash";



export default function WeatherAndTime({ CustomWeather, setCustomWeather, CustomTime, setCustomTime }) {
    // '' trong ButtonList là điều kiện để xuống dòng khi map() 
    const ButtonList = ["Current", '', 'clear sky', 'few clouds', 'scattered clouds', 'broken clouds',
        '', 'rain', 'shower rain', 'thunderstorm', '', 'snow']

    return (
        <div className='CustomWeather'>

            <h3> Weather App</h3>
            <h5>Weather</h5>

            {ButtonList.map((btn, index) => (
                btn !== ''
                    ? <Button key={index} variant={CustomWeather == btn ? "light" : "dark"} onClick={() => setCustomWeather(btn)}>{btn} </Button>
                    : <br key={index} />
            ))}

            <h5>Time</h5>

            <Button variant={CustomTime == 25 ? "light" : "dark"} onClick={() => setCustomTime(25)}>Current </Button>
            <Button variant={CustomTime == 25 ? "dark" : "light"} onClick={() => setCustomTime(0)}>Custom </Button>

            <Box sx={{ width: 300 }} style={{ visibility: CustomTime != 25 ? "visible" : "hidden" }}>
                <Slider
                    aria-label="Custom marks"
                    max={24} step={0.5}
                    valueLabelDisplay="auto"
                    marks={mark()} color="primary"
                    onChange={debounce((e) => { setCustomTime(e.target.value) }, 1000)}
                />
            </Box>

            <span>* Current button is the current weather of the searched city.</span>
            <span>* The other buttons are used to test the application interface in different weather and time.</span>

        </div>






    )
} 