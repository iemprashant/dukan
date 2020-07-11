import React, { Fragment } from 'react'
import Footer from '../UI/Footer/footer'
import NavbarComp from '../UI/Navbar/navbar'
const Layout = (props) => {
  return (
    <Fragment>
        {props.children}
        <Footer/>
    </Fragment>
  )
}

export default Layout;
