import React from 'react'

export default function Dashboardarea() {
    return (
        <>
            <div className="app-page-title app-page-title-simple">
                <div className="page-title-wrapper">
                <div className="page-title-heading">
                <div>
                    <div className="page-title-head center-elem">
                    <span className="d-inline-block pr-2">
                        <i className="lnr-apartment icon-gradient bg-mean-fruit" />
                    </span>
                    <span className="d-inline-block">Our Monthly Growth Chart</span>
                    </div>
                    <div className="page-title-subheading opacity-10">
                    <nav className aria-label="breadcrumb">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <span>This shows the number of users registered on Monthly basics</span>
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
                    <option>2021</option>
                    <option>2020</option>
                    <option>2019</option>
                    </select>
                </div>
                </div>
            </div>
            </div>

            <div className="mb-3 card">
                <div className="tabs-lg-alternate card-header">
                    <ul className="nav nav-justified">
                        <li className="nav-item">
                            <a href="#tab-minimal-1" data-toggle="tab" className="nav-link active minimal-tab-btn-1">
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
                            <a href="#tab-minimal-2" data-toggle="tab" className="nav-link minimal-tab-btn-2">
                            <div className="widget-number">
                                <span className="pr-2 text-success">
                                <i className="fa fa-angle-up" />
                                </span>
                                <span>4531</span>
                            </div>
                            <div className="tab-subheading">Products</div>
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
                    <div className="tab-pane fade active show" id="tab-minimal-1">
                        <div className="card-body">
                            <div id="chart-combined-tab" />
                        </div>
                    </div>
                    <div className="tab-pane fade" id="tab-minimal-2">
                        <div className="card-body">
                        <div className="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                            <div id="chart-apex-negative" />
                        </div>
                        <h5 className="card-title">Target Sales</h5>
                        <div className="mt-3 row">
                        <div className="col-sm-12 col-md-4">
                            <div className="widget-content p-0">
                            <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                <div className="widget-content-left">
                                    <div className="widget-numbers text-dark">65%</div>
                                </div>
                                </div>
                                <div className="widget-progress-wrapper mt-1">
                                <div className="progress-bar-xs progress-bar-animated-alt progress">
                                    <div className="progress-bar bg-info" role="progressbar" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} style={{width: '65%'}} />
                                </div>
                                <div className="progress-sub-label">
                                    <div className="sub-label-left font-size-md">Sales</div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div className="widget-content p-0">
                            <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                <div className="widget-content-left">
                                    <div className="widget-numbers text-dark">22%</div>
                                </div>
                                </div>
                                <div className="widget-progress-wrapper mt-1">
                                <div className="progress-bar-xs progress-bar-animated-alt progress">
                                    <div className="progress-bar bg-warning" role="progressbar" aria-valuenow={22} aria-valuemin={0} aria-valuemax={100} style={{width: '22%'}}>
                                    </div>
                                </div>
                                <div className="progress-sub-label">
                                    <div className="sub-label-left font-size-md">Profiles</div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div className="widget-content p-0">
                            <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                <div className="widget-content-left">
                                    <div className="widget-numbers text-dark">83%</div>
                                </div>
                                </div>
                                <div className="widget-progress-wrapper mt-1">
                                <div className="progress-bar-xs progress-bar-animated-alt progress">
                                    <div className="progress-bar bg-success" role="progressbar" aria-valuenow={83} aria-valuemin={0} aria-valuemax={100} style={{width: '83%'}}>
                                    </div>
                                </div>
                                <div className="progress-sub-label">
                                    <div className="sub-label-left font-size-md">Tickets</div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
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


            <div className="mbg-3 h-auto pl-0 pr-0 bg-transparent no-border card-header">
                <div className="card-header-title fsize-2 text-capitalize font-weight-normal">Summary Section</div>
                <div className="btn-actions-pane-right text-capitalize actions-icon-btn">
                </div>
            </div>


            <div className="row">
                <div className="col-md-6 col-lg-4">
                    <div className="card-shadow-danger mb-3 widget-chart widget-chart2 text-left card">
                    <div className="widget-content p-0 w-100">
                    <div className="widget-content-outer">
                        <div className="widget-chat-wrapper-outer">
                            <div className="widget-chart-content">
                            {/* <h6 className="widget-subheading">Income</h6> */}
                            <div className="widget-chart-flex">
                                <div className="widget-numbers mb-0 w-100">
                                <div className="widget-chart-flex" style={{marginBottom: 40}}>
                                    <div className="fsize-4">
                                    {/* <small className="opacity-5">$</small> */}
                                    157,000
                                    </div>
                                    <div className="ml-auto">
                                    <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                        <span className="text-success pl-2">
                                            {/* +14% */}
                                        </span>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="widget-content-left fsize-1">
                        <div className="text-muted opacity-6">Total Registered Users</div><br></br>
                        </div>
                        <div className="widget-content-wrapper" style={{marginBottom: 10}}>
                        {/* <div className="widget-content-left pr-2 fsize-1">
                            <div className="widget-numbers mt-0 fsize-3 text-danger">71%</div>
                        </div> */}
                    
                        <div className="widget-content-right w-100">
                            <div className="progress-bar-xs progress">
                            <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                            </div>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                    </div>
                </div>
                </div>

                <div className="col-md-6 col-lg-4">
                    <div className="card-shadow-danger mb-3 widget-chart widget-chart2 text-left card">
                    <div className="widget-content p-0 w-100">
                    <div className="widget-content-outer">
                        <div className="widget-chat-wrapper-outer">
                            <div className="widget-chart-content">
                            {/* <h6 className="widget-subheading">Income</h6> */}
                            <div className="widget-chart-flex">
                                <div className="widget-numbers mb-0 w-100">
                                <div className="widget-chart-flex" style={{marginBottom: 40}}>
                                    <div className="fsize-4">
                                    {/* <small className="opacity-5">$</small> */}
                                    50,078
                                    </div>
                                    <div className="ml-auto">
                                    <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                        <span className="text-success pl-2">
                                            {/* +14% */}
                                        </span>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="widget-content-left fsize-1">
                        <div className="text-muted opacity-6">Total Number of Transactions</div><br></br>
                        </div>
                        <div className="widget-content-wrapper" style={{marginBottom: 10}}>
                        {/* <div className="widget-content-left pr-2 fsize-1">
                            <div className="widget-numbers mt-0 fsize-3 text-danger">71%</div>
                        </div> */}
                    
                        <div className="widget-content-right w-100">
                            <div className="progress-bar-xs progress">
                            <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                            </div>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                    </div>
                </div>
                </div>


                <div className="col-md-6 col-lg-4">
                    <div className="card-shadow-danger mb-3 widget-chart widget-chart2 text-left card">
                    <div className="widget-content p-0 w-100">
                    <div className="widget-content-outer">
                        <div className="widget-chat-wrapper-outer">
                            <div className="widget-chart-content">
                            {/* <h6 className="widget-subheading">Income</h6> */}
                            <div className="widget-chart-flex">
                                <div className="widget-numbers mb-0 w-100">
                                <div className="widget-chart-flex" style={{marginBottom: 40}}>
                                    <div className="fsize-4">
                                    <small className="opacity-5">$</small>
                                        1,107,000
                                    </div>
                                    <div className="ml-auto">
                                    <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                        <span className="text-success pl-2">
                                            {/* +14% */}
                                        </span>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="widget-content-left fsize-1">
                        <div className="text-muted opacity-6">Total Amount Processed</div><br></br>
                        </div>
                        <div className="widget-content-wrapper" style={{marginBottom: 10}}>
                        {/* <div className="widget-content-left pr-2 fsize-1">
                            <div className="widget-numbers mt-0 fsize-3 text-danger">71%</div>
                        </div> */}
                    
                        <div className="widget-content-right w-100">
                            <div className="progress-bar-xs progress">
                            <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                            </div>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                    </div>
                </div>
                </div>                        
            </div>

            <div className="main-card mb-3 card">
                <div className="card-body">
                <h5 className="card-title">Total Users & Transactions record</h5>
                <div className="row">
                <div className="col-md-5">
                    <div className="position-relative form-group">
                    <label htmlFor="exampleCustomSelect" className>View Total Users In a Country</label>
                    <select type="select" id="exampleCustomSelect" name="customSelect" className="custom-select">
                        <option value>Select Country</option>
                        <option>Nigeria</option>
                        <option>Algeria</option>
                        <option>Ghana</option>
                        <option>Egypt</option>
                        <option>South Africa</option>
                    </select>
                    </div>
                </div>
                <div className="col-md-1">
                <label htmlFor="exampleCustomSelect" className></label>
                    <div className="fsize-4">
                        <small className="opacity-5">$</small>
                        5,456
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="position-relative form-group">
                    <label htmlFor="exampleCustomSelect" className>View Total Transactions in a Country</label>
                    <select type="select" id="exampleCustomSelect" name="customSelect" className="custom-select">
                        <option value>Select Country</option>
                        <option>Nigeria</option>
                        <option>Algeria</option>
                        <option>Ghana</option>
                        <option>Egypt</option>
                        <option>South Africa</option>
                    </select>
                    </div>
                </div>
                <div className="col-md-1">
                <label htmlFor="exampleCustomSelect" className></label>
                    <div className="fsize-4">
                        <small className="opacity-5">$</small>
                        5,456
                    </div>
                </div>
                </div>
            </div>
            </div>


            <div className="row">
                <div className="col-md-6 col-xl-4">
                    <div className="card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-danger border-danger">
                    <div className="widget-chat-wrapper-outer">
                        <div className="widget-chart-content pt-3 pl-3 pb-1">
                        <div className="widget-chart-flex">
                            <div className="widget-numbers">
                            <div className="widget-chart-flex">
                                <div className="fsize-4">
                                <span>Transaction Min Limit</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <h6 className="widget-subheading mb-0 opacity-5" style={{fontSize: 12}}>You can set transaction minimum limit here...</h6>
                        <label htmlFor="exampleCustomSelect" style={{ marginTop: 30}}>Enter Amount</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">$</span>
                                </div>
                                <input placeholder="Amount" step={1} type="number" className="form-control" />
                            </div>
                            <div className="ml-auto">
                                <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                    <span className="text-success pl-2">
                                        <button className="btn-wide btn btn-danger" style={{marginTop: 15}}>Update</button>
                                        </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-8">
                    <div className="card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-danger border-danger">
                        <div className="widget-chat-wrapper-outer">
                            <div className="widget-chart-content pt-3 pl-3 pb-1">
                                <div className="widget-chart-flex">
                                    <div className="widget-numbers">
                                    <div className="widget-chart-flex">
                                        <div className="fsize-4">
                                        <span>Referral Minimum Amount & Bonus</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <h6 className="widget-subheading mb-0 opacity-5" style={{fontSize: 12}}>You can set transaction minimum limit here...</h6>
                                <div className="form-row">
                                    <div className="col-md-6">
                                        <label htmlFor="exampleCustomSelect" style={{ marginTop: 30}}>Min Required Amount</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">$</span>
                                            </div>
                                            <input placeholder="Amount" step={1} type="number" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="exampleCustomSelect" style={{ marginTop: 30}}>Bonus Value</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">$</span>
                                            </div>
                                            <input placeholder="Amount" step={1} type="number" className="form-control" />
                                        </div>
                                    </div>
                                </div>

                                <div className="ml-auto">
                                    <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                        <span className="text-success pl-2">
                                            <button className="btn-wide btn btn-danger" style={{marginTop: 15}}>Update</button>
                                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
