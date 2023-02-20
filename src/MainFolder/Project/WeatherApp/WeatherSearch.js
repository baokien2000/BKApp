import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { AiOutlineSearch } from "react-icons/ai";
import SearchSuggest from "./SearchGuggest";

export default function WeatherSearch({ setInputAPI }) {

    const [SearchInput, setSearchInput] = useState('');
    const GetSuggestion = (e) => {
        setSearchInput('')
        setInputAPI(e);
    }
    return (
        <>
            <div className="WeatherApp-hearder">
                <Form className="d-flex">
                    <AiOutlineSearch
                        variant="primary"
                        onClick={() => setInputAPI(SearchInput)}
                    />
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        style={{ outLine: "none" }} aria-label="Search"
                        onChange={(e) => setSearchInput(e.target.value)}
                        value={SearchInput}
                    />

                </Form>
            </div>
            <SearchSuggest SearchInput={SearchInput} GetSuggestion={GetSuggestion} />
        </>

    )
}