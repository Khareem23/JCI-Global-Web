import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { ShowLoading } from '../redux/actions/authaction';
import { GetAction } from '../redux/actions/getaction';
import ActionTypes from "../redux/actiontype/ActionTypes"
import DeleteRateModal from './modals/DeleteRateModal';
import ViewRateModal from './modals/ViewRateModal';
import $ from 'jquery';
import DataTable from 'datatables.net';
import EditRateModal from './modals/EditRateModal';


const Ratesarea = (props) => {
    const { setNotify, show, handleShow, setShow, fetchrates, allrates, ratesLoading, setRatesLoading} = props;
    const [rates, setRates] = useState({});
    
    useEffect(()=>{
        $(document).ready(function(){
            $('#examtable').DataTable({responsive:!0})
        })
    },[])
    useEffect(() => {
        fetchrates(show, setNotify, ActionTypes.GET_RATE_SUCCESS, ActionTypes.GET_RATE_FAIL, setShow);
    }, []);

    //this is to check for changes in ratesLoading variable
    useEffect(() => {
        
        if(!ratesLoading) {
            console.log(ratesLoading);
            fetchrates(show, setNotify, ActionTypes.GET_RATE_SUCCESS, ActionTypes.GET_RATE_FAIL, setShow);
        }
    }, [ratesLoading]);

    useEffect(() => {
        if(allrates !== undefined)
        {
            setRates(allrates);
        }
    }, [allrates]);

    const [showEdit, setShowEdit] = useState(false);
    const [showView, setShowView] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    const handleShowEdit = () => {
        setShowEdit(!showEdit);
    }
    const handleShowDelete = () => {
        setShowDelete(!showDelete);
    }

    const handleShowView = () => {
        setShowView(!showView);
    }

    const [item, setItem] = useState({});

    function handleEdit (item) {
        setShowEdit(true);
        setItem(item);
    }

    function handleDelete (item) {
        setShowDelete(true);
        setItem(item);
    }

    function viewRate (item) {
        setShowView(true);
        setItem(item);
    }

    const processRateType = (type) => {
        console.log(type)
        if(type === 0)
            return 'Live Rate';
        else if(type === 1)
            return 'Transaction Rate';
    }

    const processStatus = (type) => {
        if(type === true)
            return 'Active';
        else if(type === false)
            return 'In-Active';
        else return 'Others';
    }
    const processDisplay = (type) => {
        if(type === true)
            return 'Displayed';
        else if(type === false)
            return 'Not Displayed';
        else return 'Others';
    }
    
    const renderrow = (items) => {
        if(Object.keys(items).length !== 0) {
            return items.map((item, i) => {
                return (
                <>
                    <tr>
                        <td>{item.rateType}</td>
                        <td>{item.sendCurrencyCode}</td>
                        <td>{item.receiveCurrencyCode}</td>
                        <td>{processDisplay(item.isUSDDisplay)}</td>
                        <td>{item.amount}</td>
                        <td>{item.amount_NgaUSD}</td>
                        <td>{processStatus(item.isActive)}</td>
                        <td> <button className="btn-wide btn btn-danger" onClick={() => { viewRate(item)}}>View</button> </td>
                        <td><button className="mb-2 mr-2 btn btn-warning" onClick={() => handleEdit(item)}>Edit</button></td>
                        {/* <td><button className="mb-2 mr-2 btn btn-danger" onClick={() => handleDelete(item)}>Delete</button></td> */}
                    </tr>
                </>
                )
            })
        }
    }

    

    return (
        <>

            <div className="app-page-title app-page-title-simple">
                <div className="page-title-wrapper">
                    <div className="page-title-heading" style={{marginLeft: 16}}>
                    <div>
                        <div className="page-title-head center-elem">
                        <span className="d-inline-block">Rates Management</span>
                        </div>
                        <div className="page-title-subheading opacity-10">
                        <nav className aria-label="breadcrumb">
                            <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <span>Here you can manage all your rates</span>
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
                                    
                                <div className="row ">
                                            <div className="ml-auto" style={{marginRight: 0, marginTop: -2}}>
                                                <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                                        <span className="text-success pl-2">
                                                        <button className="btn-wide mb-2 mr-2 btn btn-shadow btn-danger btn-lg" onClick={handleShow}>Create Rate</button>
                                                        </span>
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
                    <table style={{width: '100%'}} id="examtable" className="table table-hover table-striped table-bordered">
                        <thead style={{textAlign: 'center'}}>
                            <tr>
                            <th>Rate Type</th>
                            <th>Send Currency Code</th>
                            <th>Receive Currency Code</th>
                            <th>USD Display</th>
                            <th>Amount (#)</th>
                            <th>USD ($)</th>
                            <th>Status</th>
                            <th>View</th>
                            <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody style={{textAlign: 'center'}}>
                            {
                                renderrow(rates)
                            }
                            
                        </tbody>
                        <tfoot style={{textAlign: 'center'}}>
                            <tr>
                            <th>Rate Type</th>
                            <th>Send Currency Code</th>
                            <th>Receive Currency Code</th>
                            <th>USD Display</th>
                            <th>Amount (#)</th>
                            <th>USD ($)</th>
                            <th>Status</th>
                            <th>View</th>
                            <th>Edit</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
            <ViewRateModal item={item} show={showView} setShow={setShowView} handleShowView={handleShowView} />
            <EditRateModal item={item} setNotify={setNotify} show={showEdit} handleEdit={handleEdit} setShow={setShowEdit} handleShowEdit={handleShowEdit} ratesLoading={ratesLoading} setRatesLoading={setRatesLoading}/>
            <DeleteRateModal item={item} setNotify={setNotify} show={showDelete} handleDelete={handleDelete} setShow={setShowDelete} handleShowDelete={handleShowDelete} ratesLoading={ratesLoading} setRatesLoading={setRatesLoading}/>
        </>

    )
}

const mapStateToProps = (state) => {
    return {
        allrates: state.allrates.allrates,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
            fetchrates: (show, setNotify, successactiontype, failureactiontype, setShow) => {
                dispatch(ShowLoading(setNotify));
                dispatch(GetAction(show, setNotify, successactiontype, failureactiontype, setShow)
            );
        },
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Ratesarea);
  

  
