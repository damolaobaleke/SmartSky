import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Rotate, Slide, Fade} from 'react-reveal'
import PaymentForm from '../Payment/PaymentForm';
import './Payment.css';

const Payment=()=>{
    const[prevState, setActiveForm] = useState({
        showForm:false
    })

    const showForm=()=>{
        setActiveForm({...prevState, showForm: !prevState.showForm})
    }

    return(
        <div>
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-md-8">
                        <p></p>
                        <Rotate top right>
                        <img className="mt-4" src="https://res.cloudinary.com/woweffect-communications/image/upload/v1625319137/SmartSky/Group_171_v6bmul.svg" alt=""/>
                        </Rotate>

                        <hr className="payment-divider"/>

                        <div className="">
                            <Link className="px-2 update-card-btn" onClick={showForm}>Update Card</Link>
                            <Link className="px-2 remove-card-btn">Remove Card</Link>
                        </div>

                        {/* Paystack UI */}
                        {prevState.showForm ? <Fade top> <PaymentForm/></Fade> : null}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;
