import React, { Component } from 'react'
import Header from '../header'
import Cards from './cards'
import axios from 'axios'
import getJwt from '../../helpers/jwt'

export default class Companies extends Component{
    constructor(){
        super()
        this.state = {
            companiesList: [],
        }
    }

    componentDidMount(){
        this.getCompanies('http://localhost:8000/company')
    }

    getCompanies(url){
        const jwt = getJwt()
        console.log(jwt,"kkkkkkkkkkkkkkkkkkkkkkkkk")
        axios.get(url, { headers: { Authorization: `Bearer ${jwt.token}`}})
        .then(res =>{
            // console.log("lllllllllllllllllllll", res.data.data)
            this.setState({
                companiesList : res.data.data
            })
        })
        .catch(err =>{
            this.setState({
                companiesList : 'not found'
            })
        })
    }

    render(){
        // console.log(this.state)
        return(
            <>
                <Header />
                <Cards list= {this.state.companiesList}/>
            </>
        )
    }
}