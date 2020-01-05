import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Login from '../components/login'
import Register from '../components/register'
import Engineers from '../components/company/engineers'
import engProfile from '../components/engineer/engProfile'
import addCompanyProfile from '../components/company/addCompanyProfile'
import addEngineerProfile from '../components/engineer/addEngineerProfile'
import engProject from '../components/engineer/project'
import engDetail from '../components/company/engDetail'
import comProject from '../components/company/project'
import addComProject from '../components/company/addComProject'

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
      <Route path='/engineer/project' component={engProject} />
      <Route exact path='/company/project' component={comProject} />
      <Route path='/company/project/add' component={addComProject} />
      <Route path="/engineer/detail/:id_engineer" component={engDetail} />
    </Switch>
  )
}

export default Main