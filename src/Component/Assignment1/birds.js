import React, {useState} from 'react';
const Birds =(props) =>{
        const [birds, setBirds] = useState([
            {
                name:"lorem",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            },
            {
                name:"lorem",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            },
            {
                name:"lorem",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            },
        ])
    return(
        <>
        <thead>
            <tr>
            <th>Name</th>
            <th>Descrption</th>
            </tr>
        </thead>
        <tbody>
        {birds.map((item,index) =>(
            <tr >
                <td key="index">{item.name}</td>
                <td key="index">{item.description}</td>
            </tr>
        ))}
        </tbody>
        </>
    );
}
export default Birds;