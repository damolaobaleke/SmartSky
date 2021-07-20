import React,{useState} from 'react';
import {Alert} from 'react-bootstrap'
import {Slide, Paper} from '@material-ui/core';
import Authentication from '../Authentication/AuthenticationComponent';
import Footer from '../Footer/Footer';


const Home =()=>{
    return(
        <div style={{background: '#E5E5E5', height:'100vh'}} className="bg-home">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-12">
                        <img className="my-5" src="https://res.cloudinary.com/woweffect-communications/image/upload/v1621267475/SmartSky/fc3a1bf3-d615-41e7-9229-14b44e2426cd_1_c4xtzq.svg" alt="smart_sky_logo"/>  
                        <Authentication/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;