import React, { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import HomeImage from "../../Image/HomeImage3.png"
import HI from "../../Image/HI.png"
import Button from 'react-bootstrap/Button';

import helloWorld from "../../Image/helloWorld.gif"

const Home = ({ forwardedRef, Home_ContactButton }) => {

    const { Language, myData } = useContext(AppContext);

    return (
        <div className='Page_Home' id='HomeID' ref={forwardedRef}>
            <div className='Page_Home_Text'>
                <span>{myData["BK"][Language]["Home_Hi"]}</span>
                <img src={HI} />

                <h2>{myData["BK"][Language]["Home_Title"]}</h2>
                <button className='DesignButton' onClick={() => Home_ContactButton()}>
                    {myData["BK"][Language]["ContactMe"]}
                </button>
                {/* <Button variant="primary" onClick={() => Home_ContactButton()}>
                    {myData["BK"][Language]["ContactMe"]}
                </Button> */}

            </div>
            <div className='Page_Home_Image'>
                <img src={helloWorld} />
            </div>
        </div>
    );
}
export default Home;
