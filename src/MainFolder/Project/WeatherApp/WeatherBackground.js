import style from "./style/style"

export default function WeatherBackground(Data, CustomWeather, CustomTime) {
    const Weatherstyle = style(); // chứa các ảnh backgrond

    if (Data.length != 0) {
        let weather;
        let sunrise = Data.sys.sunrise * 1000
        let sunset = Data.sys.sunset * 1000
        let Time;

        // Xác định Time và weather là current hay custom

        // current Time và weather
        if (CustomWeather === 'Current' && CustomTime === 25) {
            Time = new Date().getTime();
            weather = Data.weather[0].main
        } else {
            // custom Time và weather
            if (CustomWeather !== 'Current' && CustomTime !== 25) {
                // Time = Thời gian hiện tại - Giờ và phút hiện tại + thời gian đã chọn
                Time = new Date().getTime()
                    - (new Date().getHours() * 60 * 60 * 1000)
                    - (new Date().getMinutes() * 60 * 1000)
                    + (CustomTime * 60 * 60 * 1000);
                weather = CustomWeather
            } else {
                // custom Time và current weather
                if (CustomTime !== 25) {
                    Time = new Date().getTime()
                        - (new Date().getHours() * 60 * 60 * 1000)
                        - (new Date().getMinutes() * 60 * 1000)
                        + (CustomTime * 60 * 60 * 1000);
                    weather = Data.weather[0].main
                } else {
                    // current Time và custom weather
                    Time = new Date().getTime();
                    weather = CustomWeather
                }
            }
        }

        if (Time >= sunrise) {
            // nửa tiếng tính từ lúc mặt trời mọc 
            // 1800000 == nửa tiếng
            if (Time < (sunrise + 1800000)) {
                switch (weather.toLowerCase()) {
                    case 'snow':
                        return Weatherstyle.SnowingDay;
                    case 'rain':
                        return Weatherstyle.Rain;
                    case 'shower rain':
                        return Weatherstyle.Drizzle;
                    case 'thunderstorm':
                        return Weatherstyle.ThunderStorm;
                    default:
                        return Weatherstyle.sunrise;
                }
            } else {
                // sau nửa tiếng tính từ lúc mặt trời mọc 
                // và trước lúc mặt trời lặng
                if (Time < sunset) {
                    switch (weather.toLowerCase()) {
                        case 'snow':
                            return Weatherstyle.SnowingDay;
                        case 'rain':
                            return Weatherstyle.Rain;
                        case 'shower rain':
                            return Weatherstyle.Drizzle;
                        case 'thunderstorm':
                            return Weatherstyle.ThunderStorm;
                        case 'clear':
                            return Weatherstyle.Clear;
                        case 'clear sky':
                            return Weatherstyle.ClearSky;
                        case 'clouds':
                            return Weatherstyle.Clouds;
                        case 'few clouds':
                            return Weatherstyle.FewClouds;
                        case 'scattered clouds':
                            return Weatherstyle.ScatteredClouds;
                        case 'broken clouds':
                            return Weatherstyle.BrokenClouds;
                        default:
                            return Weatherstyle.Clear;
                    }
                } else {

                    // nửa tiếng tính từ lúc mặt trời lặn
                    // 1800000 == nửa tiếng
                    if (Time <= (sunset + 1800000)) {
                        switch (weather.toLowerCase()) {
                            case 'snow':
                                return Weatherstyle.SnowingNight;
                            case 'rain':
                                return Weatherstyle.RainNight;
                            case 'shower rain':
                                return Weatherstyle.DrizzleNight;
                            case 'thunderstorm':
                                return Weatherstyle.ThunderStorm;
                            default:
                                return Weatherstyle.sunset;
                        }
                    } else {
                        // sau nửa tiếng tính từ lúc mặt trời lặn
                        switch (weather.toLowerCase()) {
                            case 'snow':
                                return Weatherstyle.SnowingNight;
                            case 'rain':
                                return Weatherstyle.RainNight;
                            case 'shower rain':
                                return Weatherstyle.DrizzleNight;
                            case 'thunderstorm':
                                return Weatherstyle.ThunderStorm;
                            case 'clear':
                                return Weatherstyle.ClearNight;
                            case 'clear sky':
                                return Weatherstyle.ClearSkyNight;
                            case 'clouds':
                                return Weatherstyle.CloudsNight;
                            case 'few clouds':
                                return Weatherstyle.FewCloudsNight;
                            case 'scattered clouds':
                                return Weatherstyle.ScatteredCloudsNight;
                            case 'broken clouds':
                                return Weatherstyle.BrokenCloudsNight;
                            default:
                                return Weatherstyle.ClearNight;
                        }
                    }

                }
            }

        } else {
            // trước lúc mặt trời lặn
            switch (weather.toLowerCase()) {
                case 'snow':
                    return Weatherstyle.SnowingNight;
                case 'rain':
                    return Weatherstyle.RainNight;
                case 'shower rain':
                    return Weatherstyle.DrizzleNight;
                case 'thunderstorm':
                    return Weatherstyle.ThunderStorm;
                case 'clear':
                    return Weatherstyle.ClearNight;
                case 'clear sky':
                    return Weatherstyle.ClearSkyNight;
                case 'clouds':
                    return Weatherstyle.CloudsNight;
                case 'few clouds':
                    return Weatherstyle.FewCloudsNight;
                case 'scattered clouds':
                    return Weatherstyle.ScatteredCloudsNight;
                case 'broken clouds':
                    return Weatherstyle.BrokenCloudsNight;
                default:
                    return Weatherstyle.ClearNight;
            }

        }

    }
    return;
}