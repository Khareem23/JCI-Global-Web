import React from 'react'

export default function Appmainarea() {
    return (
        <div className="app-main">
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
                </div>    <div className="scrollbar-sidebar">
                <div className="app-sidebar__inner">
                    <ul className="vertical-nav-menu">
                    <li className="app-sidebar__heading">Menu</li>
                    <li className="mm-active">
                        <a href="#">
                        <i className="metismenu-icon pe-7s-rocket" />Dashboards
                        <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                        </a>
                        <ul className="mm-show">
                        <li>
                            <a href="index.html">
                            <i className="metismenu-icon" />Analytics
                            </a>
                        </li>
                        <li>
                            <a href="dashboards-commerce.html">
                            <i className="metismenu-icon" />Commerce
                            </a>
                        </li>
                        <li>
                            <a href="dashboards-sales.html">
                            <i className="metismenu-icon">
                            </i>Sales
                            </a>
                        </li>
                        <li className="mm-active">
                            <a href="#">
                            <i className="metismenu-icon" /> Minimal
                            <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                            </a>
                            <ul className="mm-show">
                            <li>
                                <a href="dashboards-minimal-1.html">
                                <i className="metismenu-icon" />Variation 1
                                </a>
                            </li>
                            <li>
                                <a href="dashboards-minimal-2.html" className="mm-active">
                                <i className="metismenu-icon" />Variation 2
                                </a>
                            </li>
                            </ul>
                        </li>
                        <li>
                            <a href="dashboards-crm.html">
                            <i className="metismenu-icon" /> CRM
                            </a>
                        </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                        <i className="metismenu-icon pe-7s-browser" />Pages
                        <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                        </a>
                        <ul>
                        <li>
                            <a href="pages-login.html">
                            <i className="metismenu-icon" /> Login
                            </a>
                        </li>
                        <li>
                            <a href="pages-login-boxed.html">
                            <i className="metismenu-icon" />Login Boxed
                            </a>
                        </li>
                        <li>
                            <a href="pages-register.html">
                            <i className="metismenu-icon" />Register
                            </a>
                        </li>
                        <li>
                            <a href="pages-register-boxed.html">
                            <i className="metismenu-icon" />Register Boxed
                            </a>
                        </li>
                        <li>
                            <a href="pages-forgot-password.html">
                            <i className="metismenu-icon" />Forgot Password
                            </a>
                        </li>
                        <li>
                            <a href="pages-forgot-password-boxed.html">
                            <i className="metismenu-icon" />Forgot Password Boxed
                            </a>
                        </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                        <i className="metismenu-icon pe-7s-plugin" />Applications
                        <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                        </a>
                        <ul>
                        <li>
                            <a href="apps-mailbox.html">
                            <i className="metismenu-icon" />Mailbox
                            </a>
                        </li>
                        <li>
                            <a href="apps-chat.html">
                            <i className="metismenu-icon" />Chat
                            </a>
                        </li>
                        <li>
                            <a href="apps-faq-section.html">
                            <i className="metismenu-icon" />FAQ Section
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <i className="metismenu-icon" />Forums
                            <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                            </a>
                            <ul>
                            <li>
                                <a href="apps-forum-list.html">
                                <i className="metismenu-icon" />Forum Listing
                                </a>
                            </li>
                            <li>
                                <a href="apps-forum-threads.html">
                                <i className="metismenu-icon" />Forum Threads
                                </a>
                            </li>
                            <li>
                                <a href="apps-forum-discussion.html">
                                <i className="metismenu-icon" />Forum Discussion
                                </a>
                            </li>
                            </ul>
                        </li>
                        </ul>
                    </li>
                    <li className="app-sidebar__heading">UI Components</li>
                    <li>
                        <a href="#">
                        <i className="metismenu-icon pe-7s-diamond" /> Elements
                        <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                        </a>
                        <ul>
                        <li>
                            <a href="#">
                            <i className="metismenu-icon" /> Buttons
                            <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                            </a>
                            <ul>
                            <li>
                                <a href="elements-buttons-standard.html">
                                <i className="metismenu-icon" />Standard
                                </a>
                            </li>
                            <li>
                                <a href="elements-buttons-pills.html">
                                <i className="metismenu-icon" />Pills
                                </a>
                            </li>
                            <li>
                                <a href="elements-buttons-square.html">
                                <i className="metismenu-icon" />Square
                                </a>
                            </li>
                            <li>
                                <a href="elements-buttons-shadow.html">
                                <i className="metismenu-icon" />Shadow
                                </a>
                            </li>
                            <li>
                                <a href="elements-buttons-icons.html">
                                <i className="metismenu-icon" />With Icons
                                </a>
                            </li>
                            </ul>
                        </li>
                        <li>
                            <a href="elements-dropdowns.html">
                            <i className="metismenu-icon" />Dropdowns
                            </a>
                        </li>
                        <li>
                            <a href="elements-icons.html">
                            <i className="metismenu-icon" />Icons
                            </a>
                        </li>
                        <li>
                            <a href="elements-badges-labels.html">
                            <i className="metismenu-icon" />Badges
                            </a>
                        </li>
                        <li>
                            <a href="elements-cards.html">
                            <i className="metismenu-icon" />Cards
                            </a>
                        </li>
                        <li>
                            <a href="elements-loaders.html">
                            <i className="metismenu-icon" />Loading Indicators
                            </a>
                        </li>
                        <li>
                            <a href="elements-list-group.html">
                            <i className="metismenu-icon" />List Groups
                            </a>
                        </li>
                        <li>
                            <a href="elements-navigation.html">
                            <i className="metismenu-icon" />Navigation Menus
                            </a>
                        </li>
                        <li>
                            <a href="elements-timelines.html">
                            <i className="metismenu-icon" />Timeline
                            </a>
                        </li>
                        <li>
                            <a href="elements-utilities.html">
                            <i className="metismenu-icon" />Utilities
                            </a>
                        </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                        <i className="metismenu-icon pe-7s-car" /> Components
                        <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                        </a>
                        <ul>
                        <li>
                            <a href="components-tabs.html">
                            <i className="metismenu-icon" />Tabs
                            </a>
                        </li>
                        <li>
                            <a href="components-accordions.html">
                            <i className="metismenu-icon" />Accordions
                            </a>
                        </li>
                        <li>
                            <a href="components-notifications.html">
                            <i className="metismenu-icon" />Notifications
                            </a>
                        </li>
                        <li>
                            <a href="components-modals.html">
                            <i className="metismenu-icon" />Modals
                            </a>
                        </li>
                        <li>
                            <a href="components-loading-blocks.html">
                            <i className="metismenu-icon" />Loading Blockers
                            </a>
                        </li>
                        <li>
                            <a href="components-progress-bar.html">
                            <i className="metismenu-icon" />Progress Bar
                            </a>
                        </li>
                        <li>
                            <a href="components-tooltips-popovers.html">
                            <i className="metismenu-icon"> </i>Tooltips &amp; Popovers
                            </a>
                        </li>
                        <li>
                            <a href="components-carousel.html">
                            <i className="metismenu-icon" />Carousel
                            </a>
                        </li>
                        <li>
                            <a href="components-calendar.html">
                            <i className="metismenu-icon" />Calendar
                            </a>
                        </li>
                        <li>
                            <a href="components-pagination.html">
                            <i className="metismenu-icon" />Pagination
                            </a>
                        </li>
                        <li>
                            <a href="components-count-up.html">
                            <i className="metismenu-icon" />Count Up
                            </a>
                        </li>
                        <li>
                            <a href="components-scrollable-elements.html">
                            <i className="metismenu-icon" />Scrollable
                            </a>
                        </li>
                        <li>
                            <a href="components-tree-view.html">
                            <i className="metismenu-icon" />Tree View
                            </a>
                        </li>
                        <li>
                            <a href="components-maps.html">
                            <i className="metismenu-icon" />Maps
                            </a>
                        </li>
                        <li>
                            <a href="components-ratings.html">
                            <i className="metismenu-icon" />Ratings
                            </a>
                        </li>
                        <li>
                            <a href="components-image-crop.html">
                            <i className="metismenu-icon" />Image Crop
                            </a>
                        </li>
                        <li>
                            <a href="components-guided-tours.html">
                            <i className="metismenu-icon" />Guided Tours
                            </a>
                        </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                        <i className="metismenu-icon pe-7s-display2" /> Tables
                        <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                        </a>
                        <ul>
                        <li>
                            <a href="tables-data-tables.html">
                            <i className="metismenu-icon"> </i>Data Tables
                            </a>
                        </li>
                        <li>
                            <a href="tables-regular.html">
                            <i className="metismenu-icon" />Regular Tables
                            </a>
                        </li>
                        <li>
                            <a href="tables-grid.html">
                            <i className="metismenu-icon" />Grid Tables
                            </a>
                        </li>
                        </ul>
                    </li>
                    <li className="app-sidebar__heading">Dashboard Widgets</li>
                    <li>
                        <a href="widgets-chart-boxes.html">
                        <i className="metismenu-icon pe-7s-graph" />Chart Boxes 1
                        </a>
                    </li>
                    <li>
                        <a href="widgets-chart-boxes-2.html">
                        <i className="metismenu-icon pe-7s-way" />Chart Boxes 2
                        </a>
                    </li>
                    <li>
                        <a href="widgets-chart-boxes-3.html">
                        <i className="metismenu-icon pe-7s-ball" />Chart Boxes 3
                        </a>
                    </li>
                    <li>
                        <a href="widgets-profile-boxes.html">
                        <i className="metismenu-icon pe-7s-id" />Profile Boxes
                        </a>
                    </li>
                    <li className="app-sidebar__heading">Forms</li>
                    <li>
                        <a href="#">
                        <i className="metismenu-icon pe-7s-light" /> Elements
                        <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                        </a>
                        <ul>
                        <li>
                            <a href="forms-controls.html">
                            <i className="metismenu-icon" />Controls
                            </a>
                        </li>
                        <li>
                            <a href="forms-layouts.html">
                            <i className="metismenu-icon" />Layouts
                            </a>
                        </li>
                        <li>
                            <a href="forms-validation.html">
                            <i className="metismenu-icon" />Validation
                            </a>
                        </li>
                        <li>
                            <a href="forms-wizard.html">
                            <i className="metismenu-icon" />Wizard
                            </a>
                        </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                        <i className="metismenu-icon pe-7s-joy" /> Widgets
                        <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                        </a>
                        <ul>
                        <li>
                            <a href="forms-datepicker.html">
                            <i className="metismenu-icon" />Datepicker
                            </a>
                        </li>
                        <li>
                            <a href="forms-range-slider.html">
                            <i className="metismenu-icon" />Range Slider
                            </a>
                        </li>
                        <li>
                            <a href="forms-input-selects.html">
                            <i className="metismenu-icon" />Input Selects
                            </a>
                        </li>
                        <li>
                            <a href="forms-toggle-switch.html">
                            <i className="metismenu-icon" />Toggle Switch
                            </a>
                        </li>
                        <li>
                            <a href="forms-wysiwyg-editor.html">
                            <i className="metismenu-icon" />WYSIWYG Editor
                            </a>
                        </li>
                        <li>
                            <a href="forms-input-mask.html">
                            <i className="metismenu-icon" />Input Mask
                            </a>
                        </li>
                        <li>
                            <a href="forms-clipboard.html">
                            <i className="metismenu-icon" />Clipboard
                            </a>
                        </li>
                        <li>
                            <a href="forms-textarea-autosize.html">
                            <i className="metismenu-icon" />Textarea Autosize
                            </a>
                        </li>
                        </ul>
                    </li>
                    <li className="app-sidebar__heading">Charts</li>
                    <li>
                        <a href="charts-chartjs.html">
                        <i className="metismenu-icon pe-7s-graph2" />ChartJS
                        </a>
                    </li>
                    <li>
                        <a href="charts-apexcharts.html">
                        <i className="metismenu-icon pe-7s-graph" />Apex Charts
                        </a>
                    </li>
                    <li>
                        <a href="charts-sparklines.html">
                        <i className="metismenu-icon pe-7s-graph1" />Chart Sparklines
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>

            <div className="app-main__outer">
                <div className="app-main__inner">
                    <div className="app-page-title app-page-title-simple">
                    <div className="page-title-wrapper">
                        <div className="page-title-heading">
                        <div>
                            <div className="page-title-head center-elem">
                            <span className="d-inline-block pr-2">
                                <i className="lnr-apartment icon-gradient bg-mean-fruit" />
                            </span>
                            <span className="d-inline-block">Minimal Dashboard II</span>
                            </div>
                            <div className="page-title-subheading opacity-10">
                            <nav className aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a>
                                    <i aria-hidden="true" className="fa fa-home" />
                                    </a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a>Dashboards</a>
                                </li>
                                <li className="active breadcrumb-item" aria-current="page">
                                    Minimal Dashboard Example
                                </li>
                                </ol>
                            </nav>
                            </div>
                        </div>
                        </div>
                        <div className="page-title-actions">
                        <div className="d-inline-block pr-3">
                            <select id="custom-inp-top" type="select" className="custom-select">
                            <option>Select period...</option>
                            <option>Last Week</option>
                            <option>Last Month</option>
                            <option>Last Year</option>
                            </select>
                        </div>
                        <button type="button" data-toggle="tooltip" data-placement="left" className="btn btn-dark" title="Show a Toastr Notification!">
                            <i className="fa fa-battery-three-quarters" />
                        </button>
                        </div>
                    </div>
                    </div>

                    <div className="mb-3 card">
                        <div className="tabs-lg-alternate card-header">
                            <ul className="nav nav-justified">
                            <li className="nav-item">
                                <a href="#tab-minimal-1" data-toggle="tab" className="nav-link minimal-tab-btn-1">
                                <div className="widget-number"><span>$15,065</span></div>
                                <div className="tab-subheading">
                                    <span className="pr-2 opactiy-6">
                                    <i className="fa fa-comment-dots" />
                                    </span>
                                    Totals
                                </div>
                                </a>
                            </li>
                            
                            <li className="nav-item">
                                <a href="#tab-minimal-3" data-toggle="tab" className="nav-link minimal-tab-btn-3">
                                <div className="widget-number text-danger">
                                    <span>$6,784.0</span>
                                </div>
                                <div className="tab-subheading">
                                    <span className="pr-2 opactiy-6">
                                    <i className="fa fa-bullhorn" />
                                    </span>
                                    Income
                                </div>
                                </a>
                            </li>
                            </ul>
                        </div>
                        <div className="tab-content">
                        <div className="tab-pane" id="tab-minimal-1">
                        <div className="card-body">
                            <div id="chart-combined-tab" />
                        </div>
                        </div>
                        <div className="tab-pane fade" id="tab-minimal-3">
                        <div className="rm-border card-header">
                            <div>
                            <h5 className="menu-header-title text-capitalize text-primary">Income Report</h5>
                            </div>
                            <div className="btn-actions-pane-right text-capitalize">
                            <div className="btn-group dropdown">
                                <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="btn-wide mr-1 dropdown-toggle btn btn-outline-focus btn-sm">Options
                                </button>
                                <div tabIndex={-1} role="menu" aria-hidden="true" className="dropdown-menu-lg rm-pointers dropdown-menu dropdown-menu-right">
                                <div className="dropdown-menu-header">
                                    <div className="dropdown-menu-header-inner bg-primary">
                                    <div className="menu-header-image" style={{backgroundImage: 'url("assets/images/dropdown-header/abstract2.jpg")'}}>
                                    </div>
                                    <div className="menu-header-content">
                                        <div>
                                        <h5 className="menu-header-title">Settings</h5>
                                        <h6 className="menu-header-subtitle">Example Dropdown Menu</h6>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="scroll-area-xs">
                                    <div className="scrollbar-container">
                                    <ul className="nav flex-column">
                                        <li className="nav-item-header nav-item">Activity</li>
                                        <li className="nav-item">
                                        <a href="javascript:void(0);" className="nav-link">Chat
                                            <div className="ml-auto badge badge-pill badge-info">8</div>
                                        </a>
                                        </li>
                                        <li className="nav-item">
                                        <a href="javascript:void(0);" className="nav-link">Recover Password</a>
                                        </li>
                                        <li className="nav-item-header nav-item">My Account</li>
                                        <li className="nav-item">
                                        <a href="javascript:void(0);" className="nav-link">Settings
                                            <div className="ml-auto badge badge-success">New</div>
                                        </a>
                                        </li>
                                        <li className="nav-item">
                                        <a href="javascript:void(0);" className="nav-link">Messages
                                            <div className="ml-auto badge badge-warning">512</div>
                                        </a>
                                        </li>
                                        <li className="nav-item">
                                        <a href="javascript:void(0);" className="nav-link">Logs</a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="card-body p-2">
                            <div className="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                            <div style={{height: 274}}>
                                <div id="chart-combined-tab-3" />
                            </div>
                            </div>
                        </div>
                        <div className="border-top bg-light card-header">
                            <div className="actions-icon-btn mx-auto">
                            <div>
                                <div role="group" className="btn-group-lg btn-group nav">
                                <button type="button" data-toggle="tab" href="#tab-content-income" className="btn-pill pl-3 active btn btn-focus">Income</button>
                                <button type="button" data-toggle="tab" href="#tab-content-expenses" className="btn-pill pr-3  btn btn-focus">Expenses</button>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="tab-content">
                            <div className="tab-pane active fade show" id="tab-content-income" role="tabpanel">
                                <h5 className="menu-header-title">Target Sales</h5>
                                <h6 className="menu-header-subtitle opacity-6">Total performance for this month</h6>
                                <div className="mt-3 row">
                                <div className="col-sm-12 col-md-6">
                                    <div className="card-border mb-sm-3 mb-md-0 border-light no-shadow card">
                                    <div className="widget-content">
                                        <div className="widget-content-outer">
                                        <div className="widget-content-wrapper">
                                            <div className="widget-content-left">
                                            <div className="widget-heading">Orders</div>
                                            </div>
                                            <div className="widget-content-right">
                                            <div className="widget-numbers line-height-1 text-primary">
                                                <span>366</span>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="widget-progress-wrapper mt-1">
                                            <div className="progress-bar-xs progress">
                                            <div className="progress-bar bg-success" role="progressbar" aria-valuenow={76} aria-valuemin={0} aria-valuemax={100} style={{width: '76%'}}>
                                            </div>
                                            </div>
                                            <div className="progress-sub-label">
                                            <div className="sub-label-left">Monthly Target</div>
                                            <div className="sub-label-right">100%</div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <div className="card-border border-light no-shadow card">
                                    <div className="widget-content">
                                        <div className="widget-content-outer">
                                        <div className="widget-content-wrapper">
                                            <div className="widget-content-left">
                                            <div className="widget-heading">Income</div>
                                            </div>
                                            <div className="widget-content-right">
                                            <div className="widget-numbers line-height-1 text-success">
                                                <span>$2797</span>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="widget-progress-wrapper mt-1">
                                            <div className="progress-bar-xs progress-bar-animated progress">
                                            <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={23} aria-valuemin={0} aria-valuemax={100} style={{width: '23%'}}>
                                            </div>
                                            </div>
                                            <div className="progress-sub-label">
                                            <div className="sub-label-left">Monthly Target</div>
                                            <div className="sub-label-right">100%</div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab-content-expenses" role="tabpanel">
                                <h5 className="menu-header-title">Tabbed Content</h5>
                                <h6 className="menu-header-subtitle opacity-6">Example of various options built with
                                ArchitectUI</h6>
                                <div className="mt-3 row">
                                <div className="col-sm-12 col-md-6">
                                    <div className="card-hover-shadow-2x mb-sm-3 mb-md-0 widget-chart widget-chart2 bg-premium-dark text-left card">
                                    <div className="widget-chart-content text-white">
                                        <div className="widget-chart-flex">
                                        <div className="widget-title">Sales</div>
                                        <div className="widget-subtitle opacity-7">Monthly Goals</div>
                                        </div>
                                        <div className="widget-chart-flex">
                                        <div className="widget-numbers text-success">
                                            <small>$</small>
                                            976
                                            <small className="opacity-8 pl-2">
                                            <i className="fa fa-angle-up" />
                                            </small>
                                        </div>
                                        <div className="widget-description ml-auto opacity-7">
                                            <i className="fa fa-angle-up" />
                                            <span className="pl-1">175%</span>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <div className="card-hover-shadow-2x widget-chart widget-chart2 bg-premium-dark text-left card">
                                    <div className="widget-chart-content text-white">
                                        <div className="widget-chart-flex">
                                        <div className="widget-title">Clients</div>
                                        <div className="widget-subtitle text-warning">Returning</div>
                                        </div>
                                        <div className="widget-chart-flex">
                                        <div className="widget-numbers text-warning">84
                                            <small>%</small>
                                            <small className="opacity-8 pl-2">
                                            <i className="fa fa-angle-down" />
                                            </small>
                                        </div>
                                        <div className="widget-description ml-auto text-warning">
                                            <span className="pr-1">45</span>
                                            <i className="fa fa-angle-up" />
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>


                    <div className="row">
                        <div className="col-sm-12 col-md-7">
                            <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <div className="card-shadow-primary mb-3 widget-chart widget-chart2 text-left card">
                                <div className="widget-chat-wrapper-outer">
                                    <div className="widget-chart-content">
                                    <h6 className="widget-subheading">Income</h6>
                                    <div className="widget-chart-flex">
                                        <div className="widget-numbers mb-0 w-100">
                                        <div className="widget-chart-flex">
                                            <div className="fsize-4">
                                            <small className="opacity-5">$</small>
                                            5,456
                                            </div>
                                            <div className="ml-auto">
                                            <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                                <span className="text-success pl-2">+14%</span>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="card-shadow-primary mb-3 widget-chart widget-chart2 text-left card">
                                <div className="widget-chat-wrapper-outer">
                                    <div className="widget-chart-content">
                                    <h6 className="widget-subheading">Expenses</h6>
                                    <div className="widget-chart-flex">
                                        <div className="widget-numbers mb-0 w-100">
                                        <div className="widget-chart-flex">
                                            <div className="fsize-4 text-danger">
                                            <small className="opacity-5 text-muted">$</small>
                                            4,764
                                            </div>
                                            <div className="ml-auto">
                                            <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                                <span className="text-danger pl-2">
                                                <span className="pr-1">
                                                    <i className="fa fa-angle-up" />
                                                </span>
                                                8%
                                                </span>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="card-shadow-primary mb-3 widget-chart widget-chart2 text-left card">
                                <div className="widget-chat-wrapper-outer">
                                    <div className="widget-chart-content">
                                    <h6 className="widget-subheading">Spendings</h6>
                                    <div className="widget-chart-flex">
                                        <div className="widget-numbers mb-0 w-100">
                                        <div className="widget-chart-flex">
                                            <div className="fsize-4">
                                            <span className="text-success pr-2">
                                                <i className="fa fa-angle-down" />
                                            </span>
                                            <small className="opacity-5">$</small>
                                            1.5M
                                            </div>
                                            <div className="ml-auto">
                                            <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                                <span className="text-success pl-2">
                                                <span className="pr-1">
                                                    <i className="fa fa-angle-down" />
                                                </span>
                                                15%
                                                </span>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="card-shadow-primary mb-3 widget-chart widget-chart2 text-left card">
                                <div className="widget-chat-wrapper-outer">
                                    <div className="widget-chart-content">
                                    <h6 className="widget-subheading">Totals</h6>
                                    <div className="widget-chart-flex">
                                        <div className="widget-numbers mb-0 w-100">
                                        <div className="widget-chart-flex">
                                            <div className="fsize-4">
                                            <small className="opacity-5">$</small>
                                            31,564
                                            </div>
                                            <div className="ml-auto">
                                            <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                                <span className="text-warning pl-2">+76%</span>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-5">
                        <div className="mb-3 card">
                        <div className="card-body">
                            <div className="widget-chart widget-chart2 text-left p-0">
                            <div className="widget-chat-wrapper-outer">
                                <div className="widget-chart-content">
                                <div className="widget-chart-flex">
                                    <div className="widget-numbers mt-0">
                                    <div className="widget-chart-flex">
                                        <div>
                                        <small className="opacity-5">$</small>
                                        <span>628</span>
                                        </div>
                                        <div className="widget-title ml-2 opacity-5 font-size-lg text-muted">Total Expenses Today</div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                                <div id="dashboard-sparkline-carousel-3" />
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="mbg-3 h-auto pl-0 pr-0 bg-transparent no-border card-header">
                        <div className="card-header-title fsize-2 text-capitalize font-weight-normal">Target Section</div>
                        <div className="btn-actions-pane-right text-capitalize actions-icon-btn">
                            <button className="btn btn-link btn-sm">View Details</button>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                        <div className="card-shadow-danger mb-3 widget-chart widget-chart2 text-left card">
                            <div className="widget-content p-0 w-100">
                            <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                <div className="widget-content-left pr-2 fsize-1">
                                    <div className="widget-numbers mt-0 fsize-3 text-danger">71%</div>
                                </div>
                                <div className="widget-content-right w-100">
                                    <div className="progress-bar-xs progress">
                                    <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '71%'}}>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="widget-content-left fsize-1">
                                <div className="text-muted opacity-6">Income Target</div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                        <div className="card-shadow-success mb-3 widget-chart widget-chart2 text-left card">
                            <div className="widget-content p-0 w-100">
                            <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                <div className="widget-content-left pr-2 fsize-1">
                                    <div className="widget-numbers mt-0 fsize-3 text-success">54%</div>
                                </div>
                                <div className="widget-content-right w-100">
                                    <div className="progress-bar-xs progress">
                                    <div className="progress-bar bg-success" role="progressbar" aria-valuenow={54} aria-valuemin={0} aria-valuemax={100} style={{width: '54%'}}>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="widget-content-left fsize-1">
                                <div className="text-muted opacity-6">Expenses Target</div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                        <div className="card-shadow-warning mb-3 widget-chart widget-chart2 text-left card">
                            <div className="widget-content p-0 w-100">
                            <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                <div className="widget-content-left pr-2 fsize-1">
                                    <div className="widget-numbers mt-0 fsize-3 text-warning">32%</div>
                                </div>
                                <div className="widget-content-right w-100">
                                    <div className="progress-bar-xs progress">
                                    <div className="progress-bar bg-warning" role="progressbar" aria-valuenow={32} aria-valuemin={0} aria-valuemax={100} style={{width: '32%'}}>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="widget-content-left fsize-1">
                                <div className="text-muted opacity-6">Spendings Target</div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                        <div className="card-shadow-info mb-3 widget-chart widget-chart2 text-left card">
                            <div className="widget-content p-0 w-100">
                            <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                <div className="widget-content-left pr-2 fsize-1">
                                    <div className="widget-numbers mt-0 fsize-3 text-info">89%</div>
                                </div>
                                <div className="widget-content-right w-100">
                                    <div className="progress-bar-xs progress">
                                    <div className="progress-bar bg-info" role="progressbar" aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} style={{width: '89%'}}>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="widget-content-left fsize-1">
                                <div className="text-muted opacity-6">Totals Target</div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="main-card mb-3 card">
                        <div className="card-header">
                        <div className="card-header-title font-size-lg text-capitalize font-weight-normal">Company Agents Status
                        </div>
                        <div className="btn-actions-pane-right">
                            <button type="button" id="PopoverCustomT-1" className="btn-icon btn-wide btn-outline-2x btn btn-outline-focus btn-sm">
                            Actions Menu
                            <span className="pl-2 align-middle opactiy-7">
                                <i className="fa fa-angle-down" />
                            </span>
                            </button>
                        </div>
                        </div>
                        <div className="table-responsive">
                        <table className="align-middle text-truncate mb-0 table table-borderless table-hover">
                            <thead>
                            <tr>
                                <th className="text-center">#</th>
                                <th className="text-center">Avatar</th>
                                <th className="text-center">Name</th>
                                <th className="text-center">Company</th>
                                <th className="text-center">Status</th>
                                <th className="text-center">Due Date</th>
                                <th className="text-center">Target Achievement</th>
                                <th className="text-center">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="text-center text-muted" style={{width: 80}}>#54</td>
                                <td className="text-center" style={{width: 80}}>
                                <img width={40} className="rounded-circle" src="assets/images/avatars/1.jpg" alt="" />
                                </td>
                                <td className="text-center"><a href="javascript:void(0)">Juan C. Cargill</a></td>
                                <td className="text-center"><a href="javascript:void(0)">Micro Electronics</a></td>
                                <td className="text-center"><div className="badge badge-pill badge-danger">Canceled</div></td>
                                <td className="text-center">
                                <span className="pr-2 opacity-6">
                                    <i className="fa fa-business-time" />
                                </span>
                                12 Dec
                                </td>
                                <td className="text-center" style={{width: 200}}>
                                <div className="widget-content p-0">
                                    <div className="widget-content-outer">
                                    <div className="widget-content-wrapper">
                                        <div className="widget-content-left pr-2">
                                        <div className="widget-numbers fsize-1 text-danger">71%</div>
                                        </div>
                                        <div className="widget-content-right w-100">
                                        <div className="progress-bar-xs progress">
                                            <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '71%'}}>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </td>
                                <td className="text-center">
                                <div role="group" className="btn-group-sm btn-group">
                                    <button className="btn-shadow btn btn-primary">Hire</button>
                                    <button className="btn-shadow btn btn-primary">Fire</button>
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center text-muted" style={{width: 80}}>#55</td>
                                <td className="text-center" style={{width: 80}}>
                                <img width={40} className="rounded-circle" src="assets/images/avatars/2.jpg" alt="" />
                                </td>
                                <td className="text-center"><a href="javascript:void(0)">Johnathan Phelan</a></td>
                                <td className="text-center"><a href="javascript:void(0)">Hatchworks</a></td>
                                <td className="text-center"><div className="badge badge-pill badge-info">On Hold</div></td>
                                <td className="text-center">
                                <span className="pr-2 opacity-6">
                                    <i className="fa fa-business-time" />
                                </span>
                                12 Dec
                                </td>
                                <td className="text-center" style={{width: 200}}>
                                <div className="widget-content p-0">
                                    <div className="widget-content-outer">
                                    <div className="widget-content-wrapper">
                                        <div className="widget-content-left pr-2">
                                        <div className="widget-numbers fsize-1 text-warning">54%</div>
                                        </div>
                                        <div className="widget-content-right w-100">
                                        <div className="progress-bar-xs progress">
                                            <div className="progress-bar bg-warning" role="progressbar" aria-valuenow={54} aria-valuemin={0} aria-valuemax={100} style={{width: '54%'}}>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </td>
                                <td className="text-center">
                                <div role="group" className="btn-group-sm btn-group">
                                    <button className="btn-shadow btn btn-primary">Hire</button>
                                    <button className="btn-shadow btn btn-primary">Fire</button>
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center text-muted" style={{width: 80}}>#56</td>
                                <td className="text-center" style={{width: 80}}>
                                <img width={40} className="rounded-circle" src="assets/images/avatars/3.jpg" alt="" />
                                </td>
                                <td className="text-center"><a href="javascript:void(0)">Darrell Lowe</a></td>
                                <td className="text-center"><a href="javascript:void(0)">Riddle Electronics</a></td>
                                <td className="text-center"><div className="badge badge-pill badge-warning">In Progress</div></td>
                                <td className="text-center">
                                <span className="pr-2 opacity-6">
                                    <i className="fa fa-business-time" />
                                </span>
                                12 Dec
                                </td>
                                <td className="text-center" style={{width: 200}}>
                                <div className="widget-content p-0">
                                    <div className="widget-content-outer">
                                    <div className="widget-content-wrapper">
                                        <div className="widget-content-left pr-2">
                                        <div className="widget-numbers fsize-1 text-success">97%</div>
                                        </div>
                                        <div className="widget-content-right w-100">
                                        <div className="progress-bar-xs progress">
                                            <div className="progress-bar bg-success" role="progressbar" aria-valuenow={97} aria-valuemin={0} aria-valuemax={100} style={{width: '97%'}}>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </td>
                                <td className="text-center">
                                <div role="group" className="btn-group-sm btn-group">
                                    <button className="btn-shadow btn btn-primary">Hire</button>
                                    <button className="btn-shadow btn btn-primary">Fire</button>
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center text-muted" style={{width: 80}}>#56</td>
                                <td className="text-center" style={{width: 80}}>
                                <img width={40} className="rounded-circle" src="assets/images/avatars/4.jpg" alt="" />
                                </td>
                                <td className="text-center"><a href="javascript:void(0)">George T. Cottrell</a></td>
                                <td className="text-center"><a href="javascript:void(0)">Pixelcloud</a></td>
                                <td className="text-center"><div className="badge badge-pill badge-success">Completed</div></td>
                                <td className="text-center">
                                <span className="pr-2 opacity-6">
                                    <i className="fa fa-business-time" />
                                </span>
                                12 Dec
                                </td>
                                <td className="text-center" style={{width: 200}}>
                                <div className="widget-content p-0">
                                    <div className="widget-content-outer">
                                    <div className="widget-content-wrapper">
                                        <div className="widget-content-left pr-2">
                                        <div className="widget-numbers fsize-1 text-info">88%</div>
                                        </div>
                                        <div className="widget-content-right w-100">
                                        <div className="progress-bar-xs progress">
                                            <div className="progress-bar bg-info" role="progressbar" aria-valuenow={88} aria-valuemin={0} aria-valuemax={100} style={{width: '88%'}}>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </td>
                                <td className="text-center">
                                <div role="group" className="btn-group-sm btn-group">
                                    <button className="btn-shadow btn btn-primary">Hire</button>
                                    <button className="btn-shadow btn btn-primary">Fire</button>
                                </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                        <div className="d-block p-4 text-center card-footer">
                        <button className="btn-pill btn-shadow btn-wide fsize-1 btn btn-dark btn-lg">
                            <span className="mr-2 opacity-7">
                            <i className="fa fa-cog fa-spin" />
                            </span>
                            <span className="mr-1">View Complete Report</span>
                        </button>
                        </div>
                    </div>



                    <div className="row">
                        <div className="col-sm-12 col-lg-6">
                        <div className="mb-3 card">
                        <div className="card-header-tab card-header">
                            <div className="card-header-title font-size-lg text-capitalize font-weight-normal">Daily Sales</div>
                            <div className="btn-actions-pane-right text-capitalize">
                            <button className="btn-wide btn-outline-2x btn btn-outline-focus btn-sm">View All</button>
                            </div>
                        </div>
                        <div className="card-body">
                            <div id="bar-vertical-candle" />
                        </div>
                        <div className="p-0 d-block card-footer">
                            <div className="grid-menu grid-menu-2col">
                            <div className="no-gutters row">
                                <div className="p-2 col-sm-6">
                                <button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-dark">
                                    <i className="lnr-apartment text-dark opacity-7 btn-icon-wrapper mb-2"> </i> Overview
                                </button>
                                </div>
                                <div className="p-2 col-sm-6">
                                <button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-dark">
                                    <i className="lnr-database text-dark opacity-7 btn-icon-wrapper mb-2"> </i> Support
                                </button>
                                </div>
                                <div className="p-2 col-sm-6">
                                <button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-dark">
                                    <i className="lnr-printer text-dark opacity-7 btn-icon-wrapper mb-2"> </i> Activities
                                </button>
                                </div>
                                <div className="p-2 col-sm-6">
                                <button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-dark">
                                    <i className="lnr-store text-dark opacity-7 btn-icon-wrapper mb-2" /> Marketing
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                         <div className="col-sm-12 col-lg-6">
                            <div className="mb-3 card">
                            <div className="card-header-tab card-header">
                            <div className="card-header-title font-size-lg text-capitalize font-weight-normal">Total Expenses
                            </div>
                            <div className="btn-actions-pane-right text-capitalize">
                                <button className="btn-wide btn-outline-2x btn btn-outline-primary btn-sm">View All</button>
                            </div>
                            </div>
                            <div className="card-body">
                            <div id="chart-col-2" />
                            </div>
                            <div className="p-0 d-block card-footer">
                            <div className="grid-menu grid-menu-2col">
                                <div className="no-gutters row">
                                <div className="p-2 col-sm-6">
                                    <button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-success">
                                    <i className="lnr-lighter text-success opacity-7 btn-icon-wrapper mb-2"> </i> Accounts
                                    </button>
                                </div>
                                <div className="p-2 col-sm-6">
                                    <button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-warning">
                                    <i className="lnr-construction text-warning opacity-7 btn-icon-wrapper mb-2" />Contacts
                                    </button>
                                </div>
                                <div className="p-2 col-sm-6">
                                    <button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-info">
                                    <i className="lnr-bus text-info opacity-7 btn-icon-wrapper mb-2" />Products
                                    </button>
                                </div>
                                <div className="p-2 col-sm-6">
                                    <button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-alternate">
                                    <i className="lnr-gift text-alternate opacity-7 btn-icon-wrapper mb-2" />Services
                                    </button>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>


                    <div className="app-wrapper-footer">
                        <div className="app-footer">
                        <div className="app-footer__inner">
                        <div className="app-footer-left">
                            <div className="footer-dots">
                            <div className="dropdown">
                                <a aria-haspopup="true" aria-expanded="false" data-toggle="dropdown" className="dot-btn-wrapper">
                                <i className="dot-btn-icon lnr-bullhorn icon-gradient bg-mean-fruit" />
                                <div className="badge badge-dot badge-abs badge-dot-sm badge-danger">Notifications</div>
                                </a>
                                <div tabIndex={-1} role="menu" aria-hidden="true" className="dropdown-menu-xl rm-pointers dropdown-menu">
                                <div className="dropdown-menu-header mb-0">
                                    <div className="dropdown-menu-header-inner bg-deep-blue">
                                    <div className="menu-header-image opacity-1" style={{backgroundImage: 'url("assets/images/dropdown-header/city3.jpg")'}} />
                                    <div className="menu-header-content text-dark">
                                        <h5 className="menu-header-title">Notifications</h5>
                                        <h6 className="menu-header-subtitle">You have <b>21</b> unread messages</h6>
                                    </div>
                                    </div>
                                </div>
                                <ul className="tabs-animated-shadow tabs-animated nav nav-justified tabs-shadow-bordered p-3">
                                    <li className="nav-item">
                                    <a role="tab" className="nav-link active" data-toggle="tab" href="#tab-messages-header1">
                                        <span>Messages</span>
                                    </a>
                                    </li>
                                    <li className="nav-item">
                                    <a role="tab" className="nav-link" data-toggle="tab" href="#tab-events-header1">
                                        <span>Events</span>
                                    </a>
                                    </li>
                                    <li className="nav-item">
                                    <a role="tab" className="nav-link" data-toggle="tab" href="#tab-errors-header1">
                                        <span>System Errors</span>
                                    </a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane active" id="tab-messages-header1" role="tabpanel">
                                    <div className="scroll-area-sm">
                                        <div className="scrollbar-container">
                                        <div className="p-3">
                                            <div className="notifications-box">
                                            <div className="vertical-time-simple vertical-without-time vertical-timeline vertical-timeline--one-column">
                                                <div className="vertical-timeline-item dot-danger vertical-timeline-element">
                                                <div>
                                                    <span className="vertical-timeline-element-icon bounce-in" />
                                                    <div className="vertical-timeline-element-content bounce-in">
                                                    <h4 className="timeline-title">All Hands Meeting</h4>
                                                    <span className="vertical-timeline-element-date" />
                                                    </div>
                                                </div>
                                                </div>
                                                <div className="vertical-timeline-item dot-warning vertical-timeline-element">
                                                <div>
                                                    <span className="vertical-timeline-element-icon bounce-in" />
                                                    <div className="vertical-timeline-element-content bounce-in">
                                                    <p>Yet another one, at 
                                                        <span className="text-success">15:00 PM</span>
                                                    </p>
                                                    <span className="vertical-timeline-element-date" />
                                                    </div>
                                                </div>
                                                </div>
                                                <div className="vertical-timeline-item dot-success vertical-timeline-element">
                                                <div>
                                                    <span className="vertical-timeline-element-icon bounce-in" />
                                                    <div className="vertical-timeline-element-content bounce-in">
                                                    <h4 className="timeline-title">Build the production release
                                                        <span className="badge badge-danger ml-2">NEW</span>
                                                    </h4>
                                                    <span className="vertical-timeline-element-date" />
                                                    </div>
                                                </div>
                                                </div>
                                                <div className="vertical-timeline-item dot-primary vertical-timeline-element">
                                                <div>
                                                    <span className="vertical-timeline-element-icon bounce-in" />
                                                    <div className="vertical-timeline-element-content bounce-in">
                                                    <h4 className="timeline-title">Something not important
                                                        <div className="avatar-wrapper mt-2 avatar-wrapper-overlap">
                                                        <div className="avatar-icon-wrapper avatar-icon-sm">
                                                            <div className="avatar-icon">
                                                            <img src="assets/images/avatars/1.jpg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="avatar-icon-wrapper avatar-icon-sm">
                                                            <div className="avatar-icon">
                                                            <img src="assets/images/avatars/2.jpg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="avatar-icon-wrapper avatar-icon-sm">
                                                            <div className="avatar-icon">
                                                            <img src="assets/images/avatars/3.jpg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="avatar-icon-wrapper avatar-icon-sm">
                                                            <div className="avatar-icon">
                                                            <img src="assets/images/avatars/4.jpg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="avatar-icon-wrapper avatar-icon-sm">
                                                            <div className="avatar-icon">
                                                            <img src="assets/images/avatars/5.jpg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="avatar-icon-wrapper avatar-icon-sm">
                                                            <div className="avatar-icon">
                                                            <img src="assets/images/avatars/9.jpg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="avatar-icon-wrapper avatar-icon-sm">
                                                            <div className="avatar-icon">
                                                            <img src="assets/images/avatars/7.jpg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="avatar-icon-wrapper avatar-icon-sm">
                                                            <div className="avatar-icon">
                                                            <img src="assets/images/avatars/8.jpg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="avatar-icon-wrapper avatar-icon-sm avatar-icon-add">
                                                            <div className="avatar-icon"><i>+</i></div>
                                                        </div>
                                                        </div>
                                                    </h4>
                                                    <span className="vertical-timeline-element-date" />
                                                    </div>
                                                </div>
                                                </div>
                                                <div className="vertical-timeline-item dot-info vertical-timeline-element">
                                                <div>
                                                    <span className="vertical-timeline-element-icon bounce-in" />
                                                    <div className="vertical-timeline-element-content bounce-in">
                                                    <h4 className="timeline-title">This dot has an info state</h4>
                                                    <span className="vertical-timeline-element-date" />
                                                    </div>
                                                </div>
                                                </div>
                                                <div className="vertical-timeline-item dot-danger vertical-timeline-element">
                                                <div>
                                                    <span className="vertical-timeline-element-icon bounce-in" />
                                                    <div className="vertical-timeline-element-content bounce-in">
                                                    <h4 className="timeline-title">All Hands Meeting</h4>
                                                    <span className="vertical-timeline-element-date" />
                                                    </div>
                                                </div>
                                                </div>
                                                <div className="vertical-timeline-item dot-warning vertical-timeline-element">
                                                <div>
                                                    <span className="vertical-timeline-element-icon bounce-in" />
                                                    <div className="vertical-timeline-element-content bounce-in">
                                                    <p>Yet another one, at 
                                                        <span className="text-success">15:00 PM</span>
                                                    </p>
                                                    <span className="vertical-timeline-element-date" />
                                                    </div>
                                                </div>
                                                </div>
                                                <div className="vertical-timeline-item dot-success vertical-timeline-element">
                                                <div>
                                                    <span className="vertical-timeline-element-icon bounce-in" />
                                                    <div className="vertical-timeline-element-content bounce-in">
                                                    <h4 className="timeline-title">Build the production release
                                                        <span className="badge badge-danger ml-2">NEW</span>
                                                    </h4>
                                                    <span className="vertical-timeline-element-date" />
                                                    </div>
                                                </div>
                                                </div>
                                                <div className="vertical-timeline-item dot-dark vertical-timeline-element">
                                                <div>
                                                    <span className="vertical-timeline-element-icon bounce-in" />
                                                    <div className="vertical-timeline-element-content bounce-in">
                                                    <h4 className="timeline-title">This dot has a dark state</h4>
                                                    <span className="vertical-timeline-element-date" />
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="tab-pane" id="tab-events-header1" role="tabpanel">
                                    <div className="scroll-area-sm">
                                        <div className="scrollbar-container">
                                        <div className="p-3">
                                            <div className="vertical-without-time vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                                            <div className="vertical-timeline-item vertical-timeline-element">
                                                <div>
                                                <span className="vertical-timeline-element-icon bounce-in">
                                                    <i className="badge badge-dot badge-dot-xl badge-success" />
                                                </span>
                                                <div className="vertical-timeline-element-content bounce-in">
                                                    <h4 className="timeline-title">All Hands Meeting</h4>
                                                    <p>Lorem ipsum dolor sic amet, today at 
                                                    <a href="javascript:void(0);">12:00 PM</a>
                                                    </p>
                                                    <span className="vertical-timeline-element-date" />
                                                </div>
                                                </div>
                                            </div>
                                            <div className="vertical-timeline-item vertical-timeline-element">
                                                <div>
                                                <span className="vertical-timeline-element-icon bounce-in">
                                                    <i className="badge badge-dot badge-dot-xl badge-warning" />
                                                </span>
                                                <div className="vertical-timeline-element-content bounce-in">
                                                    <p>Another meeting today, at 
                                                    <b className="text-danger">12:00 PM</b>
                                                    </p>
                                                    <p>Yet another one, at <span className="text-success">15:00 PM</span></p>
                                                    <span className="vertical-timeline-element-date" />
                                                </div>
                                                </div>
                                            </div>
                                            <div className="vertical-timeline-item vertical-timeline-element">
                                                <div>
                                                <span className="vertical-timeline-element-icon bounce-in">
                                                    <i className="badge badge-dot badge-dot-xl badge-danger" />
                                                </span>
                                                <div className="vertical-timeline-element-content bounce-in">
                                                    <h4 className="timeline-title">Build the production release</h4>
                                                    <p>Lorem ipsum dolor sit amit,consectetur eiusmdd tempor
                                                    incididunt ut labore et dolore magna elit enim at
                                                    minim veniam quis nostrud
                                                    </p>
                                                    <span className="vertical-timeline-element-date" />
                                                </div>
                                                </div>
                                            </div>
                                            <div className="vertical-timeline-item vertical-timeline-element">
                                                <div>
                                                <span className="vertical-timeline-element-icon bounce-in">
                                                    <i className="badge badge-dot badge-dot-xl badge-primary" />
                                                </span>
                                                <div className="vertical-timeline-element-content bounce-in">
                                                    <h4 className="timeline-title text-success">Something not important</h4>
                                                    <p>Lorem ipsum dolor sit amit,consectetur elit enim at
                                                    minim veniam quis nostrud</p>
                                                    <span className="vertical-timeline-element-date" />
                                                </div>
                                                </div>
                                            </div>
                                            <div className="vertical-timeline-item vertical-timeline-element">
                                                <div>
                                                <span className="vertical-timeline-element-icon bounce-in">
                                                    <i className="badge badge-dot badge-dot-xl badge-success" />
                                                </span>
                                                <div className="vertical-timeline-element-content bounce-in">
                                                    <h4 className="timeline-title">All Hands Meeting</h4>
                                                    <p>Lorem ipsum dolor sic amet, today at 
                                                    <a href="javascript:void(0);">12:00 PM</a>
                                                    </p>
                                                    <span className="vertical-timeline-element-date" />
                                                </div>
                                                </div>
                                            </div>
                                            <div className="vertical-timeline-item vertical-timeline-element">
                                                <div>
                                                <span className="vertical-timeline-element-icon bounce-in">
                                                    <i className="badge badge-dot badge-dot-xl badge-warning" />
                                                </span>
                                                <div className="vertical-timeline-element-content bounce-in">
                                                    <p>Another meeting today, at 
                                                    <b className="text-danger">12:00 PM</b>
                                                    </p>
                                                    <p>Yet another one, at <span className="text-success">15:00 PM</span></p>
                                                    <span className="vertical-timeline-element-date" />
                                                </div>
                                                </div>
                                            </div>
                                            <div className="vertical-timeline-item vertical-timeline-element">
                                                <div>
                                                <span className="vertical-timeline-element-icon bounce-in">
                                                    <i className="badge badge-dot badge-dot-xl badge-danger" />
                                                </span>
                                                <div className="vertical-timeline-element-content bounce-in">
                                                    <h4 className="timeline-title">Build the production release</h4>
                                                    <p>Lorem ipsum dolor sit amit,consectetur eiusmdd tempor
                                                    incididunt ut labore et dolore magna elit enim at
                                                    minim veniam quis nostrud
                                                    </p>
                                                    <span className="vertical-timeline-element-date" />
                                                </div>
                                                </div>
                                            </div>
                                            <div className="vertical-timeline-item vertical-timeline-element">
                                                <div>
                                                <span className="vertical-timeline-element-icon bounce-in">
                                                    <i className="badge badge-dot badge-dot-xl badge-primary" />
                                                </span>
                                                <div className="vertical-timeline-element-content bounce-in">
                                                    <h4 className="timeline-title text-success">Something not important</h4>
                                                    <p>Lorem ipsum dolor sit amit,consectetur elit enim at
                                                    minim veniam quis nostrud
                                                    </p>
                                                    <span className="vertical-timeline-element-date" />
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="tab-pane" id="tab-errors-header1" role="tabpanel">
                                    <div className="scroll-area-sm">
                                        <div className="scrollbar-container">
                                        <div className="no-results pt-3 pb-0">
                                            <div className="swal2-icon swal2-success swal2-animate-success-icon">
                                            <div className="swal2-success-circular-line-left" style={{backgroundColor: 'rgb(255, 255, 255)'}} />
                                            <span className="swal2-success-line-tip" />
                                            <span className="swal2-success-line-long" />
                                            <div className="swal2-success-ring" />
                                            <div className="swal2-success-fix" style={{backgroundColor: 'rgb(255, 255, 255)'}} />
                                            <div className="swal2-success-circular-line-right" style={{backgroundColor: 'rgb(255, 255, 255)'}} />
                                            </div>
                                            <div className="results-subtitle">All caught up!</div>
                                            <div className="results-title">There are no system errors!</div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <ul className="nav flex-column">
                                    <li className="nav-item-divider nav-item" />
                                    <li className="nav-item-btn text-center nav-item">
                                    <button className="btn-shadow btn-wide btn-pill btn btn-focus btn-sm">View Latest Changes</button>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            <div className="dots-separator" />
                            <div className="dropdown">
                                <a className="dot-btn-wrapper" aria-haspopup="true" data-toggle="dropdown" aria-expanded="false">
                                <i className="dot-btn-icon lnr-earth icon-gradient bg-happy-itmeo" />
                                </a>
                                <div tabIndex={-1} role="menu" aria-hidden="true" className="rm-pointers dropdown-menu">
                                <div className="dropdown-menu-header">
                                    <div className="dropdown-menu-header-inner pt-4 pb-4 bg-focus">
                                    <div className="menu-header-image opacity-05" style={{backgroundImage: 'url("assets/images/dropdown-header/city2.jpg")'}} />
                                    <div className="menu-header-content text-center text-white">
                                        <h6 className="menu-header-subtitle mt-0"> Choose Language</h6>
                                    </div>
                                    </div>
                                </div>
                                <h6 tabIndex={-1} className="dropdown-header"> Popular Languages</h6>
                                <button type="button" tabIndex={0} className="dropdown-item">
                                    <span className="mr-3 opacity-8 flag large US" /> USA
                                </button>
                                <button type="button" tabIndex={0} className="dropdown-item">
                                    <span className="mr-3 opacity-8 flag large CH" /> Switzerland
                                </button>
                                <button type="button" tabIndex={0} className="dropdown-item">
                                    <span className="mr-3 opacity-8 flag large FR" />France
                                </button>
                                <button type="button" tabIndex={0} className="dropdown-item">
                                    <span className="mr-3 opacity-8 flag large ES" />Spain
                                </button>
                                <div tabIndex={-1} className="dropdown-divider" />
                                <h6 tabIndex={-1} className="dropdown-header">Others</h6>
                                <button type="button" tabIndex={0} className="dropdown-item active">
                                    <span className="mr-3 opacity-8 flag large DE" />Germany
                                </button>
                                <button type="button" tabIndex={0} className="dropdown-item">
                                    <span className="mr-3 opacity-8 flag large IT" /> Italy
                                </button>
                                </div>
                            </div>
                            <div className="dots-separator" />
                            <div className="dropdown">
                                <a className="dot-btn-wrapper dd-chart-btn-2" aria-haspopup="true" data-toggle="dropdown" aria-expanded="false">
                                <i className="dot-btn-icon lnr-pie-chart icon-gradient bg-love-kiss" />
                                <div className="badge badge-dot badge-abs badge-dot-sm badge-warning">Notifications</div>
                                </a>
                                <div tabIndex={-1} role="menu" aria-hidden="true" className="dropdown-menu-xl rm-pointers dropdown-menu">
                                <div className="dropdown-menu-header">
                                    <div className="dropdown-menu-header-inner bg-premium-dark">
                                    <div className="menu-header-image" style={{backgroundImage: 'url("assets/images/dropdown-header/abstract4.jpg")'}} />
                                    <div className="menu-header-content text-white">
                                        <h5 className="menu-header-title">Users Online</h5>
                                        <h6 className="menu-header-subtitle">Recent Account Activity Overview</h6>
                                    </div>
                                    </div>
                                </div>
                                <div className="widget-chart">
                                    <div className="widget-chart-content">
                                    <div className="icon-wrapper rounded-circle">
                                        <div className="icon-wrapper-bg opacity-9 bg-focus" />
                                        <i className="lnr-users text-white" />
                                    </div>
                                    <div className="widget-numbers">
                                        <span>344k</span>
                                    </div>
                                    <div className="widget-subheading pt-2"> Profile views since last login</div>
                                    <div className="widget-description text-danger">
                                        <span className="pr-1"> <span>176%</span></span>
                                        <i className="fa fa-arrow-left" />
                                    </div>
                                    </div>
                                    <div className="widget-chart-wrapper">
                                    <div id="dashboard-sparkline-carousel-4-pop" />
                                    </div>
                                </div>
                                <ul className="nav flex-column">
                                    <li className="nav-item-divider mt-0 nav-item" />
                                    <li className="nav-item-btn text-center nav-item">
                                    <button className="btn-shine btn-wide btn-pill btn btn-warning btn-sm">
                                        <i className="fa fa-cog fa-spin mr-2" /> View Details
                                    </button>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="app-footer-right">
                            <ul className="header-megamenu nav">
                            <li className="nav-item">
                                <a data-placement="top" rel="popover-focus" data-offset={300} data-toggle="popover-custom" className="nav-link">
                                Footer Menu
                                <i className="fa fa-angle-up ml-2 opacity-8" />
                                </a>
                                <div className="rm-max-width rm-pointers">
                                <div className="d-none popover-custom-content">
                                    <div className="dropdown-mega-menu dropdown-mega-menu-sm">
                                    <div className="grid-menu grid-menu-2col">
                                        <div className="no-gutters row">
                                        <div className="col-sm-6 col-xl-6">
                                            <ul className="nav flex-column">
                                            <li className="nav-item-header nav-item">Overview</li>
                                            <li className="nav-item">
                                                <a className="nav-link">
                                                <i className="nav-link-icon lnr-inbox" />
                                                <span>Contacts</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link">
                                                <i className="nav-link-icon lnr-book" />
                                                <span>Incidents</span>
                                                <div className="ml-auto badge badge-pill badge-danger">5</div>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link">
                                                <i className="nav-link-icon lnr-picture" />
                                                <span>Companies</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a disabled className="nav-link disabled">
                                                <i className="nav-link-icon lnr-file-empty" />
                                                <span>Dashboards</span>
                                                </a>
                                            </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-6 col-xl-6">
                                            <ul className="nav flex-column">
                                            <li className="nav-item-header nav-item">Sales &amp; Marketing</li>
                                            <li className="nav-item"><a className="nav-link">Queues</a></li>
                                            <li className="nav-item"><a className="nav-link">Resource Groups</a></li>
                                            <li className="nav-item">
                                                <a className="nav-link">Goal Metrics
                                                <div className="ml-auto badge badge-warning">3</div>
                                                </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link">Campaigns</a></li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a data-placement="top" rel="popover-focus" data-offset={300} data-toggle="popover-custom" className="nav-link">
                                Grid Menu
                                <div className="badge badge-dark ml-0 ml-1">
                                    <small>NEW</small>
                                </div>
                                <i className="fa fa-angle-up ml-2 opacity-8" />
                                </a>
                                <div className="rm-max-width rm-pointers">
                                <div className="d-none popover-custom-content">
                                    <div className="dropdown-menu-header">
                                    <div className="dropdown-menu-header-inner bg-tempting-azure">
                                        <div className="menu-header-image opacity-1" style={{backgroundImage: 'url("assets/images/dropdown-header/city5.jpg")'}} />
                                        <div className="menu-header-content text-dark">
                                        <h5 className="menu-header-title">Two Column Grid</h5>
                                        <h6 className="menu-header-subtitle">Easy grid navigation inside popovers</h6>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="grid-menu grid-menu-2col">
                                    <div className="no-gutters row">
                                        <div className="col-sm-6">
                                        <button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-dark">
                                            <i className="lnr-lighter text-dark opacity-7 btn-icon-wrapper mb-2" />Automation
                                        </button>
                                        </div>
                                        <div className="col-sm-6">
                                        <button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-danger">
                                            <i className="lnr-construction text-danger opacity-7 btn-icon-wrapper mb-2" />Reports
                                        </button>
                                        </div>
                                        <div className="col-sm-6">
                                        <button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-success">
                                            <i className="lnr-bus text-success opacity-7 btn-icon-wrapper mb-2" />Activity
                                        </button>
                                        </div>
                                        <div className="col-sm-6">
                                        <button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-focus">
                                            <i className="lnr-gift text-focus opacity-7 btn-icon-wrapper mb-2" />Settings
                                        </button>
                                        </div>
                                    </div>
                                    </div>
                                    <ul className="nav flex-column">
                                    <li className="nav-item-divider nav-item" />
                                    <li className="nav-item-btn clearfix nav-item">
                                        <div className="float-left">
                                        <button className="btn btn-link btn-sm">Link Button</button>
                                        </div>
                                        <div className="float-right">
                                        <button className="btn-shadow btn btn-info btn-sm">Info Button</button>
                                        </div>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>        
        </div>

    )
}
