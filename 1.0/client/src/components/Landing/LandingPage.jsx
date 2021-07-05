import React, {useContext, useEffect, useState} from 'react';
import {Redirect, Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import NavbarLanding from '../NavBar/NavBarLanding';
import WhyUseSec from './WhyUse';
import LatestNewsSec from './LatestNews';
import Footer from '../Footer/Footer';
import './Landing.css';
import '../NavBar/NavBar.css'

const Landing=()=>{
    const history = useHistory();

    const logOut=(req)=>{
        axios.get({
            url:'http://localhost:3001/logout',
            method:'GET'
        }).then((res)=>{
            if(!res.data.error) {
                console.log(res.data);
                //req.flash('success_message', 'Logged Out')
                history.push('/')
            }
        }).catch((err)=>{
            console.log(err);
        })

    }

    return(
        <div className="">
            <div className="bg-Sec1">
                <div className="container">
                    <NavbarLanding/>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <h1 className="mt-5 sec1-heading">The easiest way to<br/> book air cargo</h1>

                            <p className="py-5">The Smart sky booking platform gives you <br/>access to real-time prices and available<br/> capacities of multiple airlines. Directly book<br/> online within seconds, 24/7.</p>
                        
                            <Link className="btn btn-danger" to="/">Get Started</Link>
                        </div>

                        <div className="col-md-6">
                            {/* <img src="https://res.cloudinary.com/woweffect-communications/image/upload/v1622071512/SmartSky/Mask_Group_gn9ln9.svg" alt=""/> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-Sec2 py-4 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="mt-5 sub-heading-two">Get direct access to leading<br /> airlines on one single platform.</h2>
                            <p className="py-2 sec2-p">Get real-time prices for available capacities and<br />  directly book into the airlines‘ systems.</p>
                            <Link className="btn btn-danger" to="/">Get Started</Link>
                        </div>

                        <div className="col-md-6">
                            <img src="https://res.cloudinary.com/woweffect-communications/image/upload/v1622072369/SmartSky/Untitled-1_1_jvqtbr.svg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>


            {/* Sec3 */}
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-12">
                        <h2 className="text-center my-3">Why use smartsky ?</h2>
                    </div>
                    
                    <WhyUseSec/>
                </div>
            </div>

            {/* Sec4 */}
            <LatestNewsSec/>


            <Footer/>
            {/* <Link className="btn btn-primary" onClick={logOut} to="/">Log Out</Link> */}
        </div>
    )

}

export default Landing;