import React, { useState, useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import Underline from "../../Image/Underline.png"
import { CiMail } from 'react-icons/ci';
import { BiWorld } from 'react-icons/bi';
import { FiFacebook, FiGithub, FiPhone } from 'react-icons/fi';
const Contact = ({ forwardedRef }) => {
    const { Language, myData } = useContext(AppContext);

    return (
        <div className='Contact_Page' id='ContactID' ref={forwardedRef}>
            <div className='Header'>
                <h1>{myData["BK"][Language]["ContactMe"].toUpperCase()}</h1>
                <img src={Underline} />
            </div>
            <div className='Container'>
                <div className='Card'>
                    <div className='Circle Big_Circle'>
                        <CiMail />
                    </div>
                    <b>Email</b>
                    <span>baokien.tang@gmail.com</span>
                </div>
                {/* BiWorld */}
                <div className='Card'>
                    <div className='Circle Big_Circle'>
                        <BiWorld />
                    </div>
                    <b>Social media</b>
                    <div className='Card_socialMedia'>
                        <div className='Circle Small_Circle'>
                            <a href='https://www.facebook.com/kien.bao.948/'>
                                <FiFacebook />
                            </a>
                        </div>
                        {/* <div className='Circle Small_Circle'>
                            <SiZalo />
                        </div> */}
                        <div className='Circle Small_Circle'>
                            <a href='https://github.com/baokien2000'>
                                <FiGithub />
                            </a>
                        </div>
                    </div>

                </div>
                <div className='Card'>
                    <div className='Circle Big_Circle'>
                        <FiPhone />
                    </div>
                    <b>Contact No</b>
                    <span>033 678 3302</span>
                </div>
            </div>
        </div>
    );
};

export default Contact;