import React, { Component } from 'react'
import '../styles/login.css'
import axios from 'axios'
import whitelogo from '../assets/img/Arkademy-Putih.svg'
import hirevector from '../assets/img/vector-hiring.png'
import SweetAlert from 'sweetalert2-react'

class Register extends Component{
   
    constructor(){
        super()
        this.state = {
          email: null,
          password: null,
          role: 1,
          show: false,
        }
      }
    
    handleRegister(e){
        e.preventDefault()
        const api = 'http://localhost:8000/register'
        const data = {
          email: this.state.email,
          password: this.state.password,
          role: this.state.role,
        } 
        axios.post(api, data)
        .then(res => {
          console.log(res)
          this.setState({show: true})
          
        })
        .catch(err => {
          console.log(err)
        })
      }

  

    render(){
       return(
        <div>
            <div className="row" id="ground">              
                    <div className="col col-lg-7 text-center" id="leftBg">
                        <img src={whitelogo} alt="" srcset="" id="whitelogo"/>
                        <img src={hirevector} alt="" srcset="" id="hirevector"/>
                        <h4 className="text-light">
                            <strong>
                                Hire Expert Freelancers for any job, online
                            </strong>
                        </h4>
                        <p className="text-light">
                            Millions of small businesses use Freelancer to turn their ideas to reality
                        </p>
                    </div>
                    <div className="col bg-white">
                        <h1 className="mt-4 ml-4 pb-5 text-left text-dark">
                  
                            Register
                        </h1>
                        <form className="mt-5 ml-4 mr-4 pt-4" method="POST" onSubmit={(e) => this.handleRegister(e)}>
                            <SweetAlert
                                show={this.state.show}
                                title="Registration completed successfully"
                                text="Go to the login page"
                                onConfirm={() => this.setState({ show: false })}
                            />
                            <div className="form-group">
                                <label className="text-dark" for="exampleInputEmail1">Email address</label>
                                <input type="email" name="email" onChange={ (e) => { this.setState({ email: e.target.value })}} className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email" required></input>
                            </div>
                            <div className="form-group">
                                <label className="text-dark" for="exampleInputPassword1">Password</label>
                                <input type="password" name="password" onChange={ (e) => { this.setState({ password: e.target.value })}} className="form-control" id="InputPassword" placeholder="Password" required></input>
                            </div>
                            <div className="form-group">
                            <label className="text-dark" for="exampleInputPassword1">Role</label>
                            <br></br>
                            <div className="custom-control custom-radio custom-control-inline" as="select" name="role" onChange={ (e) => { this.setState({ role: e.target.value })}}>
                                <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" value="1" required></input>
                                <label className="custom-control-label text-dark" for="customRadioInline1">Company</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" value="2" required></input>
                                <label className="custom-control-label text-dark" for="customRadioInline2">Engineer</label>
                            </div>
                            </div>
                            <button type="submit" className="btn btn-block text-light p-2 mt-4" id="btn-login">Submit</button>
                        </form>
                    </div>
            </div>
        </div>
       )
   }
}

export default Register