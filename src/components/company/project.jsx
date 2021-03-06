import React, { Component } from 'react'
import Header from '../header'
import { Button, Table, Card, Row, Col } from 'react-bootstrap'
import "../../styles/engineer/engineers.css"
import comProject from '../../public/redux/actions/companyProject'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class companyProject extends Component{
    
    componentDidMount(){
        this.props.dispatch(comProject())
    }

    render(){
        console.log(this.props)
        let projects = this.props.companyProject.projects
        return(
            <>
                <Header history={this.props.history} />
                    <Card lg="5" className="m-4 p-4 text-dark" >
                        <h4>
                            Company Projects
                        </h4>
                            <Row>
                                <Col>
                                    <div className="mr-auto mb-3 mt-3">
                                        Total : {projects.length}
                                    </div>
                                </Col>
                                    <div className="ml-auto mb-3 mt-3 mr-3">
                                        <Link to="/company/project/add">
                                            <Button variant="success">
                                                Add project
                                            </Button>
                                        </Link>
                                    </div>
                            </Row>
                    <div id="scrollTable">
                    <Table responsive striped bordered hover>

                        <thead id="theadproject">
                            <tr>
                                <th>Project Name</th>
                                <th>Engineer</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        {projects.map(p =>(
                            <tbody key={p.id_project}>
                                <tr>
                                    <td>{p.name_project}</td>
                                    <td>{p.engineer ? p.engineer: <p>No data</p>}</td>
                                    <td>{p.status}</td>
                                 
                                </tr>
                        </tbody>
                        ))} 
                         </Table>
                        </div>
                    </Card>   
            </>
        )
    }
}

const mapStateToProps = state =>({
    companyProject: state.companyProject
})

const mapDispatchToProps = dispatch => ({
    comProject,
    dispatch                
 })

export default connect(mapStateToProps, mapDispatchToProps)(companyProject)