import React from 'react';
import Layout from './components/Layout/layout';
import Routes from './components/Routes/Routes';
import { withRouter } from 'react-router-dom';

const App=() =>{
  return (
    <Layout>
      <Routes/>
    </Layout>
  );
}
export default withRouter (App);
