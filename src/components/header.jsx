import React, { Component } from 'react'
import '../styles/header.css'
import arkademy from '../assets/img/arkademy-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faBell } from '@fortawesome/free-solid-svg-icons'
import SearchField from './searchfilter'
import getLocal from '../helpers/jwt'
import { DropdownButton, Dropdown} from 'react-bootstrap'
import { Link } from "react-router-dom";


class header extends Component{
    
    
    handleLogout = () =>{
        localStorage.clear();
        this.props.history.push("/")
      }

    setDataFromSearch = (searchData) => {
        this.props.getDataFromHeader(searchData) 
      }
    render(){
        let local = getLocal()
        let user = ''
        if(local.userCompany){
            user = JSON.parse(local.userCompany)
        }else{
            user = JSON.parse(local.userEngineer)
        }
        return(
            <div>
             <nav className="navbar navbar-expand-lg navbar-light bg-light p">
                    <div>    
                        <img src={arkademy} width="100" alt="navbar"></img>
                    </div>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                            <div className="input-group">
                                {this.props.searchBar === true ?
                                <SearchField getDataFromSearch={this.setDataFromSearch} onChange={this.setDataFromSearch}  />   
                                :
                                    <div></div>
                                }
                            </div>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="navbar-nav ml-2 mr-auto">
                                <p className="text-dark mt-3">Home</p>
                                <img src="https://www.pinterpolitik.com/wp-content/uploads/2018/02/Photo-Soekarno.jpg" className="ml-4" alt="" id="profilepic"/>
                            <DropdownButton className="text-dark ml-2 mt-2" variant="light" id="dropdown-basic-button" title={user.name}>
                                {local.role == 1 ?
                                (
                                    <>
                                        <Link to="/company/project">
                                            <Dropdown.Item href="#/action-1">My Project</Dropdown.Item>
                                        </Link>
                                    </>
                                ):(
                                    <>
                                        <Link to="/engineer/profile">
                                            <Dropdown.Item href="#/action-1">My Profile</Dropdown.Item>
                                        </Link>
                                        <Link to="/engineer/project">
                                            <Dropdown.Item href="#/action-2">My Project</Dropdown.Item>
                                        </Link>
                                    </>
                                )
                                }
                                <Dropdown.Divider />
                                        <Dropdown.Item href="#/action-3" onClick={this.handleLogout}>
                                            Logout
                                        </Dropdown.Item>
                            </DropdownButton>
                                <div className="ml-3 mr-3" id="GrayLine"></div>
                                <div className="mt-3 ml-4">
                                    <FontAwesomeIcon icon={faCommentDots} size="lg"/>
                                </div>
                                <div className="mt-3 ml-4 mr-4">
                                    <FontAwesomeIcon icon={faBell} size="lg"/>
                                </div>
                            </div>
                        </div>
             </nav>
             
        </div>
       )
   }
}

export default header