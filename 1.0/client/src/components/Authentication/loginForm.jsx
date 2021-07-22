import React,{useEffect, useState} from 'react';
import {Link, Redirect, useHistory} from 'react-router-dom';
import {Alert, Spinner} from 'react-bootstrap';
import {Slide, Paper} from '@material-ui/core';
import LandingPage from '../Landing/LandingPage';
import axios from 'axios';

const Login=(props)=>{
    const history = useHistory();
    const [prevState, setLoginInfo] = useState({username:'', pwd: ''})
    const [redirectState, setRedirect] = useState(false);
    const [errorState, setShowAlert] = useState({Msg:'', flash:false, isLoading:false});

    useEffect(()=>{
        
    },[])


    let formSubmit= async (e)=>{
        e.preventDefault();

        console.log('form submitted')

        //show progress bar
        setTimeout(setShowAlert({...errorState, isLoading:!errorState.isLoading}),3000)

        const requestConfig ={
            method:'POST',
            headers: { 'Content-Type': 'application/json' ,'Accept': 'application/json'},
            body: JSON.stringify({
                username: prevState.username,
                password: prevState.pwd
            })
        }

        try {
            const res = await fetch('http://localhost:3001/login', requestConfig)
            const data  = await res.json();
            console.log(`The response data: ${data.message} ${res.status}`);
            console.log(data.data)

            if(res.status === 400){
                console.log('Not logged in')
                history.replace(`/auth`);
                setShowAlert({...errorState, flash:!errorState.flash, Msg:'Hi!,\n if you are not able to login it might not be you, as we are in the alpha stage we are currently experiencing some bugs, please bare with us.\n In the meantime, use this link ', isLoading:false})
            }else{
                console.log('Logged in')
                history.replace(`/profile/${data.data._id}/account`);
                setShowAlert({...errorState, flash:true, Msg:data.message, isLoading:errorState.isLoading})
            }

        } catch (err) {
            console.log(err)
        } 
        
    }



    return(
        <div className="container">
            <div className="row justify-content-center mt-3">
                <div className="col-md-10">
                    <Slide timeout={{enter:500, exit:1000}} direction='down' in={errorState.flash} mountOnEnter unmountOnExit>
                        <Paper elevation={3}>
                            {errorState.flash ? <Alert className="login-alert-text" variant="info" onClose={() => setShowAlert({...errorState,flash:false})} dismissible>{errorState.Msg}<Link className="create-shipment-link" to="/create-order">create a shipment</Link> to check out shipping a cargo</Alert> : null}
                        </Paper>
                    </Slide>
                </div>
            </div>

            <div className="row justify-content-center mt-3">
                <div className="col-md-10">
                    <form onSubmit={formSubmit} action="/login" method="POST">
                        <input className="form-control py-4 my-4 px-md-5" type="text" name="username" placeholder="Username" id="username" value={prevState.username} onChange={(e)=>{setLoginInfo({...prevState,username:e.target.value})}} required />
                        <input className="form-control py-4 mt-4 px-md-5" type="password" name="password" id="pwd" placeholder="Password" value={prevState.pwd} onChange={(e)=>{setLoginInfo({...prevState, pwd:e.target.value})}} required/>
                        <Link to="/"><small className="forgot-pwd mb-5">Forgot password?</small></Link>
                        <input className="sign-up-btn form-control mt-4 mb-2" type="submit" value="Log In"/>
                        {errorState.isLoading ? <Spinner animation="border" role="status" size="sm"></Spinner> : null}

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