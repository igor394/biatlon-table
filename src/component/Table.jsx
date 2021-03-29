import {players} from '../data/playersData';
import {Table} from 'react-bootstrap';
import React, {useState} from 'react';
import TableBody from './TableBody';
import Search from './Search';


export default function TableElem() {
    const [state, setState] = useState(players);
    const [check, setCheck] = useState(0);

    function searchMembers(event) {
        let input = event.target.value.toLowerCase();
        setState([...players.filter(item => item['name'].toLowerCase().includes(input))]);
    }

    const filterNumber = (arr, arg) => {
        return arr.sort((a, b) => a[arg] - b[arg]);
    }
    const filterNumberBack = (arr, arg) => {
        return arr.sort((a, b) => b[arg] - a[arg]);
    }
    const filterString = (arr, arg) => {
        return arr.sort((a, b) => (a[arg] < b[arg]) ? -1 : 1);
    }
    const filterStringBack = (arr, arg) => {
        return arr.sort((a, b) => (a[arg] > b[arg]) ? -1 : 1);
    }

    function clickPosition() {
        if (check % 2 === 0) {
            setState([...filterNumberBack(state, 'id')]);
        } else {
            setState([...filterNumber(state, 'id')]);
        }
    }

    function clickName() {
        if (check % 2 === 0) {
            setState([...filterString(state, 'name')]);
        } else {
            setState([...filterStringBack(state, 'name')]);
        }
    }

    function clickCountry() {
        if (check % 2 === 0) {
            setState([...filterString(state, 'country')]);
        } else {
            setState([...filterStringBack(state, 'country')]);
        }
    }

    function clickNumber() {
        if (check % 2 === 0) {
            setState([...filterNumber(state, 'number')]);
        } else {
            setState([...filterNumberBack(state, 'number')]);
        }
    }

    function clickMiss() {
        if (check % 2 === 0) {
            setState([...filterNumber(state, 'miss')]);
        } else {
            setState([...filterNumberBack(state, 'miss')]);
        }
    }

    function clickShooting() {
        if (check % 2 === 0) {
            setState([...filterNumber(state, 'timeShoots')]);
        } else {
            setState([...filterNumberBack(state, 'timeShoots')]);
        }
    }

    return (
        <>
            <Search searchMember={searchMembers}/>
            <Table striped bordered hover className="text-center table-secondary">
                <thead>
                <tr onClick={() => setCheck(check + 1)}>
                    <th onClick={clickPosition}>Position</th>
                    <th onClick={clickNumber}>Number</th>
                    <th onClick={clickName} style={{width: '40%'}}>Name</th>
                    <th onClick={clickCountry}>Country</th>
                    <th onClick={clickMiss}>Miss</th>
                    <th onClick={clickShooting}>Shooting time</th>
                    <th onClick={clickPosition}>Finish time</th>
                </tr>
                </thead>
                <TableBody array={state}/>
            </Table>
        </>
    )
}