import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const Login=(props)=>{

    useEffect(()=>{
        //fetch request to post login endpoint
    })

    let formSubmit=()=>{
        console.log('form submitted')
    }



    return(
        <div className="container">
            <div className="row justify-content-center mt-4">
                <div className="col-md-10">

                    <form onSubmit={formSubmit} action="" method="POST">
                        <input className="form-control py-4 my-4 px-md-5" type="text" name="username" placeholder="Username" id="username" required/>
                        <input className="form-control py-4 mt-4 px-md-5" type="password" name="pwd" id="pwd" placeholder="Password"/>
                        <Link><small className="forgot-pwd mb-5">Forgot password?</small></Link>
                        <input className="sign-up-btn form-control mt-4 mb-2" type="submit" value="Log In"/>
                        <span className="d-flex">
                            <hr className="line-lgn-google"/>
                                <p className="login-wth-google-text py-3">or login with google</p>
                            <hr className="line-lgn-google"/>
                        </span>
                        
                        <button className="btn sign-up-google-btn form-control"><img className="g-logo" src="https://res.cloudinary.com/woweffect-communications/image/upload/v1621267650/SmartSky/Group_1_qrxhmy.svg"/>Login with Google</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login;