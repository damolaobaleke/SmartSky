import React from 'react';

const WhyUseSec=(props)=>{
    return(
        <div className="bg-whyUse py-5">
            <div className="container">
                <div className="row justify-content-center my-4">
                    <div className="col-md-4">
                        <div className="card why-use-card">
                            <div className="card-body">
                                <img className="map-img my-2" src="https://res.cloudinary.com/woweffect-communications/image/upload/v1622023245/SmartSky/Mask_Group-2_wcfeqk.svg" alt=""/>
                                <h3 className="text-center card-title py-4">Live Tracking &amp; Route Optimization</h3>
                                <p className="text-center card-p py-2">Live monitoring from pickup to delivery will provide location and status information for each individual shipment &amp; suggest the most safe and optimal route.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div className="card why-use-card">
                            <div className="card-body">
                                <img className="map-img my-2" src="https://res.cloudinary.com/woweffect-communications/image/upload/v1622023244/SmartSky/Mask_Group_x3ecub.svg" alt=""/>
                                <h3 className="text-center card-title py-4">Digitization</h3>
                                <p className="text-center card-p pt-5">Live monitoring from pickup to delivery will provide location and status information for each individual shipment &amp; suggest the most safe and optimal route.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div className="card why-use-card">
                            <div className="card-body">
                                <img className="map-img my-2" src="https://res.cloudinary.com/woweffect-communications/image/upload/v1622023245/SmartSky/Mask_Group-1_u2ad0w.svg" alt=""/>
                                <h3 className="text-center card-title py-4">Automation</h3>
                                <p className="text-center card-p pt-5">Complete automation of the operational processes will enormously boost your company’s performance and eliminate unnecessary errors.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUseSec;