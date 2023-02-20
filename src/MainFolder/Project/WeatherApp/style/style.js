// import Day from "../images/morning2.png"
// import Night from "../images/night.png"
// import RainingDay from "../images/rainingDay.png"
// import rainingNight from "../images/rainingNight.png"

import SunSet from "../images/sunset2.png"
import Sunrise from "../images/sunUp.png"

import SnowingDay from "../images/snowDay.png"
import SnowingNight from "../images/snowNight.png"

import Clear from "../images/Clear.png"
import ClearNight from "../images/ClearNight.png"

import ClearSky from "../images/ClearSky.png"
import ClearSkyNight from "../images/ClearSkyNight.png"

import FewClouds from "../images/FewClouds.png"
import FewCloudsNight from "../images/FewCloudsNight.png"

import Clouds from "../images/Clouds.png"
import CloudsNight from "../images/CloudsNight.png"

import ScatteredClouds from "../images/ScatteredClouds.png"
import ScatteredCloudsNight from "../images/ScatteredCloudsNight.png"

import BrokenClouds from "../images/BrokenClouds.png"
import BrokenCloudsNight from "../images/BrokenCloudsNight.png"

import Rain from "../images/Rain.png"
import RainNight from "../images/RainNight.png"

import Drizzle from "../images/Drizzle.png"
import DrizzleNight from "../images/DrizzleNight.png"

import ThunderStorm from "../images/ThunderStorm.png"


function style() {
    return (
        {
            tab: {
                minWidth: 20,
                minHeight: 20,
                paddingTop: 10,
            },
            tabs: {
                float: 'right',
                minHeight: 20
            },
            active: {
                minWidth: 20,
                minHeight: 20,
                paddingTop: 10,
                borderBottom: '6px solid #fff'
            },

            sunrise: {
                backgroundImage: `url(${Sunrise})`

            },
            sunset: {
                backgroundImage: `url(${SunSet})`,
                backgroundColor: '#000  ',
            },

            SnowingDay: {
                backgroundImage: `url(${SnowingDay})`,
                backgroundColor: '#fff  ',
            },
            SnowingNight: {
                backgroundImage: `url(${SnowingNight})`,
                backgroundColor: '#fff  ',
            },

            ClearSky: {
                backgroundImage: `url(${ClearSky})`,
                backgroundColor: '#fff  ',
            },
            ClearSkyNight: {
                backgroundImage: `url(${ClearSkyNight})`,
                backgroundColor: '#fff  ',
            },

            Clear: {
                backgroundImage: `url(${Clear})`,
                backgroundColor: '#fff  ',
            },
            ClearNight: {
                backgroundImage: `url(${ClearNight})`,
                backgroundColor: '#fff  ',
            },

            FewClouds: {
                backgroundImage: `url(${FewClouds})`,
                backgroundColor: '#fff  ',
            },
            FewCloudsNight: {
                backgroundImage: `url(${FewCloudsNight})`,
                backgroundColor: '#fff  ',
            },

            Clouds: {
                backgroundImage: `url(${Clouds})`,
                backgroundColor: '#fff  ',
            },
            CloudsNight: {
                backgroundImage: `url(${CloudsNight})`,
                backgroundColor: '#fff  ',
            },

            ScatteredClouds: {
                backgroundImage: `url(${ScatteredClouds})`,
                backgroundColor: '#fff  ',
            },
            ScatteredCloudsNight: {
                backgroundImage: `url(${ScatteredCloudsNight})`,
                backgroundColor: '#fff  ',
            },

            BrokenClouds: {
                backgroundImage: `url(${BrokenClouds})`,
                backgroundColor: '#fff  ',
            },
            BrokenCloudsNight: {
                backgroundImage: `url(${BrokenCloudsNight})`,
                backgroundColor: '#fff  ',
            },

            Rain: {
                backgroundImage: `url(${Rain})`,
                backgroundColor: '#fff  ',
            },
            RainNight: {
                backgroundImage: `url(${RainNight})`,
                backgroundColor: '#fff  ',
            },

            Drizzle: {
                backgroundImage: `url(${Drizzle})`,
                backgroundColor: '#fff  ',
            },
            DrizzleNight: {
                backgroundImage: `url(${DrizzleNight})`,
                backgroundColor: '#fff  ',
            },

            ThunderStorm: {
                backgroundImage: `url(${ThunderStorm})`,
                backgroundColor: '#fff  ',
            }

        }
    )
}
export default style;