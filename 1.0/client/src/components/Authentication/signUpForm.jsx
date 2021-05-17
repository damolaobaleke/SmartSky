import React,{useEffect, useState} from 'react';


const SignUp=(props)=>{

    useEffect(()=>{
        //fetch request to post signup endpoint
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
                        <input className="form-control py-4 my-4 px-md-5" type="email" name="email" id="email" placeholder="Email Address" required/>
                        <input className="form-control py-4 my-4 px-md-5" type="password" name="pwd" id="pwd" placeholder="Password"/>
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