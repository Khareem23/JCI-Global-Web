import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidemenu() {
    return (
        <div className="scrollbar-sidebar">
            <div className="app-sidebar__inner">
                    <ul className="vertical-nav-menu">
                    <div className="col-md-3 col-xl-3"><div className="card no-shadow rm-border bg-transparent text-right">
                        <img src="assets/images/logo-inverse.jpeg" alt="" width={225} height={100} />
                        <div className="widget-chart-content" /></div></div>

                    <li className="app-sidebar__heading">Modules</li>
                    <li style={{margin: 16}}>
                        <Link to="/dashboard">
                            <i className="metismenu-icon pe-7s-way" />Dashboard
                        </Link>
                    </li>

                    <div className="progress-bar-xs progress" style={{marginLeft: 20}}>
                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                        </div>
                    </div>
                    <li style={{margin: 16}}>
                        <Link to="/transactions">
                            <i className="metismenu-icon pe-7s-way" />Transactions
                        </Link>
                    </li>

                    <div className="progress-bar-xs progress" style={{marginLeft: 20}}>
                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                        </div>
                    </div>
                    
                    <li style={{margin: 16}}>
                        <Link to="/users">
                            <i className="metismenu-icon pe-7s-way" />User & Verifications
                        </Link>
                    </li>
                    <div className="progress-bar-xs progress" style={{marginLeft: 20}}>
                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                        </div>
                    </div>
                    <li style={{margin: 16}}>
                        <Link to="/charges">
                            <i className="metismenu-icon pe-7s-way" />Charges Management
                        </Link>
                    </li>
                    <div className="progress-bar-xs progress" style={{marginLeft: 20}}>
                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                        </div>
                    </div>
                    <li style={{margin: 16}}>
                        <Link to="/rates">
                            <i className="metismenu-icon pe-7s-way" />Rates Management
                        </Link>
                    </li>
                    <div className="progress-bar-xs progress" style={{marginLeft: 20}}>
                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                        </div>
                    </div>
                    <li style={{margin: 16}}>
                        <Link to="/promos">
                            <i className="metismenu-icon pe-7s-way" />Promo Management
                        </Link>
                    </li>
                    <div className="progress-bar-xs progress" style={{marginLeft: 20}}>
                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                        </div>
                    </div>
                    <li style={{margin: 16}}>
                        <Link to="/accounts">
                            <i className="metismenu-icon pe-7s-way" />Bank Accounts
                        </Link>
                    </li>
                    <div className="progress-bar-xs progress" style={{marginLeft: 20}}>
                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                        </div>
                    </div>
                    <li style={{margin: 16}}>
                        <Link to="/ausreport">
                            <i className="metismenu-icon pe-7s-way" />Austrac Report
                        </Link>
                    </li>
                    <div className="progress-bar-xs progress" style={{marginLeft: 20}}>
                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                        </div>
                    </div>
                    <li style={{margin: 16}}>
                        <Link to="/logout">
                            <i className="metismenu-icon pe-7s-way" />Log Out
                        </Link>
                    </li>
                    <div className="progress-bar-xs progress" style={{marginLeft: 20}}>
                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                        </div>
                    </div>
                   
                    </ul>
                </div>
        </div>
    )
}
