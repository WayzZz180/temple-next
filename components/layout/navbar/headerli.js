import React from 'react'
// import styles from '/headerli.module.sass'
import Link from 'next/link'
import Dropdown from 'react-bootstrap/Dropdown';

export default function Headerli ({number='number', text='text'}){
    return(
        <>
            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        </>
    )
}