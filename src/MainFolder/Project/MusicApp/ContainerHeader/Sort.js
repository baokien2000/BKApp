import React from 'react';
import { FaSortAmountDownAlt, FaSortAmountUpAlt } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
// data1 = [...data].sort((a, b) => (a.name < b.name ? -1 : 1));
import Button from 'react-bootstrap/Button';

function Sort(props) {

    const SortIConToggle = () => {
        props.setASC(!props.ASC)
        console.log(props.SortBy)
        let current;
        switch (props.SortBy) {
            case 'Id':
                current = props.CurrentData.sort((a, b) =>
                    props.ASC ? (parseInt(a.id) > parseInt(b.id) ? -1 : 1) : (parseInt(a.id) < parseInt(b.id) ? -1 : 1)
                )
                break;
            case 'Name':
                current = props.CurrentData.sort((a, b) =>
                    props.ASC ? (a.name > b.name ? -1 : 1) : (a.name < b.name ? -1 : 1)
                )
                break;
            case 'Listen':
                current = props.CurrentData.sort((a, b) =>
                    props.ASC ? (parseInt(a.listens) > parseInt(b.listens) ? -1 : 1) : (parseInt(a.listens) < parseInt(b.listens) ? -1 : 1)
                )
                break;
            case 'Singer':
                current = props.CurrentData.sort((a, b) =>
                    props.ASC ? (a.singer > b.singer ? -1 : 1) : (a.singer < b.singer ? -1 : 1)
                )
                break;
            case 'Like':
                current = props.CurrentData.sort((a, b) =>
                    props.ASC ? (parseInt(a.follow) > parseInt(b.follow) ? -1 : 1) : (parseInt(a.follow) < parseInt(b.follow) ? -1 : 1)
                )
                break;
            case 'Topic':
                current = props.CurrentData.sort((a, b) =>
                    props.ASC ? (a.topic > b.topic ? -1 : 1) : (a.topic < b.topic ? -1 : 1)
                )
                break;
            case 'Songs':
                current = props.CurrentData.sort((a, b) =>
                    props.ASC ? (parseInt(a.songs) > parseInt(b.songs) ? -1 : 1) : (parseInt(a.songs) < parseInt(b.songs) ? -1 : 1)
                )
                break;
            case 'Gender':
                current = props.CurrentData.sort((a, b) =>
                    props.ASC ? (a.gender > b.gender ? -1 : 1) : (a.gender < b.gender ? -1 : 1)
                )
                break;
            case 'Age':
                current = props.CurrentData.sort((a, b) =>
                    props.ASC ? (parseInt(a.age) > parseInt(b.age) ? -1 : 1) : (parseInt(a.age) < parseInt(b.age) ? -1 : 1)
                )
                break;
            case 'UserName':
                current = props.CurrentData.sort((a, b) =>
                    props.ASC ? (a.username > b.username ? -1 : 1) : (a.username < b.username ? -1 : 1)
                )
                break;
            case 'Email':
                current = props.CurrentData.sort((a, b) =>
                    props.ASC ? (a.email > b.email ? -1 : 1) : (a.email < b.email ? -1 : 1)
                )
                break;
        }
        props.setCurrentData(current)

    }

    const SortOptions = () => {
        switch (props.activeTab) {
            case 0:
                return <>
                    <Dropdown.Item onClick={(e) => props.setSortBy(e.target.innerText)}>Id</Dropdown.Item>
                    <Dropdown.Item onClick={(e) => props.setSortBy(e.target.innerText)}>Name</Dropdown.Item>
                    <Dropdown.Item onClick={(e) => props.setSortBy(e.target.innerText)}>Listen</Dropdown.Item>
                    <Dropdown.Item onClick={(e) => props.setSortBy(e.target.innerText)}>Singer</Dropdown.Item>
                </>
            case 1:
                return <>
                    <Dropdown.Item onClick={(e) => props.setSortBy(e.target.innerText)}>Id</Dropdown.Item>
                    <Dropdown.Item onClick={(e) => props.setSortBy(e.target.innerText)}>Name</Dropdown.Item>
                    <Dropdown.Item onClick={(e) => props.setSortBy(e.target.innerText)}>Like</Dropdown.Item>
                    <Dropdown.Item onClick={(e) => props.setSortBy(e.target.innerText)}>Topic</Dropdown.Item>
                </>
            case 2:
                return <>
                    <Dropdown.Item onClick={(e) => props.setSortBy(e.target.innerText)}>Id</Dropdown.Item>
                    <Dropdown.Item onClick={(e) => props.setSortBy(e.target.innerText)}>Name</Dropdown.Item>
                    <Dropdown.Item onClick={(e) => props.setSortBy(e.target.innerText)}>Like</Dropdown.Item>
                    <Dropdown.Item onClick={(e) => props.setSortBy(e.target.innerText)}>Songs</Dropdown.Item>
                </>
            case 3:
                return <>
                    <Dropdown.Item onClick={(e) => props.setSortBy(e.target.innerText)}>Id</Dropdown.Item>
                    <Dropdown.Item onClick={(e) => props.setSortBy(e.target.innerText)}>Gender</Dropdown.Item>
                    <Dropdown.Item onClick={(e) => props.setSortBy(e.target.innerText)}>Age</Dropdown.Item>
                    <Dropdown.Item onClick={(e) => props.setSortBy(e.target.innerText)}>UserName</Dropdown.Item>
                    <Dropdown.Item onClick={(e) => props.setSortBy(e.target.innerText)}>Email</Dropdown.Item>
                </>

        }

    }
    return (
        <div className='Sort'>
            <InputGroup>
                <InputGroup.Text>Sắp xếp theo:</InputGroup.Text>

                <DropdownButton variant="outline-secondary" title={props.SortBy} >
                    {SortOptions()}
                </DropdownButton>

                <Button variant="outline-secondary" onClick={() => SortIConToggle()}>
                    {props.ASC ? <FaSortAmountDownAlt /> : <FaSortAmountUpAlt />}
                </Button>
            </InputGroup>
        </div>
    );
}

export default Sort;