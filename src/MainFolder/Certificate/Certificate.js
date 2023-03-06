import React, { useContext, useState } from 'react';
import { AppContext } from '../../Context/AppContext';
import Underline from "../../Image/Underline.png"
import Certifi_React from "../../Image/Certifi_ReactJSBasic.PNG"
import Certifi_Agile from "../../Image/Certifi_Agile.PNG"
import Certifi_Toeic from "../../Image/Certifi_Toiec2.png"
import Certifi_JavaScriptBasic from "../../Image/Certifi_JavaScriptBasic.PNG"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { AiOutlineClose } from 'react-icons/ai';

const Certificate = ({ forwardedRef }) => {
    const { Language, myData } = useContext(AppContext);
    const [show, setShow] = useState(false);
    const [ImageSrc, setImageSrc] = useState('');

    const handleClose = () => {
        setShow(false);
    };
    const handleShow = (src) => {
        setShow(true);
        setImageSrc(src);
    }


    return (
        <div className='Certificate_Page' id='CertificateID' ref={forwardedRef}>
            <div className='Header'>
                <h1>{myData["BK"][Language]["Certificate"]}</h1>
                <img src={Underline} />
            </div>
            <div className='Container'>
                <div className='certifi' onClick={(e) => handleShow(e.target.src)}>
                    <img src={Certifi_React}></img>
                </div>
                <div className='certifi' onClick={(e) => handleShow(e.target.src)}>
                    <img src={Certifi_Toeic}></img>
                </div>
                <div className='certifi' onClick={(e) => handleShow(e.target.src)}>
                    <img src={Certifi_Agile}></img>
                </div>
                {/* 
                <div className='certifi'>
                    <img src={Certifi_JavaScriptBasic}></img>
                </div> */}
            </div>

            {/* <AiOutlineClose /> */}
            <Modal centered show={show} onHide={handleClose}>
                <img src={ImageSrc}></img>
            </Modal>
        </div>
    );
};

export default Certificate;