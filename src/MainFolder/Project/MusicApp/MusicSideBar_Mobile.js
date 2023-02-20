import React from 'react';
import { BiCategory } from "react-icons/bi";
import { RiPlayListFill, RiUserLine } from "react-icons/ri";
import { HiOutlineUserGroup, HiOutlineMusicNote } from "react-icons/hi";
import { TbChartBar } from "react-icons/tb";

const MusicSideBar_Mobile = (props) => {
    const TabToggle = (i) => {
        props.setActiveTab(i);
        props.setCurrentPage(1);
    }
    const IsActiveTab = (i) => {
        return props.activeTab == i ? 'SideItem active' : 'SideItem';
    }
    return (
        <div className="SideItemList_Mobile">

            <div className={IsActiveTab(0)} onClick={() => TabToggle(0)} >
                <HiOutlineMusicNote />
            </div>

            <div className={IsActiveTab(1)} onClick={() => TabToggle(1)}>
                <BiCategory />
            </div>
            <div className={IsActiveTab(2)} onClick={() => TabToggle(2)} >
                <RiPlayListFill />
            </div>
            <div className={IsActiveTab(3)} onClick={() => TabToggle(3)} >
                <HiOutlineUserGroup />

            </div>

            <div className={IsActiveTab(5)} onClick={() => TabToggle(5)} >
                <TbChartBar />
            </div>
        </div>
    );
};

export default MusicSideBar_Mobile;