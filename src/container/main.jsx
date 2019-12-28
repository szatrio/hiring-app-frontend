import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Login from '../components/login'
import Register from '../components/register'
import Engineers from '../components/company/engineers'
import Companies from '../components/engineer/companies'
import engProfile from '../components/engineer/engProfile'
import addCompanyProfile from '../components/company/addCompanyProfile'
import addEngineerProfile from '../components/engineer/addEngineerProfile'

function Main(){
  return(
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route path='/engineers' component={Engineers} />
      {/* <Route path='/companies' component={Companies} /> */}
      <Route path='/company/addprofile' component={addCompanyProfile} />
      <Route path='/engineer/addprofile' component={addEngineerProfile} />
      <Route path='/engineer/profile' component={engProfile} />
    </Switch>
  )
}

export default Main