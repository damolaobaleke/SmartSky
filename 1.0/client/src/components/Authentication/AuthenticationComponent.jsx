import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Tabs, Tab} from 'react-bootstrap';
import SignUp from '../Authentication/signUpForm';
import LogIn from '../Authentication/loginForm';
import './Auth.css';

const Authentication=(props)=>{
    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card pt-2 pb-5 border-0">
                        <Tabs className="justify-content-center" defaultActiveKey="login" id="">
                            <Tab eventKey="login" title="Login">
                                <LogIn />
                            </Tab>

                            <Tab eventKey="signup" title="Signup">
                                <SignUp />
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Authentication;