import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { FetchAllCountry, ShowLoading } from '../redux/actions/authaction';
import { GetAction } from '../redux/actions/getaction';
import { GetSingleObjectAction } from '../redux/actions/getsoaction';
import ActionTypes from "../redux/actiontype/ActionTypes"
import CountryAutocomplete from './CountryAutocomplete';
import DeleteAccountModal from './modals/DeleteAccountModal';
import EditAccountModal from './modals/EditAccountModal';

const Bankaccountsarea = (props) => {
    const { isLoading, setNotify, show, handleShow, setShow, fetchaccounts, fetchsingleaccount, allbanks, fetchallcountry,allcountriesstate } = props;
    const [banks, setBanks] = useState({});
    const [bcode, setBcode] = useState({});

    useEffect(() => {
        fetchallcountry(setNotify);
        fetchaccounts(show, setNotify, ActionTypes.GET_BANK_SUCCESS, ActionTypes.GET_BANK_FAIL, setShow);
    }, []);

    useEffect(() => {
        if(allbanks !== undefined)
        {
            setBanks(allbanks);
        }
    }, [allbanks]);

    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    const handleShowEdit = () => {
        setShowEdit(!showEdit);
    }
    const handleShowDelete = () => {
        setShowDelete(!showDelete);
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

    const renderrow = (items) => {
        if(Object.keys(items).length !== 0) {
            return items.map((item, i) => {
                return (
                <>
                    <tr>
                        <td>{item.accountName}</td>
                        <td>{item.country}</td>
                        <td>{item.bankName}</td>
                        <td>{item.bankAccountNumber}</td>
                        <td>{item.bankSwiftCode}</td>
                        <td><button className="mb-2 mr-2 btn btn-warning" onClick={() => handleEdit(item)}>Edit</button></td>
                        <td><button className="mb-2 mr-2 btn btn-danger" onClick={() => handleDelete(item)}>Delete</button></td>
                    </tr>
                </>
                )
            })
        }
    }

    const handlereturnvalue = (cout) => {
        const _statecode = cout.substring(cout.length - 3, cout.length);
        fetchsingleaccount(_statecode, setNotify, ActionTypes.GET_BUSINESS_BANK_SUCCESS, ActionTypes.GET_BUSINESS_BANK_FAIL, setShow);
    }

    function refreshPage() {
        // fetchsingleaccount(bcode, setNotify, ActionTypes.GET_BUSINESS_BANK_SUCCESS, ActionTypes.GET_BUSINESS_BANK_FAIL, setShow);
        fetchaccounts(show, setNotify, ActionTypes.GET_BANK_SUCCESS, ActionTypes.GET_BANK_FAIL, setShow);
    }

    

    return (
        <>

            <div className="app-page-title app-page-title-simple">
                <div className="page-title-wrapper">
                    <div className="page-title-heading" style={{marginLeft: 16}}>
                    <div>
                        <div className="page-title-head center-elem">
                        <span className="d-inline-block">Bank Accounts Management</span>
                        </div>
                        <div className="page-title-subheading opacity-10">
                        <nav className aria-label="breadcrumb">
                            <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <span>Here you can manage all Bank Accounts</span>
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

                                                        <CountryAutocomplete placeholder="Select a Country"
                                                            suggestions={allcountriesstate} passChildData={handlereturnvalue}
                                                        />
                                                        
                                                </div>
                                            </div>
                                            
                                            <div className="col-md-2">
                                                <div className="ml-auto" style={{marginRight: 0, marginTop: -2, float: 'right'}}>
                                                    <label htmlFor="exampleCountry" ><span className="text-danger"></span>.</label>
                                                    <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                                            <span className="text-success pl-2">
                                                            <button className="btn-wide mb-2 mr-2 btn btn-shadow btn-danger btn-lg" disabled={isLoading} onClick={refreshPage}>Reset</button>
                                                            </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="ml-auto" style={{marginRight: 0, marginTop: -2, float: 'right'}}>
                                                    <label htmlFor="exampleCountry" ><span className="text-danger"></span>.</label>
                                                    <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                                            <span className="text-success pl-2">
                                                            <button className="btn-wide mb-2 mr-2 btn btn-shadow btn-danger btn-lg" onClick={handleShow}>Create An Account</button>
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
                    <table style={{width: '100%'}} id="example" className="table table-hover table-striped table-bordered">
                        <thead style={{textAlign: 'center'}}>
                            <tr>
                                <th>Account Name</th>
                                <th>Country</th>
                                <th>Bank Name</th>
                                <th>Bank Account Name</th>
                                <th>Bank Swift Code</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody style={{textAlign: 'center'}}>
                            {
                                renderrow(banks)
                            }
                            
                        </tbody>
                        <tfoot style={{textAlign: 'center'}}>
                            <tr>
                                <th>Account Name</th>
                                <th>Country</th>
                                <th>Bank Name</th>
                                <th>Bank Account Name</th>
                                <th>Bank Swift Code</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        
            <EditAccountModal item={item} setNotify={setNotify} show={showEdit} handleEdit={handleEdit} setShow={setShowEdit} handleShowEdit={handleShowEdit} />
            <DeleteAccountModal item={item} setNotify={setNotify} show={showDelete} handleDelete={handleDelete} setShow={setShowDelete} handleShowDelete={handleShowDelete} />
        </>

    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.loadingstate.isLoading,
        allbanks: state.allbanks.allbanks,
        allcountriesstate: state.allcountriesstate.allcountriesstate,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
            fetchaccounts: (show, setNotify, successactiontype, failureactiontype, setShow) => {
                dispatch(ShowLoading(setNotify));
                dispatch(GetAction(show, setNotify, successactiontype, failureactiontype, setShow)
            )},
            fetchallcountry: (setNotify) => {
                dispatch(FetchAllCountry(setNotify));
            },
            fetchsingleaccount: (show, setNotify, successactiontype, failureactiontype, setShow) => {
                dispatch(ShowLoading(setNotify));
                dispatch(GetSingleObjectAction(show, setNotify, successactiontype, failureactiontype, setShow)
            )},
            
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Bankaccountsarea);
  

