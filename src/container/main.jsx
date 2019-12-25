import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Login from '../components/login'
import Register from '../components/register'
import Engineers from '../components/company/engineers'
import Companies from '../components/engineer/companies'

function Main(){
  return(
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route path='/engineers' component={Engineers} />
      <Route path='/companies' component={Companies} />
    </Switch>
  )
}

export default Main