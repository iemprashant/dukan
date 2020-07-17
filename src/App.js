import React from 'react';
import Layout from './components/Layout/layout';
import { withRouter } from 'react-router-dom';import { Route, Switch, Redirect } from 'react-router';
import Pricelist from './components/Pages/Pricelist/Pricelist';
import RequestPickup from './components/Pages/RequestPickup/RequestPickup';
import Signin from './components/Pages/SignIn/Signin';
import Home from './components/Pages/Home/Home';
import Signup from './components/Pages/Signup/Signup';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faBoxOpen, faCarBattery, faBook,faStickyNote, faPrint, faCopy, faNewspaper, faOilCan, faBeer, faCapsules, faCouch, faCut, faDatabase, faDharmachakra, faCogs, faChalkboard, faFaucet, faLayerGroup, faLaptopMedical, faPrescriptionBottle, faMoneyCheck, faCarCrash } from '@fortawesome/free-solid-svg-icons'

const App=() =>{
  const routes=(
    <Switch>
        <Route path="/pricelist" component={Pricelist}/>
        <Route path="/request" component={RequestPickup}/>
        <Route path="/signin" component={Signin}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/" exact component={Home}/>
        <Redirect to ='/'/>
      </Switch>
  )
  return (
    <div className="bg-light">
        <Layout>
          {routes}
        </Layout>
    </div>

  );
}
library.add(faCarBattery,faBoxOpen, faCarBattery, faBook,faStickyNote, faPrint, faCopy, faNewspaper, faOilCan, faBeer, faCapsules, faCouch, faCut, faDatabase, faDharmachakra, faCogs, faChalkboard, faFaucet, faLayerGroup, faLaptopMedical, faPrescriptionBottle, faMoneyCheck, faCarCrash );
export default withRouter (App);
