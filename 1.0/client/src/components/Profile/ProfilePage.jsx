import React, {useEffect, useState} from 'react'
import {Tabs, Tab, Nav} from 'react-bootstrap';
import Navbar from '../NavBar/DashBoardNav';
import Footer from '../Footer/Footer';
import axios from 'axios';
import './Profile.css'

const ProfilePage=(props)=>{
    const userId = props.match.params.id
    console.log(userId)

    const logOut=()=>{
        //GET Request to the log out end point
        let resp = axios.get('http://localhost:3001/logout')
        console.log(resp.data);

        console.log("log out")
    }

    const getCurrentUser=()=>{
        const resp = axios.get('http://localhost:3001/profile/:id')
    }
    
    let requests = []



    const[initialActiveState, setActiveState] = useState(
        {active: false}
    );

    const changeActive=(e)=>{
        setActiveState({...initialActiveState, active: !initialActiveState.active});
    }

    let active_class = initialActiveState.active ? "activeTab" : 'inactiveTab';

    useEffect((e)=>{
        console.log(`${initialActiveState.active}  ${active_class}`);
    })


    return (
        <div>
            <Navbar/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="nav-drawer">
                                <Nav defaultActiveKey="/profile" className="flex-column">
                                    <Nav.Link onFocus={!initialActiveState} onClick={(e)=>{changeActive()}} className={`${active_class} py-3`} href={`/profile/${userId}/account`}><img className="dashboard-icon mr-md-4" src="https://res.cloudinary.com/woweffect-communications/image/upload/v1625243689/SmartSky/Group_115_ichwkj.svg"/> Account</Nav.Link>
                                    <Nav.Link onClick={(e)=>{changeActive()}}  className={`${active_class} py-3`}  href={`/profile/${userId}/payments`} eventKey="link-1"><img className="dashboard-icon mr-md-4" src="https://res.cloudinary.com/woweffect-communications/image/upload/v1625243689/SmartSky/Group_116_jg49ji.svg"/> Payment Method</Nav.Link>
                                    <Nav.Link onClick={(e)=>{changeActive()}} className={`${active_class} py-3`}  href={`/profile/${userId}/orders`} eventKey="link-2"> <img className="dashboard-icon mr-md-4" src="https://res.cloudinary.com/woweffect-communications/image/upload/v1625243689/SmartSky/Vector_vktgab.svg"/> Orders</Nav.Link>
                                    <Nav.Link onClick={(e)=>{changeActive()}} className={`${active_class} py-3`}  href={`/profile/${userId}/orders`} eventKey="link-2"> <img className="dashboard-icon mr-md-4" src="https://res.cloudinary.com/woweffect-communications/image/upload/v1626610940/SmartSky/Vector_1_kcmtdm.svg"/> Invoices</Nav.Link>
                                    {/* <Nav.Link className="py-3" href="/profile/234/settings" eventKey="disabled" disabled><img className="dashboard-icon mr-md-4" src=""/> Settings</Nav.Link> */}
                                    <Nav.Link onClick={(e)=>{logOut()}} style={{color:'red'}}  className={`${active_class} py-3`}  href="/logout" eventKey=""><img className="dashboard-icon mr-md-4" src="https://res.cloudinary.com/woweffect-communications/image/upload/v1625244420/SmartSky/Group_81_wl3o72.svg"/> Log Out</Nav.Link>
                                </Nav>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )

}

export default ProfilePage;