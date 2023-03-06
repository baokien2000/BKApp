
import { useEffect, useState } from 'react';
import Waitting from '../../../Waitting/Waitting';
import ContainerHeader from './ContainerHeader/ContainerHeader';
import MusicSideBar_Mobile from './MusicSideBar_Mobile';
import TableCategories from './table/TableCategories';
import TableCategory from './table/TableCategory';
import TableRank from './table/TableRank';
import TableSinger from './table/TableSinger';
import TableSong from './table/TableSong';
import TableUser from './table/TableUser';
import TablePanigation from './TablePanigation';

export default function MusicContainer(props) {
    const [SortBy, setSortBy] = useState("Id");
    const [ASC, setASC] = useState(true);
    const [CurrentData, setCurrentData] = useState([]);

    useEffect(() => {
        if (CurrentData.length === 0) {
            setCurrentData(props.Data)
        }
    }, [CurrentData])
    useEffect(() => {
        setCurrentData(props.Data)
    }, [props.Data, props.currentPage])
    const ActiveTable = () => {
        switch (props.activeTab) {
            case 0: {
                return <TableSong Data={CurrentData} currentPage={props.currentPage} />
            }
            case 1: {
                return <TableCategories Data={CurrentData} currentPage={props.currentPage} />
            }
            case 2: {
                return <TableCategory Data={CurrentData} currentPage={props.currentPage} />
            }
            case 3: {
                return <TableUser Data={CurrentData} currentPage={props.currentPage} />
            }
            case 4: {
                return <TableSinger Data={CurrentData} currentPage={props.currentPage} />
            }
            case 5: {
                return <TableRank Data={CurrentData} currentPage={props.currentPage} />
            }
            default: {
                return console.log("Default")
            }
        }
    }
    const TableDisplay = () => {
        return <Waitting />

        if (props.Loading) {
            return <Waitting />

        } else {
            return <>
                <div className='TableBox'>
                    {CurrentData && ActiveTable()}
                </div>
                <TablePanigation
                    currentPage={props.currentPage}
                    setCurrentPage={props.setCurrentPage}
                    length={CurrentData.length}
                />
            </>
        }
    }
    return (
        <div className="MusicContainer">
            <MusicSideBar_Mobile
                activeTab={props.activeTab}
                setActiveTab={props.setActiveTab}
                setCurrentPage={props.setCurrentPage}
            />
            <ContainerHeader
                SortBy={SortBy} setSortBy={setSortBy}
                ASC={ASC} setASC={setASC}
                Data={props.Data} setCurrentData={setCurrentData}
                SearchList={props.SearchList}
                CurrentData={CurrentData}
                currentPage={props.currentPage}
                activeTab={props.activeTab}
            />
            {TableDisplay()}

        </div>
    )
}