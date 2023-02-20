// import React from 'react';
import React, { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import Avatar from "../../Image/Avatar.jpg"
import Underline from "../../Image/Underline.png"

const Intro = ({ forwardedRef }) => {
    const { Language, myData } = useContext(AppContext);

    // let Info = Language == "EN" ? 1 : 0;
    const Split_info = (value) => {
        let Index = value.indexOf(":");
        return <>
            <b>{value.slice(0, Index)}</b>
            <span>{value.slice(Index)}</span>
        </>
    }

    return (
        <div className='Page_Intro' id="IntroduceID" ref={forwardedRef}>
            <div className="Header">
                <h1>{myData["BK"][Language]["AboutMe"]}</h1>
                <img src={Underline} />
            </div>

            <div className='Container'>
                <div className="Avatar_name_image">
                    <img className="AvatarImage" src={Avatar} alt="Avatar" />
                </div>

                <div className="Info">
                    <div className='li_half'>
                        <h2>{myData["BK"][Language]["ThongTin"]}</h2>
                        <li>{Split_info(myData["BK"][Language]["Ten"])}</li>
                        <li>{Split_info(myData["BK"][Language]["Tuoi"])}</li>
                        <li>{Split_info(myData["BK"][Language]["GioiTinh"])}</li>
                        <li>{Split_info(myData["BK"][Language]["NgaySinh"])}</li>
                        <li>{Split_info(myData["BK"][Language]["NoiSinh"])}</li>
                        <li>{Split_info(myData["BK"][Language]["HocVan"])}</li>
                        <li>{Split_info(myData["BK"][Language]["ChuyenNganh"])}</li>
                    </div>
                    <div className='li_full'>
                        <h2>{myData["BK"][Language]["GioiThieuBanThan"]}</h2>
                        <li>{myData["BK"][Language]["GioiThieuBanThan_1"]}</li>
                    </div>
                    <div className='li_full'>
                        <h2>{myData["BK"][Language]["MucTieu"]}</h2>
                        <li>{Split_info(myData["BK"][Language]["MucTieuNgan"])}</li>
                        <li>{Split_info(myData["BK"][Language]["MucTieuDai"])}</li>
                    </div>


                </div>
            </div>

        </div>
    );
}

export default Intro;
