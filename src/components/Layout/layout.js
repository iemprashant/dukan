import React, { Fragment } from 'react'
import Footer from '../UI/footer'
import NavbarComp from '../UI/navbar';
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
