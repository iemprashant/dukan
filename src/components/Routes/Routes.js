import React from 'react'
import { Route, Switch, Redirect } from 'react-router';
import Pricelist from '../Pages/Pricelist/Pricelist';
import RequestPickup from '../Pages/RequestPickup/RequestPickup';
import Signin from '../Pages/SignIn/Signin';
import Home from '../Pages/Home/Home';
import Signup from '../Pages/Signup/Signup';
const Routes = () => {
  return (
      <Switch>
        <Route path="/pricelist" component={Pricelist}/>
        <Route path="/request" component={RequestPickup}/>
        <Route path="/signin" component={Signin}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/" exact component={Home}/>
        <Redirect to ='/'/>
      </Switch>
  )
}
export default Routes;
