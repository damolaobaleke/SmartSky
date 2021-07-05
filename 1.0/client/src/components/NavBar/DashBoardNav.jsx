import React from 'react';
import {Link} from 'react-router-dom';
import './DashBoardNav.css';

const NavBar =()=>{
    return(
        <nav id="dashboard-nav" className="navbar navbar-expand-lg py-4">
            <div className="container">
                <a className="navbar-brand" href="/"><img className="dashboard-navbarbrand-img" src="https://res.cloudinary.com/woweffect-communications/image/upload/v1625238233/SmartSky/Mask_Group_1_iheq1o.svg" alt=""/></a>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ml-4">
                            <Link className="nav-link px-3 navbar-link" to="/how-it-works">How it works</Link>
                        </li>

                        <li className="nav-item ml-4">
                            <Link className="nav-link px-3 navbar-link" to="/about">About us</Link>
                        </li>

                        <li className="nav-item ml-4">
                            <Link className="nav-link px-3 navbar-link" to="/signup">Our Services</Link>
                        </li>

                        <li className="nav-item ml-4">
                            <Link className="nav-link px-3 navbar-link" to="/">Login</Link>
                        </li>
                    
                    </ul>
                </div>
            </div>
        </nav>

    )
}


export default NavBar;