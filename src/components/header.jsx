import React, { Component } from 'react'
import '../styles/header.css'
import arkademy from '../assets/img/arkademy-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faBell } from '@fortawesome/free-solid-svg-icons'
import SearchField from './searchfilter'
// import getJwt from '../helpers/jwt'
// import { useHistory } from "react-router-dom";


class header extends Component{
    
    
    // handleLogout = () =>{
    //     // console.log(localStorage)
    //     // const history = useHistory()
    //     localStorage.removeItem('token')
    //     localStorage.removeItem('id_user')
    //     localStorage.removeItem('email')
    //   }

    setDataFromSearch = (searchData) => {
        this.props.getDataFromHeader(searchData) 
      }
    render(){
       
        return(
            <div>
             <nav className="navbar navbar-expand-lg navbar-light bg-light p">
                    <div>    
                        <img src={arkademy} width="100" alt="navbar"></img>
                    </div>
                    <div className="input-group">
                        {/* <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                            <FontAwesomeIcon icon={faSearch} />
                            </span>
                        </div> */}
                        {this.props.searchBar === true ?
                        <SearchField getDataFromSearch={this.setDataFromSearch} onChange={this.setDataFromSearch}  />   
                        :
                            <div></div>
                        }
                        </div>
                    <div className="navbar-nav ml-4 mr-auto">
                        <p className="text-dark mt-3">Home</p>
                        <img src="https://www.pinterpolitik.com/wp-content/uploads/2018/02/Photo-Soekarno.jpg" className="ml-4" alt="" id="profilepic"/>
                        <p className="text-dark ml-2 mt-3">Nama</p>
                        <div className="ml-4 mr-4" id="GrayLine"></div>
                        <div className="mt-3 ml-4">
                            <FontAwesomeIcon icon={faCommentDots} size="lg"/>
                        </div>
                        <div className="mt-3 ml-4 mr-4">
                            <FontAwesomeIcon icon={faBell} size="lg"/>
                        </div>
                        {/* <p onClick={this.handleLogout} className="text-dark ml-2 mt-3">Logout</p> */}
                    </div>
             </nav>
             
        </div>
       )
   }
}

export default header