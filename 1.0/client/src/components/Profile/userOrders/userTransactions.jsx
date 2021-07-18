import React, {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
const { v4: uuidv4 } = require('uuid');

const Transactions=()=>{
    const participants = new Map()
    participants.set(uuidv4(),'Damola') //sender
    participants.set(uuidv4(),'Thomas') //receiver

    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November","December"];

    let date =()=>{
        const currentDay = new Date()
        return currentDay
    }
   

    const[initialState, setTransState] = useState([{
        id:uuidv4().slice(0,8),
        trackingNumber:uuidv4().slice(0,9),
        orderStatus:{
            text:'pending',
            isPending:true
        },
        dateCreated:{
            day:date().getDate(),
            month:monthNames[date().getMonth()],
            year:date().getUTCFullYear()
        },
        dateShipped:new Date(),
        origin:'LOS',
        destination:'ABJ',
        sender: 'damola',
        shippingCost: 2000

        },
        {
        id:uuidv4().slice(0,8),
        trackingNumber:uuidv4().slice(0,9),
        orderStatus:{
            text:'completed',
            isPending:false
        },
        dateCreated:{
            day:date().getDate(),
            month:monthNames[date().getMonth()],
            year:date().getUTCFullYear()
        },
        dateShipped:new Date(),
        origin:'ABJ',
        destination:'LOS',
        sender: 'damola',
        shippingCost: 20000
        },
        {
        id:uuidv4().slice(0,8),
        trackingNumber:uuidv4().slice(0,9),
        orderStatus:{
            text:'pending',
            isPending:true
        },
        dateCreated:{
            day:date().getDate(),
            month:monthNames[date().getMonth()],
            year:date().getUTCFullYear()
        },
        dateShipped:new Date(),
        origin:'LOS',
        destination:'ABJ',
        sender: 'damola',
        receiver:'thomas',
        shippingCost: 8000
        }
    ])

    let status;
    initialState.forEach((order)=>{
        status = order.orderStatus.isPending ? 'status-pending' : 'status-complete';
        console.log(order.orderStatus.isPending)
    })

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <table>
                        <thead>
                            <tr className="table-headings">
                                <td className="pr-md-5">Order ID</td>
                                <td className="px-5">Tracking Number</td>
                                <td className="px-5">Status</td>
                                <td className="px-5">Date</td>
                                <td className="px-5">Details</td>
                            </tr>
                        </thead>


                        <tbody>
                            {/* Map() */}
                            {initialState.map((order)=>{
                            console.log(order)
                            return (
                                <tr id={`${uuidv4()}`} className="py-5 border-bottom">
                                    <td className="pr-md-5 pb-2">{order.id}</td>
                                    <td className="px-5 py-2">{order.trackingNumber}</td>
                                    <td className={`px-5 ${status} py-2`}>{order.orderStatus.text}</td>
                                    <td className="px-5 py-2">{order.dateCreated.day}/{order.dateCreated.month}/{order.dateCreated.year}</td>
                                    <td className="px-5 py-2"><Link className="btn btn-primary btn-details border-0 px-3" to={{ pathname:`/profile/235/order/${order.id}/details`, state:{
                                        id:order.id,
                                        sender: order.sender,
                                        receiver: order.receiver,
                                        status: order.orderStatus.text,
                                        origin: order.origin,
                                        destination: order.destination,
                                        participants: participants,
                                        dateCreated: order.dateCreated
                                    }}}>Details</Link></td>
                                </tr>
                                )   
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Transactions;