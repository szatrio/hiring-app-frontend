import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Login from '../components/login'
import engineers from '../components/company/engineers'

function Main(){
  return(
    <Switch>
      <Route exact path='/' component={Login} />
      <Route path='/engineers' component={engineers} />
    </Switch>
  )
}

export default Main