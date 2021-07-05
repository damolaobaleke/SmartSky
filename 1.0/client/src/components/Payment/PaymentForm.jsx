import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const PaymentForm=()=>{


    return(
        <div>
            <div className="container">
                <div className="mt-3 row">
                    <div className="col-md-8">
                        {/* Paystack UI */}
                        <form action="">
                            <input className="form-control py-2" type="text" placeholder="Card number"/>
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <input className="form-control py-2" type="text" placeholder="CVV"/>
                                </div>

                                <div className="col-md-6">
                                    <input className="form-control py-2" type="text" placeholder="Exp"/>
                                </div>
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentForm;
