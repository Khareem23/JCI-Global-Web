import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { ShowLoading } from '../redux/actions/authaction';
import { GetAction } from '../redux/actions/getaction';
import ActionTypes from "../redux/actiontype/ActionTypes"
import DeleteChargeModal from './modals/DeleteChargeModal';
import EditChargesModal from './modals/EditChargesModal';
import $ from 'jquery';
import DataTable from 'datatables.net';
import ViewChargeModal from './modals/ViewChargeModal';
 
const Chargesarea = (props) => {
    const { setNotify, show, handleShow, setShow, fetchcharges, allcharges, chargesLoading, setChargesLoading} = props;
    const [charges, setCharges] = useState({});

    useEffect(()=>{
        $(document).ready(function(){
            $('#examtable').DataTable({responsive:!0})
        })
    },[])
    
    useEffect(() => {
      fetchcharges(show, setNotify, ActionTypes.GET_CHARGES_SUCCESS, ActionTypes.GET_CHARGES_FAIL, setShow);
    }, []);

    //this is to check for changes in chargesLoading variable
    useEffect(() => {
        if(!chargesLoading) {
            fetchcharges(show, setNotify, ActionTypes.GET_CHARGES_SUCCESS, ActionTypes.GET_CHARGES_FAIL, setShow);
        }
    }, [chargesLoading]);

    useEffect(() => {
        if(allcharges !== undefined)
        {
            setCharges(allcharges);
        }
    }, [allcharges]);

    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [showView, setShowView] = useState(false);
    

    const handleShowEdit = () => {
        setShowEdit(!showEdit);
    }
    const handleShowView = () => {
        setShowView(!showView);
    }
    const handleShowDelete = () => {
        setShowDelete(!showDelete);
    }

    const [item, setItem] = useState({});

    const processPaymentType = (type) => {
        if(type === 1)
            return 'Bank Transfer';
        else if(type === 2)
            return 'Cash';
        else if(type === 3)
            return 'Deposit';
        else 
        return 'Others';
    }

    function handleView (item) {
        setShowView(true);
        setItem(item);
    }
    function handleEdit (item) {
        setShowEdit(true);
        setItem(item);
    }

    function handleDelete (item) {
        setShowDelete(true);
        setItem(item);
    }

    function refreshPage() {
        // fetchsingleaccount(bcode, setNotify, ActionTypes.GET_BUSINESS_BANK_SUCCESS, ActionTypes.GET_BUSINESS_BANK_FAIL, setShow);
        //fetchaccounts(show, setNotify, ActionTypes.GET_BANK_SUCCESS, ActionTypes.GET_BANK_FAIL, setShow);
    }

    function handleSelect (item) {
        fetchcharges(item, setNotify, ActionTypes.GET_CHARGES_BY_PAYMENTINTYPE_SUCCESS, ActionTypes.GET_CHARGES_BY_PAYMENTINTYPE_FAIL, setShow);
    }

    const renderrow = (items) => {
        if(Object.keys(items).length !== 0) {
            return items.map((item, i) => {
                return (
                <>
                    <tr>
                        <td>{processPaymentType(item.paymentType)}</td>
                        <td>{item.providerFlatCharges}</td>
                        <td>{item.providerRateCharges}</td>
                        <td>{item.transactionCharges}</td>
                        <td><button className="mb-2 mr-2 btn btn-danger" onClick={() => handleView(item)}>View</button></td>
                        <td><button className="mb-2 mr-2 btn btn-danger" onClick={() => handleEdit(item)}>Edit</button></td>
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
                        {/* <span className="d-inline-block pr-2">
                            <i className="lnr-apartment icon-gradient bg-mean-fruit" />
                        </span> */}
                        <span className="d-inline-block">Charges Management</span>
                        </div>
                        <div className="page-title-subheading opacity-10">
                        <nav className aria-label="breadcrumb">
                            <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <span>Here you can manage all your charges</span>
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
                                    
                                            <div className="col-md-6">
                                                <div className="position-relative form-group">
                                                <label htmlFor="exampleCountry" ><span className="text-danger"></span>Country</label>

                                                       <select type="select" 
                                                            id="paymentType" 
                                                            name="paymentType"
                                                            className="mb-2 form-control"
                                                            onChange={(event) => {
                                                                const paymentType = event.target.value;
                                                                handleSelect(paymentType)
                                                                //setChargedetails({...chargedetails, ...{ paymentType } }); 
                                                            }}>
                                                            <option> Choose Payment Type </option>
                                                            <option value="0">Bank Transfer</option>
                                                            <option value="1">Deposit</option>
                                                            <option value="2">Cash</option>
                                                            <option value="3">Withdraw</option>
                                                        </select>
                                                        
                                                </div>
                                            </div>
                                            
                                            <div className="col-md-2">
                                                <div className="ml-auto" style={{marginRight: 0, marginTop: -2, float: 'right'}}>
                                                    <label htmlFor="exampleCountry" ><span className="text-danger"></span>.</label>
                                                    <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                                            <span className="text-success pl-2">
                                                            <button className="btn-wide mb-2 mr-2 btn btn-shadow btn-danger btn-lg" onClick={refreshPage}>Reset</button>
                                                            </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="ml-auto" style={{marginRight: 0, marginTop: -2, float: 'right'}}>
                                                    <label htmlFor="exampleCountry" ><span className="text-danger"></span>`</label>
                                                    <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                                        <span className="text-success pl-2">
                                                            <button type="button" className="btn-wide mb-2 mr-2 btn btn-shadow btn-danger btn-lg" 
                                                                data-toggle="modal" onClick={handleShow} >Create Charges</button>
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
                            <th>Payment Type</th>
                            <th>Provider Flat Charges</th>
                            <th>Provider Rate Charges</th>
                            <th>Transaction Charges</th>
                            <th>View</th>
                            <th>Edit</th>
                            {/* <th>Delete</th> */}
                            </tr>
                        </thead>
                        <tbody style={{textAlign: 'center'}}>
                            {
                                renderrow(charges)
                            }
                            
                        </tbody>
                        <tfoot style={{textAlign: 'center'}}>
                            <tr>
                            <th>Payment Type</th>
                            <th>Provider Flat Charges</th>
                            <th>Provider Rate Charges</th>
                            <th>Transaction Charges</th>
                            <th>View</th>
                            <th>Edit</th>
                            {/* <th>Delete</th> */}
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
                            
            
            <ViewChargeModal item={item} show={showView} setShow={setShowView} handleShowView={handleShowView} />
            <EditChargesModal item={item} setNotify={setNotify} show={showEdit} handleEdit={handleEdit} setShow={setShowEdit} handleShowEdit={handleShowEdit} chargesLoading={chargesLoading} setChargesLoading={setChargesLoading}/>
            {/* <DeleteChargeModal item={item} setNotify={setNotify} show={showDelete} handleDelete={handleDelete} setShow={setShowDelete} handleShowDelete={handleShowDelete} chargesLoading={chargesLoading} setChargesLoading={setChargesLoading}/> */}
        </>

    )
}

const mapStateToProps = (state) => {
    return {
        allcharges: state.allcharges.allcharges,
        isLoading: state.loadingstate.isLoading,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
            fetchcharges: (show, setNotify, successactiontype, failureactiontype, setShow) => {
                dispatch(ShowLoading(setNotify));
                dispatch(GetAction(show, setNotify, successactiontype, failureactiontype, setShow)
            );
        },
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Chargesarea);
  
