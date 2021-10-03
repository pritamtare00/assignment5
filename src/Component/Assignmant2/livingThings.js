import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
class LivingThings extends React.Component{
   
    render(){
        return(
            <div>
                 <h1>Living Things with Function </h1>
            <Button><NavLink exact to="/animalClass">Animals</NavLink></Button>
            <Button><NavLink exact to="/birdClass">Bird</NavLink></Button>
            <Button><NavLink exact to="/employeeClass">Employee</NavLink></Button>
            <Button><NavLink exact to="/userClass">Users</NavLink></Button>
            </div>
            
        )
    }
}
export default LivingThings;