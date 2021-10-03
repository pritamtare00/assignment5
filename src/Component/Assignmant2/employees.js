import React from 'react';
class Employees extends React.Component{
    constructor(props){
        super(props);
        this.state={
            employees:[
                {
                    name:"lorem ipsum",
                    skills:"UI",
                    company:"lorem",
                },
                {
                    name:"lorem",
                    skills:"js",
                    company:"ipsum",
                },
                {
                    name:"test",
                    skills:"Sales",
                    company:"lorem",
                },
            ]
        }
    }
    render(){
        return(
            <>
            <thead>
                <tr>
                <th>Name</th>
                <th>skills</th>
                <th>company</th>
                </tr>
            </thead>
            <tbody>
            {this.state.employees.map((item,index) =>(
                <tr >
                    <td key="index">{item.name}</td>
                    <td key="index">{item.skills}</td>
                    <td key="index">{item.company}</td>
                </tr>
            ))}
            </tbody>
            </>
        );
    }
}
export default Employees;