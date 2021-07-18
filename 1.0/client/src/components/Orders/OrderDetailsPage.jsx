import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import './OrderDetails.css'

const OrderDetails =(props)=>{
    console.log(props.location.state.participants.values())

    const iterator = props.location.state.participants.values()
    //if id(key) === id of current logged in user and shipment created(shipment creator) by current logged in user, then sender

    return(
        <div className="container">
            <div className="row mt-4 justify-content-center row-details">
                <div className="col-md-12">
                    <h4>Shipment ID: {props.location.state.id}</h4>
                </div>
            </div>

            <div className="row row-details mt-4">
                <div className="col-md-3">
                    <div className="participant-heading">Sender</div>
                    {/* iternator.next gets values in sequential order from map */}
                    <p className="participant py-3">{iterator.next().value}</p> 
                </div>

                <div className="col-md-3">
                    <div className="participant-heading">Receiver</div>
                    <p className="participant py-3">{iterator.next().value}</p>
                </div>

                <div className="col-md-3">
                    <div className="participant-heading">Status</div>
                    <p className="py-3">{props.location.state.status}</p>
                </div>

                <div className="col-md-3">
                    
                </div>
            </div>

            <div className="divider row-details"></div>

            <div className="row row-details mt-4">
                <div className="col-md-3">
                    <div className="participant-heading">Shipment Type</div>
                    <p className="py-3">Drop off</p>

                    <div className="participant-heading">Origin</div>
                    <p className="py-3">{props.location.state.origin}</p>
                </div>

                <div className="col-md-3">
                    <div className="participant-heading">Shipping Cost</div>
                    <p className="py-3">{props.location.state.cost}</p>

                    <div className="participant-heading">Destinataion</div>
                    <p className="py-3">{props.location.state.destination}</p>
                </div>

                <div className="col-md-3">
                    <div className="participant-heading">Date created</div>
                    <p className="py-3">{props.location.state.dateCreated.day}/{props.location.state.dateCreated.month}/{props.location.state.dateCreated.year}</p>
                </div>

                <div className="col-md-3">
                    <div className="participant-heading">Shipment date</div>
                    <p className="py-3">{props.location.state.dateCreated.day}/{props.location.state.dateCreated.month}/{props.location.state.dateCreated.year}</p>
                </div>
            </div>

        </div>
    )

}

export default OrderDetails;