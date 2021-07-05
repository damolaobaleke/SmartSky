import React, {useState, useEffect} from 'react';
import {Link}  from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import './About.css'

const AboutUs =()=>{
    return(
        <div>
            <NavBar/>
            <div className="bg-sec1"> 
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h1 className="heading-one">About Us</h1>
                            <p className="py-5">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. “Aliqua id fugiat nostrud irure ex duis ea quis id </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Sec-2 */}
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6">
                        <h2 className="py-5 mt-md-4">Connecting the world’s air cargo markets to make them more productive and successful</h2>
                        <p className="sec2-p">The Smartsky team focuses on digitizing the air freight industry. As an agile partner to international freight forwarders and cargo carriers, we are working together to shape the future of air freight. Our team combines international experience in building digital business models with relevant expertise in the modernization of B2B processes.</p>
                    </div>

                    <div className="col-md-6">
                        <img className="py-5" src="https://res.cloudinary.com/woweffect-communications/image/upload/v1624964292/SmartSky/image_9_yzlz7m.svg" alt=""/>
                    </div>
                </div>
            </div>

             {/* Sec-3 */}
            <div className="sec3-bg">
                <div className="container">
                    <div className="row text-center py-5">
                        <div className="col-md-3">
                            <h3 className="sec3-heading">+2000</h3>
                            <p>Freight forwardin offices using Smartsky</p>
                        </div>

                        <div className="col-md-3">
                            <h3 className="sec3-heading">15</h3>
                            <p>Airline partners</p>
                        </div>

                        <div className="col-md-3">
                            <h3 className="sec3-heading">+2.2m</h3>
                            <p>Offers distributed monthly</p>
                        </div>

                        <div className="col-md-3">
                            <h3 className="sec3-heading">347</h3>
                            <p>Destinations Locally</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sec-4 */}
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6">
                        <img className="sec4-plane-img" src="https://res.cloudinary.com/woweffect-communications/image/upload/v1624964289/SmartSky/pexels-photo-2888355_1_jkhxz7.png" alt=""/>
                        <p className="our-services">Our Services</p>
                    </div>

                    <div className="col-md-6">
                        <div className="row my-3">
                            <div className="col-md-6">
                                <p className="sec4-p">Lorem Ipsum</p>
                                <p className="sec4-p">Amet minim mollit non<br/>deserunt ullamco</p>
                            </div>

                            <div className="col-md-6">
                                <p className="sec4-p">Lorem Ipsum</p>
                                <p className="sec4-p">Amet minim mollit non<br/>deserunt ullamco</p>
                            </div>
                        </div>

                        <div className="row my-3">
                            <div className="col-md-6">
                                <p className="sec4-p">Lorem Ipsum</p>
                                <p className="sec4-p">Amet minim mollit non<br/>deserunt ullamco</p>
                            </div>

                            <div className="col-md-6">
                                <p className="sec4-p">Lorem Ipsum</p>
                                <p className="sec4-p">Amet minim mollit non<br/>deserunt ullamco</p>
                            </div>
                        </div>

                        <div className="row my-3">
                            <div className="col-md-6">
                                <Link style={{marginLeft:'40px'}} className="btn btn-danger py-3 px-4" to="">Learn More</Link>
                            </div>

                            <div className="col-md-6">
                                <p className="sec4-p">Lorem Ipsum</p>
                                <p className="sec4-p">Amet minim mollit non<br/>deserunt ullamco</p>
                            </div>
                        </div>

                        <div className="row">

                        </div>
                    </div>
                </div>
            </div>


            {/* Sec-5 */}
            <div className="sec5-bg">
                <div className="container">
                    <div className="row text-center py-5 mt-5">
                        <div className="col-md-6">
                            <h3 className="">Our Mission</h3>
                        </div>

                        <div className="col-md-6">
                            <p>We believe the actors of the logistics process must have full transparency and control. Our mission is to give the owners of goods a solution for a simple, automated and stress-free logistics process with the ability to access cargo data anytime, anywhere.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sec-6 */}
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-12">
                        <h3 className="text-center my-4">Our Partners</h3>
                        <img className="" src="https://res.cloudinary.com/woweffect-communications/image/upload/v1624964289/SmartSky/Screenshot_2021-03-09_at_2.17_1_vmvxor.svg" alt=""/>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
        
    )

}

export default AboutUs;