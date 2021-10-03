import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import Photo from './Photo';
class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            type:"employee",
            data:[],
            update:true
         }
    }

    getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users").then((jsonData) => {
            console.log(jsonData)
            if (jsonData.status === 200)
                return jsonData.json()
        }).then((objectData) => {
            this.setState({ data: [...objectData] })
            // console.log(objectData)
            return objectData
        }).catch((err) => {
            console.log(err);
        })
    }

    getDataPhoto = () => {
        fetch("https://jsonplaceholder.typicode.com/photos").then((jsonData) => {
                console.log(jsonData)
                if (jsonData.status === 200)
                    return jsonData.json()
            }).then((objectData) => {
                this.setState({ data: [...objectData] })
                // console.log(objectData)
                return objectData
            }).catch((err) => {
                console.log(err);
            })
        }

    componentDidMount() {
        this.state.update && this.getData()
    }

    render() {
        return (  
            <>
            <h1>Employee List</h1>
            <Button onClick={()=>this.setState({update:false})}>Toggle</Button>
            {(this.state.update) && (
              <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>company</th>
                    <th>Phone no</th>
                    <th>Website</th>
                </tr>
            {this.state.data?.map((user, index) => {
                return (<tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.address.street}</td>
                    <td>{user.company.name}</td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                </tr>)
            })}
         </table>

            )}

           {!this.state.update && <Photo/>}

            </>
        );
    }
}
 
export default Employee;