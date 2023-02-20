import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useState } from 'react';
import Sort from './Sort';

export default function ContainerHeader(props) {
    const [SearchValue, setSearchValue] = useState('')
    const [SearchInput, setSearchInput] = useState('')
    const [Suggesstion, setSuggesstion] = useState([])
    const [SuggesstionDisplay, setSuggesstionDisplay] = useState({ display: "none" })

    const AutoComplete = (value) => {
        setSearchInput(value)
        InputToggle(value);

        if (value.length > 0) {
            let SearchData = props.SearchList.filter(data =>
                data.slice(0, value.length).toLowerCase().includes(value.toLowerCase())
            )
            let SuggesstionList = []
            for (let i = 0; i < (SearchData.length > 5 ? 5 : SearchData.length); i++) {
                SuggesstionList.push(SearchData[i])
            }
            setSuggesstion(SuggesstionList)
            setSuggesstionDisplay(SuggesstionList.length !== 0
                ? { display: "block" }
                : { display: "none" }
            )

        } else {
            setSuggesstion([])
        }

    }

    useEffect(() => {
        if (SearchValue.length === 0) {
            props.setCurrentData([])
        } else {
            let exists;
            exists = props.Data.filter(data =>
                data.name ? data.name.toLowerCase().includes(SearchValue.toLowerCase()) : null
            )
            exists = exists.concat(props.Data.filter(data =>
                data.singer ? data.singer.toLowerCase().includes(SearchValue.toLowerCase()) : null
            ))
            exists = exists.concat(props.Data.filter(data =>
                data.username ? data.username.toLowerCase().includes(SearchValue.toLowerCase()) : null
            ))
            exists = exists.concat(props.Data.filter(data =>
                data.topic ? data.topic.toLowerCase().includes(SearchValue.toLowerCase()) : null
            ))
            props.setCurrentData(exists)
        }


    }, [SearchValue])

    const SuggesstionToggle = (value) => {
        setSearchInput(value)
        setSuggesstionDisplay({ display: "none" })
    }

    const InputToggle = (value) => {
        setSuggesstionDisplay(value.length !== 0
            ? { display: "block" }
            : { display: "none" }
        )
    }
    const SearchToggle = () => {
        setSearchValue(SearchInput)
        setSuggesstionDisplay({ display: "none" })
    }
    return (
        <div className='Container_Header'>
            <div className='Search'>
                <div className='SearchBox'>
                    <InputGroup>
                        <InputGroup.Text>
                            <AiOutlineSearch onClick={() => SearchToggle()} />
                        </InputGroup.Text>

                        <Form.Control
                            placeholder='Tìm kiếm'
                            onChange={(e) => AutoComplete(e.target.value)}
                            onClick={(e) => InputToggle(e.target.value)}
                            value={SearchInput}
                        />
                    </InputGroup>
                </div>
                <div className='SearchSuggestion' style={SuggesstionDisplay}>
                    {Suggesstion.map((value, index) => {
                        return <p key={index} onClick={() => SuggesstionToggle(value)}>
                            <b>{value.slice(0, SearchInput.length)}</b>
                            {value.slice(SearchInput.length)}
                        </p>
                    })}
                </div>
            </div>
            {
                props.activeTab != 5 &&
                <Sort
                    SortBy={props.SortBy} setSortBy={props.setSortBy}
                    ASC={props.ASC} setASC={props.setASC}
                    CurrentData={props.CurrentData} setCurrentData={props.setCurrentData}
                    activeTab={props.activeTab}
                />
            }
        </div>
    )

}