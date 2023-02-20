
import music_logo from "./images/music_logo.png"
import { BiCategory } from "react-icons/bi";
import { RiPlayListFill, RiUserLine } from "react-icons/ri";
import { HiOutlineUserGroup, HiOutlineMusicNote } from "react-icons/hi";
import { TbChartBar } from "react-icons/tb";
import { useState } from "react";

export default function MusicSideBar(props) {
    const TabToggle = (i) => {
        props.setActiveTab(i);
        props.setCurrentPage(1);
    }
    const IsActiveTab = (i) => {
        return props.activeTab == i ? 'SideItem active' : 'SideItem';
    }
    return (
        <div className="MusicSideBar">

            <div className="SideTitle">
                <a><img src={music_logo} /></a>
                <b>Admin</b>
            </div>

            <div className="SideTitleLine" ></div>

            <div className="SideItemList">

                <div className={IsActiveTab(0)} onClick={() => TabToggle(0)} >
                    <HiOutlineMusicNote />
                    <span> Bài hát </span>
                </div>

                <div className={IsActiveTab(1)} onClick={() => TabToggle(1)}>
                    <BiCategory />
                    <span> Chuyên Mục</span>
                </div>
                <div className={IsActiveTab(2)} onClick={() => TabToggle(2)} >
                    <RiPlayListFill />
                    <span>Thể loại</span>
                </div>
                <div className={IsActiveTab(3)} onClick={() => TabToggle(3)} >
                    <HiOutlineUserGroup />
                    <span> User </span>

                </div>
                <div className={IsActiveTab(4)} // onClick={() => TabToggle(4)} 
                    style={{
                        cursor: "not-allowed"
                    }} >
                    <RiUserLine />
                    <span> Ca sĩ </span>

                </div>
                <div className={IsActiveTab(5)} onClick={() => TabToggle(5)} >
                    <TbChartBar />
                    <span> Bảng xếp hạng </span>
                </div>
            </div>

        </div>
    )
}