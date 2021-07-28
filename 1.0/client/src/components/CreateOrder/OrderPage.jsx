import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from '../NavBar/DashBoardNav';
import Footer from '../Footer/Footer';
import axios from 'axios';
import './CreateOrder.css';

const CreateOrder=(props)=>{
    const history = useHistory();
    const participantsMap = new Map();
    //
    const sender = new Map();
    const receiver = new Map();
    //

    const airportMap = new Map();
    const stateMap = new Map();
    const addressMap = new Map();

    const [initialState, setShipmentState] = useState({
        dateShipped:'',
        originAirport: '',
        destinationAirport: '',
        originAddress:'',
        originState:'',
        senderPhoneNumber:'',
        destinationAirport: '',
        destinationState:'',
        receiversName: '',
        destinationAddress:'',
        receiversPhoneNumber:'',
        receiversEmailAddress:'',
        length:'',
        width:'',
        height:'',
        weight:'',
        deliveryType:''
    })

    //
    let userId = "";
    if(props.match.params.userid){
        userId = props.match.params.userid;
    }

    //---Set Maps
    //Airport
    airportMap.set('origin', initialState.originAirport);
    airportMap.set('destination', initialState.destinationAirport);

    //state
    stateMap.set('origin', initialState.originState);
    stateMap.set('destination', initialState.destinationState);

    //address
    addressMap.set('originSender', initialState.originAddress);
    addressMap.set('destinationReceiver', initialState.destinationAddress);

    //participants
    sender.set('senderPhoneNumber', initialState.senderPhoneNumber)

    receiver.set('receiverName', initialState.receiversName);
    receiver.set('phoneNumber', initialState.receiversPhoneNumber);
    receiver.set('emailAddress', initialState.receiversEmailAddress);

    participantsMap.set('sender', sender);
    participantsMap.set('receiver', receiver);
    //participants


    const formSubmit= async (e)=>{
        e.preventDefault();

        //request body
        const data ={
            trackingNumber: '', //its been set to random math number currently
            dimensions:{
                length:initialState.length,
                width:initialState.width,
                height:initialState.height,
                weight: initialState.weight
            },
            dateShipped: initialState.dateShipped,
            dateCreated: Date.now(),
            state: stateMap,
            participants: participantsMap,
            airport: airportMap,
            address: addressMap,
            deliveryType:initialState.deliveryType,
        }

        const requestConfig = {
            method:'POST',
            headers: { 'Content-Type': 'application/json' ,'Accept': 'application/json'},
            params: {userid: props.match.params.userid},
        }
        
        try{
            const resp  = await axios.post('http://localhost:3001/create-order', data ,requestConfig );
            console.log(resp.data);
            console.log(resp.status +"\n"+ resp.data.message);


            //if resp message == success
            if(resp.status === 200){
                console.log(resp.data)
                //generate qoute
                //show qoute
                //send email
            }
        }catch(err){
            console.log(err)
        }

    }

    const generateQoute=()=>{

    }

    return(
        <div className="bg-create-order">
        <Navbar isUser={userId}/>
        <div className="container">
            <div className="row mt-4">
                <div className="col-md-12">
                    <div className="card-heading py-3 px-4">
                        Enter Your Shipment Details
                    </div>
                </div>
            </div>

            <div className="card create-order-card px-5">
                <form onFormSubmit={formSubmit} action="/create-order" method="post">
                    <div className="row mt-4">
                        <div className="col-md-4">
                            <p className="info">Shipment type <img src="https://res.cloudinary.com/woweffect-communications/image/upload/v1626645279/SmartSky/Vector_eyphje.png" alt=""/></p>
                        </div>

                        <div className="col-md-4">
                            <span className="order-radio-btn py-3 px-2">
                                <input className="mx-1" type="radio" name="deliveryType" id="delivery-type" value="Pick up" onChange={(e)=> setShipmentState({...initialState, deliveryType:e.target.value})} />
                                <label htmlFor="delivery-type">Pick up(for door to door delivery)</label>
                            </span>
                        </div>

                        <div className="col-md-4">
                            <span className="order-radio-btn py-3 px-2">
                                <input className="mx-1" type="radio" name="deliveryType" id="delivery-type" value="Drop-off" onChange={(e)=> setShipmentState({...initialState, deliveryType:e.target.value})} />
                                <label htmlFor="delivery-type">Drop off(Personal delivery at airport)</label>
                            </span>
                        </div>
                    </div>

                    <div className="divider mt-4"></div>

                
                    <div className="row mt-4">   
                        <div className="col-md-6">
                            <label htmlFor="">Shipping Date <img src="https://res.cloudinary.com/woweffect-communications/image/upload/v1626645279/SmartSky/Vector_eyphje.png" alt=""/></label>
                            <input className="form-control mb-4" type="date" name="dateShipped" value={initialState.dateShipped} onChange={(e)=>{setShipmentState({...initialState, dateShipped:e.target.value})}} required/>

                            <label htmlFor="">Origin Airport</label>
                            <select className="form-control mb-4" name="airport.origin" id="" value={initialState.originAirport} onChange={(e)=>setShipmentState({...initialState, originAirport:e.target.value})} required>
                                <option value="MM1">MM1</option>
                                <option value="Nnamdi azikiwe">Nnamdi Azikiwe</option>
                                <option value="MM2">MM2</option>
                                <option value="MM3">MM3</option>
                            </select>

                            <label htmlFor="">Origin State</label>
                            <select className="form-control mb-4" name="state.origin" id="" value={initialState.originState} onChange={(e)=>setShipmentState({...initialState, originState:e.target.value})} required>
                                <option defaultValue value="Lagos">Lagos</option>
                                <option value="Abuja">Abuja</option>
                                <option value="Port-Harcourt">Port-Harcourt</option>
                                <option value="Calabar">Calabar</option>
                            </select>

                            <label htmlFor="">Origin Address</label>
                            <input className="form-control mb-4" type="text" name="address.originSender" value={initialState.originAddress} onChange={(e)=> setShipmentState({...initialState, originAddress:e.target.value})} required/>
                            
                            <label htmlFor="">Sender's Phone Number</label>
                            <input className="form-control mb-4" type="text" name="participants.sender[senderPhoneNumber]" value={initialState.senderPhoneNumber} onChange={(e)=> setShipmentState({...initialState, senderPhoneNumber: e.target.value})} required/>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="">Receivers Name</label>
                            <input className="form-control mb-4" type="text" name="participants.receiver[receiverName]" value={initialState.receiversName} onChange={(e)=> setShipmentState({...initialState, receiversName: e.target.value})}required/>

                            <label htmlFor="">Destination Airport</label>
                            <select className="form-control mb-4" name="airport.destination" id="destAirport" value={initialState.destinationAirport} onChange={(e)=> setShipmentState({...initialState, destinationAirport: e.target.value})} required>
                                <option value="MM1">MM1</option>
                                <option value="Nnamdi Azikiwe">Nnamdi Azikiwe</option>
                                <option value="MM2">MM2</option>
                                <option value="MM3">MM3</option>
                            </select>

                            <label htmlFor="deststate">Destination State</label>
                            <select className="form-control mb-4" name="state.destination" id="deststate" value={initialState.destinationState} onChange={(e)=>setShipmentState({...initialState, destinationState:e.target.value})} required>
                                <option value="Lagos">Lagos</option>
                                <option value="Abuja">Abuja</option>
                                <option value="Port-Harcourt">Port-Harcourt</option>
                                <option value="Calabar">Calabar</option>
                            </select>

                            <label htmlFor="">Destination Address</label>
                            <input className="form-control mb-4" type="text" name="address.destinationReceiver" value={initialState.destinationAddress} onChange={(e)=>setShipmentState({...initialState, destinationAddress:e.target.value})} required/>

                            <label htmlFor="">Receivers email address</label>
                            <input className="form-control mb-4" type="text" name="participants.receiver[emailAddress]" placeholder="denola@gmail.com" value={initialState.receiversEmailAddress} onChange={(e)=>setShipmentState({...initialState, receiversEmailAddress:e.target.value})} required/>

                            <label htmlFor="">Receivers Phone Number(Optional)</label>
                            <input className="form-control mb-4" type="text" name="participants.receiver[phoneNumber]" value={initialState.receiversPhoneNumber} onChange={(e)=>setShipmentState({...initialState, receiversPhoneNumber:e.target.value})}/>
                        </div>
                    </div>

                    <div className="divider my-5"></div>

                    <div className="row mt-4">
                        <div className="col-md-3">
                            <label htmlFor="">Length(cm)</label>
                            <input className="form-control" type="text" name="dimensions.length" id="" placeholder="length" value={initialState.length} onChange={(e)=> setShipmentState({...initialState, length:e.target.value})}/>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="">Width(cm)</label>
                            <input className="form-control" type="text" name="dimensions.width" id="" placeholder="width" value={initialState.width} onChange={(e)=> setShipmentState({...initialState, width:e.target.value})}/>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="">Height(cm)</label>
                            <input className="form-control" type="text" name="dimensions.height" id="" placeholder="height" value={initialState.height} onChange={(e)=> setShipmentState({...initialState, height:e.target.value})}/>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="">Weight(Kg)</label>
                            <input className="form-control" type="text" name="dimensions.weight" id="" placeholder="weight" value={initialState.weight} onChange={(e)=> setShipmentState({...initialState, weight:e.target.value})}/>
                        </div>
                    </div>

                    <div className="divider my-5"></div>

                    <input className="btn btn-danger my-4" type="submit" value="Get qoute"/>
                </form>
            </div>
        </div>
        <Footer/>
        </div>
    )
}

export default CreateOrder;