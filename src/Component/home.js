import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from "react-bootstrap"


export default function Home() {
    return (
        <div>
            <Button><NavLink to="/livingFunction">Function Living Things</NavLink></Button>
            <Button><NavLink to="/livingClass">Class Living Things</NavLink></Button>

        </div>
    )
}
