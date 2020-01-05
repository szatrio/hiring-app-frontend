import React, { Component } from 'react'
import Header from '../header'
import Cards from './cards'
// import Filter from '../filter'
import axios from 'axios'
import getJwt from '../../helpers/jwt'
import { Row, ButtonGroup, Button, DropdownButton, Col, Card, Form, InputGroup, FormControl } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import "../../styles/engineer/engineers.css"

import { connect } from 'react-redux'


class Engineers extends Component{
    constructor(){
        super()
        this.state = {
            engineersList: [],
            pages: [],
            total: [],
            page: 1,
            sort_by: 'date_updated',
            order: 'ASC',
            searchName: '',
            searchSkill: '',
            limit: 5,
            id_engProfile: ''
        }
    }

    componentDidMount(){
        this.getEngineers('http://localhost:8000/engineer?limit=5&page=1')
        console.log(this.props,"ini comp")
    }

    searchName = (e) => {
        this.setState({searchName: e})
        this.setData( "name="+e, this.state.searchSkill, this.state.sort_by, this.state.order, this.state.limit, this.state.page )
    }
    
    searchSkill = (e) => {
        this.setState({searchSkill: e})
        this.setData( this.state.searchName, "skill="+e, this.state.sort_by, this.state.order, this.state.limit, this.state.page)
    }
    
    sort_by = (e) => {
        // console.log(e, "eeeeee")
        this.setState({sort_by: e})
        this.setData( this.state.searchName, this.state.searchSkill, e, this.state.order, this.state.limit, this.state.page)
    }

    order = (e) => {
        // console.log(e, "eeeeee")
        this.setState({order: e})
        this.setData( this.state.searchName, this.state.searchSkill, this.state.sort_by, e, this.state.limit, this.state.page)
    }

    // limit = (e) => {
    //     console.log(e, "eeeeee")
    //     this.setState({limit: e})
    //     this.setData( this.state.searchName, this.state.searchSkill, this.state.sort_by, this.state.order, 'limit='+e, this.state.page)
    // }

    limit = (e) => {
        console.log("fffffffffff")
        if(e === 'minus'){
            this.setState({limit: this.state.limit-1})
        }else if(e === 'plus'){
            this.setState({limit: this.state.limit+1})
        }
        this.setData( this.state.searchName, this.state.searchSkill, this.state.sort_by, this.state.order, this.state.limit, this.state.page)
    }

    page = (e) => {
        // console.log(e)
        if(e === 'prev'){
            this.setState({page: this.state.page-1})
        }else if(e === 'next'){
            this.setState({page: this.state.page+1})
        }
        this.setData( this.state.searchName, this.state.searchSkill, this.state.sort_by, this.state.order, this.state.limit, this.state.page)
    }


    getProfile = (e) =>{
        // let url = `http://localhost:8000/engineer/${e}` 
        // { headers: { Authorization: `Bearer ${getJwt().token}`}})
        this.setState({ id_engProfile : e})
        this.props.history.push(`/engineer/detail/${e}`)
    }

    getEngineers(url){
        const jwt = getJwt()
        console.log(url,'ini URL')
        // console.log(jwt,"kkkkkkkkkkkkkkkkkkkkkkkkk")
        axios.get(url, { headers: { Authorization: `Bearer ${jwt.token}`}})
        .then(res =>{
            console.log("lllllllllllllllllllll", res.data)
            this.setState({
                pages: res.data.pages,
                total: res.data.total,
                engineersList : res.data.response,
            })
            // console.log(this.state.pages,"kkkkkkkkkkkjjj")
        })
        .catch(err =>{
            this.setState({
                engineersList : 'not found'
            })
        })
    }

    setData = ( searchName, searchSkill, sort_by, order, limit, page ) => {
        console.log(searchSkill)       
        this.getEngineers(`http://localhost:8000/engineer?${searchName}&limit=${limit}&page=${page}&${searchSkill}&sort_by=${sort_by}&order=${order}`)
    }
    // +'&page=1&sort_by='+sort_by+'&order='+order+'&limit='+limit
    // console.log(search,"lllllllllll", )

