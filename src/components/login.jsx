import React, { Component } from 'react'
import '../styles/login.css'
import whitelogo from '../assets/img/Arkademy-Putih.svg'
import hirevector from '../assets/img/vector-hiring.png'
import  axios from 'axios'
import SweetAlert from 'sweetalert2-react'
import {Link} from 'react-router-dom'




class Login extends Component{
    constructor(){
        super()
        this.state = {
            email: null,
            password: null,
            role: null,
            show: false
        }
    }
    
    checkRole(role, id_user, token){
        if (role === 1){
            axios.get(`http://${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/company`, { headers: { Authorization: `Bearer ${token}`}})
            .then( res => {
                if(res.data.data.filter(response => response.id_user === id_user).length > 0 ){
                    this.props.history.push("/engineers")
                }else{
                    this.props.history.push("/company/addprofile")
                }
            })
            .catch(err =>{
                console.log(err)
            })
        }
    
        else if(role === 2){
            axios.get(`http://${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/engineer`, { headers: { Authorization: `Bearer ${token}`}})
            .then( res => {
                if(res.data.response.filter(response => response.id_user === id_user).length > 0 ){
                    this.props.history.push("/engineers")
                }else{
                    this.props.history.push("/engineer/addprofile")
                }
            })
            .catch(err =>{
                console.log(err)
            })
        }else{
              console.log("error")
        }
    }

    

    handleLogin(e){
        e.preventDefault()
        const api = `http://${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/user/login`
        const data = {
            email : this.state.email,
            password : this.state.password,
        }
        axios.post(api, data)
        .then(res => {
            console.log(res, "ini ress")
            localStorage.setItem('token', res.data.data.token)
            localStorage.setItem('id_user', res.data.data.id_user)
            localStorage.setItem('email', res.data.data.email)
            localStorage.setItem('role', res.data.data.role)
            if(res.data.data.userEngineer){
                localStorage.setItem('userEngineer', JSON.stringify(res.data.data.userEngineer))
            }else{
                localStorage.setItem('userCompany', JSON.stringify(res.data.data.userCompany))
            }
    
            this.checkRole(res.data.data.role, res.data.data.id_user, res.data.data.token)

        })
        .catch(err =>{
            this.setState({show: true})
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
                            Login
                        </h1>
                        <form className="mt-5 ml-4 mr-4 pt-4" method="POST" onSubmit={(e) => this.handleLogin(e)}>
                            <SweetAlert
                                show={this.state.show}
                                title="Login Failed"
                                icon= "error"
                                text="Email or password are incorrect"
                                onConfirm={() => this.setState({ show: false })}
                            />
                            <div className="form-group">
                                <label className="text-dark" for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" onChange={(e) => { this.setState({ email: e.target.value})}} id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email"></input>
                            </div>
                            <div className="form-group">
                                <label className="text-dark" for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" onChange={(e) => { this.setState({ password: e.target.value})}} id="InputPassword" placeholder="Password"></input>
                            </div>
                            <div className="text-dark text-right">
                                <a href="/">
                                    Forgot Password?
                                </a>
                            </div>
                            <button type="submit" class="btn btn-block text-light p-2 mt-4" id="btn-login">Login</button>
                        </form>
                                    
                        <div className="mt-1 ml-4 mr-4 pt-4">
                                <Link to="/register">
                                    <button class="btn btn-block p-2 mt-2" id="btn-register">
                                                Register
                                    </button>
                                </Link>
                        </div>
                                
                    </div>
            </div>
        </div>
       )
   }
}

export default Login