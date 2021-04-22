import React from 'react'

export default function CustSidemenu() {
    return (
        <div className="scrollbar-sidebar">
            <div className="app-sidebar__inner">
                    <ul className="vertical-nav-menu">
                    <div className="col-md-3 col-xl-3"><div className="card no-shadow rm-border bg-transparent text-right"><img src="assets/images/logo-inverse.jpeg" width={225} height={100} /><div className="widget-chart-content" /></div></div>

                    <li className="app-sidebar__heading">Modules</li>
                    <li style={{margin: 16}}>
                        <a href="#">
                            <i className="metismenu-icon pe-7s-way" />Send Money
                        </a>
                    </li>
                    <li style={{margin: 16}}>
                        <a href="#">
                            <i className="metismenu-icon pe-7s-way" />Transaction History
                        </a>
                    </li>
                    <li style={{margin: 16}}>
                        <a href="#">
                            <i className="metismenu-icon pe-7s-way" />Benficiaries
                        </a>
                    </li>
                    <li style={{margin: 16}}>
                        <a href="#">
                            <i className="metismenu-icon pe-7s-way" />My Accounts
                        </a>
                    </li>
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
