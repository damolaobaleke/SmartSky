import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Alert} from 'react-bootstrap';
import {Slide, Paper} from '@material-ui/core';
import axios from 'axios';
import './Account.css'

const AccountTab=(props)=>{
    const userId = props.match.params.id

    const[initialState, setFormState] = useState(
        {
            firstName: '',
            lastName:'',
            phoneNumber:'',
            addressLine1:'',
            addressLine2:'',
            city:'',
            state:'',
            email: ''
        }
    );

    const [isFlashState, setFlash] = useState({ flash:false, message:''});

    //getUserData
    async function getUserData(){
        try {
            const resp = await axios.get(`http://localhost:3001/profile/${userId}`)
            console.log(resp.data.userIndb);

            setFormState({...initialState, email:resp.data.userIndb.email, firstName:resp.data.userIndb.firstName, 
                lastName:resp.data.userIndb.lastName, 
                phoneNumber:resp.data.userIndb.phoneNumber, 
                addressLine1:resp.data.userIndb.addressLine1,
                addressLine2:resp.data.userIndb.addressLine2,
                city:resp.data.userIndb.city,
                state:resp.data.userIndb.state
            })
            return resp.data.userIndb;
        } catch (err) {
            console.error(err);
        }
    }

    //Update UserData
    const storeUserData = async(e)=>{
        e.preventDefault()

        const user = {
            firstName: initialState.firstName.trim(),
            lastName: initialState.lastName.trim(),
            email: initialState.email.trim(),
            phoneNumber:initialState.phoneNumber.trim(),
            addressLine1: initialState.addressLine1.trim(),
            addressLine2: initialState.addressLine2,
            city:initialState.city.trim(),
            state: initialState.state.trim()
        }

        try {
            const resp = await axios.put(`http://localhost:3001/profile/${userId}`, user)
            console.log(resp.data)
            console.log(resp.status +"\n"+ resp.data.message);

            if(resp.status === 200){
                //show flash
                setFlash({...isFlashState, flash:!isFlashState.flash, message:resp.data.message})
            }else{
                setFlash({...isFlashState, flash:isFlashState.flash, message:resp.data.message})
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    // empty dependency array means this effect will only run once
    useEffect(()=>{
        getUserData()
    },[])


    

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
                            <label htmlFor="firstName" className="profile-text-heading">First Name</label>
                            <input className="form-control user-update-form" type="text" name="user[firstName]" id="firstName" placeholder="First name" value={initialState.firstName} onChange={(e)=>{setFormState({...initialState,firstName:e.target.value})}}  required />

                            <label className="profile-text-heading mt-2">Last Name</label>
                            <input className="form-control user-update-form" type="text" name="user[lastName]" id="" placeholder="Last name" value={initialState.lastName} onChange={(e)=>{setFormState({...initialState,lastName:e.target.value})}} />

                            <label className="profile-text-heading mt-2">Email</label>
                            <input className="form-control user-update-form" type="text" name="user[email]" id="" placeholder="email" value={initialState.email} onChange={(e)=>{setFormState({...initialState,email:e.target.value})}}/>

                            <h6 className="mt-4">About</h6>

                            <label className="profile-text-heading mt-3">Phone</label>
                            <input className="form-control user-update-form" type="text" name="user[phoneNumber]" id="" placeholder="Phone number" value={initialState.phoneNumber} onChange={(e)=>{setFormState({...initialState,phoneNumber:e.target.value})}}/>
                        
                            <label className="profile-text-heading mt-3">Address Line 1</label>
                            <input className="form-control user-update-form" type="text" name="user[addressLine1]" id="" placeholder="Address Line 1" value={initialState.addressLine1} onChange={(e)=>{setFormState({...initialState,addressLine1:e.target.value})}}/>
                        
                            <label className="profile-text-heading mt-3">Address Line 2</label>
                            <input className="form-control user-update-form" type="text" name="user[addressLine2]" id="" placeholder="Address line 2" value={initialState.addressLine2} onChange={(e)=>{setFormState({...initialState,addressLine2:e.target.value})}}/>
                        
                            <label className="profile-text-heading mt-3">City</label>
                            <input className="form-control user-update-form" type="text" name="user[city]" id="" placeholder="City" value={initialState.city} onChange={(e)=>{setFormState({...initialState,city:e.target.value})}}/>
                        
                            <label className="profile-text-heading mt-3">State</label>
                            <input className="form-control user-update-form" type="text" name="user[state]" id="" placeholder="State" value={initialState.state} onChange={(e)=>{setFormState({...initialState,state:e.target.value})}}/>

                            <input type="submit" className="btn btn-danger my-2" value="Update Profile"/>
                        </form>
                    </div>
                </div>

                <div className="row mt-4 justify-content-center">
                    <div className="col-md-4">
                        { 
                            <Slide timeout={{enter:1000, exit:2000} } direction="right" in={isFlashState.flash} mountOnEnter unmountOnExit>
                                <Paper elevation={3}>
                                    {isFlashState.flash ? <Alert variant="success" onClose={()=>setFlash({...isFlashState,flash:!isFlashState.flash})}  dismissible> {isFlashState.message}</Alert> : null }
                                </Paper>
                            </Slide>
                        }
                    </div>
                </div>

            </div>
        </div>

        )
    }

export default AccountTab;