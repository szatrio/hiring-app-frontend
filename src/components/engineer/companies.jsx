import React, { Component } from 'react'
import Header from '../header'
import Cards from './cards'
import axios from 'axios'

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
        axios.get(url)
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