import React, { Fragment } from 'react'
import Footer from '../footer'
import NavbarComp from '../navbar';
const Layout = (props) => {
  return (
    <Fragment>
      <NavbarComp/>
        {props.children}
        <Footer/>
    </Fragment>
  )
}

export default Layout;
