import React from 'react';
import {Link} from 'react-router-dom';
import './NavBarLanding.css';

const NavBarL =()=>{
    return(
        <nav className="navbar navbar-expand-lg bg-transparent py-5">
            <a className="navbar-brand" href="/"><img className="navbarbrand-img" src="https://res.cloudinary.com/woweffect-communications/image/upload/v1621267475/SmartSky/fc3a1bf3-d615-41e7-9229-14b44e2426cd_1_c4xtzq.svg" alt=""/></a>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item mx-1">
                        <Link className="nav-link px-3" to="/how-it-works">How it works</Link>
                    </li>

                    <li className="nav-item mx-1">
                        <Link className="nav-link px-3" to="/about">About us</Link>
                    </li>

                    <li className="nav-item mx-1">
                        <Link className="nav-link px-3" to="/">Our Services</Link>
                    </li>

                    <li className="nav-item mx-1">
                        <Link className="nav-link px-3" to="/auth">Login</Link>
                    </li>
                
                </ul>
            </div>
        </nav>
    )
}


export default NavBarL;