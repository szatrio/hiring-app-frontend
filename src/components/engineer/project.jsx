import React, { Component } from 'react'
import Header from '../header'
import axios from 'axios'
import getJwt from '../../helpers/jwt'
import { Button, Table, Card } from 'react-bootstrap'
import "../../styles/engineer/engineers.css"

export default class engProject extends Component{
    constructor(){
        super()
        this.state = {
            projectsList: [],
            id_engineer: ''
        }
        this.getIdEngineer()
    }

    getIdEngineer(){
        const jwt = getJwt()
        axios.get('http://localhost:8000/engineer', { headers: { Authorization: `Bearer ${jwt.token}`}})
                .then(eng=>{
                    // console.log(eng.data.response,"ini data engnineer dan jwt user", jwt.id_user)
                    let id = eng.data.response.filter((eng)=> eng.id_user == jwt.id_user)[0].id_user
                    this.setState({
                        id_engineer : id
                    })
                })
                .catch(err =>{
                    this.setState({
                        id_engineer : 'not found'
                    })
                })
    }

    componentDidMount(){
            this.getEngProjects('http://localhost:8000/project')
    }

    
    getEngProjects(url){
        const jwt = getJwt()
        axios.get(url, { headers: { Authorization: `Bearer ${jwt.token}`}})
        .then(res =>{
            console.log("ini res data", res.data.data)
            this.setState({
                    projectsList : res.data.data.filter((p) => p.id_engineer == 1)
            })
        })
        .catch(err =>{
            this.setState({
                projectsList : 'not found'
            })
        })
    }

    replyProject(p){
        console.log(p)
        const data = {
            "name_project":p.name_project,
            "status": "completed",
            "id_company":p.id_company,
            "id_engineer":p.id_engineer
        }         
        axios.patch('http://localhost:8000/project/'+p.id_project, data, { headers: { Authorization: `Bearer ${getJwt().token}`}})
    }

    render(){
        console.log(this.state,"ini state")
        return(
            <>
                <Header />
                    <Card lg="5" className="m-4 p-4 text-dark" >
                        <h4>
                            Received Projects
                        </h4>
                    <Table responsive>
                    <thead>
                        <tr>
                            <th>Project Name</th>
                            <th>From</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {this.state.projectsList.map(p =>(
                        <tbody key={p.id_engineer == this.state.id_engineer}>
                            <tr>
                                <td>{p.name_project}</td>
                                <td>{p.company}</td>
                                <td>{p.status}</td>
                                <td>
                                    <Button variant="warning" onClick={() => {this.replyProject(p)}}>
                                        Do
                                    </Button>
                                    {/* <Button className="ml-3" variant="danger" onClick={this.replyProject(p.id_project, p.target.value)}>
                                        Decline
                                    </Button> */}
                                </td>
                            </tr>
                       </tbody>
                    ))}
                    </Table>
                    </Card>   
            </>
        )
    }
}