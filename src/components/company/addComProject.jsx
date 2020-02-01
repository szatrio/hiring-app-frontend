import React, { Component } from 'react'
import Header from '../header'
import { Button, Table, Card, Row, Col, Form } from 'react-bootstrap'
import "../../styles/engineer/engineers.css"
import { addComProject } from '../../public/redux/actions/companyProject'
import {connect} from 'react-redux'
import getUser from '../../helpers/jwt'
import Axios from 'axios'

class addCompanyProject extends Component{
    
    constructor(){       
        super()
        this.state = {
          name_project: null,
          id_company: null
        }
      }

    componentDidMount(){
        Axios.get(`http://${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/company`, { headers: { Authorization: `Bearer ${getUser().token}`}})
        .then(res=>{
            let id = res.data.data.filter(e => e.id_user == getUser().id_user)[0].id_company
            this.setState({
                id_company: id
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
      
    handleAddProject(e){
        e.preventDefault()
        const data = {
            name_project: this.state.name_project,
            status: 'Engineer Needed',
            id_company: this.state.id_company,
            id_engineer: '',
        } 
        this.props.addComProject(data)
        this.props.history.push("/company/project/")
    }

    render(){
        console.log(this.props," iniprops")
        console.log(this.state, "iistate")
        return(
            <>
                <Header history={this.props.history} />
                <Row className="justify-content-md-center">
                    <Col md="5" >
                        <Card lg="5" className="m-4 p-4 text-dark" >
                            <h4>
                                Add Project
                            </h4>
                            <Form method="POST" onSubmit={(e) => this.handleAddProject(e)}>
                                <Form.Group>
                                    <Form.Label>Project Name</Form.Label>
                                    <Form.Control type="text" onChange={ (e) => { this.setState({ name_project: e.target.value })}}/>
                                </Form.Group>
                                <Button className="ml-auto" variant="success" type="submit">
                                    Save
                                </Button>
                            </Form>
                        </Card>   
                    </Col>
                </Row>
            </>
        )
    }
}

const mapStateToProps = state =>({
    companyProject: state.companyProject
})

const mapDispatchToProps = () => ({
    addComProject,
 })

export default connect(mapStateToProps, mapDispatchToProps)(addCompanyProject)