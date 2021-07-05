import React,{useEffect, useState} from 'react';
import {Link, Redirect, useHistory} from 'react-router-dom';
import LandingPage from '../Landing/LandingPage';
import axios from 'axios';

const Login=(props)=>{
    const history = useHistory();
    const [prevState, setLoginInfo] = useState({username:'', pwd: ''})
    const [redirectState, setRedirect] = useState(false);
    const [errorState, setShowAlert] = useState({errorMsg:'', flash:false});

    useEffect(()=>{
        //{redirectState && <Redirect to='/landing' push={true}/>}
    })


    let formSubmit= (e)=>{
        e.preventDefault();

        console.log('form submitted')

        const requestConfig ={
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: prevState.username,
                pwd: prevState.pwd
            })
        }

        axios({
            method: 'POST',
            url: 'http://localhost:3001/login',
            data: {
                username: prevState.username,
                password: prevState.pwd
            }
        }).then((res)=> {
            console.log(res.data);

            if(!res.data.error){
                setRedirect(true);
                history.replace('/landing');
            }
            
        }).catch((err)=>{
            console.log(err)
        });
        
    }



    return(
        <div className="container">
            <div className="row justify-content-center mt-4">
                <div className="col-md-10">

                    <form onSubmit={formSubmit} action="" method="POST">
                        <input className="form-control py-4 my-4 px-md-5" type="text" name="username" placeholder="Username" id="username" value={prevState.username} onChange={(e)=>{setLoginInfo({...prevState,username:e.target.value})}} required />
                        <input className="form-control py-4 mt-4 px-md-5" type="password" name="password" id="pwd" placeholder="Password" value={prevState.pwd} onChange={(e)=>{setLoginInfo({...prevState, pwd:e.target.value})}} required/>
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