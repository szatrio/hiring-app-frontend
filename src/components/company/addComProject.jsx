import React, { Component } from 'react'
import Header from '../header'
import { Button, Table, Card, Row, Col, Form } from 'react-bootstrap'
import "../../styles/engineer/engineers.css"
import { addComProject } from '../../public/redux/actions/companyProject'
import {connect} from 'react-redux'

class addCompanyProject extends Component{
    

    // handleGoToAddProject(){
    //     this.props.history.push(`/company/project/add`)
    // }

    render(){
        console.log(this.props)
        return(
            <>
                <Header history={this.props.history} />
                <Row className="justify-content-md-center">
                    <Col md="5" >
                        <Card lg="5" className="m-4 p-4 text-dark" >
                            <h4>
                                Add Project
                            </h4>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Project Name</Form.Label>
                                    <Form.Control type="text"/>
                                </Form.Group>
                            </Form>
                            <div className="ml-auto">
                                <Button variant="success">
                                    Save
                                </Button>
                            </div>
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

const mapDispatchToProps = dispatch => ({
    addComProject,
    dispatch                
 })

export default connect(mapStateToProps, mapDispatchToProps)(addCompanyProject)