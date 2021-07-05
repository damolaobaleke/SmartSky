import React, {useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import './HowitWorks.css';

const HowItWorks =()=>{
    return(
        <div>
            <NavBar/>
            <div className="bg-howitworks-sec1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="how-it-works_Heading py-2">Leading airlines distribute<br/> their short-term cargo<br/> capacities with Smart Sky</h1>

                            <p className="sec1-text">cargo.one offers airlines a fully digital and data-driven distribution channel to reach more forwarders more effectively.</p>
                            <Link className="get-started btn btn-danger py-2 px-4" to="/">Get Started</Link>
                        </div>

                        <div className="col-md-6">
                            <img class="img-responsive img-fluid order-1 order-md-2" src="https://res.cloudinary.com/woweffect-communications/image/upload/v1625063965/SmartSky/Group_168_nyx2bu.svg" alt="Tailor Video Image"/>
                            <img class="play-btn" src="https://res.cloudinary.com/woweffect-communications/image/upload/v1625062934/SmartSky/Group_170_jxffdv.svg" alt="play button" data-toggle="modal" data-target="#sKVideo"/>
                        </div>
                    </div>
                </div>

                {/* Modal */}
                <div class="modal fade" id="sKVideo" tabindex="-1" role="dialog">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content vd-modal-content">

                            <div class="modal-header vd-modal-header border-0">
                                <button id="closeVideo" type="button" class="close" data-dismiss="modal" onclick="stopVideo()"><span>&times;</span></button>
                            </div>

                            <div class="modal-body">
                                <iframe id="video" class="order-1 order-md-2" src="https://www.youtube.com/embed/3Fx5Q8xGU8k" frameborder="0" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div className="bg-howitworks-sec2">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-md-8">
                            <span className="d-flex">
                                <img className="sec2-tick ml-md-2" src="https://res.cloudinary.com/woweffect-communications/image/upload/v1625132227/SmartSky/Group_96_jjd3f1.svg" alt=""/><h3 className="how-it-works_Sec2_heading ml-3">Register/Login on Smartsky</h3>
                            </span>
                            
                            <ul className="how-it-works__Sec2_list">
                                <li className="py-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, dignissimos asperiores. Omnis quasi optio dolore veritatis mollitia accusamus</li>
                                <li className="py-1">praesentium placeat cupiditate velit architecto itaque animi, nam, amet excepturi aliquid a?</li>
                                <li className="py-1">praesentium placeat cupiditate velit architecto itaque animi, nam, amet excepturi aliquid a?</li>
                            </ul>

                            <span className="d-flex">
                                <img className="sec2-tick ml-md-2" src="https://res.cloudinary.com/woweffect-communications/image/upload/v1625132227/SmartSky/Group_96_jjd3f1.svg" alt=""/><h3 className="how-it-works_Sec2_heading ml-3">Get quotes with just two clicks</h3>
                            </span>
                            
                            <ul className="how-it-works__Sec2_list">
                                <li className="py-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, dignissimos asperiores. Omnis quasi optio dolore veritatis mollitia accusamus</li>
                                <li className="py-1">praesentium placeat cupiditate velit architecto itaque animi, nam, amet excepturi aliquid a?</li>
                                <li className="py-1">praesentium placeat cupiditate velit architecto itaque animi, nam, amet excepturi aliquid a?</li>
                            </ul>

                            <span className="d-flex">
                                <img className="sec2-tick ml-md-2" src="https://res.cloudinary.com/woweffect-communications/image/upload/v1625132227/SmartSky/Group_96_jjd3f1.svg" alt=""/><h3 className="how-it-works_Sec2_heading ml-3">Directly book all quotes with instant confirmation</h3>
                            </span>
                            
                            <ul className="how-it-works__Sec2_list">
                                <li className="py-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, dignissimos asperiores. Omnis quasi optio dolore veritatis mollitia accusamus</li>
                                <li className="py-1">praesentium placeat cupiditate velit architecto itaque animi, nam, amet excepturi aliquid a?</li>
                                <li className="py-1">praesentium placeat cupiditate velit architecto itaque animi, nam, amet excepturi aliquid a?</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="how-it-works-sec3">
               <div className="container">
                   <div className="row py-5 justify-content-center">
                       <div className="col-md-12 text-center">
                           <h2 style={{color:'#3C3C3C'}} className="text-center">Join hundreds of freight forwarding companies<br/> already using Smart Sky</h2>
                           <Link className="get-started btn btn-danger py-2 px-4 mt-md-3" to="/">Get Started</Link>
                       </div>
                   </div>
               </div>
            </div>
            <Footer/>

        </div>
    )

}

export default HowItWorks;