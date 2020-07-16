import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Pricelistcard = ({title,price,icon,quantity}) => {
  return (
        <div className="col-sm-8 col-md-5 col-lg-3 my-3 ">
            <div className="d-flex justify-content-around border  border-success py-3">
                <div className="p-1 d-flex align-content-center flex-wrap text-success">
                    <FontAwesomeIcon icon={icon} size="4x"/>
                </div>
                <div className="d-flex flex-column p-1 text-center">
                    <h5>{title}</h5>
                    <h6>₹ {price} {quantity}</h6>
                </div>
            </div>
        </div>
  )
}

export default Pricelistcard;
