import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import PaymentForm from '../Payment/PaymentForm';

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
                        <p>Card number</p>
                        <img src="https://res.cloudinary.com/woweffect-communications/image/upload/v1625319137/SmartSky/Group_171_v6bmul.svg" alt=""/>

                        <hr/>

                        <div className="">
                            <Link className="px-2" onClick={showForm}>Update Card</Link>
                            <Link className="px-2">Remove Card</Link>
                        </div>

                        {/* Paystack UI */}
                        {prevState.showForm ? <PaymentForm/> : null}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;
