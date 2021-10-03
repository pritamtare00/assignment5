import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import Employee from './Employee';
class Photo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            type:"photo",
            data:[],
            update:true
         }
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
        this.getDataPhoto()
    }

  
    render() {
        return (  
            <>
            <h1>Photo List</h1>
            <Button onClick={()=>this.setState({update:false})}>Toggle</Button>
         
            {(this.state.update) && (
                <>
                          <table>
                <tr>
                    <th>title</th>
                    <th>url</th>
                    <th>thumbnailUrl</th>
                </tr>
            {this.state.data?.map((user, index) => {
                return (<tr key={index}>
                    <td>{user.title}</td>
                    <td>{user.url}</td>
                    <td>{user.thumbnailUrl}</td>
                </tr>)
            })}
                        </table>
                </>
            )}
            {!this.state.update &&<Employee/>}

            </>
        );
    }
}
 
export default Photo;