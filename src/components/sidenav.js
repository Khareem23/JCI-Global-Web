/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function sidenav() {
    return (
            <div id="layoutSidenav_nav">
                <nav className="sidenav shadow-right sidenav-light">
                    <div className="sidenav-menu">
                        <div className="nav accordion" id="accordionSidenav">
                        <div className="sidenav-menu-heading">Core</div>
                        <a className="nav-link collapsed" href="javascript:void(0);" data-toggle="collapse" data-target="#collapseDashboards" aria-expanded="false" aria-controls="collapseDashboards"><div className="nav-link-icon"><i data-feather="activity" /></div>
                            Dashboards
                            <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div></a>
                        <div className="collapse" id="collapseDashboards" data-parent="#accordionSidenav">
                            <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavPages">
                            <a className="nav-link" href="index.html">Default</a><a className="nav-link" href="dashboard-2.html">Multipurpose<span className="badge badge-primary ml-2">New!</span></a><a className="nav-link" href="dashboard-3.html">Affiliate<span className="badge badge-primary ml-2">New!</span></a>
                            </nav>
                        </div>
                        <div className="sidenav-menu-heading">Interface</div>
                        <a className="nav-link collapsed" href="javascript:void(0);" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts"><div className="nav-link-icon"><i data-feather="layout" /></div>
                            Layout
                            <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div></a>
                        <div className="collapse" id="collapseLayouts" data-parent="#accordionSidenav">
                            <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavLayout">
                            <a className="nav-link" href="layout-static.html">Static Navigation</a><a className="nav-link" href="layout-dark.html">Dark Sidenav</a><a className="nav-link" href="layout-rtl.html">RTL Layout</a><a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLayoutsPageHeaders" aria-expanded="false" aria-controls="collapseLayoutsPageHeaders">Page Headers
                                <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div></a>
                            <div className="collapse" id="collapseLayoutsPageHeaders" data-parent="#accordionSidenavLayout">
                                <nav className="sidenav-menu-nested nav"><a className="nav-link" href="header-simplified.html">Simplified</a><a className="nav-link" href="header-overlap.html">Content Overlap</a><a className="nav-link" href="header-breadcrumbs.html">Breadcrumbs</a><a className="nav-link" href="header-light.html">Light</a></nav>
                            </div>
                            </nav>
                        </div>
                        <a className="nav-link collapsed" href="javascript:void(0);" data-toggle="collapse" data-target="#collapseComponents" aria-expanded="false" aria-controls="collapseComponents"><div className="nav-link-icon"><i data-feather="package" /></div>
                            Components
                            <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div></a>
                        <div className="collapse" id="collapseComponents" data-parent="#accordionSidenav">
                            <nav className="sidenav-menu-nested nav">
                            <a className="nav-link" href="alerts.html">Alerts</a><a className="nav-link" href="avatars.html">Avatars<span className="badge badge-primary ml-2">New!</span></a><a className="nav-link" href="badges.html">Badges</a><a className="nav-link" href="buttons.html">Buttons</a><a className="nav-link" href="cards.html">Cards</a><a className="nav-link" href="dropdowns.html">Dropdowns</a><a className="nav-link" href="forms.html">Forms</a><a className="nav-link" href="modals.html">Modals</a><a className="nav-link" href="navigation.html">Navigation</a><a className="nav-link" href="progress.html">Progress</a><a className="nav-link" href="toasts.html">Toasts</a><a className="nav-link" href="tooltips.html">Tooltips</a>
                            </nav>
                        </div>
                        <a className="nav-link collapsed" href="javascript:void(0);" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="false" aria-controls="collapseUtilities"><div className="nav-link-icon"><i data-feather="tool" /></div>
                            Utilities
                            <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div></a>
                        <div className="collapse" id="collapseUtilities" data-parent="#accordionSidenav">
                            <nav className="sidenav-menu-nested nav">
                            <a className="nav-link" href="animations.html">Animations</a><a className="nav-link" href="background.html">Background<span className="badge badge-primary ml-2">New!</span></a><a className="nav-link" href="borders.html">Borders</a><a className="nav-link" href="lift.html">Lift<span className="badge badge-primary ml-2">New!</span></a><a className="nav-link" href="shadows.html">Shadows</a><a className="nav-link" href="typography.html">Typography</a>
                            </nav>
                        </div>
                        <a className="nav-link collapsed" href="javascript:void(0);" data-toggle="collapse" data-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages"><div className="nav-link-icon"><i data-feather="book-open" /></div>
                            Pages
                            <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div></a>
                        <div className="collapse" id="collapsePages" data-parent="#accordionSidenav">
                            <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavPagesMenu">
                            <a className="nav-link collapsed" href="javascript:void(0);" data-toggle="collapse" data-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">Authentication
                                <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div></a>
                            <div className="collapse" id="pagesCollapseAuth" data-parent="#accordionSidenavPagesMenu">
                                <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavPagesAuth">
                                <a className="nav-link collapsed" href="javascript:void(0);" data-toggle="collapse" data-target="#pagesCollapseAuthBasic" aria-expanded="false" aria-controls="pagesCollapseAuthBasic">Basic
                                    <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div></a>
                                <div className="collapse" id="pagesCollapseAuthBasic" data-parent="#accordionSidenavPagesAuth">
                                    <nav className="sidenav-menu-nested nav"><a className="nav-link" href="login-basic.html">Login</a><a className="nav-link" href="register-basic.html">Register</a><a className="nav-link" href="password-basic.html">Forgot Password</a></nav>
                                </div>
                                <a className="nav-link collapsed" href="javascript:void(0);" data-toggle="collapse" data-target="#pagesCollapseAuthSocial" aria-expanded="false" aria-controls="pagesCollapseAuthSocial">Social
                                    <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div></a>
                                <div className="collapse" id="pagesCollapseAuthSocial" data-parent="#accordionSidenavPagesAuth">
                                    <nav className="sidenav-menu-nested nav"><a className="nav-link" href="login-social.html">Login</a><a className="nav-link" href="register-social.html">Register</a><a className="nav-link" href="password-social.html">Forgot Password</a></nav>
                                </div>
                                </nav>
                            </div>
                            <a className="nav-link collapsed" href="javascript:void(0);" data-toggle="collapse" data-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">Error
                                <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div></a>
                            <div className="collapse" id="pagesCollapseError" data-parent="#accordionSidenavPagesMenu">
                                <nav className="sidenav-menu-nested nav"><a className="nav-link" href="401.html">401 Page</a><a className="nav-link" href="404.html">404 Page</a><a className="nav-link" href="404-glitch.html">404 Page (Glitch Effect)</a><a className="nav-link" href="500.html">500 Page</a></nav>
                            </div>
                            <a className="nav-link" href="blank.html">Blank</a>
                            </nav>
                        </div>
                        <a className="nav-link collapsed" href="javascript:void(0);" data-toggle="collapse" data-target="#collapseFlows" aria-expanded="false" aria-controls="collapseFlows"><div className="nav-link-icon"><i data-feather="repeat" /></div>
                            Flows
                            <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div></a>
                        <div className="collapse" id="collapseFlows" data-parent="#accordionSidenav">
                            <nav className="sidenav-menu-nested nav"><a className="nav-link" href="multi-tenant-select.html">Multi-Tenant Registration</a></nav>
                        </div>
                        <div className="sidenav-menu-heading">Addons</div>
                        <a className="nav-link" href="charts.html"><div className="nav-link-icon"><i data-feather="bar-chart" /></div>
                            Charts</a><a className="nav-link" href="tables.html"><div className="nav-link-icon"><i data-feather="filter" /></div>
                            Tables</a>
                        </div>
                    </div>
                    <div className="sidenav-footer">
                        <div className="sidenav-footer-content">
                        <div className="sidenav-footer-subtitle">Logged in as:</div>
                        <div className="sidenav-footer-title">Valerie Luna</div>
                        </div>
                    </div>
                </nav>
            </div>   
    )
}