    render(){
        console.log(this.state,"ini state dari egineers")
        console.log(this.props,"ini props dari redux")
        return(
            <>
                <Header history={this.props.history} getDataFromHeader={this.searchName} searchBar={true} />
                    <Card className="m-4 text-center"> 
                            <Form.Row  className="m-4">
                                <InputGroup as={Col} md="4">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="searchbarskill"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl onChange={(e) => {this.searchSkill(e.target.value)}} type="text" placeholder="Search by Skill"  />
                                </InputGroup>
                                <InputGroup as={Col} className="ml-auto">
                                    <DropdownButton variant="dark" id="dropdown-basic-button" title="Sort by">
                                        <option onClick={(e) => {this.sort_by(e.target.value)}} value="date_updated"> Date Updated</option>
                                        <option onClick={(e) => {this.sort_by(e.target.value)}} value="date_created"> Date Created</option>
                                        <option onClick={(e) => {this.sort_by(e.target.value)}} value="name"> Name</option>
                                        <option onClick={(e) => {this.sort_by(e.target.value)}} value="skill"> Skill</option>                                    
                                    </DropdownButton>
                                </InputGroup>
                                <InputGroup as={Col} className="ml-auto">
                                    <DropdownButton variant="dark" id="dropdown-basic-button" title="Order">
                                        <option onClick={(e) => {this.order(e.target.value)}} value="ASC"> Ascending</option>
                                        <option onClick={(e) => {this.order(e.target.value)}} value="DESC"> Descending</option>                                    
                                    </DropdownButton>
                                </InputGroup>
                                {/* <InputGroup as={Col} className="mr-auto" md="2">
                                    <FormControl onChange={(e) => {this.limit(e.target.value)}} type="text" placeholder="Limit per page" id="searchbar" />
                                </InputGroup> */}
                                {/* <Col md='4' className="ml-auto">
                                    <ButtonGroup>
                                        <Button variant="dark" onClick={(e) => {this.limit(e.target.name)}} name="minus">-</Button>
                                        <Button variant="outline-dark" className="pr-5 pl-5" disabled >
                                        {this.state.limit}
                                        </Button>
                                        <Button variant="dark" onClick={(e) => {this.limit(e.target.name)}} name="plus">+</Button>
                                    </ButtonGroup>
                                 </Col> */}
                                 <InputGroup as={Col} className="ml-auto">

                                    <ButtonGroup id="pagebar">
                                        <Button variant="dark" onClick={(e) => {this.page(e.target.name)}} name="prev">Prev</Button>
                                        <Button variant="outline-dark" disabled id="pagenav">
                                        {/* {(this.state.pages >= 0)?
                                        <>
                                            Data not found
                                        </>
                                        :
                                        (this.state.pages === 1)?
                                        <>
                                            1
                                        </>
                                        :
                                        <>
                                            {this.state.page} from {this.state.pages} 
                                        </>
                                        }     */}
                                        {this.state.page} from {this.state.pages}
                                        </Button>
                                        {this.state.page >= this.state.pages?
                                        <Button variant="dark" name="next" disabled>Next</Button>
                                        :
                                        <Button variant="dark" onClick={(e) => {this.page(e.target.name)}} name="next">Next</Button>
                                        }
                                    </ButtonGroup>
                                 </InputGroup>
                                 <InputGroup as={Col} className="ml-2">
                                    <div className="mt-1 ml-2">
                                        <strong>                                        
                                            {this.state.total} results
                                        </strong>  
                                    </div> 
                                 </InputGroup>
                            </Form.Row>
                    </Card>
                <Cards list= {this.state.engineersList} getDataFromCard={(e) => this.getProfile(e)}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    // let id = ownProps.match.params.id_engineer
    return{
        engineers: state.engineers 
    }
  }



export default connect(mapStateToProps)(Engineers)