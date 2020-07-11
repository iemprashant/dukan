import React from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router';
import Pricelist from '../../Pages/Pricelist/Pricelist';
import About from '../../Pages/About/About';
import Signin from '../../Pages/SignIn/Signin';
import Home from '../../Pages/Home/Home';
const Routes = () => {
  return (
      <Switch>
        <Route path="/pricelist" component={Pricelist}/>
        <Route path="/about" component={About}/>
        <Route path="/signin" component={Signin}/>
        <Route path="/" exact component={Home}/>
        <Redirect to ='/'/>
      </Switch>
  )
}
export default Routes;
