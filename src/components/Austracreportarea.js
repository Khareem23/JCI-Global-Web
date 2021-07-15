import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { CreateAction } from '../redux/actions/createaction';
import ActionTypes from "../redux/actiontype/ActionTypes"

const Austracreportarea = (props) => {
    const { setNotify, show, handleShow, setShow, fetchaustracreport, allrates, austracLoading, austracreport, setAustracLoading } = props;
    const [austracdetails, setAustracdetails] = useState({});
    const [austrac, setAustrac] = useState({});

    const handleSubmit = () => {
        //console.log(austracdetails); 2021-06-10/2021-07-01 let sdate = new Date(nmdate); toDateText fromDateText
        let smo = {};
        smo.fromDateText = "01-01-2021";
        smo.toDateText = "14-07-2021";
        fetchaustracreport(smo, setNotify, ActionTypes.FETCH_AUSTRAC_SUCCESS, ActionTypes.FETCH_AUSTRAC_FAIL, setShow, setAustracLoading);
    }

    
    useEffect(() => {
        if(austracreport !== undefined)
        {
            // conssetAustrac(austracdetails);
            console.log(austracreport);
        }
    }, [austracreport]);

    return (
        <>

            <div className="app-page-title app-page-title-simple">
                <div className="page-title-wrapper">
                    <div className="page-title-heading">
                    <div>
                        <div className="page-title-head center-elem">
                        {/* <span className="d-inline-block pr-2">
                            <i className="lnr-apartment icon-gradient bg-mean-fruit" />
                        </span> */}
                        <span className="d-inline-block">Austrac Reports</span>
                        </div>
                        <div className="page-title-subheading opacity-10">
                        <nav className aria-label="breadcrumb">
                            <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <span>Here you can manage austrac reports</span>
                            </li>
                            </ol>
                        </nav>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        <div className="col-md-6 col-xl-12">
                
                <div className="card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-danger border-danger">
                    
                <div className="widget-chat-wrapper-outer">
                        <div className="widget-chart-content pt-3 pl-3 pb-1">
                            <div className="form-row">
                            <div className="col-md-12 position-relative form-group">
                            <div className="form-row">
                                
                               
                                <div className="col-md-3"> 
                                    <div className="col-md-3 col-xl-3">
                                        <div className="card no-shadow rm-border bg-transparent text-right">
                                            <img src="assets/images/logo-inverse.jpeg" width={225} height={100} />
                                            <div className="widget-chart-content" />
                                        </div>
                                    </div>
                                </div>
                                
                               
                                
                                <div className="col-md-3"> 
                                    <label htmlfor="fromDateText">From Date</label>
                                    <div className="position-relative form-group">
                                        <input name="date" id="fromDateText" placeholder="From Date" type="date" className="form-control"
                                        onChange={(event) => {
                                            const fromDateText  = event.target.value;
                                            setAustracdetails({...austracdetails, ...{ fromDateText  } }); 
                                        }} />
                                    </div>
                                </div>
                                <div className="col-md-3"> 
                                    <label htmlfor="toDateText">To Date</label>
                                    <div className="position-relative form-group">
                                        <input name="date" id="toDateText" placeholder="To Date" type="date" className="form-control"
                                            onChange={(event) => {
                                                const toDateText  = event.target.value;
                                                setAustracdetails({...austracdetails, ...{ toDateText  } }); 
                                            }}
                                        />
                                    </div>

                                   
                                </div>
                                
                                <div className="col-md-3" style={{marginLeft: 0}}> 
                                    <label htmlfor="exampleDate"></label>
                                    <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                                <span className="text-success pl-2">
                                                    <button className="btn-wide mb-2 mr-2 btn btn-shadow btn-danger btn-lg" onClick={handleSubmit}>Export Report</button>
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

            <div className="main-card mb-3 card">
                <div className="card-body">
                    <table style={{width: '100%'}} id="example" className="table table-hover table-striped table-bordered">
                        <thead>
                            <tr>
                            <th>Email</th>
                            <th>Full Name</th>
                            <th>Verification Status</th>
                            <th>Count</th>
                            <th>Date Created</th>
                            <th>USer Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Tiger Nixon</td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td>61</td>
                            <td>2011/04/25</td>
                            <td>$320,800</td>
                            </tr>
                            
                        </tbody>
                        <tfoot>
                        <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Age</th>
                        <th>Start date</th>
                        <th>Salary</th>
                        </tr>
                    </tfoot>
                    </table>
                </div>
            </div>
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        austracreport: state.austracreport.austracreport,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
            fetchaustracreport: (austracdetails, setNotify, successactiontype, failureactiontype, setShow, setAustracLoading) => {
                dispatch(CreateAction(austracdetails, setNotify, successactiontype, failureactiontype, setShow, setAustracLoading)
            );
        },
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Austracreportarea);