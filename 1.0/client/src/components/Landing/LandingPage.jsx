import React, {useContext, useEffect, useState} from 'react';
import {Redirect, Link, useHistory} from 'react-router-dom';
import axios from 'axios';

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
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <p>Landing</p>
                    <Link className="btn btn-primary" onClick={logOut} to="/">Log Out</Link>
                </div>
            </div>
        </div>
    )

}

export default Landing;