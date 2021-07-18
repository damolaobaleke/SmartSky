import React from 'react';
import {Link} from 'react-router-dom'
import './CardMonitor.css'

const Card=(props)=>{
    return(
        <div className="card ml-md-5 count-shipment-card">
            <div className="card-body">
                <div className="d-flex">
                    <p className="shipment-type pt-3">{props.shipmentName}</p>
                    <p className="count-bg px-3 py-2 mt-2 ml-5">{props.count}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;