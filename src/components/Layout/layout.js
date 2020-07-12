import React, { Fragment } from 'react'
import NavbarComp from '../navbar';
const Layout = (props) => {
  return (
    <Fragment>
      <NavbarComp/>
        {props.children}
    </Fragment>
  )
}

export default Layout;
