import React from 'react';
import Notification from './Notification';
import { connect } from 'react-redux';
import { LogOutAuthAction } from '../redux/actions/authaction';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';


const AppHeader = (props) => {
// export default function AppHeader(props) {

    const { notify, setNotify, authstate, logoutuser, changepassword, profileupdate, changepin, bankaccountupdate} = props;
    const history = useHistory();
    // console.log(authstate)
    
    const handleLogout = e => {
        e.preventDefault();
        logoutuser(history);
    };


    // const handleLogout = e => {
    //     console.log('cover')
    //     e.preventDefault();
    //     logoutuser(history);
    // };

    const handleChangePassword = e => {
        e.preventDefault();
    };

    const handleProfileUpdate = e => {
        e.preventDefault();
    };

    const handleChangePin = e => {
        e.preventDefault();
    };
    const handleBankAccountUpdate = e => {
        e.preventDefault();
    };


    return (
        <div className="app-header header-shadow">
            <Notification notify={notify} setNotify={setNotify} />

        <div className="app-header__logo">
            <div className="logo-src" />
            <div className="header__pane ml-auto">
            <div>
                <button type="button" className="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
                <span className="hamburger-box">
                    <span className="hamburger-inner" />
                </span>
                </button>
            </div>
            </div>
        </div>
        <div className="app-header__mobile-menu">
            <div>
            <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
                <span className="hamburger-box">
                <span className="hamburger-inner" />
                </span>
            </button>
            </div>
        </div>
        <div className="app-header__menu">
            <span>
            <button type="button" className="btn-icon btn-icon-only btn btn-danger btn-sm mobile-toggle-header-nav">
                <span className="btn-icon-wrapper">
                <i className="fa fa-ellipsis-v fa-w-6" />
                </span>
            </button>
            </span>
        </div>
        <div className="app-header__content">
            <div className="app-header-left">
                <div className="search-wrapper">
                    <div className="input-holder">
                    <input type="text" className="search-input" placeholder="Type to search" />
                    <button className="search-icon"><span /></button>
                    </div>
                    <button className="close" />
                </div>
            </div>
            <div className="app-header-right">
                <div className="header-dots">
                    <div className="dropdown">
                        <button type="button" aria-haspopup="true" aria-expanded="false" data-toggle="dropdown" className="p-0 mr-2 btn btn-link">
                            <span className="icon-wrapper icon-wrapper-alt rounded-circle">
                            <span className="icon-wrapper-bg bg-danger" />
                            <i className="icon text-danger ion-android-apps" />
                            </span>
                        </button>
                        <div tabIndex={-1} role="menu" aria-hidden="true" className="dropdown-menu-xl rm-pointers dropdown-menu dropdown-menu-right">
                        <div className="dropdown-menu-header">
                        <div className="dropdown-menu-header-inner bg-plum-plate">
                            <div className="menu-header-image" style={{backgroundImage: 'url("assets/images/dropdown-header/abstract4.jpg")'}} />
                            <div className="menu-header-content text-white">
                            <h5 className="menu-header-title">Grid Menu</h5>
                            <h6 className="menu-header-subtitle">Easy grid navigation inside dropdowns</h6>
                            </div>
                        </div>
                        </div>
                        <div className="grid-menu grid-menu-xl grid-menu-3col">
                        <div className="no-gutters row">
                            <div className="col-sm-6 col-xl-4">
                            <Link to="/sendmoney" className="btn-icon-vertical btn-square btn-transition btn btn-outline-link">
                                <i className="pe-7s-cash icon-gradient bg-night-fade btn-icon-wrapper btn-icon-lg mb-3" /> Send Money
                            </Link>
                            </div>
                            <div className="col-sm-6 col-xl-4">
                            <Link to="/transactionhistory" className="btn-icon-vertical btn-square btn-transition btn btn-outline-link">
                                <i className="pe-7s-note2 icon-gradient bg-night-fade btn-icon-wrapper btn-icon-lg mb-3"> </i>History
                            </Link>
                            </div>
                            <div className="col-sm-6 col-xl-4">
                            <Link to="/beneficiaries" className="btn-icon-vertical btn-square btn-transition btn btn-outline-link">
                                <i className="pe-7s-users icon-gradient bg-night-fade btn-icon-wrapper btn-icon-lg mb-3"> </i> Benficiaries
                            </Link>
                            </div>
                            <div className="col-sm-6 col-xl-4">
                            <Link to="/myaccount" className="btn-icon-vertical btn-square btn-transition btn btn-outline-link">
                                <i className="pe-7s-user icon-gradient bg-night-fade btn-icon-wrapper btn-icon-lg mb-3"> </i> My Accounts
                            </Link>
                            </div>
                            <div className="col-sm-6 col-xl-4">
                            <button className="btn-icon-vertical btn-square btn-transition btn btn-outline-link">
                                <i className="pe-7s-config icon-gradient bg-night-fade btn-icon-wrapper btn-icon-lg mb-3"/> Settings
                            </button>
                            </div>
                            <div onClick={handleLogout} className="col-sm-6 col-xl-4">
                            <Link onClick={handleLogout} className="btn-icon-vertical btn-square btn-transition btn btn-outline-link">
                                <i className="pe-7s-back icon-gradient bg-night-fade btn-icon-wrapper btn-icon-lg mb-3" onClick={handleLogout}> </i> Log Out
                            </Link>
                            </div>
                        </div>
                        </div>
                        {/* <ul className="nav flex-column">
                        <li className="nav-item-divider nav-item" />
                        <li className="nav-item-btn text-center nav-item">
                            <button className="btn-shadow btn btn-danger btn-sm">Follow-ups</button>
                        </li>
                        </ul> */}
                    </div>
                    </div>

                </div>
                <div className="header-btn-lg pr-0">
                    <div className="widget-content p-0">
                    <div className="widget-content-wrapper">
                    <div className="widget-content-left">
                        <div className="btn-group">
                        <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="p-0 btn">
                            <img width={42} className="rounded-circle" src="assets/images/avatars/1.jpg" alt="" />
                            <i className="fa fa-angle-down ml-2 opacity-8" />
                        </a>
                        <div tabIndex={-1} role="menu" aria-hidden="true" className="rm-pointers dropdown-menu-lg dropdown-menu dropdown-menu-right">
                            <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-info">
                                <div className="menu-header-image opacity-2" style={{backgroundImage: 'url("assets/images/dropdown-header/city3.jpg")'}} />
                                <div className="menu-header-content text-left">
                                <div className="widget-content p-0">
                                    <div className="widget-content-wrapper">
                                    <div className="widget-content-left mr-3">
                                        <img width={42} className="rounded-circle" src="assets/images/avatars/1.jpg" alt="" />
                                    </div>
                                    <div className="widget-content-left">
                                        <div className="widget-heading">{authstate?.unique_name}</div>
                                        <div className="widget-subheading opacity-8">{authstate?.email}</div>
                                    </div>
                                    <div className="widget-content-right mr-2">
                                        <button className="btn-pill btn-shadow btn-shine btn btn-focus" onClick={handleLogout} >Logout</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="scroll-area-xs" style={{height: 350}}>
                            <div className="scrollbar-container ps">
                                <ul className="nav flex-column">
                                <li className="nav-item-header nav-item">Activity</li>
                                <li className="nav-item">
                                    <a href="javascript:void(0);" className="nav-link"><span style={{color: '#d92550', fontWeight: 'bold'}}>My Transactions</span>
                                    <div className="ml-auto badge badge-pill badge-info">8</div>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="javascript:void(0);" className="nav-link"> <span style={{color: '#d92550', fontWeight: 'bold'}}>My Beneficiaries</span>
                                    <div className="ml-auto badge badge-pill badge-info">5</div>
                                    </a>
                                </li>
                                                               
                                <li className="nav-item-header nav-item">My Account
                                </li>
                                <li className="nav-item">
                                    <a href="javascript:void(0);" className="nav-link" onClick={handleChangePassword}><span style={{color: '#d92550', fontWeight: 'bold'}}>Change Password</span></a>
                                </li>
                                <li className="nav-item">
                                    <a href="javascript:void(0);" className="nav-link" onClick={handleChangePin}><span style={{color: '#d92550', fontWeight: 'bold'}}>Change PIN</span></a>
                                </li>
                                <li className="nav-item">
                                    <a href="javascript:void(0);" className="nav-link" onClick={handleProfileUpdate}><span style={{color: '#d92550', fontWeight: 'bold'}}>Update Profile</span></a>
                                </li>
                                <li className="nav-item">
                                    <a href="javascript:void(0);" className="nav-link" onClick={handleBankAccountUpdate}><span style={{color: '#d92550', fontWeight: 'bold'}}>Update Bank Account</span></a>
                                </li> 
                                <li className="nav-item">
                                    <a href="javascript:void(0);" className="nav-link"><span style={{color: '#d92550', fontWeight: 'bold'}}>Settings</span>
                                    <div className="ml-auto badge badge-danger">New</div>
                                    </a>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="widget-content-left  ml-3 header-user-info">
                        <div className="widget-heading"> {authstate?.unique_name} </div>
                        <div className="widget-subheading"> {authstate?.role} </div>
                    </div>
                    </div>
                </div>
                </div>

            </div>
        </div>

        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        authstate: state.authstate.authstate,
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logoutuser: (history) => {
            // dispatch(ShowLoading(""));
            dispatch(LogOutAuthAction(history));
        },
        changepassword: (passwordetails) => {
            
        },
        profileupdate: (profiledetails) => {
            
        },
        changepin: (pinetails) => {
            
        },
        bankaccountupdate: (bankaccountdetails) => {
            
        },
        

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);