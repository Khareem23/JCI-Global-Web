import React from 'react'

export default function CustSidemenu() {
    return (
        <div className="scrollbar-sidebar">
            <div className="app-sidebar__inner">
                    <ul className="vertical-nav-menu">
                    <div className="col-md-3 col-xl-3"><div className="card no-shadow rm-border bg-transparent text-right"><img src="assets/images/logo-inverse.jpeg" width={225} height={100} /><div className="widget-chart-content" /></div></div>
                    <div className="progress-bar-xs progress" style={{marginLeft: -23, marginRight: -23}}>
                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                        </div>
                    </div>
                    <li className="app-sidebar__heading">Modules</li>
                    <div className="progress-bar-xs progress" style={{marginLeft: 20}}>
                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                        </div>
                    </div>
                    <li style={{margin: 16}}>
                        <a href="#">
                            <i className="metismenu-icon pe-7s-way" />Send Money
                        </a>
                    </li>
                    <div className="progress-bar-xs progress" style={{marginLeft: 20}}>
                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                        </div>
                    </div>
                    <li style={{margin: 16}}>
                        <a href="#">
                            <i className="metismenu-icon pe-7s-way" />Transaction History
                        </a>
                    </li>
                    <div className="progress-bar-xs progress" style={{marginLeft: 20}}>
                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                        </div>
                    </div>
                    <li style={{margin: 16}}>
                        <a href="#">
                            <i className="metismenu-icon pe-7s-way" />Benficiaries
                        </a>
                    </li>
                    <div className="progress-bar-xs progress" style={{marginLeft: 20}}>
                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                        </div>
                    </div>
                    <li style={{margin: 16}}>
                        <a href="#">
                            <i className="metismenu-icon pe-7s-way" />My Accounts
                        </a>
                    </li>
                    <div className="progress-bar-xs progress" style={{marginLeft: 20}}>
                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                        </div>
                    </div>
                    <li style={{margin: 16}}>
                        <a href="#">
                            <i className="metismenu-icon pe-7s-way" />Log Out
                        </a>
                    </li>
                   
                    </ul>
                </div>
        </div>
    )
}
