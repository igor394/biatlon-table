import {Table} from 'react-bootstrap';
import React, {useState} from 'react';
import TableBody from './TableBody';
import Search from './Search';
import env from '../env.json';
import {players} from './data'


export default function TableElem() {
    const [state, setState] = useState(players);
    const [check, setCheck] = useState(0);

    function searchMembers(event) {
        let input = event.target.value.toLowerCase();
        setState([...players.filter(item => item['name'].toLowerCase().includes(input))]);
    }
    function requestToServer(action) {
        fetch(env.urlBack, {
            method: 'POST',
            header: {
                'Content-type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify(action)
        })
            .then(res => res.json())
            .then(res => {
                setState(res)
            })
    }
    function clickPosition() {
        requestToServer({action:1})

    }
    function clickNumber() {
        requestToServer({action:2})
    }

    function clickName() {
        requestToServer({action:3})
    }

    function clickCountry() {
        requestToServer({action:4})
    }

    function clickMiss() {
        requestToServer({action:5})
    }

    function clickShooting() {
        requestToServer({action:6})
    }

    return (
        <>
            <Search searchMember={searchMembers}/>
            <Table striped bordered hover className="text-center table-secondary">
                <thead>
                <tr>
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