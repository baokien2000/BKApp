import { useEffect, useState } from "react"
import axios from "axios";
import MusicContainer from "./MusicContainer";
import MusicSideBar from "./MusicSideBar"
export default function MusicApp() {
    const [activeTab, setActiveTab] = useState(0);
    const [Data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [SearchList, setSearchList] = useState([])
    const [Loading, SetLoading] = useState(false);
    const DataURL = {
        user: {
            base: '/users-api',
            get: '/get-user.php',
            delete: '/delete-user.php',
            add: '/add-user.php',
            update: '/update-user.php',
        },
        song: {
            base: '/songs-api',
            get: '/get-song.php',
            get_category: '/get-category.php',
            get_song_category: '/get-song-category.php',
            delete: '/delete-song.php',
            add: '/add-song.php',
            sort: '/sort-song.php',
            update: '/update-song.php',
            update_listen: '/update-listen-song.php',
            addImageFile: '/add-image-files.php',
            addMp3File: '/add-mp3-files.php',
        },
        category: {
            base: '/category-api',
            get: '/get-category.php',
            delete: '/delete-category.php',
            add: '/add-category.php',
            update: '/update-category.php',
            getSongNum: '/get-song-num.php',
            postSongNum: '/post-song-num.php',
        },
        categories: {
            base: '/categories-api',
            get: '/get-categories.php',
            delete: '/delete-categories.php',
            add: '/add-categories.php',
            update: '/update-categories.php',
            addImageFile: '/add-image-files.php',
        },
        rank: {
            base: '/rank-api',
            get: '/get-song.php',
        },
        singer: {
            Get: ''
        },
    }
    useEffect(() => {
        let url;
        switch (activeTab) {
            case 0: {
                url = DataURL.song.base + DataURL.song.get
                break;
            }
            case 1: {
                url = DataURL.categories.base + DataURL.categories.get
                break;
            }
            case 2: {
                url = DataURL.category.base + DataURL.category.get
                break;
            }
            case 3: {
                url = DataURL.user.base + DataURL.user.get
                break;
            }
            case 4: {
                url = DataURL.singer.base + DataURL.singer.get
                break;
            }
            case 5: {
                url = DataURL.rank.base + DataURL.rank.get
                break;
            }
        }
        SetLoading(true)
        axios(url, {
            // baseURL: 'http://localhost:8080/MusicAPI'
            baseURL: 'https://bkweb2000.000webhostapp.com/MusicData'
        },
        ).then(res => {
            setData(res.data.data)
            let SuggesstionList = [];
            res.data.data.map((value) => {
                SuggesstionList.push(value.name, value.singer, value.topic, value.username)
            })
            SuggesstionList = SuggesstionList.filter(value => value != undefined && value != '')
            setSearchList([...new Set(SuggesstionList)])
        })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                SetLoading(false)

            })
    }, [activeTab])


    return (
        <div className="MusicApp">
            <MusicSideBar
                activeTab={activeTab} setActiveTab={setActiveTab}
                setCurrentPage={setCurrentPage}
            />
            <MusicContainer
                Loading={Loading}
                Data={Data} setData={setData}
                activeTab={activeTab} setActiveTab={setActiveTab}
                currentPage={currentPage} setCurrentPage={setCurrentPage}
                SearchList={SearchList}
            />
        </div>
    )
}