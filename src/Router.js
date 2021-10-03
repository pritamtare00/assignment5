import Animals from "./Component/Assignment1/animals"
import Birds from "./Component/Assignment1/birds"
import Employee from "./Component/Assignment1/employees"
import Users from "./Component/Assignment1/users"
import {  Switch,Route } from "react-router-dom"
import LivingThings from "./Component/livingThings"
import AnimalClass from "./Component/Assignmant2/animals"
import BirdsClass from "./Component/Assignmant2/birds"
import EmployeeClass from "./Component/Assignmant2/employees"
import UsersClass from "./Component/Assignmant2/users"
import LivingThingsClass from "./Component/Assignmant2/livingThings"
import EmployeeList from "./Component/Assignment3/Employee"
import Photo from "./Component/Assignment3/Photo"

export const Router=()=>{
    return(
        <>
        <LivingThings/>

        <Switch>
            <Route exact path="/animals" component={Animals}/>
            <Route exact path="/birds" component={Birds}/>
            <Route exact path="/employee" component={Employee}/>
            <Route exact path="/users" component={Users}/>

           
        </Switch>
        <LivingThingsClass/>
        <Switch>
      
            <Route exact path="/animalClass" component={AnimalClass}/>
            <Route exact path="/birdClass" component={BirdsClass}/>
            <Route exact path="/employeeClass" component={EmployeeClass}/>
            <Route exact path="/userClass" component={UsersClass}/>


        </Switch>
        <EmployeeList/>
        </>
    )

}