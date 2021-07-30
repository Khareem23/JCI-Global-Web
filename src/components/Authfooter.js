import React from 'react';
import { Link } from 'react-router-dom';

export default function Authfooter() {
    return (
            <div className="card" style={{marginTop: 10, marginBottom: 20}}>
                <div className="no-gutters row">
                    <div className="col-md-3 col-xl-3">
                    <div className="card no-shadow rm-border bg-transparent widget-chart text-left">
                        
                            {/* eslint-disable-next-line jsx-a11y/alt-text */}
                            <img src="assets/images/logo-inverse.jpeg" width="225" height="100" />
                        
                        <div className="widget-chart-content">
                        </div>
                    </div>
                    </div>
                    <div className="col-md-3 col-xl-3">
                    <div className="card no-shadow rm-border bg-transparent widget-chart text-left">
                    <ul className="nav flex-column">
                    <ul className="nav flex-column">
                        
                        <li className="nav-item nav-link">
                            {/* <h4 className="nav-link"> */}
                            <strong>Legal</strong>
                            {/* </h4> */}
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">
                            <span>Login</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="#" className="nav-link">
                            <span>Private Policy</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="#" className="nav-link">
                            <span>Terms of Service</span>
                            </a>
                        </li>
                    </ul>
                    </ul>
                    </div>
                    </div>
                    <div className="card no-shadow rm-border bg-transparent widget-chart col-md-3 col-xl-3 text-left">
                            {/* eslint-disable-next-line jsx-a11y/alt-text */}
                            <img src="assets/images/playstore.png" width="250" height="82" />
                        <div className="widget-chart-content">
                        </div>
                    </div>
                    <div className="card no-shadow rm-border bg-transparent widget-chart text-left">
                            {/* eslint-disable-next-line jsx-a11y/alt-text */}
                            <img src="assets/images/appstore.png" width="250" height="82" />
                        <div className="widget-chart-content">
                        </div>
                    </div>
                </div>
                <div className="text-center d-block p-3 card-footer">
                    <button className="btn-pill btn-shadow btn-wide fsize-1 btn btn-danger btn-lg">
                    {/* <span className="mr-2 opacity-7">
                        <i className="icon icon-anim-pulse ion-ios-analytics-outline" />
                    </span> */}
                    {/* <span className="mr-1">View Complete Report</span> */}
                    Powered by Cloud23 © Technologies 2020, All rights reserved
                    </button>
                </div>
            </div>

    )
}
