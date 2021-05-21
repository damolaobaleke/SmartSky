import React,{useEffect, useState} from 'react';
import {Alert} from 'react-bootstrap';
import axios from 'axios';



const SignUp=(props)=>{
    const [initialState, setUserInfo] = useState({username:'',email:'',password:''});
    const [errorState, setShowAlert] = useState({errorMsg:'', flash:false});

    useEffect(()=>{
        //fetchData()
    })

    let fetchData= async ()=>{
        try{
        const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
        const data = await res.json()
        console.log(data);
        }catch(err){
            console.log(err);
        }

        let res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
        console.log(Math.round(res.data.ticker.price))
    }


    let formSubmit = async(e)=>{
        //fetch request to post signup endpoint
        e.preventDefault()

        console.log(`submitted ${initialState.username}`);

        const requestConfig = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' ,'Accept': 'application/json'},
            body: JSON.stringify({
                username: initialState.username,
                email:    initialState.email,
                pwd: initialState.password
            })
        }
        
        try {
            const res = await fetch('http://localhost:3001/sign-up', requestConfig)
            const data = await res.json();
            console.log(data.data);

            if(data.error_message){ 
                console.log(data.error_message.message);
                setShowAlert({...errorState,errorMsg:data.error_message.message,flash:true});
            }
        } catch (err) {
            console.log(err)
        } 
    }


    return(
        <div className="container">
            <div className="row justify-content-center mt-4">
                <div className="col-md-10">

                    {errorState.flash ? <Alert variant="danger" onClose={() => setShowAlert({...errorState,flash:false})} dismissible>{errorState.errorMsg}</Alert>:  null}

                    <form onSubmit={formSubmit} action="" method="POST">
                        <input className="form-control py-4 my-4 px-md-5" type="text" name="username" placeholder="Username" id="username" value={initialState.username} onChange={(e)=>setUserInfo({...initialState, username: e.target.value})} required/>
                        <input className="form-control py-4 my-4 px-md-5" type="email" name="email" id="email" placeholder="Email Address" value={initialState.email} onChange={(e)=>setUserInfo({...initialState, email:e.target.value})} required/>
                        <input className="form-control py-4 my-4 px-md-5" type="password" name="pwd" id="pwd" placeholder="Password" value={initialState.password} onChange={(e)=>setUserInfo({...initialState, password:e.target.value})} required/>
                        
                        <input className="sign-up-btn form-control" type="submit" value="Sign Up"/>
        
                        <span className="d-flex">
                            <hr className="line-lgn-google"/>
                                <p className="login-wth-google-text py-3">or sign up with google</p>
                            <hr className="line-lgn-google"/>
                        </span>
                        <button className="btn sign-up-google-btn form-control"><img className="g-logo" src="https://res.cloudinary.com/woweffect-communications/image/upload/v1621267650/SmartSky/Group_1_qrxhmy.svg"/>Sign up with Google</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default SignUp;