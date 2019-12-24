import React, { Component } from 'react'
import '../styles/login.css'
import whitelogo from '../assets/img/Arkademy-Putih.svg'
import hirevector from '../assets/img/vector-hiring.png'

class Login extends Component{
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
                            Login
                        </h1>
                        <form className="mt-5 ml-4 mr-4 pt-4">
                            <div className="form-group">
                                <label className="text-dark" for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email"></input>
                            </div>
                            <div className="form-group">
                                <label className="text-dark" for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="InputPassword" placeholder="Password"></input>
                            </div>
                            <div className="text-dark text-right">
                                <a href="/">
                                    Forgot Password?
                                </a>
                            </div>
                            <button type="submit" class="btn btn-block text-light p-2 mt-4" id="btn-login">Login</button>
                        </form>
                        <div className="mt-1 ml-4 mr-4 pt-4">
                            <button href="/" class="btn btn-block p-2 mt-2" id="btn-register">Register</button>
                        </div>
                    </div>
            </div>
        </div>
       )
   }
}

export default Login