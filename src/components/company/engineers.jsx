import React, { Component } from 'react'
import Header from '../header'
import '../../styles/engineers.css'
// import { Card } from 'react-bootstrap'
// import axios from 'axios'


class Engineers extends Component{
   
    
    
    
    render(){
       return(
        <div>
            <Header />
            <div className="card" id="cardProfile">
                <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="card-img-top" alt=""></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
       )
   }
}

export default Engineers