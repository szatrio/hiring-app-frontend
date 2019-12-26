import React, { Component } from 'react'
import axios from 'axios'
import getJwt from '../../helpers/jwt'

class addCompanyProfile extends Component{
    constructor(){
        super()
        this.state = {
            id_user: '',
            name : '',
            logo : '',
            description : '',
            location : '',
        }
    }
    
    handleCreate(e){
        e.preventDefault()
        const jwt = getJwt()
        const api = 'http://localhost:8000/company'
        const data = {
            name: this.state.name,
            location: this.state.location,
            logo: this.state.logo,
            description: this.state.description
        }
        console.log(jwt.id_user,"uuuuuuuuuuuuuuu")
        axios.post(api, data, { headers: { Authorization: `Bearer ${jwt.token}`, id_user: jwt.id_user}})
        .then(res => {
            // console.log()
            this.setState({id_user: jwt.id_user})
            this.props.history.push("/engineers");
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        console.log(this.state,"pokopkpkpkpkok")
        return (
          <>
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col">
                    <div className="card  mr-4 ml-4">
                        <div className="card-header">
                            <h3>Fill out your company info</h3>
                        </div>
                        <div className="card-body mr-4 ml-4">
                            <form method="POST" onSubmit={(e)=>this.handleCreate(e)}>
                                <div className="form-group">
                                    <div className="form-label">
                                        Name
                                    </div>
                                    <input className="form-control"
                                    name="name"
                                    type="text"
                                    onChange={(e)=> { this.setState({ name: e.target.value })}}
                                    required
                                    >                                       
                                    </input>
                                </div>
                                <div className="form-group">
                                    <div className="form-label">
                                        Description
                                    </div>
                                    <input className="form-control"
                                    as="textarea"
                                    name="name"
                                    type="text"
                                    onChange={(e)=> { this.setState({ description: e.target.value })}}
                                    required
                                    >                                       
                                    </input>
                                </div>
                                <div className="form-group">
                                    <div className="form-label">
                                        Location
                                    </div>
                                    <input className="form-control"
                                    name="location"
                                    type="text"
                                    onChange={(e)=> { this.setState({ location: e.target.value })}}
                                    required
                                    >                                       
                                    </input>
                                </div>
                                <div className="form-group">
                                    <div className="form-label">
                                        Logo
                                    </div>
                                    <input className="form-control"
                                    name="logo"
                                    type="text"
                                    onChange={(e)=> { this.setState({ logo: e.target.value })}}
                                    required
                                    >                                       
                                    </input>
                                </div>
                                <button type="submit" className="btn btn-primary p-">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          </>
        )
      }
    }
    


export default addCompanyProfile