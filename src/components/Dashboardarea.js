import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { GetAction } from '../redux/actions/getaction';
import { GetSingleObjectAction } from '../redux/actions/getsoaction';
import ActionTypes from '../redux/actiontype/ActionTypes';
import CountryAutocomplete from './CountryAutocomplete';
import Chart from "react-apexcharts";


const Dashboardarea = (props) => {
    const { setNotify, show, setShow, fetchalltransactions,fetchallusers, allusers, alltransactions, fetchusersbycountry, allcountriesstate, countryusers,fetchmonthlyusers,monthlyusers, dashboardLoading, setDashboardLoading} = props;
    let heightValue = [];
    const [koro, setKoro] = useState({
    options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        }
      },
      series: [
        {
          name: "Total Users:",
          data: heightValue,
        }
      ]
    })
    
    useEffect(() => {
        fetchalltransactions(show, setNotify, ActionTypes.FETCH_ALL_TRANSACTION_SUCCESS, ActionTypes.FETCH_ALL_TRANSACTION_FAIL, setShow);
        fetchallusers(show, setNotify, ActionTypes.FETCH_ALL_USERS_SUCCESS, ActionTypes.FETCH_ALL_USERS_FAIL, setShow);
        fetchmonthlyusers(show, setNotify, ActionTypes.GET_MONTHLY_USERS_SUCCESS, ActionTypes.GET_MONTHLY_USERS_FAIL, setShow);
    }, []);

    useEffect(() => {
        if(monthlyusers !== undefined)
        {            
            monthlyusers.forEach(element => {
                // console.log(element.totalUsers)
                heightValue.push(element.totalUsers)
            });
            // setTransactions(alltransactions);
        }
    }, [monthlyusers]);

    useEffect(() => {
        if(allusers !== undefined)
        {            
            // setUsers(allusers);
        }
    }, [allusers]);

    const handlereturnvalue = (cout) => {
        const _statecode = cout.substring(cout.length - 3, cout.length);
        fetchusersbycountry(_statecode, setNotify, ActionTypes.FETCH_USERS_BY_COUNTRY_SUCCESS, ActionTypes.FETCH_USERS_BY_COUNTRY_FAIL, setShow);
    }
    

    return (
        <>
         

            {/* <div className="mixed-chart">
                                <Chart
                                options={koro.options}
                                series={koro.series}
                                type="bar"
                                width="1000"
                                />
                            </div> */}



            <div className="row">
                <div className="col-md-12 col-lg-12">
                    <div className="card-shadow-danger mb-3 widget-chart widget-chart2 text-left card">
                    <div className="widget-content p-0 w-100">
                    <div className="mixed-chart">
                                <Chart
                                options={koro.options}
                                series={koro.series}
                                type="bar"
                                width="1000"
                                />
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
                                    {allusers?.length}
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
                                    {alltransactions?.length}
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
                <div className="col-md-4">
                    <div className="position-relative form-group">
                    <label htmlFor="exampleCustomSelect" >View Total Users In a Country</label>
                    
                    <CountryAutocomplete placeholder="Select a Country"
                        suggestions={allcountriesstate} passChildData={handlereturnvalue}
                    />
                    </div>
                </div>
                <div className="col-md-2">
                <label htmlFor="exampleCustomSelect" ></label>
                    <div className="fsize-4">
                        
                        <span className="text-danger">{countryusers}</span>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="position-relative form-group">
                    <label htmlFor="exampleCustomSelect" >View Total Transactions in a Country</label>
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
                <div className="col-md-2">
                <label htmlFor="exampleCustomSelect" ></label>
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


const mapStateToProps = (state) => {
    return {
        alltransactions: state.alltransactions.alltransactions,
        allusers: state.allusers.allusers,
        allcountriesstate: state.allcountriesstate.allcountriesstate,
        countryusers: state.countryusers.countryusers,
        monthlyusers: state.monthlyusers.monthlyusers,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
            fetchalltransactions: (show, setNotify, successactiontype, failureactiontype, setShow) => {
                dispatch(GetAction(show, setNotify, successactiontype, failureactiontype, setShow));
            },
            fetchallusers: (show, setNotify, successactiontype, failureactiontype, setShow) => {
                dispatch(GetAction(show, setNotify, successactiontype, failureactiontype, setShow));
            },
            fetchmonthlyusers: (show, setNotify, successactiontype, failureactiontype, setShow) => {
                dispatch(GetAction(show, setNotify, successactiontype, failureactiontype, setShow));
            },
            fetchusersbycountry: (countryCode, setNotify, successactiontype, failureactiontype, setShow) => {
                dispatch(GetSingleObjectAction(countryCode, setNotify, successactiontype, failureactiontype, setShow));
            },
            
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Dashboardarea);