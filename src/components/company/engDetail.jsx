import { Table, Container, Card, Row, Col, Button,Modal, ButtonToolbar } from 'react-bootstrap'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import Header from '../header'
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import "../../styles/detail.css"
import { connect } from 'react-redux'
import { engDetail } from '../../public/redux/actions/engineers'
import { comProject, updateComProject } from '../../public/redux/actions/companyProject'

let img =  [
    require("../../assets/img/photo1.jpg"),
    require("../../assets/img/photo2.jpg"),
    require("../../assets/img/photo3.jpg"),
    require("../../assets/img/photo5.jpg")
]


class EngineerProfile extends Component {

    constructor(){
        super()
        this.state = {
            hireShow: false,
            
        }
    }

    componentDidMount(){
        // this.engineerProfile(process.env.REACT_APP_BASE_URL+``+this.props.match.params.id_engineer)
        this.props.dispatch(engDetail(this.props.match.params.id_engineer))
        this.props.dispatch(comProject())

        // console.log(this.props,"ini props detail")
        // console.log(this.state,"ini state detail")
    }
    
    getUsername(name){
        return name.toString().join(" ")
    }

    handleShow=()=>{
        this.setState({
            hireShow: true,
        })
    }

    handleClose=()=>{
        this.setState({
            hireShow: false
        })
    }

    handleSelectProject(i){
        // e.preventDefault()
        const project = this.props.companyProject.projects.filter(f=> f.id_project == i)[0]
        console.log(project,"ini name project")
        const data = {
            name_project: project.name_project,
            status: 'Sent',
            id_company: project.id_company,
            id_engineer: this.props.engineer.engineer.id_engineer,
        } 
        this.props.updateComProject(data, i)
        this.props.history.push("/company/project/")
    }

    render() {
        console.log(this.props,"ini props detail")
        console.log(this.state,"ini state detail")
        let eng = this.props.engineer.engineer
        let projects = this.props.companyProject.projects.filter(e => e.id_engineer == undefined)
        return (
            <>
            <Header history={this.props.history}/>
                <Modal show={this.state.hireShow} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Select your project</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Table responsive striped bordered hover>
                            <thead id="theadproject">
                                <tr>
                                    <th>Project Name</th>
                                </tr>
                            </thead>
                            {projects.map(p =>(
                                <tbody key={p.id_project} onClick={()=>this.handleSelectProject(p.id_project)}>
                                    <tr>
                                        <td>{p.name_project}</td>
                                    </tr>
                            </tbody>
                            ))} 
                            </Table>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
                <div id="coverdetail">
                    <Container className="m-4">
                        <Row>    
                            <Col>
                                <div id="cardProfile">
                                    <img src={img[Math.floor(Math.random() * img.length)]} alt="" id="cardImg"/>                            
                                </div>
                                <div id="bottomOfPp">
                                    <Button variant="light" id="hireme" onClick={this.handleShow}>
                                        Hire Me
                                    </Button>
                                </div>
                            </Col>
                            <Col id="colRight">
                                <h1>
                                    {eng.name}
                                </h1>
                                <h5>
                                    {eng.description}
                                </h5>
                                <p className="mt-5">
                                I worked more than 8 years in Software Industry. Widely recognized as the most comprehensive and rigorous full-stack developer in the country. 
                                <br /> <br />
                                I work as Virtual Interim CTO and Full Stack Lead developer, seeking for a  new opportunities.
                                </p>
                                <p className="mt-5">
                                    Skills:
                                    <br />
                                    {eng.skills?
                                    eng.skills:
                                    <p>No Data</p>}
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
}
const mapStateToProps = state => ({
    engineer: state.engineers,
    companyProject: state.companyProject
})

const mapDispatchToProps = dispatch => ({
    updateComProject,
    comProject,
    engDetail,
    dispatch                
 })

export default connect(mapStateToProps, mapDispatchToProps)(EngineerProfile)