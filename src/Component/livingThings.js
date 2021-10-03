import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default function Header() {
    return (
        <div>
            <h1>Living Things with Function </h1>
            <Button><NavLink exact to="/animals">Animals</NavLink></Button>
            <Button><NavLink exact to="/birds">Bird</NavLink></Button>
            <Button><NavLink exact to="/employee">Employee</NavLink></Button>
            <Button><NavLink exact to="/users">Users</NavLink></Button>
        </div>
    )
}
