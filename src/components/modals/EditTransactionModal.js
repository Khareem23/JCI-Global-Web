import React, {useState, useEffect} from 'react';
import { FetchStatesByCountryCode } from '../../redux/actions/authaction';
import { connect } from 'react-redux';
import ActionTypes from "../../redux/actiontype/ActionTypes"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { CreateAction } from '../../redux/actions/createaction';

    const EditTransactionModal = (props) => {
    const { edittransaction, setNotify, show, setShow, item, handleShowEdit, editTransactionLoading, setEditTransactionLoading} = props;
    const [userdetails, setUserdetails] = useState({});
    
    // {"customerId":10,
// "fullName":"Adeyemi Ayefele",
// "senderEmail":"yhemi06@gmail.com",
// "id":1,
// "transactionRefNumber":"5-2021-5403f1d8",
// "transactionType":"BUY",
// "sendingCountry":"AUS",
// "receivingCountry":"NGA",
// "amountToSend":150,
// "amountToCharge":153,
// "amountToReceive":45578,
// "amountToReceive_NGN":0,
// "amountToReceive_USD":0,
// "payInMethod":"POLI",
// "paymentPurpose":"Health",
// "paymentDescription":"Payment of Hospital bills",
// "dateSent":"2021-05-18T22:52:30",
// "dateProcessed":"0001-01-01T00:00:00",
// "transactionStatus":"OnHold",
// "paymentConfirmationURL":null,
// "isPaidIn":true,"bonus":0,"bonusType":"0","bonusCode":"",
// "exchangeRate":285.78,
// "statusDescription":"TM Rules : Account Updated less than 24 hrs Ago\nTM Rules : Violated Anti-Money Laundering policy\nTM Rules : Violated KYC policy\n",
// "receiverId":1,"receiver":null,"payment":null}

// {
//     "id": 0,
//     "customerID": 0,
//     "payInMethod": 0,
//     "paymentReferenceNo": "string",
//     "isPaidIn": true,
//     "transactionStatus": 0,
//     "receiverId": 0,
//     "dateProcessed": "2021-07-22T21:00:40.155Z"
//   }

    const handleSubmit = e => {
        e.preventDefault();
        setEditTransactionLoading(true);
        console.log(userdetails)
        edittransaction(userdetails, setNotify, ActionTypes.EDIT_TRANSACTION_SUCCESS, ActionTypes.EDIT_TRANSACTION_FAIL, setShow, setEditTransactionLoading);
    };

    const processMethod = (type) => {
        if(type === '0')
            return 'POLI';
        else if(type === '1')
            return 'Credit Card';
        else if(type === '2')
            return 'Undefined';
        else if(type === '3')
            return 'Manual';
        else return 'Undefined';
    }
    

    useEffect(() => {
        if(Object.keys(item).length !== 0) {
            console.log(item)
            let id = item.id;
            let customerID = item.customerID;
            let payInMethod = item.payInMethod;
            let paymentReferenceNo = item.transactionRefNumber;
            let isPaidIn = item.isPaidIn;
            let transactionStatus = item.transactionStatus;
            let receiverId = item.receiverId;
            let dateProcessed = item.dateProcessed;
            setUserdetails({...userdetails, ...{ id, customerID, payInMethod, paymentReferenceNo, isPaidIn, transactionStatus, receiverId, dateProcessed } });
        }
    }, [item])
    

    useEffect(() => {
    }, [show])


    

    return (
            <Modal
            show={show}
            onHide={handleShowEdit}
            backdrop="static"
            keyboard={false}
            >
            <Modal.Header closeButton>
            <Modal.Title>Edit Transaction</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form>
                    <div className="col-md-12 position-relative form-group">
                        <div className="form-row">                            
                            <div className="col-md-6"> 
                                <label htmlFor="transactionRefNumber">Transaction RefNumber</label>
                                <input name="transactionRefNumber" id="transactionRefNumber" placeholder={item.transactionRefNumber} defaultValue={item.transactionRefNumber} type="text" className="form-control" 
                                    onChange={(event) => {
                                    const paymentReferenceNo = event.target.value;
                                    setUserdetails({...userdetails, ...{ paymentReferenceNo } }); 
                                }}/>
                            </div>

                            <div className="col-md-6"> 
                                <label htmlFor="exampleGender">Pay In Method</label>
                                <select type="select" 
                                    id="isActive" 
                                    name="isActive"
                                    className="mb-2 form-control"
                                    onChange={(event) => {
                                        const payInMethod = event.target.value;
                                        setUserdetails({...userdetails, ...{ payInMethod } }); 
                                    }}>
                                    <option> -- Select Method -- </option>
                                    <option selected="selected" value={item.payInMethod}>{processMethod(item.payInMethod)}</option>
                                    <option value="1">Credit Card</option>
                                    <option value="0">Direct Debit(POLI)</option>
                                    <option value="3">Manual</option>
                                </select>
                            </div>

                        </div>
                    </div>
                    
                    <div className="col-md-12 position-relative form-group">
                        <div className="form-row">                            
                        

                        {/* <div className="col-md-6"> 
                                <label htmlFor="transactionStatus">Is Paid In</label>
                                <select type="select" 
                                    id="isActive" 
                                    name="isActive"
                                    className="mb-2 form-control"
                                    onChange={(event) => {
                                        const isPaidIn = event.target.value;
                                        setUserdetails({...userdetails, ...{ isPaidIn } }); 
                                    }}>
                                    <option> -- Select Method -- </option>
                                    <option selected="selected" value={item.isPaidIn}>{item.isPaidIn}</option>
                                    <option value="1">True</option>
                                    <option value="0">False</option>
                                </select>
                            </div> */}


                            <div className="col-md-12"> 
                                <label htmlFor="transactionStatus">Transaction Status</label>
                                <select type="select" 
                                    id="isActive" 
                                    name="isActive"
                                    className="mb-2 form-control"
                                    onChange={(event) => {
                                        const transactionStatus = event.target.value;
                                        setUserdetails({...userdetails, ...{ transactionStatus } }); 
                                    }}>
                                    <option> -- Select Method -- </option>
                                    <option selected="selected" value={item.transactionStatus}>{item.transactionStatus}</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Processing">Processing</option>
                                    <option value="Completed">Completed</option>
                                    <option value="OnHold">On Hold</option>
                                    <option value="Failed">Failed</option>
                                </select>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-12 position-relative form-group">
                        <div className="form-row">

                            <div className="col-md-6"> 
                                <label htmlfor="amountToReceive">Amount To Receive (NGN) </label>
                                <div className="position-relative form-group">
                                    <input name="phone" id="amountToReceive" defaultValue={item.amountToReceive} type="number" className="form-control col-md-12"                                        
                                            onChange={(event) => {
                                            const amountToReceive_NGN = event.target.value;
                                            setUserdetails({...userdetails, ...{ amountToReceive_NGN } });
                                        }}
                                    />
                                </div>
                            </div>
                            
                            <div className="col-md-6"> 
                                <label htmlfor="amountToReceive">Amount To Receive (USD)</label>
                                <div className="position-relative form-group">
                                    <input name="phone" id="amountToReceive" defaultValue={item.amountToReceive} type="number" className="form-control col-md-12"                                        
                                            onChange={(event) => {
                                            const amountToReceive_USD = event.target.value;
                                            setUserdetails({...userdetails, ...{ amountToReceive_USD } });
                                        }}
                                    />
                                </div>
                            </div>                             
                        </div>
                    </div>

                    </form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleShowEdit}>
                Close
            </Button>
            <Button variant="danger" disabled={editTransactionLoading} onClick={handleSubmit} >Update Transaction</Button>
            </Modal.Footer>
            </Modal>
            
    )
}

const mapStateToProps = (state) => {
    return {
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
            edittransaction: (userdetails, setNotify, successactiontype, failureactiontype, setShow, setEditTransactionLoading) => {
                dispatch(CreateAction(userdetails, setNotify, successactiontype, failureactiontype, setShow, setEditTransactionLoading)
            )},
            fetchallcountrystates: (setError, statecode) => {
                dispatch(FetchStatesByCountryCode(setError, statecode));
            },
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(EditTransactionModal);
  