import React, {useState} from 'react';
const Employees =(props) =>{
        const [employees, setEmployees] = useState([
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
        ])
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
        {employees.map((item,index) =>(
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
export default Employees;