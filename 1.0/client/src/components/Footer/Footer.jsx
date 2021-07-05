import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Footer.css';


const Footer =()=>{
    const[emailIntialState, setEmail] = useState('');

    const formSubmit=()=>{
        //Post REQUEST to store email in subscribe collection in db
    }

    return(
        <div className="footer py-5 mt-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src="https://res.cloudinary.com/woweffect-communications/image/upload/v1622073915/SmartSky/Mask_Group_1_uujbga.svg" alt=""/>
                    </div>

                    <div className="col-md-8">
                        <p className="text-right">Ready to get started using SmartSky?  <Link className="btn btn-danger ml-3" to="/">Get Started</Link></p>
                    </div>
                </div>

                <hr/>

                <div className="row">
                    <div className="col-md-3">
                    <h5>Contact Us</h5>
                        <div className="contact">
                            <p className="address">42 Ajose, Mende, Maryland, Lagos. Nigeria.</p>
                            <p>Email: info@smartsky.com</p>
                            <p>Phone: +234 8031234567</p>
                        </div>

                        <h5>News Letter</h5>
                        <form action="">
                            <input className="email-news-letter pl-md-5 pr-md-5 py-3" onChange={(e)=>setEmail(e.target.value)} value={emailIntialState} type="email" name="" id=""placeholder="Enter your email"/>
                            <button id="subscribe" className="btn btn-danger py-1 px-2 mt-md-3" type="submit">Subscribe</button>
                        </form>
                    </div>

                    <div className="col-md-3">
                    <h5 style={{paddingLeft:'40px'}}>Quick Links</h5>
                        <ul>
                            <li className="py-3 footer-list"><Link to="">About Us</Link></li>
                            <li className="py-3 footer-list"><Link to="">How it works</Link></li>
                            <li className="py-3 footer-list"><Link to="">Services</Link></li>
                            <li className="py-3 footer-list"><Link to="">Get Started</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-3">
                        <h5>Resources</h5>
                        <ul style={{paddingLeft: '0rem'}}>
                            <li className="py-3 footer-list"><Link to="">Blog</Link></li>
                            <li className="py-3 footer-list"><Link to="">Contact Us</Link></li> 
                        </ul>
                    </div>

                    <div className="col-md-3">
                        <h5>Social Media posts</h5>

                        <div className="card px-3 py-2">
                            <div className="row">
                                <div className="col-md-6">
                                    <img src="https://res.cloudinary.com/woweffect-communications/image/upload/v1624282635/SmartSky/Group_24_geixyu.svg" alt=""/>
                                </div>

                                <div className="col-md-6 footer-p">
                                    <p className="footer-smart-sky-text">SmartSky</p>
                                    <img src="https://res.cloudinary.com/woweffect-communications/image/upload/v1624282634/SmartSky/Group_25_nfpwac.svg" alt=""/>
                                    <div className="d-flex">
                                        <img src="https://res.cloudinary.com/woweffect-communications/image/upload/v1624282635/SmartSky/Vector_1_r1z06s.svg" alt=""/>
                                        <p>tweets count</p>
                                        <img src="https://res.cloudinary.com/woweffect-communications/image/upload/v1624282635/SmartSky/Vector_2_aepf0j.svg" alt=""/>
                                        <p>follower count</p>
                                    </div>
                                </div>
                            </div>

                            <hr className="footer-card-underline"/>

                            <div className="row">
                                <div className="col-md-12">
                                    <p className="footer-p">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</p>
                                    <img src="https://res.cloudinary.com/woweffect-communications/image/upload/v1624282635/SmartSky/Mask_Group_2_lj914d.svg" alt=""/>
                                
                                </div>
                            </div>


                            <div className="row">
                                <div className="d-flex">
                                    <img src="https://res.cloudinary.com/woweffect-communications/image/upload/v1624958179/SmartSky/Vector_rneyo5.svg" alt=""/>
                                    <p className="footer-p">5</p>
                                    <img src="https://res.cloudinary.com/woweffect-communications/image/upload/v1624958179/SmartSky/Vector-1_dp7ey3.svg" alt=""/>
                                    <p className="footer-p">200</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <hr/>

                <div className="row">
                    <div className="col-md-8">
                        <p>© Copyright 2021 Smartsky. All Rights Reserved. Terms of Use</p>
                    </div>

                    <div className="col-md-4">
                        <ul className="d-flex ml-5">
                            <li className="px-3 footer-list"><Link to=""><img src="https://res.cloudinary.com/woweffect-communications/image/upload/v1622074916/SmartSky/Vector-1_axs5kj.svg" alt=""/></Link></li>
                            <li className="px-3 footer-list"><Link to=""><img src="https://res.cloudinary.com/woweffect-communications/image/upload/v1622074916/SmartSky/Vector_rjlbgk.svg" alt=""/></Link></li>
                            <li className="px-3 footer-list"><Link to=""><img src="https://res.cloudinary.com/woweffect-communications/image/upload/v1622074916/SmartSky/Vector-2_ku6bt8.svg" alt=""/></Link></li>
                            <li className="px-3 footer-list"><Link to=""><img src="https://res.cloudinary.com/woweffect-communications/image/upload/v1622074916/SmartSky/Vector-3_hzuyii.svg" alt=""/></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;