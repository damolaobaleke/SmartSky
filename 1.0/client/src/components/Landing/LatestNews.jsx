import React from 'react';
import {Link} from 'react-router-dom';

const LatestNewsSec =(props) =>{
    return(
        <div className="bg-latestNews py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="text-center mb-5">Latest News</h2>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card">
                            <img className="sector-img" src="https://res.cloudinary.com/woweffect-communications/image/upload/v1622069482/SmartSky/Rectangle_66_njrjcm.svg" alt=""/>
                            <div className="card-body news-card-body">
                                <h3 className="text-left card-news-sector py-2">Business</h3>
                                <p className="text-left news-summary py-2">Amet minim mollit non deserunt ullamco est sit aliqe</p>
                                <Link className="link py-3" to="">Read more <img src="https://res.cloudinary.com/woweffect-communications/image/upload/v1622069386/SmartSky/Arrow_1_l4eigs.svg" alt="link-arrow"/></Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card news-card">
                            <img className="sector-img" src="https://res.cloudinary.com/woweffect-communications/image/upload/v1622069852/SmartSky/Rectangle_67_imskns.svg" alt=""/>
                            <div className="card-body">
                                <h3 className="text-left card-news-sector py-2">Technology</h3>
                                <p className="text-left news-summary py-2">Amet minim mollit non deserunt ullamco est sit aliqe</p>
                                <Link className="link py-3" to="">Read more <img src="https://res.cloudinary.com/woweffect-communications/image/upload/v1622069386/SmartSky/Arrow_1_l4eigs.svg" alt="link-arrow"/></Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card news-card">
                            <img className="sector-img" src="https://res.cloudinary.com/woweffect-communications/image/upload/v1622069482/SmartSky/Rectangle_66_njrjcm.svg" alt=""/>
                            <div className="card-body">
                                <h3 className="text-left card-news-sector py-2">Agriculture</h3>
                                <p className="text-left news-summary py-2">Amet minim mollit non deserunt ullamco est sit aliqe</p>
                                <Link className="link py-3" to="">Read more <img src="https://res.cloudinary.com/woweffect-communications/image/upload/v1622069386/SmartSky/Arrow_1_l4eigs.svg" alt="link-arrow"/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestNewsSec;