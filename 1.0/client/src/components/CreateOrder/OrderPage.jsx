import React from 'react'
import Navbar from '../NavBar/DashBoardNav';
import Footer from '../Footer/Footer';
import './CreateOrder.css';

const CreateOrder=()=>{
    return(
        <div className="bg-create-order">
        <Navbar/>
        <div className="container">
            <div className="row mt-4">
                <div className="col-md-12">
                    <div className="card-heading py-3 px-4">
                        Enter Your Shipment Details
                    </div>
                </div>
            </div>

            <div className="card create-order-card px-5">
                <form action="" method="post">
                    <div className="row mt-4">
                        <div className="col-md-4">
                            <p className="info">Shipment type <img src="https://res.cloudinary.com/woweffect-communications/image/upload/v1626645279/SmartSky/Vector_eyphje.png" alt=""/></p>
                        </div>

                        <div className="col-md-4">
                            <span className="order-radio-btn py-3 px-2">
                                <input className="mx-1" type="radio" name="delivery-type" id="delivery-type" />
                                <label htmlFor="delivery-type">Pick up(for door to door delivery)</label>
                            </span>
                        </div>

                        <div className="col-md-4">
                            <span className="order-radio-btn py-3 px-2">
                                <input className="mx-1" type="radio" name="delivery-type" id="delivery-type" />
                                <label htmlFor="delivery-type">Drop off(Personal delivery at airport)</label>
                            </span>
                        </div>
                    </div>

                    <div className="divider mt-4"></div>

                
                    <div className="row mt-4">   
                        <div className="col-md-6">
                            <label htmlFor="">Shipping Date <img src="https://res.cloudinary.com/woweffect-communications/image/upload/v1626645279/SmartSky/Vector_eyphje.png" alt=""/></label>
                            <input className="form-control mb-4" type="date" required/>

                            <label htmlFor="">Origin Address</label>
                            <input className="form-control mb-4" type="text" required/>
                            
                            <label htmlFor="">Sender's Phone Number</label>
                            <input className="form-control mb-4" type="text" required/>

                            <label htmlFor="">Receivers Name</label>
                            <input className="form-control mb-4" type="text" required/>

                            <label htmlFor="">Receivers Phone Number</label>
                            <input className="form-control mb-4" type="text" required/>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="">Origin Airport</label>
                            <select className="form-control mb-4" name="originAirport" id="" required>
                                <option value="">MM1</option>
                                <option value="">Nnamdi Azikiwe</option>
                                <option value="">MM2</option>
                                <option value=""></option>
                            </select>

                            <label htmlFor="">Origin State</label>
                            <select className="form-control mb-4" name="originState" id="" required>
                                <option value="">Lagos</option>
                                <option value="">Abuja</option>
                                <option value="">Port-Harcourt</option>
                                <option value="">Calabar</option>
                            </select>
                            
                            <label htmlFor="">Destination Airport</label>
                            <select className="form-control mb-4" name="" id="" required>
                                <option value="">Lagos</option>
                                <option selected value="">Abuja</option>
                                <option value="">Port-Harcourt</option>
                                <option value="">Calabar</option>
                            </select>

                            <label htmlFor="">Receivers Address</label>
                            <input className="form-control mb-4" type="text" required/>

                            <label htmlFor="">Receivers email address</label>
                            <input className="form-control mb-4" type="text" placeholder="denola@gmail.com" required/>
                        </div>
                    </div>

                    <div className="divider my-5"></div>

                    <div className="row mt-4">
                        <div className="col-md-3">
                            <label htmlFor="">Length(cm)</label>
                            <input className="form-control" type="text" name="" id="" placeholder="length"/>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="">Width(cm)</label>
                            <input className="form-control" type="text" name="" id="" placeholder="width"/>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="">Height(cm)</label>
                            <input className="form-control" type="text" name="" id="" placeholder="height"/>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="">Weight(Kg)</label>
                            <input className="form-control" type="text" name="" id="" placeholder="weight"/>
                        </div>
                    </div>

                    <div className="divider my-5"></div>

                    <button className="btn btn-danger my-4" type="submit">Get qoute</button>
                </form>
            </div>
        </div>
        <Footer/>
        </div>
    )
}

export default CreateOrder;