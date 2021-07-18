import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import CardShipmentMonitor from './ShipmentMonitorCard';
import Transactions from './userOrders/userTransactions';
import './Orders.css'
const { v4: uuidv4 } = require('uuid');


const Order =()=>{


    const[initialShipmentCount, setShipmentCount] = useState([
        {
        //array of objects
        id:'Total Shipment Count',
        totalShipments:[{
            id:uuidv4()
        }], 

        totalShipmentCount:0
        
    },
    {
        id:'Active Shipments',
        activeShipments:[{}],
        activeShipmentCount:5
    },
    {
        id:'Completed Shipments',
        completedShipments:[],
        completedShipmentCount:0
    }
    ])


    return(
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-6">
                    <div className="total-shipment-count">
                        <CardShipmentMonitor  shipmentName={initialShipmentCount[0].id} count={initialShipmentCount[0].totalShipmentCount}/>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="active-shipments">
                        <CardShipmentMonitor  shipmentName={initialShipmentCount[1].id} count={initialShipmentCount[1].activeShipmentCount}/>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-md-12">
                    <div className="completed-shipments">
                        <CardShipmentMonitor  shipmentName={initialShipmentCount[2].id} count={initialShipmentCount[2].completedShipmentCount}/>
                    </div>
                </div>
            </div>


            <div className="row transaction-row py-5">
                <div className="col-md-12">
                    <h3>Latest Shipments</h3>
                    <hr/>
                    <Transactions/>
                </div>
            </div>
        </div>
    )

}

export default Order;