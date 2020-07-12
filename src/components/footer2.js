import React from 'react'

const Footer2 = () => {
  return (
        <div className="page-footer font-small bg-white m-0 border-dark border">
            <div className="row d-flex justify-content-around p-2 mt-2">
                <div className="mx-2">
                    <h6>About</h6>
                </div>
                <div className="mx-2">
                    <h6>Contact</h6>
                </div>
                <div className="mx-2">
                    <h6>Faqs</h6>
                </div>
                <div className="mx-2">
                    <h6>Terms</h6>
                </div>
                <div className="mx-2">
                    <h6>privacy</h6>
                </div>
            </div>
            <div className="footer-copyright text-center py-3 border-top" >© 2020 Copyright:
                <a href="/" className=" text-decoration-none text-dark"> KabaadDukaan</a>
            </div>
        </div>
  )
}

export default Footer2;
