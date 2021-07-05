import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Account.css'

const AccountTab=(props)=>{

    const[initialState, setFormState] = useState(
        {
            firstName: '',
            lastName:'',
            phoneNumber:'',
            addressLine1:'',
            addressLine2:'',
            city:'',
            state:''
        }
    );


    const getUserData=()=>{

    }

    const storeUserData = async(e)=>{
        
    }

    return(
        <div>
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-md-8">
                        <p className="profile-text-heading mt-5 available-credit">Available credit:  <span style={{color:'red'}}>N0.00</span></p>

                        <form id="uploadProfilePictureForm" action="" method="post">
                            <img className="py-2" src="https://res.cloudinary.com/woweffect-communications/image/upload/v1625306195/SmartSky/Mask_Group_qb4scd.svg" alt="profile_image"/>
                        </form>

                        <form onSubmit={storeUserData} action="" method="POST" className="form">

                            <p className="profile-text-heading">First Name</p>
                            <input className="" type="text" name="user[firstName]" id="" placeholder="First name" value={initialState.firstName} onChange={(e)=>{setFormState({...initialState,firstName:e.target.value})}}  required />

                            <p className="profile-text-heading mt-2">Last Name</p>
                            <input className="" type="text" name="user[lastName]" id="" placeholder="Last name" value={initialState.lastName} onChange={(e)=>{setFormState({...initialState,lastName:e.target.value})}}/>

                            <h6 className="mt-4">About</h6>

                            <p className="profile-text-heading mt-3">Phone</p>
                            <input className="" type="text" name="user[phoneNumber]" id="" placeholder="Phone number" value={initialState.phoneNumber} onChange={(e)=>{setFormState({...initialState,phoneNumber:e.target.value})}}/>
                        
                            <p className="profile-text-heading mt-3">Address Line 1</p>
                            <input className="" type="text" name="user[phoneNumber]" id="" placeholder="Address Line 1" value={initialState.addressLine1} onChange={(e)=>{setFormState({...initialState,addressLine1:e.target.value})}}/>
                        
                            <p className="profile-text-heading mt-3">Address Line 2</p>
                            <input className="" type="text" name="user[phoneNumber]" id="" placeholder="Address line 2" value={initialState.addressLine2} onChange={(e)=>{setFormState({...initialState,addressLine2:e.target.value})}}/>
                        
                            <p className="profile-text-heading mt-3">City</p>
                            <input type="text" name="user[phoneNumber]" id="" placeholder="City" value={initialState.city} onChange={(e)=>{setFormState({...initialState,city:e.target.value})}}/>
                        
                            <p className="profile-text-heading mt-3">State</p>
                            <input type="text" name="user[phoneNumber]" id="" placeholder="State" value={initialState.state} onChange={(e)=>{setFormState({...initialState,state:e.target.value})}}/>
                        

                        </form>
                    </div>
                </div>
            </div>
        </div>

        )
    }

export default AccountTab;