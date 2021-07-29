import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { GetAction } from '../redux/actions/getaction';
import ActionTypes from "../redux/actiontype/ActionTypes";
import $ from 'jquery';
import DataTable from 'datatables.net';
import ViewTransactionModal from './modals/ViewTransactionModal';

const Transactionhistoryarea = (props) => {

    const { setNotify, show, setShow, fetchhistory, allcustomertransactions } = props;
    const [transactions, setTransactions] = useState({});
    const [item, setItem] = useState({});
    const [showView, setShowView] = useState(false);

    useEffect(() => {
        fetchhistory(show, setNotify, ActionTypes.FETCH_CUSTOMER_TRANSACTION_SUCCESS, ActionTypes.FETCH_CUSTOMER_TRANSACTION_FAIL, setShow);
    }, []);

    useEffect(() => {
        if(allcustomertransactions !== undefined)
        {
            setTransactions(allcustomertransactions);
        }
    }, [allcustomertransactions]);

    useEffect(()=>{
        $(document).ready(function(){
            $('#examtable').DataTable({responsive:!0})
        })
    },[])

    function viewUser (item) {
        setShowView(true);
        setItem(item);
    }

    const handleShowView = () => {
        setShowView(!showView);
    }


    const renderrow = (items) => {
        if(Object.keys(items).length !== 0) {
            return items.map((item, i) => {
                return (
                <>
                    <tr>
                        <td>{item.transactionRefNumber}</td>
                        <td>{item.fullName}</td>
                        <td>{item.senderEmail}</td>
                        <td>{item.amountToSend}</td>
                        <td>{item.amountToReceive}</td>
                        <td>{item.dateSent}</td>
                        <td>{item.exchangeRate}</td>
                        <td> <button className="btn-wide btn btn-danger" onClick={() => { viewUser(item)}}>View</button> </td>
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
                                <span className="d-inline-block"><h2>Transaction History</h2></span>
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
                            <th>Reference Number</th>
                            <th>Full Name</th>
                            <th>Sender Email</th>
                            <th>Amount Sent</th>
                            <th>Amount Received</th>
                            <th>Date</th>
                            <th>Rate</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                renderrow(transactions)
                            }
                        </tbody>
                        <tfoot>
                        <tr>
                            <th>Reference Number</th>
                            <th>Full Name</th>
                            <th>Sender Email</th>
                            <th>Amount Sent</th>
                            <th>Amount Received</th>
                            <th>Date</th>
                            <th>Rate</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>
                    </table>
                </div>
            </div>
            <ViewTransactionModal item={item} show={showView} setShow={setShowView} handleShowView={handleShowView} />
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        allcustomertransactions: state.allcustomertransactions.allcustomertransactions,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
            fetchhistory: (show, setNotify, successactiontype, failureactiontype, setShow) => {                
                dispatch(GetAction(show, setNotify, successactiontype, failureactiontype, setShow)
            );
        },
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Transactionhistoryarea);