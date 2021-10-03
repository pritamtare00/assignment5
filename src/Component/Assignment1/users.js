import React, {useState} from 'react';
const Users =(props) =>{
        const [users, setUsers] = useState([
            {
                name:"lorem ipsum",
                age:30,
                gender:"Female",
            },
            {
                name:"john",
                age:23,
                gender:"Male",
            },
            {
                name:"leena",
                age:25,
                gender:"Female",
            },
        ])
    return(
        <>
        <thead>
            <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            </tr>
        </thead>
        <tbody>
        {users.map((item,index) =>(
            <tr >
                <td key="index">{item.name}</td>
                <td key="index">{item.age}</td>
                <td key="index">{item.gender}</td>
            </tr>
        ))}
        </tbody>
       </>
    );
}
export default Users;