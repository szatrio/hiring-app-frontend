import React, { Component } from 'react'
import Header from '../header'
import Cards from './cards'
import axios from 'axios'
import getJwt from '../../helpers/jwt'

export default class Companies extends Component{
    constructor(){
        super()
        this.state = {
            engineersList: [],
        }
    }

    componentDidMount(){
        this.getEngineers('http://localhost:8000/engineer')
    }

    getEngineers(url){
        const jwt = getJwt()
        console.log(jwt,"kkkkkkkkkkkkkkkkkkkkkkkkk")
        axios.get(url, { headers: { Authorization: `Bearer ${jwt.token}`}})
        .then(res =>{
            // console.log("lllllllllllllllllllll", res.data.data)
            this.setState({
                engineersList : res.data.response
            })
        })
        .catch(err =>{
            this.setState({
                engineersList : 'not found'
            })
        })
    }

    render(){
        // console.log(this.state)
        return(
            <>
                <Header />
                <Cards list= {this.state.engineersList}/>
            </>
        )
    }
}