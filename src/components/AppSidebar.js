import React from 'react'
import CustSidemenu from './CustSidemenu'
import Sidemenu from './Sidemenu'
import { connect } from 'react-redux';


const AppSidebar = (props) => {
    const { authstate } = props;

//export default function AppSidebar() {
    return (
        <div className="app-sidebar sidebar-shadow">
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
                    <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                    <span className="btn-icon-wrapper">
                        <i className="fa fa-ellipsis-v fa-w-6" />
                    </span>
                    </button>
                </span>
                </div>    
                {(() => {
                    if(authstate.role === "Customer")
                    {
                        return <CustSidemenu/>
                    } else if(authstate.role === "Admin") {
                        return <Sidemenu/>
                    }
                })()}
                
                
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        authstate: state.authstate,
    }
  }
  
  export default connect(mapStateToProps)(AppSidebar);
  
