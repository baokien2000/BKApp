import { useState, useEffect } from 'react';

export default function RealTimeClock() {
    const [Time, setTime] = useState(new Date())

    useEffect(() => {
        let CurrentTime = setInterval(() => {
            setTime(new Date())
        }, 1000);

        return () => clearInterval(CurrentTime)
    }, [])

    const AMorPM = (DayTime) => {
        if (DayTime > 12) {
            return <span>PM</span>
        } else {
            return <span>AM</span>
        }
    }

    const LowerTen = (Time) => {
        if (Time < 10) {
            return '0' + Time
        } else {
            return Time
        }
    }
    return (

        <div className="RealTimeClock" >
            <p>Real Time Clock</p>
            <div className='Clock'>
                <div className='circle Circle1'>
                    <i style={{
                        transform: `rotateZ(${(Time.getHours() * 30) + (Time.getMinutes() / 2)}deg)`
                    }} >
                    </i>
                </div>
                <div className='circle Circle2' >
                    <i style={{
                        transform: `rotateZ(${Time.getMinutes() * 6}deg)`
                    }} >
                    </i>
                </div>
                <div className='circle Circle3'>
                    <i style={{
                        transform: `rotateZ(${Time.getSeconds() * 6}deg)`
                    }} >
                    </i>
                </div>

                <span className='One'><b>1</b></span>
                <span className='Two'><b>2</b></span>
                <span className='Three'><b>3</b></span>
                <span className='Four'><b>4</b></span>
                <span className='Five'><b>5</b></span>
                <span className='Six'><b>6</b></span>
                <span className='Seven'><b>7</b></span>
                <span className='Eight'><b>8</b></span>
                <span className='Nine'><b>9</b></span>
                <span className='Ten'><b>10</b></span>
                <span className='Elevent'><b>11</b></span>
                <span className='Twelve'><b>12</b></span>


            </div>
            <div className='Digital'>
                <span>{LowerTen(Time.getHours() > 12 ? Time.getHours() - 12 : Time.getHours())}</span>
                <span>:</span>
                <span>{LowerTen(Time.getMinutes())}</span>
                <span>:</span>
                <span>{LowerTen(Time.getSeconds())}</span>
                {AMorPM(Time.getHours())}
            </div>
        </div>

    );
}
