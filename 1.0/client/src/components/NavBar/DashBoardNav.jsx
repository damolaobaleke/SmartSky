import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';
import axios from 'axios';
import './DashBoardNav.css';

const NavBar =(props)=>{
    useEffect(()=>{
        console.log(props)
    },[])

    const logOut= async()=>{
        let resp = await axios.get('http://localhost:3001/logout')
        console.log(resp.data);

        console.log("log out")
    }

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

                        {/* <li className="nav-item ml-4">
                            <Link className="nav-link px-3 navbar-link" to="/signup">Our Services</Link>
                        </li> */}

                        <Dropdown className="nav-item ml-4">
                            <Dropdown.Toggle className="" variant="" id="dropdown-basic">Our Services</Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item className="" href={`/${props.isUser}/create-order`}>Create a shipment</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <li className="nav-item ml-4">
                            <Link className="nav-link px-3 navbar-link" to={`/profile/${props.isUser}/account`}>Account</Link>
                        </li>


                        {/* If request.user or req.isAuthenticated show log out */}
                        {props.isUser ? <li className="nav-item ml-4"><Link className="nav-link px-3 navbar-link" to="/logout" onClick={()=>{logOut()}}>Log out</Link></li> : 
                        
                        <li className="nav-item ml-4">
                            <Link className="nav-link px-3 navbar-link" to="/auth">Login</Link>
                        </li>
                        }
                    
                    </ul>
                </div>
            </div>
        </nav>

    )
}


export default NavBar;