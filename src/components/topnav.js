import React from 'react';

const topnav = () => {
    return (
        <div>
            <nav className="topnav navbar navbar-expand shadow navbar-light bg-white" id="sidenavAccordion">
                <a className="navbar-brand d-none d-sm-block" href="index.html">SB Admin Pro</a><button className="btn btn-icon btn-transparent-dark order-1 order-lg-0 mr-lg-2" id="sidebarToggle" href="#"><i data-feather="menu" /></button>
                <form className="form-inline mr-auto d-none d-lg-block"><input className="form-control form-control-solid mr-sm-2" type="search" placeholder="Search" aria-label="Search" /></form>
                <ul className="navbar-nav align-items-center ml-auto">
                    <li className="nav-item dropdown no-caret mr-3">
                    <a className="nav-link dropdown-toggle" id="navbarDropdownDocs" href="javascript:void(0);" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><div className="d-inline d-md-none font-weight-500">Docs</div>
                        <div className="d-none d-md-inline font-weight-500">Documentation</div>
                        <i className="fas fa-chevron-right dropdown-arrow" /></a>
                    <div className="dropdown-menu dropdown-menu-right py-0 o-hidden mr-n15 mr-lg-0 animated--fade-in-up" aria-labelledby="navbarDropdownDocs">
                        <a className="dropdown-item py-3" href="https://docs.startbootstrap.com/sb-admin-pro" target="_blank"><div className="icon-stack bg-primary-soft text-primary mr-4"><i data-feather="book" /></div>
                        <div>
                            <div className="small text-gray-500">Documentation</div>
                            Usage instructions and reference
                        </div></a>
                        <div className="dropdown-divider m-0" />
                        <a className="dropdown-item py-3" href="https://docs.startbootstrap.com/sb-admin-pro/components" target="_blank"><div className="icon-stack bg-primary-soft text-primary mr-4"><i data-feather="code" /></div>
                        <div>
                            <div className="small text-gray-500">Components</div>
                            Code snippets and reference
                        </div></a>
                        <div className="dropdown-divider m-0" />
                        <a className="dropdown-item py-3" href="https://docs.startbootstrap.com/sb-admin-pro/changelog" target="_blank"><div className="icon-stack bg-primary-soft text-primary mr-4"><i data-feather="file-text" /></div>
                        <div>
                            <div className="small text-gray-500">Changelog</div>
                            Updates and changes
                        </div></a>
                    </div>
                    </li>
                    <li className="nav-item dropdown no-caret mr-3 dropdown-notifications">
                    <a className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownAlerts" href="javascript:void(0);" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-feather="bell" /></a>
                    <div className="dropdown-menu dropdown-menu-right border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownAlerts">
                        <h6 className="dropdown-header dropdown-notifications-header"><i className="mr-2" data-feather="bell" />Alerts Center</h6>
                        <a className="dropdown-item dropdown-notifications-item" href="#!"><div className="dropdown-notifications-item-icon bg-warning"><i data-feather="activity" /></div>
                        <div className="dropdown-notifications-item-content">
                            <div className="dropdown-notifications-item-content-details">December 29, 2019</div>
                            <div className="dropdown-notifications-item-content-text">This is an alert message. It's nothing serious, but it requires your attention.</div>
                        </div></a><a className="dropdown-item dropdown-notifications-item" href="#!"><div className="dropdown-notifications-item-icon bg-info"><i data-feather="bar-chart" /></div>
                        <div className="dropdown-notifications-item-content">
                            <div className="dropdown-notifications-item-content-details">December 22, 2019</div>
                            <div className="dropdown-notifications-item-content-text">A new monthly report is ready. Click here to view!</div>
                        </div></a><a className="dropdown-item dropdown-notifications-item" href="#!"><div className="dropdown-notifications-item-icon bg-danger"><i className="fas fa-exclamation-triangle" /></div>
                        <div className="dropdown-notifications-item-content">
                            <div className="dropdown-notifications-item-content-details">December 8, 2019</div>
                            <div className="dropdown-notifications-item-content-text">Critical system failure, systems shutting down.</div>
                        </div></a><a className="dropdown-item dropdown-notifications-item" href="#!"><div className="dropdown-notifications-item-icon bg-success"><i data-feather="user-plus" /></div>
                        <div className="dropdown-notifications-item-content">
                            <div className="dropdown-notifications-item-content-details">December 2, 2019</div>
                            <div className="dropdown-notifications-item-content-text">New user request. Woody has requested access to the organization.</div>
                        </div></a><a className="dropdown-item dropdown-notifications-footer" href="#!">View All Alerts</a>
                    </div>
                    </li>
                    <li className="nav-item dropdown no-caret mr-3 dropdown-notifications">
                    <a className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownMessages" href="javascript:void(0);" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-feather="mail" /></a>
                    <div className="dropdown-menu dropdown-menu-right border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownMessages">
                        <h6 className="dropdown-header dropdown-notifications-header"><i className="mr-2" data-feather="mail" />Message Center</h6>
                        <a className="dropdown-item dropdown-notifications-item" href="#!"><img className="dropdown-notifications-item-img" src="https://source.unsplash.com/vTL_qy03D1I/60x60" />
                        <div className="dropdown-notifications-item-content">
                            <div className="dropdown-notifications-item-content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                            <div className="dropdown-notifications-item-content-details">Emily Fowler · 58m</div>
                        </div></a><a className="dropdown-item dropdown-notifications-item" href="#!"><img className="dropdown-notifications-item-img" src="https://source.unsplash.com/4ytMf8MgJlY/60x60" />
                        <div className="dropdown-notifications-item-content">
                            <div className="dropdown-notifications-item-content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                            <div className="dropdown-notifications-item-content-details">Diane Chambers · 2d</div>
                        </div></a><a className="dropdown-item dropdown-notifications-footer" href="#!">Read All Messages</a>
                    </div>
                    </li>
                    <li className="nav-item dropdown no-caret mr-3 dropdown-user">
                    <a className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownUserImage" href="javascript:void(0);" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img className="img-fluid" src="https://source.unsplash.com/QAB-WJcbgJk/60x60" /></a>
                    <div className="dropdown-menu dropdown-menu-right border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownUserImage">
                        <h6 className="dropdown-header d-flex align-items-center">
                        <img className="dropdown-user-img" src="https://source.unsplash.com/QAB-WJcbgJk/60x60" />
                        <div className="dropdown-user-details">
                            <div className="dropdown-user-details-name">Valerie Luna</div>
                            <div className="dropdown-user-details-email">vluna@aol.com</div>
                        </div>
                        </h6>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#!"><div className="dropdown-item-icon"><i data-feather="settings" /></div>
                        Account</a><a className="dropdown-item" href="#!"><div className="dropdown-item-icon"><i data-feather="log-out" /></div>
                        Logout</a>
                    </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default topnav;