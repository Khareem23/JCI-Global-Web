import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { GetAction } from '../redux/actions/getaction';
import ActionTypes from "../redux/actiontype/ActionTypes";
import $ from 'jquery';
import DataTable from 'datatables.net';
import EditBeneficiaryModal from './modals/EditBeneficiaryModal';

const Beneficiaryarea = (props) => {

    const { isLoading, setNotify, show, handleShow, setShow, fetchbeneficiary, alluserreceivers, beneficiaryLoading, setBeneficiaryLoading } = props;
    const [beneficiaries, setBeneficiaries] = useState({});

    useEffect(() => {
        fetchbeneficiary(show, setNotify, ActionTypes.GET_USER_RECEIVERS_SUCCESS, ActionTypes.GET_USER_RECEIVERS_FAIL, setShow);
    }, []);

    useEffect(() => {
        if(!beneficiaryLoading) {
            fetchbeneficiary(show, setNotify, ActionTypes.GET_USER_RECEIVERS_SUCCESS, ActionTypes.GET_USER_RECEIVERS_FAIL, setShow);
        }
    }, [beneficiaryLoading]);
    

    useEffect(()=>{
        $(document).ready(function(){
            $('#examtable').DataTable({responsive:!0})
        })
    },[])

    useEffect(() => {
        if(alluserreceivers !== undefined)
        {
            setBeneficiaries(alluserreceivers);
        }
    }, [alluserreceivers]);

    const [item, setItem] = useState({});
    const [showEdit, setShowEdit] = useState(false);

    const handleShowEdit = () => {
        setShowEdit(!showEdit);
    }

    function handleEdit (item) {
        setShowEdit(true);
        setItem(item);
    }



    const renderrow = (items) => {
        if(Object.keys(items).length !== 0) {
            return items.map((item, i) => {
                return (
                <>
                    <tr>
                        <td>{item.bankName}</td>
                        <td>{item.accountNumber}</td>
                        <td>{item.accountCurrency}</td>
                        <td>{item.accountName}</td>
                        <td>{item.bankCity}</td>                        
                        <td>{item.bankState}</td>
                        <td>{item.country}</td>
                        {/* <td>{item.country}</td> */}
                        <td><button className="mb-2 mr-2 btn btn-danger" onClick={() => handleEdit(item)}>Edit</button></td>
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
                                <span className="d-inline-block"><h2>Beneficiary</h2></span>
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
                                
                                <div className="col-md-2"> 
                                    <select type="select" 
                                        id="gender" 
                                        name="gender"
                                        className="mb-2 form-control"
                                        >
                                        <option value="">-- Select Beneficiary --</option>
                                        <option value="Male">All Beneficiary</option>
                                        <option value="Female">Few Beneficiary</option>
                                    </select>
                                </div>

                                <div className="ml-auto" style={{marginRight: 15}}>
                                    <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                            <span className="text-success pl-2">
                                            <button className="btn-wide mb-2 mr-2 btn btn-shadow btn-danger btn-lg">Add New Beneficiary</button>
                                            </span>
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
                        <thead>
                            <tr>
                            <th>Bank Name</th>
                            <th>Account Number</th>
                            <th>Account Currency</th>
                            <th>Account Name</th>
                            <th>Bank City</th>
                            <th>Bank State</th>
                            <th>Country</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                renderrow(alluserreceivers)
                            }
                        </tbody>
                        <tfoot>
                        <tr>
                            <th>Bank Name</th>
                            <th>Account Number</th>
                            <th>Account Currency</th>
                            <th>Account Name</th>
                            <th>Bank City</th>
                            <th>Bank State</th>
                            <th>Country</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>
                    </table>
                </div>
            </div>

            <EditBeneficiaryModal item={item} setNotify={setNotify} show={showEdit} handleEdit={handleEdit} setShow={setShowEdit} handleShowEdit={handleShowEdit} beneficiaryLoading={beneficiaryLoading} setBeneficiaryLoading={setBeneficiaryLoading}/>
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        alluserreceivers: state.alluserreceivers.alluserreceivers,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
            fetchbeneficiary: (show, setNotify, successactiontype, failureactiontype, setShow) => {                
                dispatch(GetAction(show, setNotify, successactiontype, failureactiontype, setShow)
            );
        },
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Beneficiaryarea);