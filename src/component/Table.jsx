import {Table} from 'react-bootstrap';
import React, {useState} from 'react';
import TableBody from './TableBody';
import Search from './Search';
import env from '../env.json';
import {players} from './data'


export default function TableElem() {
    const [state, setState] = useState(players);
    function searchMembers(event) {
        let input = event.target.value.toLowerCase();
        fetch(env.urlBack, {
            method: 'POST',
            header: {
                'Content-type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify({
                action: 7,
                text: input
            })
        })
            .then(res => res.json())
            .then(res => {
                setState(res)
            })

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

    return (
        <>
            <Search searchMember={searchMembers}/>
            <Table striped bordered hover className="text-center table-secondary">
                <thead>
                <tr>
                    <th onClick={() => requestToServer({action: 1})}>Position</th>
                    <th onClick={() => requestToServer({action: 2})}>Number</th>
                    <th onClick={() => requestToServer({action: 3})} style={{width: '40%'}}>Name</th>
                    <th onClick={() => requestToServer({action: 4})}>Country</th>
                    <th onClick={() => requestToServer({action: 5})}>Miss</th>
                    <th onClick={() => requestToServer({action: 6})}>Shooting time</th>
                    <th onClick={() => requestToServer({action: 1})}>Finish time</th>
                </tr>
                </thead>
                <TableBody array={state}/>
            </Table>
        </>
    )
}