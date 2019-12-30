import React, { Component } from 'react'
import Header from '../header'
import Cards from './engCardProfile'
// import Filter from '../filter'
import axios from 'axios'
import getJwt from '../../helpers/jwt'
import { Row, ButtonGroup, Button, DropdownButton, Col, Card, Form, InputGroup, FormControl,Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import "../../styles/profile.css"

export default class engProfile extends Component{
    constructor(){
        super()
        this.state = {
            engineersList: [],
        }
    }

    componentDidMount(){
        this.getEngineers('http://localhost:8000/engineer/')
    }

    

    getEngineers(url){
        const jwt = getJwt()
        console.log(jwt,"ini local storage")
        axios.get(url, { headers: { Authorization: `Bearer ${jwt.token}`}})
        .then(res =>{
            // console.log(res.data)
            this.setState({
                pages: res.data.pages,
                total: res.data.total,
                engineersList : res.data.response,
            })
            console.log(this.state.pages,"kkkkkkkkkkkjjj")
        })
        .catch(err =>{
            this.setState({
                engineersList : 'not found'
            })
        })
    }

    render(){
        console.log(this.props,"ini props")
        console.log(this.state.engineersList.filter(engineer => engineer.id_user == getJwt().id_user),"ini state")
        return(
            <>
                <Header history={this.props.history}/>
                <Row>
                    <Cards list= {this.state.engineersList}/>
                    {this.state.engineersList.filter(engineer => engineer.id_user == getJwt().id_user).map(engineer => (
                        <Card lg="5" className="m-4 p-4 text-dark" key={engineer.id_user == getJwt().id_user}>
                            <h4>
                                My Profile
                            </h4>
                        <Table responsive>
                            <tbody>
                                <tr>
                                    <td>Name</td>
                                    <td>: {engineer.name}</td>
                                </tr>
                                <tr>
                                    <td>Description</td>
                                    <td>: {engineer.description}</td>
                                </tr>
                                <tr>
                                    <td>Skill</td>
                                    {(engineer.skills)?
                                    <td>: {engineer.skills}</td>
                                    :
                                    <td>: No data</td>
                                    }
                                </tr>
                                <tr>
                                    <td>Location</td>
                                    <td>: {engineer.location}</td>
                                </tr>
                                <tr>
                                    <td>Showcase</td>
                                    {(engineer.showcase)?
                                    <td>: {engineer.showcase}</td>
                                    :
                                    <td>: No data</td>
                                    }
                                </tr>
                                <tr>
                                    <td>Expected Salary</td>
                                    {(engineer.e_salary)?
                                    <td>: {engineer.e_salary}</td>
                                    :
                                    <td>: No data</td>
                                    }
                                </tr>
                                <tr>
                                    <td>Date Created</td>
                                    <td>: {engineer.date_created}</td>
                                </tr>
                                <tr>
                                    <td>Date Updated</td>
                                    <td>: {engineer.date_updated}</td>
                                </tr>
                            </tbody>
                        </Table>
                        </Card>          
                    ))}
                    <Card className="m-4 p-4 text-dark">
                        <Button className="mb-2" variant="warning">Update</Button>
                        <Button className="mb-2" variant="success">Skills</Button>
                        <Button className="mb-2" variant="success">Showcase</Button>
                        <Button className="mb-2" variant="danger">Delete</Button>
                    </Card>
                </Row>
            </>
        )
    }
}