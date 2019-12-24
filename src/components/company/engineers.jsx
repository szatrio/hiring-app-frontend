import React, { Component } from 'react'
import '../../styles/engineers.css'
import arkademy from '../../assets/img/arkademy-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCommentDots, faBell } from '@fortawesome/free-solid-svg-icons'

class Engineers extends Component{
   render(){
       return(
        <div>
             <nav class="navbar navbar-expand-lg navbar-light bg-light p">
                    <div>    
                        <img src={arkademy} width="100" alt="navbar"></img>
                    </div>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">
                            <FontAwesomeIcon icon={faSearch} />
                            </span>
                        </div>
                        <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1"></input>
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
                    </div>
             </nav>
             
        </div>
       )
   }
}

export default Engineers